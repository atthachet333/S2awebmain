import dotenv from 'dotenv';

dotenv.config();

function required(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}

export const env = {
  nodeEnv: required('NODE_ENV', 'development'),
  port: Number(required('PORT', '9899')),
  frontendUrl: required('FRONTEND_URL', 'http://localhost:9898'),
  isProduction: process.env.NODE_ENV === 'production',
} as const;
