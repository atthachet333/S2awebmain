import { industries } from '@/data/industries';
import { SectionHeader } from '@/components/ui/SectionHeader';

const gradients = [
  'from-royal to-sky',
  'from-cyan to-sky',
  'from-teal to-cyan',
  'from-royal to-cyan',
];

export function IndustriesServed() {
  return (
    <section className="section relative overflow-hidden bg-iceblue">
      <div className="container">
        <SectionHeader
          eyebrow="อุตสาหกรรมที่เราดูแล"
          title="เข้าใจความต่างของแต่ละธุรกิจ"
          description="เรามีประสบการณ์ดูแลธุรกิจหลากหลายประเภท จึงเข้าใจโจทย์เฉพาะและมาตรฐานของแต่ละอุตสาหกรรม"
        />

        {/* Mobile: horizontal snap scroll · Desktop: grid */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const grad = gradients[i % gradients.length];
            return (
              <div
                key={industry.name}
                className="group relative min-w-[76%] shrink-0 snap-start overflow-hidden rounded-2xl border border-borderc bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:min-w-0"
              >
                <span
                  className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${grad} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
                  aria-hidden="true"
                />
                <span
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 text-base font-bold text-navy">{industry.name}</h3>
                <p className="relative mt-1.5 text-xs leading-relaxed text-muted">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
