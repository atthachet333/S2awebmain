import rateLimit from 'express-rate-limit';

/** จำกัดจำนวนครั้งการส่งฟอร์มต่อ IP เพื่อป้องกัน spam / abuse */
export const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 นาที
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'มีการส่งข้อมูลบ่อยเกินไป กรุณาลองใหม่อีกครั้งในภายหลัง',
  },
});

/** จำกัด request รวมทั้ง API (กว้างกว่า) */
export const globalRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});
