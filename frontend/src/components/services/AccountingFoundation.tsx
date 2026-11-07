import { CheckCircle2 } from 'lucide-react';
import { accountingNotes, accountingQualities } from '@/data/principles';

/**
 * Content distillation — ข้อมูลบัญชีแบบไหนจึงใช้ตัดสินใจได้ (อยู่ต้นกลุ่ม "รากฐานงานบัญชี" ในหน้า Services)
 * อธิบายหลักการ ไม่ใช่สัญญากำหนดเวลา และไม่สัญญาผลประหยัดภาษี
 */
export function AccountingFoundation() {
  return (
    <section id="accounting-principles" className="scroll-mt-28" aria-labelledby="accounting-principles-heading">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">หลักการด้านบัญชี</span>
        <h2 id="accounting-principles-heading" className="mt-4 text-2xl font-bold text-navy md:text-3xl">
          ข้อมูลบัญชีแบบไหนจึงใช้ตัดสินใจได้
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          งานบัญชีที่ดีไม่ได้จบที่การยื่นภาษีและปิดงบ แต่ต้องตอบได้ว่าอะไรเปลี่ยน กำไรมาจากไหน ต้นทุนเพิ่มตรงไหน และเรื่องใดควรดูต่อ
        </p>
      </div>
      <ul className="mx-auto mt-10 grid max-w-6xl gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {accountingQualities.map((q) => (
          <li key={q.title} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-navy">{q.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{q.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        {accountingNotes.map((note) => (
          <div key={note.title} className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
            <h3 className="text-sm font-bold text-navy">{note.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{note.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
