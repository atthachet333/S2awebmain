import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardList, Receipt, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { pricingPathways, quoteFactors, transactionExamples, customScope, pricingTrust } from '@/data/pricing';
import { pricingFaqs } from '@/data/faq';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection, StaggerGroup } from '@/components/animations/AnimatedSection';
import { PricingCard } from '@/components/pricing/PricingCard';
import { ComparisonTable } from '@/components/pricing/ComparisonTable';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'แพ็กเกจและราคา',
  description:
    'รูปแบบบริการ S2 Premium Accounting เริ่มต้น ฿4,900/เดือน และ S2 Enterprise Advisory เริ่มต้น ฿9,900/เดือน ค่าบริการจริงสรุปในใบเสนอราคาหลังประเมินขอบเขตงาน',
  alternates: { canonical: '/pricing' },
};

function Chip({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-borderc bg-primary-50/60 px-3 py-1 text-xs font-medium text-navy">
      {children}
    </li>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb="แพ็กเกจ"
        eyebrow="Flexible Pricing · Professional Service"
        title="บริการที่ออกแบบตามธุรกิจของคุณ"
        description="เริ่มจากขอบเขตมาตรฐาน และปรับตามจำนวนเอกสาร ความซับซ้อน กระบวนการทำงาน และสิ่งที่ธุรกิจของคุณต้องการจริง"
      >
        <p className="mx-auto mt-6 inline-flex max-w-full items-start gap-2 rounded-2xl border border-borderc bg-white/80 px-4 py-2.5 text-left text-sm font-medium text-navy backdrop-blur sm:items-center">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:mt-0" aria-hidden="true" />
          ทีม S2 จะประเมินขอบเขตก่อนเริ่มงาน และจัดทำใบเสนอราคาอย่างชัดเจน
        </p>
      </PageHero>

      {/* Two pathways */}
      <section className="section bg-white">
        <div className="container">
          <StaggerGroup className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {pricingPathways.map((pathway) => (
              <PricingCard key={pathway.slug} pathway={pathway} />
            ))}
          </StaggerGroup>

          {/* Trust strip — ข้อเท็จจริงที่ยืนยันได้เท่านั้น */}
          <AnimatedSection className="mx-auto mt-10 max-w-6xl">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {pricingTrust.map((item, i) => (
                <li
                  key={item.value}
                  className={`rounded-2xl border border-borderc bg-white px-4 py-5 text-center ${
                    i === pricingTrust.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <p className="font-display text-lg font-bold leading-tight text-navy">{item.value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-muted">{item.label}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Custom scope */}
      <section className="section bg-lightblue/50">
        <div className="container">
          <AnimatedSection className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-borderc bg-white p-7 shadow-soft md:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">
                <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                Custom Scope
              </span>
              <h2 className="mt-4 text-display-md font-bold text-navy">ต้องการมากกว่าขอบเขตมาตรฐาน?</h2>
              <p className="mt-4 leading-relaxed text-muted">
                ธุรกิจแต่ละแห่งมีโครงสร้าง ปริมาณงาน ระบบ และความซับซ้อนแตกต่างกัน ทีม S2 จะช่วยประเมินความต้องการและจัดทำใบเสนอราคาตามขอบเขตงานจริง
              </p>
              <Link
                href="/contact?service=custom#contact-form"
                className="group mt-7 inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-soft"
              >
                ขอใบเสนอราคา
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">บริการเพิ่มเติม</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {customScope.services.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </ul>
              </div>
              <div className="border-t border-borderc pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">งานโครงการและขอบเขตเฉพาะ</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {customScope.projects.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compact comparison + "starting from" explanation */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="เปรียบเทียบรูปแบบบริการ"
            title="เลือกจุดเริ่มต้นที่เหมาะกับธุรกิจ"
            description="ทั้งสองรูปแบบเริ่มจากขอบเขตมาตรฐาน และปรับเพิ่มได้ตามความต้องการจริง"
          />
          <div className="mt-12">
            <ComparisonTable />
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
            <AnimatedSection className="rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-8">
              <p className="flex items-center gap-2 text-base font-bold text-navy">
                <SlidersHorizontal className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                ราคาเริ่มต้นหมายถึงอะไร?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                ราคาที่แสดงเป็นจุดเริ่มต้นสำหรับขอบเขตงานมาตรฐาน ค่าบริการจริงจะสรุปในใบเสนอราคาหลังประเมินขอบเขตงาน โดยพิจารณาจาก
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {quoteFactors.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-8">
              <p className="flex items-center gap-2 text-base font-bold text-navy">
                <Receipt className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                อะไรนับเป็นเอกสารหรือรายการ
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                จำนวนรายการหมายถึงจำนวนเอกสารหรือธุรกรรมทางบัญชีที่ต้องบันทึกในรอบเดือน โดยรายละเอียดการนับอาจแตกต่างตามประเภทเอกสารและลักษณะธุรกิจ
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {transactionExamples.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                ธุรกิจ E-Commerce หรือ Marketplace ที่มีรายการจำนวนมาก อาจต้องประเมินขอบเขตและค่าบริการเฉพาะ
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQAccordion
        items={pricingFaqs}
        title="คำถามเกี่ยวกับรูปแบบบริการและค่าบริการ"
        description="คำตอบสั้น ๆ เกี่ยวกับราคาเริ่มต้น การประเมินขอบเขต และใบเสนอราคา"
      />
      <CTASection
        title="ยังไม่แน่ใจว่าควรเริ่มจากรูปแบบไหน?"
        description="ทีม S2 จะช่วยประเมินขอบเขตงานและแนะนำรูปแบบบริการที่เหมาะกับธุรกิจของคุณ"
        buttonLabel="ขอประเมินค่าบริการ"
        buttonHref="/contact#contact-form"
      />
    </>
  );
}
