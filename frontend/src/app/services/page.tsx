import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, ChevronRight } from 'lucide-react';
import { services, serviceGroups } from '@/data/services';
import { continuityPath, journeyStages } from '@/data/journey';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CostToErpJourney } from '@/components/services/CostToErpJourney';
import { ScrollToHash } from '@/components/services/ScrollToHash';

export const metadata: Metadata = {
  title: 'บริการ',
  description:
    'บริการบัญชี ภาษี วิเคราะห์ต้นทุนและกำไร ที่ปรึกษาระบบบัญชีและ ERP และ CFO Advisory สำหรับธุรกิจที่ต้องการตัดสินใจจากข้อมูลจริง',
  keywords: ['วิเคราะห์ต้นทุน', 'วิเคราะห์กำไร', 'ที่ปรึกษา ERP', 'ERP Consultant Thailand', 'Accounting System Consultant', 'Cost Analysis', 'Profitability Analysis'],
  alternates: { canonical: '/services' },
};

// EP26: เรียงบริการตามกลุ่ม (รากฐานงานบัญชี → ที่ปรึกษาธุรกิจและการเงิน → ระบบธุรกิจ) — slug/anchor เดิมทั้งหมด
const groupedServices = serviceGroups.map((group) => ({
  ...group,
  items: group.slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is (typeof services)[number] => Boolean(s)),
}));
const orderedServices = groupedServices.flatMap((group) => group.items);

export default function ServicesPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero
        breadcrumb="บริการ"
        eyebrow="บริการทั้งหมด"
        title="บริการที่เริ่มจากงานบัญชี และต่อยอดสู่การตัดสินใจทางธุรกิจ"
        description="งานบัญชีและภาษีวางรากฐานข้อมูลที่เชื่อถือได้ งานที่ปรึกษาช่วยผู้บริหารใช้ข้อมูลนั้นวางแผนและตัดสินใจ และเมื่อธุรกิจซับซ้อนขึ้น เราช่วยวางแนวทางด้านระบบบัญชีและ ERP"
      >
        {/* Jump links — เลื่อนแนวนอนบนมือถือ, ตัดบรรทัดบนจอใหญ่ */}
        <nav aria-label="ไปยังบริการ" className="mask-fade-x -mx-4 mt-8 sm:mx-0 sm:[-webkit-mask-image:none] sm:[mask-image:none]">
          <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {orderedServices.map((s) => (
              <li key={s.slug} className="shrink-0 snap-start">
                <Link
                  href={`#${s.slug}`}
                  className="block whitespace-nowrap rounded-full border border-borderc bg-white/80 px-4 py-2 text-sm font-medium text-navy backdrop-blur transition-colors hover:border-accent hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* 👇 แบนเนอร์โปรโมท นัดปรึกษาฟรี (เพิ่มใหม่ให้เด่นสะดุดตา) */}
      <section className="relative z-10 -mt-6 px-4 md:-mt-10">
        <div className="container max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-6 py-10 text-center shadow-lift sm:px-12 md:py-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-royal/40 to-cyan/25 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
              ไม่แน่ใจว่าบริการไหนเหมาะกับธุรกิจคุณที่สุด?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/80 sm:text-base">
              ให้ทีมผู้เชี่ยวชาญของเราช่วยประเมินและวางแผนให้คุณแบบไม่มีค่าใช้จ่ายและไม่มีข้อผูกมัด
            </p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-2.5 rounded-full bg-white px-8 text-base font-semibold text-navy shadow-soft transition-all hover:scale-105 hover:bg-primary-50 hover:shadow-lift"
              >
                <CalendarCheck className="h-5 w-5 text-accent" />
                นัดหมายปรึกษาฟรี
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white pt-16 md:pt-20">
        <div className="container space-y-16 md:space-y-20">
          {/* EP28 — เริ่มจากสถานการณ์ของธุรกิจ (แทนแถบ 3 กลุ่มของ EP27) — เป็นแนวทาง ไม่ใช่ขั้นตอนบังคับ */}
          <section id="journey-mapping" className="scroll-mt-28" aria-labelledby="journey-mapping-heading">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="journey-mapping-heading" className="text-2xl font-bold text-navy md:text-3xl">
                เริ่มจากสถานการณ์ของธุรกิจคุณ
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                เลือกช่วงที่ใกล้กับธุรกิจคุณตอนนี้ แล้วดูบริการที่เกี่ยวข้อง ไม่จำเป็นต้องใช้ทุกบริการ และไม่จำเป็นต้องเริ่มจากช่วงแรก
              </p>
            </div>
            <ol className="mx-auto mt-10 max-w-5xl divide-y divide-borderc overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft">
              {journeyStages.map((stage, i) => (
                <li key={stage.id} id={stage.id} className="grid scroll-mt-28 gap-3 p-6 md:grid-cols-[3rem_1fr_1.1fr] md:gap-6 md:p-7">
                  <span className="font-display text-xl font-bold text-accent" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{stage.situation}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{stage.objective}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{stage.needs}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">บริการที่เกี่ยวข้อง</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {stage.services.map((slug) => {
                        const service = services.find((s) => s.slug === slug);
                        if (!service) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`#${slug}`}
                              className="block rounded-full border border-borderc bg-primary-50/60 px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
                            >
                              {service.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    {stage.id === 'stage-structure' && (
                      <p className="mt-3 text-xs leading-relaxed text-muted">
                        งานด้านระบบหรือ ERP ประเมินและเสนอราคาแยก และอาจทำร่วมกับพันธมิตรด้านเทคโนโลยีและระบบเมื่อเหมาะสม
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mx-auto mt-8 max-w-5xl text-center">
              <p className="text-sm font-semibold text-navy">ความร่วมมือขยายได้ตามความต้องการ</p>
              <ol className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2" aria-label="ความร่วมมือที่ขยายได้ตามความต้องการ">
                {continuityPath.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="rounded-full border border-borderc bg-white px-3 py-1 text-xs font-medium text-navy">{step}</span>
                    {i < continuityPath.length - 1 && (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-muted">
                หรือดูบริการตามกลุ่ม:{' '}
                {groupedServices.map((group, i) => (
                  <span key={group.id}>
                    <Link href={`#${group.id}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                      {group.title}
                    </Link>
                    {i < groupedServices.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {groupedServices.map((group, groupIndex) => {
            const offset = groupedServices.slice(0, groupIndex).reduce((sum, g) => sum + g.items.length, 0);
            return (
              <section key={group.id} id={group.id} className="scroll-mt-28" aria-labelledby={`${group.id}-heading`}>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{`0${groupIndex + 1}`}</p>
                  <h2 id={`${group.id}-heading`} className="mt-2 text-2xl font-bold text-navy md:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{group.description}</p>
                </div>
                <div className="mt-8 space-y-8">
                  {group.items.map((service, i) => (
                    <ServiceDetail key={service.slug} service={service} index={offset + i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <CostToErpJourney />

      <div className="bg-lightblue/40">
        <WorkProcess />
      </div>

      <FAQAccordion />
      <CTASection
        title="พร้อมเริ่มต้นยกระดับการเงินธุรกิจคุณแล้วหรือยัง?"
        description="นัดปรึกษาฟรี ทีมของเราจะช่วยประเมินและแนะนำแนวทางที่เหมาะกับคุณโดยเฉพาะ"
      />
    </>
  );
}
