import Link from 'next/link';
import { advisoryDistinctions, advisoryMethod } from '@/data/principles';
import { services } from '@/data/services';

/**
 * Content distillation — ความต่างของบริการที่ปรึกษา + วิธีทำงานด้านที่ปรึกษา 7 ขั้น (หน้า Services #advisory-method)
 * ไม่ใช่กรอบที่มีชื่อการค้า · ผู้บริหารเป็นผู้ตัดสินใจ
 */
export function AdvisoryMethod() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-6xl">
        <h3 className="text-center text-xl font-bold text-navy md:text-2xl">บริการที่ปรึกษาแต่ละแบบตอบคำถามต่างกัน</h3>
        <div className="mt-6 overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft">
          {/* หัวคอลัมน์ (เฉพาะจอใหญ่) · จอเล็กแสดงป้ายกำกับในแต่ละแถว */}
          <div className="hidden grid-cols-12 gap-5 bg-lightblue/50 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-navy lg:grid" aria-hidden="true">
            <span className="col-span-2">บริการ</span>
            <span className="col-span-3">คำถามหลัก</span>
            <span className="col-span-4">สิ่งที่ดู</span>
            <span className="col-span-3">สิ่งที่ได้รับ</span>
          </div>
          <ul className="divide-y divide-borderc">
            {advisoryDistinctions.map((row) => {
              const service = services.find((s) => s.slug === row.slug);
              return (
                <li key={row.slug} className="grid gap-3 px-6 py-5 text-sm lg:grid-cols-12 lg:gap-5">
                  <h4 className="font-bold lg:col-span-2">
                    <Link href={`#${row.slug}`} className="text-accent underline-offset-4 hover:underline">
                      {service?.title}
                    </Link>
                  </h4>
                  <div className="lg:col-span-3">
                    <p className="text-xs font-semibold text-muted lg:hidden">คำถามหลัก</p>
                    <p className="text-ink/85">{row.question}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-xs font-semibold text-muted lg:hidden">สิ่งที่ดู</p>
                    <p className="text-muted">{row.looksAt}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-xs font-semibold text-muted lg:hidden">สิ่งที่ได้รับ</p>
                    <p className="text-muted">{row.receives}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-3 text-center text-sm text-muted">
          ข้อมูลเพื่อการบริหาร (Management Information) เป็นผลลัพธ์ที่ได้จากบริการเหล่านี้ ไม่ใช่บริการแยก
        </p>
      </div>

      <div id="advisory-method" className="mx-auto mt-14 max-w-6xl scroll-mt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">วิธีทำงานด้านที่ปรึกษา</span>
          <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">จากคำถาม สู่การตัดสินใจของผู้บริหาร</h3>
          <p className="mt-3 leading-relaxed text-muted">ลำดับเดียวกันใช้กับคำถามเรื่องต้นทุน งบประมาณ และการตัดสินใจระดับผู้บริหาร</p>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryMethod.map((step, i) => (
            <li
              key={step.title}
              className={`rounded-2xl border p-5 ${i === 5 ? 'border-accent/40 bg-primary-50/60' : 'border-borderc bg-white'}`}
            >
              <p className="font-display text-sm font-bold text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h4 className="mt-2 font-bold text-navy">{step.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
