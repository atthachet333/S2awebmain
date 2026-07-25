import type { ContactInput } from '../schemas/contact.schema';
import type { ConsultationInput } from '../schemas/consultation.schema';

export interface StoredLead {
  id: string;
  type: 'contact' | 'consultation';
  createdAt: string;
  payload: ContactInput | ConsultationInput;
}

/**
 * In-memory store สำหรับ demo — พร้อมแทนที่ด้วย Database / Email / CRM ภายหลัง
 * เก็บ lead ที่ส่งเข้ามาไว้ในหน่วยความจำเพื่อการทดสอบ
 */
const leads: StoredLead[] = [];

function makeId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export const leadService = {
  async saveContact(payload: ContactInput): Promise<StoredLead> {
    const lead: StoredLead = {
      id: makeId('contact'),
      type: 'contact',
      createdAt: new Date().toISOString(),
      payload,
    };
    leads.push(lead);
    // TODO: ส่งอีเมลแจ้งทีม / บันทึกลง Database / ผลักเข้า CRM
    // eslint-disable-next-line no-console
    console.log(`[lead] contact received: ${lead.id} (${payload.email})`);
    return lead;
  },

  async saveConsultation(payload: ConsultationInput): Promise<StoredLead> {
    const lead: StoredLead = {
      id: makeId('consult'),
      type: 'consultation',
      createdAt: new Date().toISOString(),
      payload,
    };
    leads.push(lead);
    // eslint-disable-next-line no-console
    console.log(`[lead] consultation received: ${lead.id} (${payload.email})`);
    return lead;
  },

  async count(): Promise<number> {
    return leads.length;
  },
};
