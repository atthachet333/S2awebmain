import type { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';
import { env } from '../config/env';

/** Error handler กลาง — ไม่เปิดเผย stack trace ใน production */
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

  // ข้อผิดพลาดที่ไม่คาดคิด
  // eslint-disable-next-line no-console
  console.error('[error]', err);

  return res.status(500).json({
    success: false,
    message: 'เกิดข้อผิดพลาดภายในระบบ กรุณาลองใหม่อีกครั้ง',
    ...(env.isProduction ? {} : { detail: err instanceof Error ? err.message : String(err) }),
  });
}
