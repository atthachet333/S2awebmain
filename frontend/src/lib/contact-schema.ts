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
  'ต้องการคำปรึกษาด้านธุรกิจ',
  'ยังไม่แน่ใจ ขอคำปรึกษา',
];

/** EP37 — ลิงก์ ?service=<slug> จากหน้าบทความ/บริการ → ตัวเลือกบริการในแบบฟอร์ม */
export const serviceSlugOptions: Record<string, string> = {
  'monthly-accounting': 'รับทำบัญชีรายเดือน',
  'financial-statements': 'ปิดงบการเงิน',
  'accounting-system': 'วางระบบบัญชี',
  'tax-filing': 'ยื่นภาษี',
  'tax-planning': 'วางแผนภาษี',
  payroll: 'Payroll และประกันสังคม',
  'financial-analysis': 'วิเคราะห์การเงิน',
  'cost-profitability-analysis': 'วิเคราะห์ต้นทุนและกำไร',
  'budgeting-forecasting': 'งบประมาณและประมาณการ',
  'cfo-advisory': 'CFO Advisory',
  'accounting-systems-erp-advisory': 'ที่ปรึกษาระบบบัญชีและ ERP',
  'company-registration': 'จดทะเบียนบริษัท',
};

/** EP37 — ?source=health-check&interest=<ด้านที่ควรพิจารณา> → ตัวเลือกบริการ (ไม่มีคำตอบแบบประเมินใน URL) */
export const healthCheckInterestOptions: Record<string, string> = {
  foundation: 'รับทำบัญชีรายเดือน',
  cost: 'วิเคราะห์ต้นทุนและกำไร',
  visibility: 'วิเคราะห์การเงิน',
  planning: 'งบประมาณและประมาณการ',
  'management-info': 'วิเคราะห์การเงิน',
  complexity: 'ที่ปรึกษาระบบบัญชีและ ERP',
  general: 'ยังไม่แน่ใจ ขอคำปรึกษา',
};

/** EP37 — ตัวเลือก "ติดต่อเรื่องใด" → บริการในแบบฟอร์ม */
export const contactIntentOptions: Record<'quote' | 'unsure' | 'advisory', string> = {
  quote: 'ขอใบเสนอราคาตามขอบเขตงาน',
  unsure: 'ยังไม่แน่ใจ ขอคำปรึกษา',
  advisory: 'ต้องการคำปรึกษาด้านธุรกิจ',
};

/** เลือกบริการเริ่มต้นจาก query string (ค่าอื่นที่ไม่รู้จักถูกละเว้น) */
export function initialServiceFromQuery(search: string): string | undefined {
  const params = new URLSearchParams(search);
  const service = params.get('service');
  if (service) return pricingIntentOptions[service] ?? serviceSlugOptions[service];
  if (params.get('source') === 'health-check') {
    return healthCheckInterestOptions[params.get('interest') ?? 'general'] ?? healthCheckInterestOptions.general;
  }
  return undefined;
}
