import { z } from 'zod';

/** อักขระควบคุม (ยกเว้น \n \r \t ในข้อความยาว) — ไม่ควรมีในข้อมูลจากแบบฟอร์ม */
const CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
const LINE_BREAKS = /[\r\n\t]/;

/** ข้อความบรรทัดเดียว: trim, ไม่มีอักขระควบคุม/ขึ้นบรรทัด, จำกัดความยาว */
export const singleLine = (min: number, max: number, requiredMessage: string) =>
  z
    .string({ required_error: requiredMessage, invalid_type_error: requiredMessage })
    .trim()
    .min(min, requiredMessage)
    .max(max, 'ข้อความยาวเกินไป')
    .refine((v) => !CONTROL_CHARS.test(v) && !LINE_BREAKS.test(v), 'ข้อมูลมีอักขระที่ไม่รองรับ');

/** ข้อความหลายบรรทัด: อนุญาตขึ้นบรรทัด แต่ไม่อนุญาตอักขระควบคุมอื่น */
export const multiLine = (max: number) =>
  z
    .string()
    .trim()
    .max(max, 'ข้อความยาวเกินไป')
    .refine((v) => !CONTROL_CHARS.test(v), 'ข้อมูลมีอักขระที่ไม่รองรับ');

export const phoneField = z
  .string({ required_error: 'กรุณากรอกเบอร์โทรให้ถูกต้อง' })
  .trim()
  .min(9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
  .max(20, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
  .regex(/^\+?[0-9\- ()]+$/, 'เบอร์โทรควรเป็นตัวเลขเท่านั้น')
  .refine((v) => v.replace(/\D/g, '').length >= 9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง');

export const emailField = z
  .string({ required_error: 'กรุณากรอกอีเมลให้ถูกต้อง' })
  .trim()
  .max(160, 'กรุณากรอกอีเมลให้ถูกต้อง')
  .email('กรุณากรอกอีเมลให้ถูกต้อง')
  .refine((v) => !LINE_BREAKS.test(v) && !/[<>,;]/.test(v), 'กรุณากรอกอีเมลให้ถูกต้อง');
