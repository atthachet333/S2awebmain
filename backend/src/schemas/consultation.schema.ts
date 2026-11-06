import { z } from 'zod';
import { emailField, multiLine, phoneField, singleLine } from './common';

export const consultationSchema = z
  .object({
    contactName: singleLine(2, 120, 'กรุณากรอกชื่อผู้ติดต่อ'),
    phone: phoneField,
    email: emailField,
    preferredDate: singleLine(0, 40, 'ข้อมูลไม่ถูกต้อง').optional().default(''),
    preferredChannel: z.enum(['phone', 'online', 'onsite']).optional().default('phone'),
    topic: multiLine(1000).optional().default(''),
    consent: z.literal(true, {
      errorMap: () => ({ message: 'กรุณายืนยันการยินยอมตามนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล' }),
    }),
  })
  .strict();

export type ConsultationInput = z.infer<typeof consultationSchema>;
