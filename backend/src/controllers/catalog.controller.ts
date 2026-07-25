import type { Request, Response } from 'express';
import { catalogService } from '../services/catalog.service';
import { asyncHandler } from '../utils/asyncHandler';

export const getServices = asyncHandler(async (_req: Request, res: Response) => {
  const data = await catalogService.listServices();
  res.status(200).json({ success: true, data });
});

export const getPackages = asyncHandler(async (_req: Request, res: Response) => {
  const data = await catalogService.listPackages();
  res.status(200).json({ success: true, data });
});
