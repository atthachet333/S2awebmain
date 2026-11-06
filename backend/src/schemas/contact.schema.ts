import { z } from 'zod';
import { emailField, multiLine, phoneField, singleLine } from './common';
import { MAX_BASE64_LENGTH, MAX_FILE_NAME_LENGTH } from '../utils/fileValidation';

/**
 * ตรวจสอบข้อมูลแบบฟอร์มติดต่อฝั่งเซิร์ฟเวอร์ (EP24)
 * - .strict(): ปฏิเสธ field ที่ไม่รู้จัก
 * - จำกัดความยาว / ปฏิเสธอักขระควบคุม
 * - ไฟล์แนบ: ตรวจขั้นแรกที่นี่ (ชื่อ + ขนาด Base64) แล้วตรวจลายเซ็นไฟล์จริงใน lead.service
 */
export const contactSchema = z
  .object({
    companyName: singleLine(2, 120, 'กรุณากรอกชื่อบริษัท'),
    contactName: singleLine(2, 120, 'กรุณากรอกชื่อผู้ติดต่อ'),
    phone: phoneField,
    email: emailField,
    businessType: singleLine(1, 80, 'กรุณาเลือกประเภทธุรกิจ'),
    interestedServices: z
      .array(singleLine(1, 80, 'กรุณาเลือกบริการที่สนใจ'))
      .min(1, 'กรุณาเลือกบริการที่สนใจ')
      .max(5, 'กรุณาเลือกบริการที่สนใจ'),
    message: multiLine(1000).optional().default(''),
    fileName: singleLine(1, MAX_FILE_NAME_LENGTH * 2, 'รองรับเฉพาะไฟล์ .pdf, .jpg, .jpeg และ .png เท่านั้น')
      .refine((v) => /\.(pdf|jpe?g|png)$/i.test(v), 'รองรับเฉพาะไฟล์ .pdf, .jpg, .jpeg และ .png เท่านั้น')
      .optional(),
    fileBase64: z
      .string()
      .min(1, 'ไฟล์แนบไม่ถูกต้อง')
      .max(MAX_BASE64_LENGTH + 64, 'ขนาดไฟล์ใหญ่เกินไป กรุณาแนบไฟล์ขนาดไม่เกิน 10 MB')
      .optional(),
    // ต้องยืนยันความยินยอมเสมอ (ค่า true เท่านั้น)
    consent: z.literal(true, {
      errorMap: () => ({ message: 'กรุณายืนยันการยินยอมตามนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล' }),
    }),
  })
  .strict()
  .superRefine((data, ctx) => {
    // ชื่อไฟล์และเนื้อไฟล์ต้องมาคู่กัน
    if (Boolean(data.fileName) !== Boolean(data.fileBase64)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['fileBase64'], message: 'ไฟล์แนบไม่ถูกต้อง' });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
