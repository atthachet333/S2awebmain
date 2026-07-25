import type { Metadata } from 'next';
import { Plus } from 'lucide-react';
import { pricingPlans, addOns } from '@/data/pricing';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { PricingCard } from '@/components/pricing/PricingCard';
import { ComparisonTable } from '@/components/pricing/ComparisonTable';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'แพ็กเกจและราคา',
  description:
    'แพ็กเกจบริการบัญชีและที่ปรึกษาการเงิน 4 ระดับ ตั้งแต่ Starter ถึง Executive CFO Advisory พร้อมบริการเสริมที่เลือกได้',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb="แพ็กเกจ"
        eyebrow="แพ็กเกจและราคา"
        title="เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ"
        description="ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง พร้อมปรับขยายได้ตามการเติบโตของธุรกิจ"
      />

      <section className="section bg-white">
        <div className="container">
          <StaggerGroup className="grid gap-6 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </StaggerGroup>
          <p className="mt-6 text-center text-sm text-muted">
            ราคาข้างต้นเป็นราคาเริ่มต้น ค่าบริการจริงขึ้นกับปริมาณเอกสารและความซับซ้อนของธุรกิจ
          </p>
        </div>
      </section>

      <section className="section bg-lightblue/50">
        <div className="container">
          <SectionHeader
            eyebrow="เปรียบเทียบแพ็กเกจ"
            title="เห็นความแตกต่างชัดเจนในตารางเดียว"
            description="เปรียบเทียบรายละเอียดของแต่ละแพ็กเกจ เพื่อเลือกสิ่งที่ตอบโจทย์คุณที่สุด"
          />
          <div className="mt-12">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="บริการเสริม (Add-on)"
            title="เพิ่มบริการได้ตามความต้องการ"
            description="ปรับแต่งแพ็กเกจของคุณด้วยบริการเสริมที่เลือกได้อย่างยืดหยุ่น"
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => {
              const Icon = addon.icon;
              return (
                <StaggerItem
                  key={addon.name}
                  className="group flex flex-col rounded-2xl border border-borderc bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <Plus className="h-5 w-5 text-borderc" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{addon.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{addon.description}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">{addon.price}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <FAQAccordion
        title="คำถามเกี่ยวกับแพ็กเกจและราคา"
        description="รวมคำถามที่พบบ่อยเกี่ยวกับบริการและค่าบริการของเรา"
      />
      <CTASection
        title="ยังไม่แน่ใจว่าแพ็กเกจไหนใช่?"
        description="นัดปรึกษาฟรี ทีมของเราจะช่วยประเมินและเสนอแพ็กเกจที่คุ้มค่าที่สุดสำหรับคุณ"
      />
    </>
  );
}
