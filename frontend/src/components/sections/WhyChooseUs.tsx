import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { advantages } from '@/data/advantages';

/**
 * EP27 — ทำไมธุรกิจเลือกทำงานกับ S2
 * รูปแบบ editorial: ข้อความหลัก (ซ้าย) + ข้อได้เปรียบแบบมีลำดับ "สิ่งที่เราทำ / สิ่งที่คุณได้รับ" (ขวา)
 */
export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-lightblue/60" aria-labelledby="why-s2-heading">
      <div className="container relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        <AnimatedSection className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <span className="eyebrow">ทำไมธุรกิจเลือก S2</span>
          <h2 id="why-s2-heading" className="mt-4 text-display-md font-bold text-navy">
            {/* แบ่งเป็นวลีเพื่อไม่ให้ตัดคำกลางวลี — ใช้ระยะขอบแทนช่องว่าง (ภาษาจีนไม่เว้นวรรค) */}
            <span className="inline-block pr-[0.3em]">ตัวเลขที่ถูกต้อง</span>
            <span className="inline-block pr-[0.3em]">คือจุดเริ่มต้น</span>
            <span className="inline-block">ไม่ใช่ปลายทาง</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            S2 จัดโครงสร้างงานให้ข้อมูลบัญชีไม่ได้มีไว้เพื่อยื่นภาษีและปิดงบเท่านั้น แต่ช่วยให้ผู้บริหารเข้าใจธุรกิจ และมีที่ปรึกษาที่เดินไปด้วยกันเมื่อธุรกิจซับซ้อนขึ้น
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href="/contact">
              คุยกับทีมของเรา
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              ดูว่าบริการไหนเหมาะกับธุรกิจคุณ
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft lg:col-span-8">
          <ol className="divide-y divide-borderc">
            {advantages.map((item, i) => (
              <li key={item.title} className="grid gap-4 p-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6 md:p-8">
                  <span className="font-display text-3xl font-bold leading-none text-accent/80" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy md:text-xl">{item.title}</h3>
                    <dl className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">สิ่งที่เราทำ</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">{item.whatWeDo}</dd>
                      </div>
                      <div className="border-l-2 border-accent/40 pl-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-accent">สิ่งที่คุณได้รับ</dt>
                        <dd className="mt-1.5 text-sm font-medium leading-relaxed text-navy">{item.clientGets}</dd>
                      </div>
                    </dl>
                    {i === advantages.length - 1 && (
                      <a
                        href="#growth-journey-heading"
                        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                      >
                        ดูเส้นทางการเติบโตไปกับ S2
                        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </a>
                    )}
                  </div>
              </li>
            ))}
          </ol>
        </AnimatedSection>
      </div>
    </section>
  );
}
