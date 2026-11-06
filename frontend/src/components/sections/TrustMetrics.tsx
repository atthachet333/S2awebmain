'use client';

import { stats } from '@/data/stats';
import { useCountUp } from '@/hooks/useCountUp';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import type { StatItem } from '@/types';

// accent ต่อการ์ด — คำอธิบายมาจาก stats (ข้อมูลที่ยืนยันได้เท่านั้น)
const meta = [
  { grad: 'from-royal to-sky', text: 'text-royal' },
  { grad: 'from-cyan to-sky', text: 'text-cyan' },
  { grad: 'from-teal to-cyan', text: 'text-teal' },
  { grad: 'from-gold to-gold-soft', text: 'text-gold' },
];

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;
  const m = meta[index % meta.length];
  return (
    <StaggerItem className="group relative overflow-hidden rounded-2xl border border-borderc bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.grad}`}
        aria-hidden="true"
      />
      <span
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${m.grad} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
        <span ref={ref}>{value.toLocaleString('th-TH')}</span>
        <span className={m.text}>{stat.suffix}</span>
      </p>
      <p className="mt-1 text-sm font-semibold text-navy">{stat.label}</p>
      {stat.description && (
        <p className="mt-1 text-xs leading-relaxed text-muted">{stat.description}</p>
      )}
    </StaggerItem>
  );
}

export function TrustMetrics() {
  return (
    <section className="relative z-10 -mt-10 bg-transparent pb-6">
      <div className="container">
        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
