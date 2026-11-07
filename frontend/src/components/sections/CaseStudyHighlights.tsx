import { caseStudies } from '@/data/caseStudies';

/**
 * EP34 — แสดงกรณีศึกษาจริงบนหน้าแรก (1–3 รายการ)
 * ไม่แสดงอะไรเลยจนกว่าจะมีกรณีจริงที่ยืนยันแล้วใน data/caseStudies.ts
 */
export function CaseStudyHighlights() {
  if (caseStudies.length === 0) return null;
  return (
    <section className="section bg-white" aria-labelledby="case-highlights-heading">
      <div className="container max-w-6xl">
        <h2 id="case-highlights-heading" className="text-center text-display-md font-bold text-navy">
          หลักฐานจากงานจริง
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <li key={c.id} className="rounded-3xl border border-borderc bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold text-accent">{c.context}</p>
              <h3 className="mt-2 font-bold text-navy">{c.situation}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.outcome}</p>
              {c.verifiedMetric && <p className="mt-3 text-sm font-semibold text-navy">{c.verifiedMetric}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
