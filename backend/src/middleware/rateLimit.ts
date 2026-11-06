import rateLimit from 'express-rate-limit';

/**
 * Rate limit (EP24)
 * - นับตาม IP ของ request; หลัง proxy/Cloudflare ต้องตั้ง TRUST_PROXY ให้ถูกต้อง
 *   (ดู app.ts) มิฉะนั้นทุกคำขอจะถูกนับเป็น IP ของ proxy
 * - ข้อความตอบกลับเป็นข้อความทั่วไป ไม่บอกเกณฑ์ภายใน
 */
const tooMany = {
  success: false,
  message: 'มีการส่งข้อมูลบ่อยเกินไป กรุณาลองใหม่อีกครั้งในภายหลัง',
};

/** แบบฟอร์ม: 10 ครั้ง / 15 นาที ต่อ IP */
export const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: tooMany,
});

/** แบบฟอร์ม: 30 ครั้ง / 24 ชั่วโมง ต่อ IP (กัน spam ต่อเนื่อง) */
export const formDailyRateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  limit: 30,
  standardHeaders: false,
  legacyHeaders: false,
  message: tooMany,
});

/** ทั้ง API: 120 request / นาที ต่อ IP */
export const globalRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 120,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'มีการเรียกใช้งานบ่อยเกินไป กรุณาลองใหม่อีกครั้งในภายหลัง' },
});
