import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { homeAdvisoryQuestions } from '@/data/advisoryCapabilities';

/**
 * EP31 — จากคำถามของธุรกิจ สู่ข้อมูลที่ช่วยตัดสินใจ (ทีเซอร์ความสามารถด้านที่ปรึกษา)
 * เดิมเป็นรายการฟีเจอร์ Dashboard — เปลี่ยนเป็นคำถามของผู้บริหาร · ภาพ Dashboard เป็นข้อมูลตัวอย่าง
 */

export function BusinessInsight() {
  return (
    <section className="section relative overflow-hidden bg-navy-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection className="order-2 lg:order-1">
          <DashboardPreview />
        </AnimatedSection>

        <AnimatedSection className="order-1 lg:order-2">
          <Badge variant="gold">ที่ปรึกษาธุรกิจ</Badge>
          <h2 className="mt-4 text-display-md font-bold text-white">
            <span className="inline-block pr-[0.3em]">จากคำถามของธุรกิจ</span>
            <span className="inline-block">สู่ข้อมูลที่ช่วยตัดสินใจได้ชัดขึ้น</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-100/85 md:text-lg">
            นอกจากงบการเงินตามกฎหมาย เราช่วยผู้บริหารหาคำตอบให้คำถามทางธุรกิจจากข้อมูลการเงินและบัญชี โดยการตัดสินใจยังเป็นของผู้บริหาร
          </p>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {homeAdvisoryQuestions.map((item) => (
              <li key={item.question} className="py-3.5">
                <p className="font-semibold text-white">“{item.question}”</p>
                <p className="mt-1 text-sm text-primary-100/75">{item.looksAt}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/services#advisory-capabilities" variant="white" size="lg">
              ดูว่า S2 ช่วยวิเคราะห์อะไรได้บ้าง
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Link
              href="/contact#contact-form"
              className="text-sm font-semibold text-sky underline-offset-4 hover:underline"
            >
              คุยว่าผู้บริหารต้องการเห็นข้อมูลอะไร
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
