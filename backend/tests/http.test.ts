import './setup-env';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { AddressInfo } from 'node:net';
import { escapeHtml } from '../src/services/mail.service';
import { createApp } from '../src/app';

test('escapeHtml escapes all HTML-significant characters', () => {
  assert.equal(escapeHtml(`<script>alert("x")</script>&'`), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;&amp;&#39;');
});

async function withServer(fn: (base: string) => Promise<void>) {
  const server = createApp().listen(0);
  await new Promise<void>((resolve) => server.once('listening', () => resolve()));
  const { port } = server.address() as AddressInfo;
  try {
    await fn(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

test('404 response does not echo the requested URL', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/<script>secret-path`);
    const body = await res.text();
    assert.equal(res.status, 404);
    assert.ok(!body.includes('secret-path'));
    assert.ok(!body.includes('<script>'));
  });
});

test('health endpoint does not expose port or uptime', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/health`);
    const json = (await res.json()) as Record<string, unknown>;
    assert.equal(res.status, 200);
    assert.equal(json.port, undefined);
    assert.equal(json.uptime, undefined);
  });
});

test('security headers are present on API responses', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/health`);
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
    assert.equal(res.headers.get('x-powered-by'), null);
    assert.match(res.headers.get('content-security-policy') ?? '', /default-src 'none'/);
  });
});

test('CORS only allows configured origins', async () => {
  await withServer(async (base) => {
    const allowed = await fetch(`${base}/api/health`, { headers: { Origin: 'http://localhost:9898' } });
    assert.equal(allowed.headers.get('access-control-allow-origin'), 'http://localhost:9898');
    assert.equal(allowed.headers.get('access-control-allow-credentials'), null);
    const prod = await fetch(`${base}/api/health`, { headers: { Origin: 'https://www.s2aconsultant.com' } });
    assert.equal(prod.headers.get('access-control-allow-origin'), 'https://www.s2aconsultant.com');
    const denied = await fetch(`${base}/api/health`, { headers: { Origin: 'https://evil.example' } });
    assert.equal(denied.headers.get('access-control-allow-origin'), null);
  });
});

test('malformed JSON and unexpected fields get generic 400 responses', async () => {
  await withServer(async (base) => {
    const bad = await fetch(`${base}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{"broken":',
    });
    const badBody = await bad.text();
    assert.equal(bad.status, 400);
    assert.ok(!/SyntaxError|at JSON|node_modules/.test(badBody));

    const extra = await fetch(`${base}/api/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hacked: true }),
    });
    assert.equal(extra.status, 400);
  });
});

test('oversized non-contact bodies are rejected with 413', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: 'x'.repeat(200 * 1024) }),
    });
    assert.equal(res.status, 413);
  });
});

test('mail delivery failure returns a generic 503 (not 502, which Cloudflare replaces)', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName: 'Test Co',
        contactName: 'QA Test',
        phone: '0800000000',
        email: 'qa@example.com',
        businessType: 'อื่นๆ',
        interestedServices: ['S2 Premium Accounting'],
        message: '',
        consent: true,
      }),
    });
    const body = await res.text();
    assert.equal(res.status, 503);
    assert.ok(!/RESEND|api\.resend\.com|re_/.test(body));
  });
});
