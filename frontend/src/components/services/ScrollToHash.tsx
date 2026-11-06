'use client';

import { useEffect } from 'react';

/**
 * EP28 — เมื่อเปิดหน้า Services จากลิงก์ภายนอกที่มี #anchor (เช่น /services#stage-planning)
 * ให้เลื่อนไปยังหัวข้อหลังหน้าโหลดเสร็จ (เบราว์เซอร์บางตัวคืนตำแหน่งเลื่อนเดิมแทน)
 */
export function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const timer = window.setTimeout(() => {
      // instant: กระโดดไปยังหัวข้อทันทีเหมือนพฤติกรรมปกติของเบราว์เซอร์ (ไม่ขึ้นกับ scroll-behavior: smooth)
      document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
    }, 150);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
