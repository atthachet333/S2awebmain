import { Check, Minus } from 'lucide-react';
import { pricingPlans, comparisonRows } from '@/data/pricing';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

export function ComparisonTable() {
  return (
    <AnimatedSection className="overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <caption className="sr-only">ตารางเปรียบเทียบแพ็กเกจบริการ</caption>
          <thead>
            <tr className="border-b border-borderc bg-primary-50/50">
              <th scope="col" className="p-4 text-left font-semibold text-navy">
                รายละเอียด
              </th>
              {pricingPlans.map((plan) => (
                <th
                  key={plan.slug}
                  scope="col"
                  className={`p-4 text-center font-semibold ${
                    plan.highlighted ? 'text-accent' : 'text-navy'
                  }`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 1 ? 'bg-primary-50/25' : 'bg-white'}>
                <th scope="row" className="p-4 text-left font-medium text-ink">
                  {row.feature}
                </th>
                {row.values.map((value, j) => (
                  <td key={j} className="p-4 text-center">
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
