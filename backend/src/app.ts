import express, { type Application } from 'express';
import cors, { type CorsOptions } from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import apiRoutes from './routes';
import { globalRateLimiter } from './middleware/rateLimit';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

/** ขนาด body สูงสุดของแบบฟอร์มติดต่อ (ไฟล์ 10 MB เมื่อเข้ารหัส base64 ≈ 13.4 MB + ข้อความ) */
const CONTACT_BODY_LIMIT = '15mb';
/** ขนาด body สูงสุดของ endpoint อื่น */
const DEFAULT_BODY_LIMIT = '100kb';

const corsOptions: CorsOptions = {
  // อนุญาตเฉพาะ origin ใน FRONTEND_URL (allowlist) — ไม่ใช้ '*'
  // request ที่ไม่มี Origin (เช่น health check จากเซิร์ฟเวอร์) ผ่านได้ แต่ไม่ได้รับ CORS header
  origin(origin, callback) {
    if (!origin) return callback(null, false);
    callback(null, env.frontendOrigins.includes(origin));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
  maxAge: 600,
  optionsSuccessStatus: 204,
};

export function createApp(): Application {
  const app = express();

  // ใช้ IP จริงจาก proxy เฉพาะเมื่อกำหนด TRUST_PROXY (เช่น Cloudflare / reverse proxy)
  app.set('trust proxy', env.trustProxy);
  app.disable('x-powered-by');

  // Security headers — API ส่งเฉพาะ JSON จึงใช้ CSP แบบปิดทั้งหมด
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: false,
        directives: { defaultSrc: ["'none'"], frameAncestors: ["'none'"], baseUri: ["'none'"], formAction: ["'none'"] },
      },
      crossOriginResourcePolicy: { policy: 'same-site' },
      referrerPolicy: { policy: 'no-referrer' },
    }),
  );

  app.use(cors(corsOptions));

  // Rate limit ก่อน parse body เพื่อไม่ให้ request จำนวนมากใช้ทรัพยากร
  app.use(globalRateLimiter);

  // Body parser: JSON เท่านั้น จำกัดขนาดตาม endpoint
  app.use('/api/contact', express.json({ limit: CONTACT_BODY_LIMIT }));
  app.use(express.json({ limit: DEFAULT_BODY_LIMIT }));

  // ทุก endpoint อยู่ภายใต้ /api
  app.use('/api', apiRoutes);

  app.get('/', (_req, res) => {
    res.json({ service: 'S2 Backend API' });
  });

  // 404 + error handler กลาง (ต้องอยู่ท้ายสุด)
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
