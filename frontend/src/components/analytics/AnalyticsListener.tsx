'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

/**
 * EP39 — วัดเหตุการณ์สำคัญแบบไม่มีข้อมูลส่วนบุคคล (ทำงานเฉพาะเมื่อเปิด Cloudflare Zaraz)
 * - การดูหน้าที่สำคัญต่อ funnel (Pricing, Client Resources) และส่วนความสามารถด้านที่ปรึกษา
 * - การคลิกช่องทางติดต่อ (โทร / LINE / อีเมล) และปุ่มสนใจรูปแบบบริการ — ไม่ส่งเบอร์ อีเมล หรือข้อความ
 */
export function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/pricing') track('pricing_view');
    if (pathname === '/client-resources') track('client_resources_view');
    if (pathname !== '/services') return;
    const target = document.getElementById('advisory-capabilities');
    if (!target || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        track('advisory_capability_view');
        io.disconnect();
      }
    });
    io.observe(target);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      const href = a?.getAttribute('href') ?? '';
      if (!href) return;
      const page = window.location.pathname.replace(/[^a-z0-9-]/gi, '') || 'home';
      if (href.startsWith('tel:')) track('phone_click', { page });
      else if (href.startsWith('mailto:')) track('email_click', { page });
      else if (href.includes('line.me')) track('line_click', { page });
      else if (href.includes('service=premium')) track('premium_interest', { page });
      else if (href.includes('service=enterprise')) track('enterprise_interest', { page });
      else if (href.includes('service=custom')) track('custom_quote_interest', { page });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
