import { z } from 'zod';

export const contactSchema = z.object({
  companyName: z.string().trim().min(2, 'กรุณากรอกชื่อบริษัท').max(120),
  contactName: z.string().trim().min(2, 'กรุณากรอกชื่อผู้ติดต่อ').max(120),
  phone: z
    .string()
    .trim()
    .min(9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, 'เบอร์โทรควรเป็นตัวเลขเท่านั้น'),
  email: z.string().trim().email('กรุณากรอกอีเมลให้ถูกต้อง').max(160),
  businessType: z.string().trim().min(1, 'กรุณาเลือกประเภทธุรกิจ').max(80),
  interestedServices: z.array(z.string().max(80)).max(20).optional().default([]),
  message: z.string().trim().max(1000, 'ข้อความยาวเกินไป').optional().default(''),
});

export type ContactInput = z.infer<typeof contactSchema>;
