import { env } from '../config/env';

/**
 * ส่งอีเมลแจ้งทีมงานผ่าน Resend HTTP API (EP24)
 * - API key อ่านจาก env เท่านั้น (RESEND_API_KEY) ไม่ hardcode และไม่ log
 * - ตรวจสถานะ HTTP และมี timeout
 * - Error ที่โยนออกไปไม่มีเนื้อหาจากแบบฟอร์ม; ผู้ใช้จะเห็นข้อความทั่วไปจาก errorHandler
 */
export interface Attachment {
  filename: string;
  content: string;
  content_type?: string;
}

interface SendMailInput {
  subject: string;
  html: string;
  replyTo: string;
  attachments?: Attachment[];
}

interface ResendErrorResponse {
  name?: string;
  statusCode?: number;
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RESEND_TIMEOUT_MS = 20_000;

export function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

export class MailDeliveryError extends Error {
  constructor(public readonly category: 'not_configured' | 'rejected' | 'timeout' | 'network', detail: string) {
    super(detail);
    this.name = 'MailDeliveryError';
  }
}

export async function sendContactNotification(input: SendMailInput): Promise<void> {
  if (!env.resendApiKey) {
    throw new MailDeliveryError('not_configured', 'RESEND_API_KEY is not set');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.resendApiKey}`,
      },
      body: JSON.stringify({
        from: env.mailFrom,
        to: [env.contactEmail],
        reply_to: input.replyTo,
        subject: input.subject,
        html: input.html,
        attachments: input.attachments?.length ? input.attachments : undefined,
      }),
      signal: controller.signal,
    });
  } catch (err) {
    const timedOut = err instanceof Error && err.name === 'AbortError';
    throw new MailDeliveryError(timedOut ? 'timeout' : 'network', timedOut ? 'Resend request timed out' : 'Resend request failed');
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    const details = (await response.json().catch(() => null)) as ResendErrorResponse | null;
    // บันทึกเฉพาะสถานะและชื่อประเภทข้อผิดพลาด ไม่บันทึกเนื้อหาอีเมล
    throw new MailDeliveryError('rejected', `Resend responded HTTP ${response.status}${details?.name ? ` (${details.name})` : ''}`);
  }
}
