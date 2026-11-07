import Link from 'next/link';
import { advisoryCapabilities } from '@/data/advisoryCapabilities';
import { services } from '@/data/services';

/**
 * EP31 — ชั้นอธิบายความสามารถด้านที่ปรึกษาธุรกิจ (อยู่เหนือบริการเดิม ไม่ใช่บริการใหม่)
 * รูปแบบรายงานผู้บริหาร: คำถาม → สิ่งที่ S2 พิจารณา → สิ่งที่ผู้บริหารเข้าใจได้
 */
export function AdvisoryCapabilities() {
  return (
    <section id="advisory-capabilities" className="scroll-mt-28" aria-labelledby="advisory-capabilities-heading">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">ความสามารถด้านที่ปรึกษาธุรกิจ</span>
        <h2 id="advisory-capabilities-heading" className="mt-4 text-2xl font-bold text-navy md:text-3xl">
          <span className="inline-block pr-[0.3em]">S2 ช่วยให้ผู้บริหาร</span>
          <span className="inline-block">เข้าใจอะไรได้บ้าง</span>
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          เริ่มจากคำถามที่ธุรกิจมีอยู่จริง แล้วดูว่าข้อมูลการเงินและบัญชีส่วนใดช่วยตอบคำถามนั้น ผลที่ได้คือความเข้าใจที่ชัดขึ้นสำหรับการตัดสินใจ
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft">
        {/* หัวคอลัมน์ (เฉพาะจอใหญ่) */}
        <div
          className="hidden border-b border-borderc bg-lightblue/40 px-7 py-3 text-xs font-semibold text-muted lg:grid lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-8"
          aria-hidden="true"
        >
          <span>คำถามของธุรกิจ</span>
          <span>สิ่งที่ S2 พิจารณา</span>
          <span>สิ่งที่ผู้บริหารเข้าใจได้</span>
        </div>
        <ul className="divide-y divide-borderc">
          {advisoryCapabilities.map((cap) => (
            <li key={cap.id} id={cap.id} className="grid scroll-mt-28 gap-5 p-6 md:p-7 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-accent">{cap.title}</h3>
                <p className="mt-2 text-lg font-bold leading-snug text-navy">“{cap.question}”</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted lg:sr-only">สิ่งที่ S2 พิจารณา</p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink/80 lg:mt-0">
                  {cap.examines.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted lg:sr-only">สิ่งที่ผู้บริหารเข้าใจได้</p>
                <ul className="mt-2 space-y-1.5 text-sm font-medium text-navy lg:mt-0">
                  {cap.understand.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted">บริการที่เกี่ยวข้อง</p>
                <ul className="mt-1.5 flex flex-wrap gap-2">
                  {cap.services.map((slug) => {
                    const service = services.find((s) => s.slug === slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`#${slug}`}
                          className="block rounded-full border border-borderc bg-primary-50/60 px-3 py-1 text-xs font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
                        >
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
          <h3 className="text-sm font-bold text-navy">ตัวเลขบัญชีเกิดจากการทำงานจริง</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            ข้อมูลบัญชีมาจากการขาย การซื้อ สต็อก เงินเดือน และค่าใช้จ่าย หากกระบวนการหรือโครงสร้างข้อมูลทำให้ใช้ข้อมูลได้ยาก S2 จะชี้ให้เห็นและพูดคุยทางเลือก ซึ่งไม่จำเป็นต้องเป็นการเปลี่ยนระบบเสมอไป
          </p>
        </div>
        <div className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
          <h3 className="text-sm font-bold text-navy">S2 ให้คำปรึกษา ผู้บริหารเป็นผู้ตัดสินใจ</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            งานที่ปรึกษาเป็นบริการตามขอบเขตที่ตกลงและเสนอราคา ไม่ได้รวมอยู่ในทุกรูปแบบบริการโดยอัตโนมัติ ตัวอย่างคำถามข้างต้นใช้อธิบายแนวทางการทำงาน ไม่ใช่ผลลัพธ์ที่รับประกัน
          </p>
        </div>
      </div>
    </section>
  );
}
