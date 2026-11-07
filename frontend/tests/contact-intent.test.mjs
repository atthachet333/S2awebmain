/**
 * EP37 — Contact preselection from query string (no health-check answers in the URL)
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  initialServiceFromQuery,
  serviceOptions,
  serviceSlugOptions,
  healthCheckInterestOptions,
  contactIntentOptions,
} from '../src/lib/contact-schema.ts';

test('pricing intents still preselect', () => {
  assert.equal(initialServiceFromQuery('?service=premium'), 'S2 Premium Accounting');
  assert.equal(initialServiceFromQuery('?service=enterprise'), 'S2 Enterprise Advisory');
  assert.equal(initialServiceFromQuery('?service=custom'), 'ขอใบเสนอราคาตามขอบเขตงาน');
});

test('service slugs from articles map to real options', () => {
  assert.equal(initialServiceFromQuery('?service=cost-profitability-analysis'), 'วิเคราะห์ต้นทุนและกำไร');
  for (const v of Object.values(serviceSlugOptions)) assert.ok(serviceOptions.includes(v), v);
});

test('health-check source maps interest, defaults to general', () => {
  assert.equal(initialServiceFromQuery('?source=health-check&interest=planning'), 'งบประมาณและประมาณการ');
  assert.equal(initialServiceFromQuery('?source=health-check'), 'ยังไม่แน่ใจ ขอคำปรึกษา');
  assert.equal(initialServiceFromQuery('?source=health-check&interest=unknown'), 'ยังไม่แน่ใจ ขอคำปรึกษา');
  for (const v of Object.values(healthCheckInterestOptions)) assert.ok(serviceOptions.includes(v), v);
});

test('intent options are valid and unknown params are ignored', () => {
  for (const v of Object.values(contactIntentOptions)) assert.ok(serviceOptions.includes(v), v);
  assert.equal(initialServiceFromQuery('?service=bogus'), undefined);
  assert.equal(initialServiceFromQuery(''), undefined);
});
