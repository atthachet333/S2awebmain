import type { Request, Response } from 'express';

/** Health check — ไม่เปิดเผย port, uptime หรือข้อมูลสภาพแวดล้อม */
export function getHealth(_req: Request, res: Response) {
  res.set('Cache-Control', 'no-store');
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}
