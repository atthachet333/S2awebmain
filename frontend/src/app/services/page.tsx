import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
  title: 'บริการ',
  description:
    'บริการบัญชี ภาษี การเงิน และที่ปรึกษาธุรกิจครบวงจร ตั้งแต่รับทำบัญชีรายเดือน วางแผนภาษี ไปจนถึง CFO Advisory',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="บริการ"
        eyebrow="บริการทั้งหมด"
        title="บริการครบวงจร ดูแลทุกด้านของการเงินธุรกิจ"
        description="เราออกแบบบริการให้ตอบโจทย์ทุกช่วงการเติบโต ตั้งแต่งานบัญชีประจำวันไปจนถึงการวางกลยุทธ์การเงินระดับผู้บริหาร"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-borderc bg-white/80 px-4 py-2 text-sm font-medium text-navy backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container space-y-8">
          {services.map((service, i) => (
            <ServiceDetail key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <div className="bg-lightblue/40">
        <WorkProcess />
      </div>

      <FAQAccordion />
      <CTASection
        title="ไม่แน่ใจว่าบริการใดเหมาะกับธุรกิจคุณ?"
        description="นัดปรึกษาฟรี ทีมของเราจะช่วยประเมินและแนะนำแนวทางที่เหมาะกับคุณโดยเฉพาะ"
      />
    </>
  );
}
