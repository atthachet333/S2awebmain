import Link from 'next/link';
import { ArrowDown, BarChart3, Database, Search, Settings2, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: Database, label: 'ข้อมูลธุรกิจ' },
  { icon: BarChart3, label: 'วิเคราะห์ต้นทุนและกำไร' },
  { icon: Search, label: 'พบ Cost Leakage และปัญหาข้อมูล' },
  { icon: Settings2, label: 'ออกแบบ Process และวางระบบบัญชี / ERP' },
  { icon: ShieldCheck, label: 'Dashboard และ Management Report เพื่อควบคุมกำไรต่อเนื่อง' },
];

export function CostToErpJourney() {
  return (
    <section className="section bg-lightblue/40">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Connected Advisory</p>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">จาก “รู้ต้นทุนจริง” สู่ “ระบบที่ควบคุมต้นทุนได้”</h2>
            <p className="mt-4 leading-relaxed text-muted">การวิเคราะห์ต้นทุนช่วยให้เห็นปัญหาในปัจจุบัน ส่วนระบบบัญชีและ ERP ช่วยให้ธุรกิจเก็บข้อมูลต้นทุนได้ถูกต้องและต่อเนื่องในอนาคต โดย S2 ทำหน้าที่เป็นที่ปรึกษาฝั่งธุรกิจและบัญชี ไม่ใช่ผู้ขาย ERP</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 lg:grid-cols-5 lg:items-stretch">
            {steps.map(({ icon: Icon, label }, index) => (
              <div key={label} className="relative flex flex-col items-center">
                <div className="flex h-full w-full flex-col items-center rounded-2xl border border-primary-100 bg-primary-50/60 p-4 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white"><Icon className="h-5 w-5" /></span>
                  <span className="mt-3 text-sm font-semibold leading-snug text-navy">{label}</span>
                </div>
                {index < steps.length - 1 && <ArrowDown className="my-1 h-5 w-5 text-accent lg:absolute lg:-right-4 lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#cost-profitability-analysis" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-600">ดูบริการวิเคราะห์ต้นทุนและกำไร</Link>
            <Link href="#accounting-systems-erp-advisory" className="rounded-full border border-borderc bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent">ดูบริการที่ปรึกษาระบบบัญชีและ ERP</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
