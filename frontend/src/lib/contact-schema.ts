import { z } from 'zod';

export const contactSchema = z.object({
  company: z.string().min(2, 'กรุณากรอกชื่อบริษัท'),
  name: z.string().min(2, 'กรุณากรอกชื่อผู้ติดต่อ'),
  phone: z
    .string()
    .min(9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
    .regex(/^[0-9+\-\s]+$/, 'เบอร์โทรควรเป็นตัวเลขเท่านั้น'),
  email: z.email('กรุณากรอกอีเมลให้ถูกต้อง'),
  businessType: z.string().min(1, 'กรุณาเลือกประเภทธุรกิจ'),
  service: z.string().min(1, 'กรุณาเลือกบริการที่สนใจ'),
  message: z.string().max(1000, 'ข้อความยาวเกินไป').optional().or(z.literal('')),
  consent: z.literal(true, { error: 'กรุณายอมรับนโยบายความเป็นส่วนตัว' }),
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

/** intent จากหน้า Pricing (?service=premium|enterprise|custom) */
export const pricingIntentOptions: Record<string, string> = {
  premium: 'S2 Premium Accounting',
  enterprise: 'S2 Enterprise Advisory',
  custom: 'ขอใบเสนอราคาตามขอบเขตงาน',
};

export const serviceOptions = [
  'S2 Premium Accounting',
  'S2 Enterprise Advisory',
  'ขอใบเสนอราคาตามขอบเขตงาน',
  'รับทำบัญชีรายเดือน',
  'ปิดงบการเงิน',
  'วางระบบบัญชี',
  'ยื่นภาษี',
  'วางแผนภาษี',
  'Payroll และประกันสังคม',
  'วิเคราะห์การเงิน',
  'วิเคราะห์ต้นทุนและกำไร',
  'งบประมาณและประมาณการ',
  'CFO Advisory',
  'ที่ปรึกษาระบบบัญชีและ ERP',
  'จดทะเบียนบริษัท',
  'ยังไม่แน่ใจ ขอคำปรึกษา',
];
