import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { HealthCheck } from '@/components/healthcheck/HealthCheck';

export const metadata: Metadata = {
  title: 'ประเมินสุขภาพธุรกิจเบื้องต้น',
  description:
    'ตอบคำถามสั้นๆ 12 ข้อ เพื่อดูว่าด้านใดของธุรกิจอาจควรพิจารณาให้ละเอียดขึ้น ทั้งงานบัญชี ต้นทุนและกำไร การวางแผน และข้อมูลเพื่อการบริหาร',
  alternates: { canonical: '/business-health-check' },
};

/** EP35 — แบบประเมินเบื้องต้นฝั่งเบราว์เซอร์ (ไม่จัดเก็บคำตอบ) */
export default function BusinessHealthCheckPage() {
  return (
    <>
      <PageHero
        breadcrumb="ประเมินสุขภาพธุรกิจ"
        eyebrow="Business Health Check"
        title="ประเมินสุขภาพธุรกิจเบื้องต้น"
        description="ตอบคำถามสั้นๆ 12 ข้อ เพื่อดูว่าด้านใดของธุรกิจอาจควรพิจารณาให้ละเอียดขึ้น"
      >
        <p className="mx-auto mt-6 inline-flex max-w-2xl items-start gap-2 rounded-2xl border border-borderc bg-white/80 px-4 py-3 text-left text-sm leading-relaxed text-muted backdrop-blur">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          เป็นการประเมินเบื้องต้นจากคำตอบของคุณเท่านั้น ไม่ใช่การตรวจสอบบัญชี ไม่ใช่คำแนะนำด้านบัญชีหรือภาษี และไม่ใช่การรับประกันผล คำตอบอยู่ในเบราว์เซอร์ของคุณ ไม่ถูกส่งหรือจัดเก็บ
        </p>
      </PageHero>
      <section className="section bg-white pt-12 md:pt-16">
        <div className="container">
          <HealthCheck />
        </div>
      </section>
    </>
  );
}
