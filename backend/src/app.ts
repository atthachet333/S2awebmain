import express, { type Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import apiRoutes from './routes';
import { globalRateLimiter } from './middleware/rateLimit';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

export function createApp(): Application {
  const app = express();

  // Security headers
  app.use(helmet());

  // CORS — อนุญาตเฉพาะ Frontend ที่กำหนดใน env (ไม่ใช้ '*')
  app.use(
    cors({
      origin: env.frontendUrl,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      optionsSuccessStatus: 204,
    }),
  );

  // จำกัดขนาด request body
  app.use(express.json({ limit: '64kb' }));
  app.use(express.urlencoded({ extended: true, limit: '64kb' }));

  // Rate limit รวม
  app.use(globalRateLimiter);

  // ทุก endpoint อยู่ภายใต้ /api
  app.use('/api', apiRoutes);

  // Root info
  app.get('/', (_req, res) => {
    res.json({ service: 'S2 Backend API', health: '/api/health' });
  });

  // 404 + error handler กลาง (ต้องอยู่ท้ายสุด)
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
