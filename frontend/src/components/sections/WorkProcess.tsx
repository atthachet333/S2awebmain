import { workProcess } from '@/data/process';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';

const accentByIndex = [
  'from-royal to-sky',
  'from-cyan to-sky',
  'from-teal to-cyan',
  'from-royal to-sky',
  'from-cyan to-sky',
  'from-teal to-cyan',
];

export function WorkProcess() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.25] [background-size:44px_44px] [mask-image:radial-gradient(720px_420px_at_50%_20%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="ขั้นตอนการทำงาน"
          title="กระบวนการที่ชัดเจน ตั้งแต่วันแรกจนถึงการเติบโต"
          description="เราทำงานอย่างเป็นระบบในทุกขั้นตอน เพื่อให้คุณมั่นใจได้ในทุกรายละเอียด"
        />

        <StaggerGroup className="relative mx-auto mt-16 max-w-4xl">
          {/* เส้นแกนกลางแนวตั้ง (เฉพาะ desktop) */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-royal/30 via-cyan/30 to-teal/30 md:block"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-2">
            {workProcess.map((step, i) => {
              const Icon = step.icon;
              const left = i % 2 === 0;
              const grad = accentByIndex[i % accentByIndex.length];
              return (
                <StaggerItem key={step.step} className="md:grid md:grid-cols-2 md:gap-8">
                  <div
                    className={
                      left ? 'md:col-start-1 md:pr-4 md:text-right' : 'md:col-start-2 md:pl-4'
                    }
                  >
                    <div className="group relative rounded-3xl border border-borderc bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                      {/* จุดบนเส้นแกน */}
                      <span
                        className={`absolute top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br ${grad} shadow-soft md:block ${
                          left ? '-right-[41px]' : '-left-[41px]'
                        }`}
                        aria-hidden="true"
                      />
                      <div className={`flex items-center gap-3 ${left ? 'md:flex-row-reverse' : ''}`}>
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-soft`}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="font-display text-3xl font-bold text-primary-100">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
