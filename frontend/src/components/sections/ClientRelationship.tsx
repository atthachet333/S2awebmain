import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { relationshipBenefits } from '@/data/clientRelationship';

/**
 * EP29 — ทีเซอร์บนหน้าแรก: คุณค่าของการทำงานกับ S2 อย่างต่อเนื่อง (3 ข้อ)
 * รายละเอียดเต็ม + การแยก "ขอบเขตงาน" กับ "การทำงานกับ S2" อยู่ที่หน้า Pricing (#working-with-s2)
 */
const teaser = relationshipBenefits.filter((b) => b.id !== 'partner');

export function ClientRelationship() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-16 text-white md:py-20" aria-labelledby="client-relationship-heading">
      <div className="container">
        <AnimatedSection className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">การทำงานกับ S2</p>
            <h2 id="client-relationship-heading" className="mt-3 text-2xl font-bold text-white md:text-3xl">
              มากกว่างานบัญชีรายเดือน
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-100/80 md:text-base">
              ความสัมพันธ์ไม่ได้จบเมื่อส่งเอกสารครบ คุณค่าเกิดจากความต่อเนื่องของการทำงานร่วมกัน
            </p>
            <Link
              href="/pricing#working-with-s2"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky underline-offset-4 hover:underline"
            >
              ดูสิ่งที่ลูกค้าได้จากการทำงานกับ S2
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {teaser.map((benefit) => (
              <li key={benefit.id} className="border-t border-white/15 pt-5">
                <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-100/80">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
