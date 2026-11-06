'use client';

import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Locale } from '@/locales';

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
  /** แสดงเป็นกล่องเน้น (เช่น ข้อมูลผู้ควบคุมข้อมูล) */
  highlight?: boolean;
}

export interface LegalContent {
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
}

/**
 * เอกสารทางกฎหมายแบบสามภาษา (EP24)
 * เนื้อหาแต่ละภาษาเขียนไว้ครบใน data/legal.ts จึงปิดตัวแปลอัตโนมัติด้วย data-no-translate
 * เพื่อให้ถ้อยคำทางกฎหมายตรงตามที่กำหนดไว้ทุกภาษา
 */
export function LegalDocument({ content }: { content: Record<Locale, LegalContent> }) {
  const { locale } = useLanguage();
  const doc = content[locale] ?? content.th;

  return (
    <div data-no-translate lang={locale === 'zh' ? 'zh-CN' : locale}>
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{doc.updatedLabel}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{doc.intro}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        {doc.sections.map((section, index) => (
          <section
            key={section.title}
            className={
              section.highlight
                ? 'rounded-2xl border border-borderc bg-lightblue/20 p-5'
                : 'border-t border-borderc pt-8 first:border-t-0 first:pt-0'
            }
          >
            <h2 className="text-lg font-bold text-navy">
              {index + 1}. {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-2">
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.note && <p className="mt-3 text-xs text-muted">{section.note}</p>}
          </section>
        ))}
      </div>
    </div>
  );
}
