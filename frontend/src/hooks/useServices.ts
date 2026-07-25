'use client';

import { useEffect, useState } from 'react';
import { api, type ApiService } from '@/lib/api';

interface State {
  services: ApiService[];
  loading: boolean;
  /** true = ข้อมูลมาจาก Backend จริง, false = ใช้ fallback ในเครื่อง */
  live: boolean;
}

/**
 * ดึงรายการบริการจาก Backend พร้อม fallback ในเครื่อง
 * เพื่อให้หน้าเว็บแสดงผลได้เสมอแม้ Backend ไม่พร้อม (ไม่ทำลาย feature เดิม)
 */
export function useServices(fallback: ApiService[]): State {
  const [state, setState] = useState<State>({
    services: fallback,
    loading: true,
    live: false,
  });

  useEffect(() => {
    let active = true;
    api
      .getServices()
      .then((services) => {
        if (active && services.length > 0) {
          setState({ services, loading: false, live: true });
        } else if (active) {
          setState({ services: fallback, loading: false, live: false });
        }
      })
      .catch(() => {
        if (active) setState({ services: fallback, loading: false, live: false });
      });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
