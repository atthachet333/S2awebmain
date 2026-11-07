import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { continuityPath, journeyStages } from '@/data/journey';

/**
 * EP28 — เติบโตไปกับ S2 (ฉบับย่อบนหน้าแรก) · รายละเอียดการจับคู่บริการอยู่ที่หน้า Services (#journey-mapping)
 * เดสก์ท็อป: แนวนอน 6 ช่วง · มือถือ: เส้นทางแนวตั้ง · ลำดับเลขกำกับทุกช่วง (ไม่พึ่งสีอย่างเดียว)
 */
export function GrowthJourney() {
  return (
    <section className="section bg-white" aria-labelledby="growth-journey-heading">
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">เติบโตไปกับ S2</span>
          <h2 id="growth-journey-heading" className="mt-4 scroll-mt-28 text-display-md font-bold text-navy">
            <span className="inline-block pr-[0.3em]">เมื่อธุรกิจเปลี่ยน</span>
            <span className="inline-block">ความต้องการก็เปลี่ยนตาม</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            ธุรกิจไม่ควรต้องหาที่ปรึกษาใหม่ทุกครั้งที่เติบโตหรือซับซ้อนขึ้น S2 สนับสนุนได้ตั้งแต่การวางรากฐาน ไปจนถึงงานที่ปรึกษาและการเตรียมโครงสร้าง ตามความต้องการของแต่ละช่วง
          </p>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-12 max-w-6xl">
          <ol className="ml-4 border-l-2 border-borderc md:ml-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:border-l-0 xl:grid-cols-6 xl:gap-x-5">
            {journeyStages.map((stage, i) => (
              <li key={stage.id} className="relative pb-8 pl-8 last:pb-0 md:border-t-2 md:border-borderc md:pb-0 md:pl-0 md:pt-5">
                <span
                  className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent font-display text-xs font-bold text-white shadow-soft md:static md:mb-3 md:h-auto md:w-auto md:justify-start md:rounded-none md:border-0 md:bg-transparent md:text-sm md:text-accent md:shadow-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-bold text-navy">{stage.situation}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{stage.objective}</p>
                <Link
                  href={`/services#${stage.id}`}
                  className="group mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  ดูบริการที่เกี่ยวข้อง
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-12 max-w-4xl rounded-3xl border border-borderc bg-lightblue/40 p-6 md:p-8">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-navy md:text-base">เส้นทางนี้เป็นแนวทาง ไม่ใช่ขั้นตอนที่ทุกธุรกิจต้องผ่าน</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                เริ่มได้จากช่วงที่ตรงกับธุรกิจตอนนี้ เลือกเฉพาะบริการที่ต้องการ และอยู่ช่วงเดียวได้นานเท่าที่เหมาะสม เมื่อความต้องการเปลี่ยน ความร่วมมือก็ขยายได้โดยไม่ต้องใช้บริการเพิ่มทุกครั้ง
              </p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label="ความร่วมมือที่ขยายได้ตามความต้องการ">
                {continuityPath.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="rounded-full border border-borderc bg-white px-3 py-1 text-xs font-medium text-navy">{step}</span>
                    {i < continuityPath.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-borderc pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <Button href="/contact">
              ถามเราว่าควรเริ่มจากตรงไหน
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Link
              href="/services#journey-mapping"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              ดูบริการตามความต้องการของธุรกิจ
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            {/* EP40: ทางเลือกสำหรับผู้ที่ยังไม่แน่ใจ — ประเมินด้วยตนเองก่อน */}
            <Link
              href="/business-health-check"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              ประเมินสุขภาพธุรกิจเบื้องต้น
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
