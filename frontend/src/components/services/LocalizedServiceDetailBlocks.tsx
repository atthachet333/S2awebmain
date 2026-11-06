'use client';

import { CheckCircle2, FileText, ListChecks } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { getLocalizedServiceDetails } from '@/locales/serviceDetails';

type Props = {
  serviceSlug: string;
  deliverables: string[];
  process: string[];
  documents: string[];
};

export function LocalizedServiceDetailBlocks(props: Props) {
  const { locale } = useLanguage();
  const localized = getLocalizedServiceDetails(props.serviceSlug, locale);

  return (
    <>
      <DetailBlock icon="check" title="สิ่งที่ลูกค้าจะได้รับ" items={localized?.deliverables ?? props.deliverables} accent />
      <DetailBlock icon="list" title="ขั้นตอนการทำงาน" items={localized?.process ?? props.process} ordered />
      <DetailBlock icon="file" title="เอกสารที่ต้องเตรียม" items={localized?.documents ?? props.documents} />
    </>
  );
}

function DetailBlock({ icon, title, items, accent = false, ordered = false }: {
  icon: 'check' | 'list' | 'file';
  title: string;
  items: string[];
  accent?: boolean;
  ordered?: boolean;
}) {
  const Icon = icon === 'list' ? ListChecks : icon === 'file' ? FileText : CheckCircle2;
  return (
    <div className="rounded-2xl border border-borderc bg-white p-5">
      <p className="flex items-center gap-2 text-sm font-bold text-navy">
        <Icon className="h-4 w-4 text-accent" />
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
            {ordered ? (
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[0.7rem] font-bold text-accent">{index + 1}</span>
            ) : (
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent ? 'text-accent' : 'text-muted/60'}`} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
