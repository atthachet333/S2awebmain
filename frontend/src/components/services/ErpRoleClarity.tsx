import Link from 'next/link';
import { Check, Scale } from 'lucide-react';
import { erpRoles } from '@/data/partnership';

/**
 * ใช้เฉพาะบริการ "ที่ปรึกษาระบบบัญชีและ ERP"
 * - บริการนี้ยังเป็นงานที่ปรึกษาของ S2 และเป็นกลางต่อผู้ขายซอฟต์แวร์ (vendor-neutral)
 * - PDA BLISS เป็นพันธมิตรด้านเทคโนโลยี "เมื่อเหมาะสม" — ไม่ใช่เงื่อนไขของบริการ
 */
export function ErpRoleClarity() {
  return (
    <div className="mt-8 rounded-2xl border border-borderc bg-primary-50/50 p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">แบ่งบทบาทให้ชัดเจน</p>
      <h4 className="mt-2 text-lg font-bold text-navy">S2 และพันธมิตรด้านเทคโนโลยีทำงานคนละส่วน</h4>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-borderc bg-white p-4">
          <p className="text-sm font-bold text-navy">S2 Accounting Consultant</p>
          <p className="mt-0.5 text-xs font-medium text-accent">ที่ปรึกษาฝั่งบัญชีและธุรกิจ</p>
          <ul className="mt-3 space-y-2">
            {erpRoles.s2.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-borderc bg-white p-4">
          <p className="text-sm font-bold text-navy">PDA BLISS</p>
          <p className="mt-0.5 text-xs font-medium text-[#1E6B2E] dark:text-[#7DD69A]">
            พันธมิตรด้านเทคโนโลยีและระบบ (เมื่อเหมาะสม)
          </p>
          <ul className="mt-3 space-y-2">
            {erpRoles.pda.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1E6B2E] dark:text-[#7DD69A]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted">
        <Scale className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        S2 ให้คำปรึกษาอย่างเป็นกลางต่อผู้ให้บริการซอฟต์แวร์ ลูกค้าเลือกระบบหรือ Vendor ที่เหมาะสมได้อย่างอิสระ การทำงานร่วมกับ PDA BLISS เป็นทางเลือกหนึ่ง ไม่ใช่เงื่อนไขของบริการ
      </p>
      {/* EP33 */}
      <p className="mt-2 pl-6 text-sm">
        <Link href="/partners" className="font-semibold text-accent underline-offset-4 hover:underline">
          หลักการทำงานกับพันธมิตร
        </Link>
      </p>
    </div>
  );
}
