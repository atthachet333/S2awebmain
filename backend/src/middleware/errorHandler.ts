import type { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';
import { env } from '../config/env';
import { MailDeliveryError } from '../services/mail.service';

interface BodyParserError {
  type?: string;
  status?: number;
}

function isBodyParserError(err: unknown): err is BodyParserError {
  return typeof err === 'object' && err !== null && typeof (err as BodyParserError).type === 'string';
}

/**
 * Error handler กลาง (EP24)
 * - ตอบกลับผู้ใช้ด้วยข้อความทั่วไป ไม่เปิดเผย stack trace, path, ข้อมูลผู้ให้บริการ หรือค่าคอนฟิก
 * - log เฉพาะชื่อ/ข้อความของ error (stack เฉพาะ development) ไม่ log body ของคำขอ
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
    });
  }

  if (isBodyParserError(err)) {
    if (err.type === 'entity.too.large') {
      return res.status(413).json({ success: false, message: 'ข้อมูลหรือไฟล์แนบมีขนาดใหญ่เกินกำหนด' });
    }
    if (err.type === 'entity.parse.failed' || err.type === 'encoding.unsupported' || err.type === 'charset.unsupported') {
      return res.status(400).json({ success: false, message: 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง' });
    }
  }

  if (err instanceof MailDeliveryError) {
    // eslint-disable-next-line no-console
    console.error(`[mail] delivery failed: ${err.category} — ${err.message}`);
    // 503 (ไม่ใช่ 502) — Cloudflare แทนที่ 502/504 จาก origin ด้วยหน้า error ของตนเอง ผู้ใช้จึงไม่เห็นข้อความของเว็บไซต์
    res.set('Retry-After', '60');
    return res.status(503).json({
      success: false,
      message: 'ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทางโทรศัพท์/อีเมล',
    });
  }

  const name = err instanceof Error ? err.name : 'UnknownError';
  const message = err instanceof Error ? err.message : 'non-error thrown';
  // eslint-disable-next-line no-console
  console.error(`[error] ${name}: ${message}`, env.isDevelopment && err instanceof Error ? err.stack : '');

  return res.status(500).json({
    success: false,
    message: 'เกิดข้อผิดพลาดภายในระบบ กรุณาลองใหม่อีกครั้ง',
    ...(env.isDevelopment ? { detail: message } : {}),
  });
}
