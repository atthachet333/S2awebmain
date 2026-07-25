import { z } from 'zod';

export const contactSchema = z.object({
  company: z.string().min(2, 'กรุณากรอกชื่อบริษัท'),
  name: z.string().min(2, 'กรุณากรอกชื่อผู้ติดต่อ'),
  phone: z
    .string()
    .min(9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
    .regex(/^[0-9+\-\s]+$/, 'เบอร์โทรควรเป็นตัวเลขเท่านั้น'),
  email: z.string().email('กรุณากรอกอีเมลให้ถูกต้อง'),
  businessType: z.string().min(1, 'กรุณาเลือกประเภทธุรกิจ'),
  service: z.string().min(1, 'กรุณาเลือกบริการที่สนใจ'),
  message: z.string().max(1000, 'ข้อความยาวเกินไป').optional().or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'กรุณายอมรับนโยบายความเป็นส่วนตัว' }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const businessTypes = [
  'E-Commerce / ร้านค้าออนไลน์',
  'ร้านอาหารและคาเฟ่',
  'ธุรกิจบริการ',
  'โรงงานและการผลิต',
  'อสังหาริมทรัพย์',
  'นำเข้าและส่งออก',
  'เทคโนโลยีและ Startup',
  'ธุรกิจครอบครัว',
  'อื่นๆ',
];

export const serviceOptions = [
  'รับทำบัญชีรายเดือน',
  'วางระบบบัญชี',
  'ปิดงบการเงิน',
  'ยื่นภาษี / วางแผนภาษี',
  'CFO Advisory',
  'วิเคราะห์การเงิน',
  'Payroll',
  'จดทะเบียนบริษัท',
  'ยังไม่แน่ใจ ขอคำปรึกษา',
];
