'use client';

import { useState } from 'react';
import Link from 'next/link';
import { contactIntentOptions } from '@/lib/contact-schema';
import { siteConfig } from '@/lib/utils';

type Intent = 'quote' | 'unsure' | 'advisory' | 'client';

const intents: { id: Intent; label: string }[] = [
  { id: 'quote', label: 'ขอใบเสนอราคา' },
  { id: 'unsure', label: 'ไม่แน่ใจว่าควรเริ่มตรงไหน' },
  { id: 'advisory', label: 'ต้องการคำปรึกษาด้านธุรกิจ' },
  { id: 'client', label: 'ลูกค้าปัจจุบัน' },
];

/**
 * EP37 — "ติดต่อเรื่องใด" แบบเบา: ช่วยเลือกบริการในแบบฟอร์ม หรือพาลูกค้าปัจจุบันไปยังช่องทางที่ถูกต้อง
 * ไม่เพิ่มช่องข้อมูลใหม่ และไม่เปลี่ยนการตรวจสอบของแบบฟอร์ม
 */
export function ContactIntent() {
  const [intent, setIntent] = useState<Intent | null>(null);

  const choose = (id: Intent) => {
    setIntent(id);
    if (id !== 'client') {
      window.dispatchEvent(new CustomEvent('s2:contact-intent', { detail: { service: contactIntentOptions[id] } }));
    }
  };

  return (
    <div className="mt-5">
      <p id="contact-intent-label" className="text-sm font-semibold text-navy">
        คุณต้องการติดต่อเรื่องใด?
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2" role="group" aria-labelledby="contact-intent-label">
        {intents.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => choose(item.id)}
            aria-pressed={intent === item.id}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              intent === item.id
                ? 'border-accent bg-accent text-white'
                : 'border-borderc bg-white text-navy hover:border-accent hover:text-accent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {intent === 'unsure' && (
          <p className="mt-3 rounded-xl border border-borderc bg-lightblue/40 px-4 py-3 text-sm leading-relaxed text-muted">
            กรอกแบบฟอร์มได้เลยโดยไม่ต้องระบุบริการ หรือลอง{' '}
            <Link href="/business-health-check" className="font-semibold text-accent underline-offset-4 hover:underline">
              ประเมินสุขภาพธุรกิจเบื้องต้น
            </Link>{' '}
            เพื่อดูว่าด้านใดอาจควรพิจารณาก่อน
          </p>
        )}
        {intent === 'client' && (
          <div className="mt-3 rounded-xl border border-borderc bg-lightblue/40 px-4 py-3 text-sm leading-relaxed text-muted">
            <p>แบบฟอร์มนี้สำหรับผู้สนใจบริการใหม่ ลูกค้าปัจจุบันติดต่อทีมได้โดยตรง</p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
              <li>
                <a href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
                  LINE <span data-no-translate>{siteConfig.lineOA}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.phones[0].href} className="font-semibold text-accent underline-offset-4 hover:underline">
                  โทรศัพท์สำนักงาน <span data-no-translate>{siteConfig.phones[0].number}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                  อีเมล
                </a>
              </li>
              <li>
                <Link href="/client-resources" className="font-semibold text-accent underline-offset-4 hover:underline">
                  สำหรับลูกค้า S2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
