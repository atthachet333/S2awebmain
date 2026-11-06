/**
 * Contact form validation parity tests (Zod 3 → Zod 4 migration)
 * Run: npm test  (Node 22.18+ strips TypeScript types from the imported schema)
 * Asserts the first error message per field — the message React Hook Form displays.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contactSchema } from '../src/lib/contact-schema.ts';

const valid = {
  company: 'บริษัท ตัวอย่าง จำกัด',
  name: 'สมชาย ใจดี',
  phone: '081-234-5678',
  email: 'somchai@example.com',
  businessType: 'ธุรกิจบริการ',
  service: 'S2 Premium Accounting',
  message: '',
  consent: true,
};

function firstMessage(input, field) {
  const result = contactSchema.safeParse(input);
  assert.equal(result.success, false, `expected ${field} to fail`);
  const issue = result.error.issues.find((i) => i.path[0] === field);
  assert.ok(issue, `expected an issue for ${field}`);
  return issue.message;
}

test('valid payloads pass (message empty, omitted or filled)', () => {
  assert.equal(contactSchema.safeParse(valid).success, true);
  const { message, ...withoutMessage } = valid;
  assert.equal(contactSchema.safeParse(withoutMessage).success, true);
  assert.equal(contactSchema.safeParse({ ...valid, message: 'ขอใบเสนอราคา' }).success, true);
});

test('unknown keys are stripped, not rejected', () => {
  const result = contactSchema.safeParse({ ...valid, extra: 'x' });
  assert.equal(result.success, true);
  assert.equal('extra' in result.data, false);
});

test('required text fields keep their Thai messages', () => {
  assert.equal(firstMessage({ ...valid, company: 'A' }, 'company'), 'กรุณากรอกชื่อบริษัท');
  assert.equal(firstMessage({ ...valid, name: '' }, 'name'), 'กรุณากรอกชื่อผู้ติดต่อ');
  assert.equal(firstMessage({ ...valid, businessType: '' }, 'businessType'), 'กรุณาเลือกประเภทธุรกิจ');
  assert.equal(firstMessage({ ...valid, service: '' }, 'service'), 'กรุณาเลือกบริการที่สนใจ');
});

test('phone rules: min length first, then digits-only pattern', () => {
  assert.equal(firstMessage({ ...valid, phone: '12345678' }, 'phone'), 'กรุณากรอกเบอร์โทรให้ถูกต้อง');
  assert.equal(firstMessage({ ...valid, phone: 'ab' }, 'phone'), 'กรุณากรอกเบอร์โทรให้ถูกต้อง');
  assert.equal(firstMessage({ ...valid, phone: '0812345abc' }, 'phone'), 'เบอร์โทรควรเป็นตัวเลขเท่านั้น');
  for (const phone of ['0812345678', '+66812345678', '081 234 5678', '02-123-4567']) {
    assert.equal(contactSchema.safeParse({ ...valid, phone }).success, true, phone);
  }
});

test('email rules unchanged', () => {
  for (const email of ['abc', 'a@b', 'a..b@c.com', '.a@b.com', 'a@b.c', 'a b@c.com', 'a@-b.com', '']) {
    assert.equal(firstMessage({ ...valid, email }, 'email'), 'กรุณากรอกอีเมลให้ถูกต้อง', email);
  }
  for (const email of ['a.b+c@d-e.co.th', 'O_K@EXAMPLE.COM', "o'neil@example.com", 'x@sub.domain.io']) {
    assert.equal(contactSchema.safeParse({ ...valid, email }).success, true, email);
  }
});

test('message max length 1000', () => {
  assert.equal(contactSchema.safeParse({ ...valid, message: 'ก'.repeat(1000) }).success, true);
  assert.equal(firstMessage({ ...valid, message: 'ก'.repeat(1001) }, 'message'), 'ข้อความยาวเกินไป');
});

test('consent must be literal true with the Thai message', () => {
  for (const consent of [false, undefined, 'true', 1]) {
    assert.equal(firstMessage({ ...valid, consent }, 'consent'), 'กรุณายอมรับนโยบายความเป็นส่วนตัว', String(consent));
  }
});
