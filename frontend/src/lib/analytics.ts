/**
 * EP39 — ชั้นบันทึกเหตุการณ์ (privacy-safe event layer)
 * - ส่งไปยัง Cloudflare Zaraz เฉพาะเมื่อเปิดใช้ใน Cloudflare dashboard (window.zaraz มีอยู่) ไม่เช่นนั้นไม่ทำอะไร
 * - ห้ามส่งข้อมูลส่วนบุคคลหรือเนื้อหาที่ผู้ใช้กรอก (ชื่อ อีเมล เบอร์โทร ข้อความ ชื่อไฟล์ คำตอบแบบประเมิน)
 * - props อนุญาตเฉพาะค่าจากรายการที่กำหนด (หมวดบริการ/หมวดผลประเมิน/หน้า)
 */
export type AnalyticsEvent =
  | 'pricing_view'
  | 'premium_interest'
  | 'enterprise_interest'
  | 'custom_quote_interest'
  | 'contact_start'
  | 'contact_success'
  | 'phone_click'
  | 'line_click'
  | 'email_click'
  | 'health_check_start'
  | 'health_check_complete'
  | 'advisory_capability_view'
  | 'client_resources_view';

type SafeValue = string | number | boolean;

declare global {
  interface Window {
    zaraz?: { track: (name: string, props?: Record<string, SafeValue>) => void };
  }
}

const SAFE_KEY = /^(category|categories|intent|source|page|count)$/;
const SAFE_VALUE = /^[a-z0-9_,-]{1,80}$/i;

export function track(event: AnalyticsEvent, props?: Record<string, SafeValue>): void {
  if (typeof window === 'undefined' || !window.zaraz?.track) return;
  const safe: Record<string, SafeValue> = {};
  for (const [k, v] of Object.entries(props ?? {})) {
    if (!SAFE_KEY.test(k)) continue;
    if (typeof v === 'string' && !SAFE_VALUE.test(v)) continue;
    safe[k] = v;
  }
  try {
    window.zaraz.track(event, safe);
  } catch {
    /* ไม่ให้การวัดผลกระทบการใช้งาน */
  }
}
