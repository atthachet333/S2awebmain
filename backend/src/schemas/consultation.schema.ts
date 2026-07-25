import { z } from 'zod';

export const consultationSchema = z.object({
  contactName: z.string().trim().min(2, 'กรุณากรอกชื่อผู้ติดต่อ').max(120),
  phone: z
    .string()
    .trim()
    .min(9, 'กรุณากรอกเบอร์โทรให้ถูกต้อง')
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, 'เบอร์โทรควรเป็นตัวเลขเท่านั้น'),
  email: z.string().trim().email('กรุณากรอกอีเมลให้ถูกต้อง').max(160),
  preferredDate: z.string().trim().max(40).optional().default(''),
  preferredChannel: z.enum(['phone', 'online', 'onsite']).optional().default('phone'),
  topic: z.string().trim().max(1000).optional().default(''),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
