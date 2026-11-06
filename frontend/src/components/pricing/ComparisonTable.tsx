import { Check, Minus } from 'lucide-react';
import { pricingPathways, comparisonRows } from '@/data/pricing';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

/** ตารางเปรียบเทียบแบบกระชับ 2 คอลัมน์ (EP22) */
export function ComparisonTable() {
  return (
    <AnimatedSection className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
          <caption className="sr-only">ตารางเปรียบเทียบรูปแบบบริการ</caption>
          <thead>
            <tr className="border-b border-borderc bg-primary-50/50">
              <th scope="col" className="w-[38%] px-3 py-3 text-left align-bottom font-semibold text-navy sm:w-[40%] sm:p-4">
                ขอบเขตงาน
              </th>
              {pricingPathways.map((p) => (
                <th
                  key={p.slug}
                  scope="col"
                  className={`px-2 py-3 text-center align-bottom font-semibold leading-snug sm:p-4 ${p.slug === 'enterprise' ? 'text-accent' : 'text-navy'}`}
                >
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 1 ? 'bg-primary-50/25' : 'bg-white'}>
                <th scope="row" className="px-3 py-3 text-left font-medium leading-snug text-ink sm:p-4">
                  {row.feature}
                </th>
                {row.values.map((value, j) => (
                  <td key={j} className="px-2 py-3 text-center leading-snug sm:p-4">
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check className="mx-auto h-5 w-5 text-accent" aria-label="มี" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-borderc" aria-label="ไม่มี" />
                      )
                    ) : (
                      <span className="font-medium text-navy">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedSection>
  );
}
