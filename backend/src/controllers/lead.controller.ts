import type { Request, Response } from 'express';
import { leadService } from '../services/lead.service';
import { asyncHandler } from '../utils/asyncHandler';
import type { ContactInput } from '../schemas/contact.schema';
import type { ConsultationInput } from '../schemas/consultation.schema';

export const submitContact = asyncHandler(async (req: Request, res: Response) => {
  const lead = await leadService.saveContact(req.body as ContactInput);
  res.status(201).json({
    success: true,
    message: 'ได้รับข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 1 วันทำการ',
    data: { id: lead.id },
  });
});

export const submitConsultation = asyncHandler(async (req: Request, res: Response) => {
  const lead = await leadService.saveConsultation(req.body as ConsultationInput);
  res.status(201).json({
    success: true,
    message: 'ได้รับคำขอนัดหมายเรียบร้อยแล้ว ทีมงานจะติดต่อยืนยันเวลากับคุณ',
    data: { id: lead.id },
  });
});
