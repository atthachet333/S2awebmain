'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

type Status = 'checking' | 'online' | 'offline';

/** ตัวบ่งชี้สถานะการเชื่อมต่อ Backend (เรียก /api/health ผ่าน API client กลาง) */
export function BackendStatus() {
  const [status, setStatus] = useState<Status>('checking');

  useEffect(() => {
    let active = true;
    api
      .checkHealth()
      .then((res) => active && setStatus(res.status === 'ok' ? 'online' : 'offline'))
      .catch(() => active && setStatus('offline'));
    return () => {
      active = false;
    };
  }, []);

  const config = {
    checking: { color: 'bg-gold', label: 'กำลังตรวจสอบระบบ' },
    online: { color: 'bg-teal', label: 'ระบบเชื่อมต่อ Backend ปกติ' },
    offline: { color: 'bg-rose-400', label: 'ไม่สามารถเชื่อมต่อ Backend' },
  }[status];

  return (
    <span className="inline-flex items-center gap-2 text-xs text-primary-100/60">
      <span className="relative flex h-2 w-2">
        {status === 'online' && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.color} opacity-60`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${config.color}`} />
      </span>
      {config.label}
    </span>
  );
}
