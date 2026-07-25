import { createApp } from './app';
import { env } from './config/env';

const app = createApp();

const server = app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `\n  ✅ S2 Backend พร้อมใช้งาน\n` +
      `  ➜ Local:        http://localhost:${env.port}\n` +
      `  ➜ Health:       http://localhost:${env.port}/api/health\n` +
      `  ➜ Allowed CORS: ${env.frontendUrl}\n` +
      `  ➜ Environment:  ${env.nodeEnv}\n`,
  );
});

// Graceful shutdown
const shutdown = (signal: string) => {
  // eslint-disable-next-line no-console
  console.log(`\n${signal} received — ปิดเซิร์ฟเวอร์...`);
  server.close(() => process.exit(0));
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
