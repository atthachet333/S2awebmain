import dotenv from 'dotenv';

dotenv.config();

function required(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value || fallback;
}

/** FRONTEND_URL รองรับหลาย origin คั่นด้วย comma เช่น https://s2aconsultant.com,https://www.s2aconsultant.com */
function parseOrigins(raw: string): string[] {
  return raw
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter((origin) => /^https?:\/\/[^\s/]+$/i.test(origin));
}

/**
 * TRUST_PROXY: จำนวน proxy ที่อยู่หน้า backend (เช่น 1 เมื่อใช้ Cloudflare หรือ reverse proxy หนึ่งชั้น)
 * ค่าเริ่มต้น 0 = ไม่เชื่อ X-Forwarded-For เพื่อป้องกันการปลอม IP หลบ rate limit
 */
function parseTrustProxy(raw: string | undefined): number {
  const value = Number(raw?.trim());
  return Number.isInteger(value) && value >= 0 && value <= 5 ? value : 0;
}

const nodeEnv = required('NODE_ENV', 'development');

export const env = {
  nodeEnv,
  port: Number(required('PORT', '9899')),
  frontendOrigins: parseOrigins(required('FRONTEND_URL', 'http://localhost:9898')),
  trustProxy: parseTrustProxy(process.env.TRUST_PROXY),
  // ค่าลับอ่านจาก environment เท่านั้น — ห้าม hardcode และห้าม log
  resendApiKey: process.env.RESEND_API_KEY?.trim() ?? '',
  mailFrom: required('MAIL_FROM', 'S2 Website <onboarding@resend.dev>'),
  contactEmail: required('CONTACT_EMAIL', 'office@s2aconsultant.com'),
  isProduction: nodeEnv === 'production',
  isDevelopment: nodeEnv === 'development',
} as const;
