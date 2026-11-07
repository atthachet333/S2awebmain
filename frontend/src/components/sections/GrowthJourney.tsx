import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { journeyStages } from '@/data/journey';

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
            เริ่มได้จากช่วงที่ตรงกับธุรกิจตอนนี้ ไม่จำเป็นต้องผ่านทุกช่วง และขยายงานได้เมื่อความต้องการเปลี่ยน
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

        <AnimatedSection className="mx-auto mt-12 max-w-4xl rounded-3xl border border-borderc bg-lightblue/40 p-5 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
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
