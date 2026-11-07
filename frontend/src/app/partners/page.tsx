import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { PdaBlissLogo } from '@/components/partners/PdaBlissLogo';
import { pdaBliss } from '@/data/partnership';
import { introductionFlow, partnerPrinciples, pdaBlissAreas } from '@/data/partners';

export const metadata: Metadata = {
  title: 'การทำงานกับผู้เชี่ยวชาญภายนอก',
  description:
    'หลักการที่ S2 ใช้เมื่อความต้องการของลูกค้าอยู่นอกขอบเขตงานโดยตรง: ขอบเขตชัดเจน ลูกค้าเป็นผู้เลือก และขอบเขตและค่าบริการแยกกัน',
  alternates: { canonical: '/partners' },
};

/** EP33 — หน้าหลักการทำงานกับพันธมิตร (เน้นหลักการ ไม่ใช่หน้ารวมโลโก้) */
export default function PartnersPage() {
  return (
    <>
      <PageHero
        breadcrumb="พันธมิตร"
        eyebrow="Specialist Partners"
        title="ผู้เชี่ยวชาญที่เหมาะสม สำหรับโจทย์ที่อยู่นอกขอบเขตของเรา"
        description="S2 มุ่งทำงานที่เราเชี่ยวชาญโดยตรง คือบัญชี ภาษี และที่ปรึกษาธุรกิจ และแนะนำผู้เชี่ยวชาญเฉพาะด้านเมื่อเหมาะสมเท่านั้น"
      />

      {/* 1. หลักการ */}
      <section className="section bg-white" aria-labelledby="partner-principles-heading">
        <div className="container max-w-5xl">
          <AnimatedSection className="max-w-3xl">
            <h2 id="partner-principles-heading" className="text-display-md font-bold text-navy">
              S2 คิดเรื่องพันธมิตรอย่างไร
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              S2 ดูแลงานที่เรารับผิดชอบโดยตรง และเมื่อผู้เชี่ยวชาญด้านอื่นเหมาะสมกว่า เราช่วยให้ลูกค้าเข้าใจขั้นตอนถัดไป
            </p>
          </AnimatedSection>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {partnerPrinciples.map((p, i) => (
              <li key={p.title} className="border-t-2 border-accent/30 pt-5">
                <span className="font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 2. พันธมิตรปัจจุบัน */}
      <section className="section bg-lightblue/50" aria-labelledby="current-partner-heading">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <h2 id="current-partner-heading" className="text-display-md font-bold text-navy">พันธมิตรปัจจุบัน</h2>
          </AnimatedSection>
          <AnimatedSection className="mt-8 grid gap-6 rounded-3xl border border-borderc bg-white p-6 shadow-soft md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
            <div className="flex justify-center md:justify-start">
              <PdaBlissLogo variant="mark" className="h-16" sizes="64px" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy" data-no-translate>
                {pdaBliss.legalName}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#1E6B2E] dark:text-[#7DD69A]">พันธมิตรด้านเทคโนโลยีและระบบ</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">อาจเกี่ยวข้องเมื่อธุรกิจต้องการ</p>
              <ul className="mt-2 grid gap-1.5 text-sm text-ink/80 sm:grid-cols-2">
                {pdaBlissAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E6B2E] dark:bg-[#7DD69A]" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                ส่วน S2 ยังดูแลฝั่งบัญชีและธุรกิจ เช่น ความต้องการทางธุรกิจ กระบวนการบัญชี ความพร้อม และการประเมินทางเลือก อย่างเป็นกลางต่อผู้ให้บริการซอฟต์แวร์
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  href="/services#accounting-systems-erp-advisory"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  ดูการแบ่งบทบาทในงานระบบบัญชีและ ERP
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href={pdaBliss.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:text-accent hover:underline"
                >
                  <span data-no-translate>{pdaBliss.displayUrl}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-5 border-t border-borderc pt-3 text-xs leading-relaxed text-muted">
                S2 Accounting Consultant และ PDA BLISS COMPANY LIMITED เป็นนิติบุคคลแยกจากกัน การใช้บริการ PDA BLISS เป็นทางเลือกของลูกค้า กำหนดขอบเขตและเสนอราคาแยก และไม่รวมอยู่ในราคาเริ่มต้นของแพ็กเกจ S2
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. การแนะนำทำงานอย่างไร */}
      <section className="section bg-white" aria-labelledby="introduction-flow-heading">
        <div className="container max-w-5xl">
          <AnimatedSection className="max-w-3xl">
            <h2 id="introduction-flow-heading" className="text-display-md font-bold text-navy">
              เมื่อ S2 แนะนำผู้เชี่ยวชาญ
            </h2>
          </AnimatedSection>
          <ol className="mt-8 divide-y divide-borderc overflow-hidden rounded-3xl border border-borderc bg-white">
            {introductionFlow.map((step, i) => (
              <li key={step} className="flex gap-4 p-5 md:p-6">
                <span className="w-7 shrink-0 font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-ink/80">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            ขอบเขตและความรับผิดชอบของงานพันธมิตรกำหนดไว้ในข้อตกลงของงานนั้น ส่วน S2 รับผิดชอบงานตามขอบเขตที่ S2 ตกลงกับลูกค้า
          </p>
        </div>
      </section>

      {/* 4. ในอนาคต */}
      <section className="section bg-lightblue/50" aria-labelledby="future-network-heading">
        <div className="container max-w-5xl">
          <AnimatedSection className="rounded-3xl border border-borderc bg-white p-7 md:p-10">
            <h2 id="future-network-heading" className="text-xl font-bold text-navy md:text-2xl">ในอนาคต</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              S2 อาจขยายเครือข่ายผู้เชี่ยวชาญเพิ่มเติมเมื่อช่วยให้ลูกค้าได้ประโยชน์จริง ปัจจุบันพันธมิตรที่ประกาศมีเพียงพันธมิตรด้านเทคโนโลยีและระบบข้างต้น
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              คุยกับ S2 ว่าความต้องการของคุณอยู่ในขอบเขตใด
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
