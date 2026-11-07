import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { homeAdvisoryQuestions } from '@/data/advisoryCapabilities';

/**
 * EP31 → Content distillation — คำถามของผู้บริหาร: คำถาม → สิ่งที่ S2 พิจารณา → สิ่งที่ผู้บริหารเข้าใจได้
 * นำภาพ Dashboard ตัวอย่างออก (ซ้ำกับส่วน Hero) — เหลือภาพข้อมูลตัวอย่างเพียงจุดเดียวบนหน้าแรก
 */
export function BusinessInsight() {
  return (
    <section className="section relative overflow-hidden bg-navy-dark text-white" aria-labelledby="business-questions-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="container relative">
        <AnimatedSection className="max-w-3xl">
          <Badge variant="gold">ที่ปรึกษาธุรกิจ</Badge>
          <h2 id="business-questions-heading" className="mt-4 text-display-md font-bold text-white">
            <span className="inline-block pr-[0.3em]">จากคำถามของธุรกิจ</span>
            <span className="inline-block">สู่ข้อมูลที่ช่วยตัดสินใจได้ชัดขึ้น</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-100/85 md:text-lg">
            นอกจากงบการเงินตามกฎหมาย เราช่วยผู้บริหารหาคำตอบให้คำถามทางธุรกิจจากข้อมูลการเงินและบัญชี โดยการตัดสินใจยังเป็นของผู้บริหาร
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <ul className="grid gap-4 md:grid-cols-2">
            {homeAdvisoryQuestions.map((item) => (
              <li key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-bold text-white">“{item.question}”</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gold">สิ่งที่ S2 พิจารณา</dt>
                    <dd className="mt-1 leading-relaxed text-primary-100/85">{item.looksAt}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-sky">สิ่งที่ผู้บริหารเข้าใจได้</dt>
                    <dd className="mt-1 leading-relaxed text-primary-100/85">{item.understands}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/services#advisory-capabilities" variant="white" size="lg">
              ดูว่า S2 ช่วยวิเคราะห์อะไรได้บ้าง
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Link
              href="/services#advisory-method"
              className="text-sm font-semibold text-sky underline-offset-4 hover:underline"
            >
              ดูวิธีทำงานด้านที่ปรึกษา
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
