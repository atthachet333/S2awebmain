import Link from 'next/link';
import { AlertCircle, CheckCircle2, ListChecks, FileText, Clock, Target, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import type { Service } from '@/types';

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;

  return (
    <AnimatedSection>
      <article
        id={service.slug}
        className="scroll-mt-28 rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-10"
      >
        <div className={`grid gap-8 lg:grid-cols-12 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          {/* Intro column */}
          <div className="lg:col-span-5 lg:[direction:ltr]">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent text-white shadow-soft">
                <Icon className="h-7 w-7" />
              </span>
              <span className="font-display text-5xl font-bold text-primary-50">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>

            <div className="mt-5 rounded-2xl border border-borderc bg-primary-50/50 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <AlertCircle className="h-4 w-4 text-accent" />
                ปัญหาที่บริการนี้ช่วยแก้
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.problem}</p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-borderc bg-white p-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                  <Clock className="h-3.5 w-3.5 text-accent" /> ระยะเวลา
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{service.duration}</p>
              </div>
              <div className="rounded-xl border border-borderc bg-white p-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                  <Target className="h-3.5 w-3.5 text-accent" /> เหมาะกับ
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{service.suitableFor}</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-600"
            >
              ขอคำปรึกษาบริการนี้
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Details column */}
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 lg:[direction:ltr]">
            <DetailBlock
              icon={CheckCircle2}
              title="สิ่งที่ลูกค้าจะได้รับ"
              items={service.deliverables}
              accent
            />
            <DetailBlock icon={ListChecks} title="ขั้นตอนการทำงาน" items={service.process} ordered />
            <DetailBlock icon={FileText} title="เอกสารที่ต้องเตรียม" items={service.documents} />
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  items,
  accent = false,
  ordered = false,
}: {
  icon: typeof AlertCircle;
  title: string;
  items: string[];
  accent?: boolean;
  ordered?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-borderc bg-white p-5">
      <p className="flex items-center gap-2 text-sm font-bold text-navy">
        <Icon className="h-4 w-4 text-accent" />
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
            {ordered ? (
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[0.7rem] font-bold text-accent">
                {i + 1}
              </span>
            ) : (
              <CheckCircle2
                className={`mt-0.5 h-4 w-4 shrink-0 ${accent ? 'text-accent' : 'text-muted/60'}`}
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
