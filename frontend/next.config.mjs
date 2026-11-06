/**
 * Security headers (EP24)
 * - CSP อนุญาตเฉพาะแหล่งที่เว็บไซต์ใช้จริง: ไฟล์ของเว็บไซต์เอง, Backend API (NEXT_PUBLIC_API_URL)
 *   และ Google Maps embed ในหน้า Contact
 * - 'unsafe-inline' สำหรับ script ยังจำเป็น เพราะ Next.js และสคริปต์ตั้งค่าธีมใช้ inline script
 *   (หากต้องการเข้มขึ้นในอนาคต ให้เปลี่ยนเป็น nonce ผ่าน middleware)
 * - HSTS มีผลเฉพาะเมื่อเปิดผ่าน HTTPS; ไม่ใส่ includeSubDomains/preload จนกว่าเจ้าของโดเมนยืนยันทุก subdomain รองรับ HTTPS
 */
const isDev = process.env.NODE_ENV !== 'production';

/**
 * Backend ภายในเครื่อง — Browser เรียก /api/* แบบ same-origin แล้ว Next.js ส่งต่อมาที่นี่
 * (Backend ไม่ต้องเปิดสู่สาธารณะ) ค่าเริ่มต้นตรงกับ PORT ของ Backend
 */
const backendInternalUrl = (process.env.BACKEND_INTERNAL_URL || 'http://127.0.0.1:9899').replace(/\/+$/, '');

/** ใช้เฉพาะเมื่อกำหนด NEXT_PUBLIC_API_URL เป็น hostname สาธารณะแยก (ปกติเว้นว่าง) */
function apiOrigin() {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) return '';
  try {
    return new URL(raw).origin;
  } catch {
    return '';
  }
}

const contentSecurityPolicy = [
  "default-src 'self'",
  // static.cloudflareinsights.com: Cloudflare Web Analytics beacon ที่ Cloudflare แทรกให้ (ไม่ใช้คุกกี้)
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com",
  "font-src 'self' data:",
  `connect-src 'self' https://cloudflareinsights.com ${apiOrigin()}${isDev ? ' ws: wss:' : ''}`.trim(),
  'frame-src https://www.google.com https://maps.google.com',
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async rewrites() {
    // ส่งต่อเฉพาะ endpoint ที่หน้าเว็บใช้จริง — ไม่เปิด /api/services, /api/packages (ข้อมูล demo เดิม)
    return ['contact', 'consultations', 'health'].map((endpoint) => ({
      source: `/api/${endpoint}`,
      destination: `${backendInternalUrl}/api/${endpoint}`,
    }));
  },
  async redirects() {
    return [
      {
        source: '/articles/cash-flow-management-sme',
        destination: '/articles/true-business-costs',
        permanent: true,
      },
      {
        source: '/services/cash-flow',
        destination: '/services#cost-profitability-analysis',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
