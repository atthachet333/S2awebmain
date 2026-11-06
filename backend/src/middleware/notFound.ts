import type { Request, Response } from 'express';

/** 404 — ข้อความทั่วไป ไม่สะท้อน URL หรือ method ที่ผู้ใช้ส่งมา */
export function notFound(_req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'ไม่พบข้อมูลที่ร้องขอ',
  });
}
