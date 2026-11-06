import { randomUUID } from 'node:crypto';
import type { ContactInput } from '../schemas/contact.schema';
import type { ConsultationInput } from '../schemas/consultation.schema';
import { escapeHtml, sendContactNotification, type Attachment } from './mail.service';
import { CONTENT_TYPE, validateAttachment } from '../utils/fileValidation';
import { ApiError } from '../utils/ApiError';

/**
 * การจัดการคำขอจากแบบฟอร์ม (EP24)
 * - ไม่จัดเก็บข้อมูลแบบฟอร์มหรือไฟล์แนบไว้ในหน่วยความจำ ฐานข้อมูล หรือดิสก์
 *   ข้อมูลถูกใช้ชั่วคราวระหว่างคำขอเพื่อส่งอีเมลแจ้งทีมงานเท่านั้น
 * - ค่าที่ผู้ใช้กรอกทุกค่าถูก escape ก่อนใส่ใน HTML ของอีเมล
 */
export interface LeadReceipt {
  id: string;
}

const CHANNEL_LABEL: Record<ConsultationInput['preferredChannel'], string> = {
  phone: 'โทรศัพท์',
  online: 'ออนไลน์',
  onsite: 'เข้าพบที่สำนักงาน',
};

function text(value: string | undefined, fallback = '-'): string {
  return escapeHtml(value?.trim() || fallback);
}

/** escape แล้วแปลงขึ้นบรรทัดเป็น <br> สำหรับข้อความหลายบรรทัด */
function multiline(value: string | undefined, fallback: string): string {
  return text(value, fallback).replace(/\r?\n/g, '<br />');
}

/** หัวเรื่องอีเมลเป็นข้อความธรรมดา — ตัดขึ้นบรรทัดและจำกัดความยาว */
function subjectSafe(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, 80);
}

export const leadService = {
  async saveContact(payload: ContactInput): Promise<LeadReceipt> {
    const receipt: LeadReceipt = { id: `contact_${randomUUID()}` };

    let attachments: Attachment[] | undefined;
    let fileLine = '';
    if (payload.fileName && payload.fileBase64) {
      const check = validateAttachment(payload.fileName, payload.fileBase64);
      if (!check.ok) {
        throw ApiError.badRequest('ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง', {
          fileBase64: [
            check.reason === 'size'
              ? 'ขนาดไฟล์ใหญ่เกินไป กรุณาแนบไฟล์ขนาดไม่เกิน 10 MB'
              : 'รองรับเฉพาะไฟล์ .pdf, .jpg, .jpeg และ .png เท่านั้น',
          ],
        });
      }
      attachments = [{ filename: check.fileName, content: check.base64, content_type: CONTENT_TYPE[check.kind] }];
      fileLine = `<p><strong>ไฟล์แนบ:</strong> ${text(check.fileName)} (${Math.ceil(check.size / 1024)} KB)</p>`;
    }

    await sendContactNotification({
      replyTo: payload.email,
      subject: subjectSafe(`[แบบฟอร์มติดต่อใหม่] จากคุณ ${payload.contactName}`),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1e3a8a;">มีลูกค้าติดต่อจากหน้าเว็บไซต์</h2>
          <p><strong>ชื่อผู้ติดต่อ:</strong> ${text(payload.contactName)}</p>
          <p><strong>ชื่อบริษัท:</strong> ${text(payload.companyName)}</p>
          <p><strong>เบอร์โทรศัพท์:</strong> ${text(payload.phone)}</p>
          <p><strong>อีเมลลูกค้า:</strong> ${text(payload.email)}</p>
          <p><strong>ประเภทธุรกิจ:</strong> ${text(payload.businessType)}</p>
          <p><strong>บริการที่สนใจ:</strong> ${text(payload.interestedServices.join(', '))}</p>
          <hr />
          <p><strong>รายละเอียดเพิ่มเติม:</strong></p>
          <p>${multiline(payload.message, 'ไม่ได้ระบุ')}</p>
          ${fileLine}
          <hr />
          <p style="font-size: 12px; color: #666;">ผู้ส่งยืนยันความยินยอมตามนโยบายความเป็นส่วนตัวแล้ว · รหัสคำขอ ${text(receipt.id)}</p>
        </div>
      `,
      attachments,
    });

    return receipt;
  },

  async saveConsultation(payload: ConsultationInput): Promise<LeadReceipt> {
    const receipt: LeadReceipt = { id: `consult_${randomUUID()}` };

    await sendContactNotification({
      replyTo: payload.email,
      subject: subjectSafe(`[คำขอนัดปรึกษาใหม่] จากคุณ ${payload.contactName}`),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1e3a8a;">มีคำขอนัดปรึกษาใหม่จากหน้าเว็บไซต์</h2>
          <p><strong>ชื่อผู้ติดต่อ:</strong> ${text(payload.contactName)}</p>
          <p><strong>เบอร์โทรศัพท์:</strong> ${text(payload.phone)}</p>
          <p><strong>อีเมลลูกค้า:</strong> ${text(payload.email)}</p>
          <p><strong>วันที่สะดวก:</strong> ${text(payload.preferredDate)}</p>
          <p><strong>ช่องทาง:</strong> ${text(CHANNEL_LABEL[payload.preferredChannel])}</p>
          <hr />
          <p><strong>หัวข้อที่ต้องการปรึกษา:</strong></p>
          <p>${multiline(payload.topic, 'ไม่ได้ระบุ')}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">ผู้ส่งยืนยันความยินยอมตามนโยบายความเป็นส่วนตัวแล้ว · รหัสคำขอ ${text(receipt.id)}</p>
        </div>
      `,
    });

    return receipt;
  },
};
