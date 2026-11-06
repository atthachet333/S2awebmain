import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contactSchema } from '../src/schemas/contact.schema';
import { consultationSchema } from '../src/schemas/consultation.schema';

const validContact = {
  companyName: 'บริษัท ตัวอย่าง จำกัด',
  contactName: 'สมชาย ใจดี',
  phone: '081-234-5678',
  email: 'somchai@example.com',
  businessType: 'ค้าปลีก',
  interestedServices: ['บัญชีรายเดือน'],
  message: 'สอบถามบริการ\nบรรทัดที่สอง',
  consent: true,
};

test('contact schema accepts a valid payload', () => {
  assert.equal(contactSchema.safeParse(validContact).success, true);
});

test('contact schema rejects unexpected fields', () => {
  assert.equal(contactSchema.safeParse({ ...validContact, isAdmin: true }).success, false);
});

test('contact schema requires explicit consent', () => {
  assert.equal(contactSchema.safeParse({ ...validContact, consent: false }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, consent: 'true' }).success, false);
});

test('contact schema blocks header-injection style values', () => {
  assert.equal(contactSchema.safeParse({ ...validContact, email: 'a@b.com\nBcc: x@y.com' }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, contactName: 'Name\r\nX-Test: 1' }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, phone: '0812345678\n' + '1'.repeat(2) }).success, false);
});

test('contact schema enforces lengths and list sizes', () => {
  assert.equal(contactSchema.safeParse({ ...validContact, message: 'ก'.repeat(1001) }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, interestedServices: [] }).success, false);
  assert.equal(
    contactSchema.safeParse({ ...validContact, interestedServices: ['a', 'b', 'c', 'd', 'e', 'f'] }).success,
    false,
  );
});

test('contact schema requires file name and content together', () => {
  assert.equal(contactSchema.safeParse({ ...validContact, fileName: 'a.pdf' }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, fileBase64: 'JVBERi0=' }).success, false);
  assert.equal(contactSchema.safeParse({ ...validContact, fileName: 'a.exe', fileBase64: 'TVo=' }).success, false);
});

test('consultation schema requires consent and rejects extra fields', () => {
  const base = {
    contactName: 'สมชาย ใจดี',
    phone: '0812345678',
    email: 'somchai@example.com',
    preferredDate: '',
    preferredChannel: 'online',
    topic: 'ภาษี',
    consent: true,
  };
  assert.equal(consultationSchema.safeParse(base).success, true);
  assert.equal(consultationSchema.safeParse({ ...base, consent: undefined }).success, false);
  assert.equal(consultationSchema.safeParse({ ...base, extra: 1 }).success, false);
  assert.equal(consultationSchema.safeParse({ ...base, preferredChannel: 'fax' }).success, false);
});
