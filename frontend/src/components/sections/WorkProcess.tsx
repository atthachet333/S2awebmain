import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { experienceStages, sharedResponsibilities } from '@/data/process';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

/**
 * EP30 — "เมื่อเริ่มทำงานกับ S2 จะเกิดอะไรขึ้น"
 * แยกช่วงก่อนตกลงร่วมงาน (ผู้สนใจ) กับหลังตกลงร่วมงาน (ลูกค้า) ให้ชัด · รูปแบบ editorial ไม่ใช่ stepper
 */
export function WorkProcess() {
  let counter = 0;
  return (
    <section id="how-we-work" className="section scroll-mt-20 bg-white" aria-labelledby="how-we-work-heading">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">ขั้นตอนการทำงาน</span>
          <h2 id="how-we-work-heading" className="mt-4 text-display-md font-bold text-navy">
            <span className="inline-block pr-[0.3em]">เมื่อเริ่มทำงานกับ S2</span>
            <span className="inline-block">จะเกิดอะไรขึ้น</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted md:text-lg">
            รู้ล่วงหน้าว่าแต่ละขั้นตอนเป็นอย่างไร ตั้งแต่การพูดคุยครั้งแรก การตกลงขอบเขตงาน ไปจนถึงงานที่ดูแลต่อเนื่อง
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          {experienceStages.map((stage) => (
            <AnimatedSection key={stage.id}>
              <div className="border-b border-borderc pb-4">
                <h3 className="text-xl font-bold text-navy">{stage.title}</h3>
                <p className="mt-1 text-sm text-muted">{stage.note}</p>
              </div>
              <ol className="mt-2">
                {stage.steps.map((step) => {
                  counter += 1;
                  return (
                    <li key={step.title} className="flex gap-4 border-b border-borderc/70 py-5 last:border-b-0">
                      <span
                        className="mt-0.5 w-7 shrink-0 font-display text-sm font-bold text-accent"
                        aria-hidden="true"
                      >
                        {String(counter).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-bold text-navy">{step.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mx-auto mt-10 max-w-6xl rounded-3xl border border-borderc bg-lightblue/40 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold text-navy">การทำงานร่วมกันที่ดีอาศัยทั้งสองฝ่าย</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                เพื่อให้งานเป็นไปตามขอบเขตและรอบที่ตกลง สิ่งที่ช่วยได้มากจากฝั่งธุรกิจ คือ
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 text-sm text-ink/80 sm:grid-cols-2 lg:col-span-8">
              {sharedResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <p className="mt-8 text-center">
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-600"
          >
            เริ่มจากการพูดคุยครั้งแรก
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
