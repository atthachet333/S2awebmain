import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';
import { ApiError } from '../utils/ApiError';

/** ตรวจสอบ req.body ด้วย Zod schema แล้วแทนที่ด้วยข้อมูลที่ผ่านการ parse/sanitize */
export const validateBody =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const key = issue.path.join('.') || 'form';
        (fieldErrors[key] ??= []).push(issue.message);
      }
      return next(ApiError.badRequest('ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง', fieldErrors));
    }
    req.body = result.data;
    next();
  };
