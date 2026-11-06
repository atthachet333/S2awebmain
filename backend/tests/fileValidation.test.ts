import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_FILE_BYTES,
  detectKind,
  sanitizeFileName,
  validateAttachment,
} from '../src/utils/fileValidation';

const PDF = Buffer.concat([Buffer.from('%PDF-1.7\n'), Buffer.alloc(64, 0x20)]);
const PNG = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(32)]);
const JPG = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), Buffer.alloc(32)]);

test('sanitizeFileName strips path traversal and unsafe characters', () => {
  assert.equal(sanitizeFileName('../../etc/passwd.pdf'), 'passwd.pdf');
  assert.equal(sanitizeFileName('C:\\Users\\x\\งบการเงิน.pdf'), 'งบการเงิน.pdf');
  assert.equal(sanitizeFileName('a<b>|c;$.PNG'), 'a_b__c__.png');
  assert.equal(sanitizeFileName('...hidden.jpg'), 'hidden.jpg');
  assert.equal(sanitizeFileName('bad\u0000name.jpeg'), 'badname.jpeg');
});

test('sanitizeFileName rejects disallowed or missing extensions', () => {
  assert.equal(sanitizeFileName('invoice.exe'), null);
  assert.equal(sanitizeFileName('invoice.pdf.exe'), null);
  assert.equal(sanitizeFileName('noextension'), null);
  assert.equal(sanitizeFileName('.pdf'), null);
  assert.equal(sanitizeFileName(''), null);
});

test('sanitizeFileName limits length', () => {
  const name = sanitizeFileName(`${'ก'.repeat(300)}.pdf`);
  assert.ok(name && name.length <= 120 && name.endsWith('.pdf'));
});

test('detectKind recognises magic bytes', () => {
  assert.equal(detectKind(PDF), 'pdf');
  assert.equal(detectKind(PNG), 'png');
  assert.equal(detectKind(JPG), 'jpeg');
  assert.equal(detectKind(Buffer.from('MZ\x90\x00')), null);
});

test('validateAttachment accepts matching extension and signature', () => {
  const result = validateAttachment('report.pdf', PDF.toString('base64'));
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.kind, 'pdf');
    assert.equal(result.size, PDF.length);
  }
  const dataUrl = validateAttachment('photo.png', `data:image/png;base64,${PNG.toString('base64')}`);
  assert.equal(dataUrl.ok, true);
});

test('validateAttachment rejects spoofed type (extension vs content mismatch)', () => {
  const exeAsPdf = Buffer.concat([Buffer.from('MZ'), Buffer.alloc(64)]);
  assert.deepEqual(validateAttachment('fake.pdf', exeAsPdf.toString('base64')), { ok: false, reason: 'type' });
  assert.deepEqual(validateAttachment('fake.png', PDF.toString('base64')), { ok: false, reason: 'type' });
});

test('validateAttachment rejects empty, corrupt and oversized payloads', () => {
  assert.equal(validateAttachment('a.pdf', '').ok, false);
  assert.deepEqual(validateAttachment('a.pdf', 'not base64!!'), { ok: false, reason: 'encoding' });
  assert.deepEqual(validateAttachment('a.pdf', 'abc'), { ok: false, reason: 'encoding' });
  const big = Buffer.concat([Buffer.from('%PDF-'), Buffer.alloc(MAX_FILE_BYTES)]);
  assert.deepEqual(validateAttachment('big.pdf', big.toString('base64')), { ok: false, reason: 'size' });
});

test('validateAttachment rejects disallowed names', () => {
  assert.deepEqual(validateAttachment('script.svg', PNG.toString('base64')), { ok: false, reason: 'name' });
});
