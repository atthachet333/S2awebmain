import Link from 'next/link';
import { Check, Star, ArrowRight, Users, CalendarDays, FileBarChart, Headphones } from 'lucide-react';
import { StaggerItem } from '@/components/animations/AnimatedSection';
import type { PricingPlan } from '@/types';

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const highlighted = plan.highlighted;
  return (
    <StaggerItem
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? 'border-accent bg-navy-dark text-white shadow-lift'
          : 'border-borderc bg-white text-ink shadow-soft hover:shadow-card'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-dark">
          <Star className="h-3 w-3 fill-navy-dark" />
          แนะนำ
        </span>
      )}
      <h3 className={`text-lg font-bold ${highlighted ? 'text-white' : 'text-navy'}`}>{plan.name}</h3>
      <p className={`mt-1.5 text-sm ${highlighted ? 'text-primary-100/80' : 'text-muted'}`}>
        {plan.tagline}
      </p>

      <div className="mt-5">
        <span className="text-sm font-medium text-muted">เริ่มต้น</span>
        <div className="flex items-end gap-1">
          <span className={`font-display text-4xl font-bold ${highlighted ? 'text-white' : 'text-navy'}`}>
            ฿{plan.price.toLocaleString('th-TH')}
          </span>
          <span className={`mb-1.5 text-sm ${highlighted ? 'text-primary-100/70' : 'text-muted'}`}>
            /{plan.priceNote}
          </span>
        </div>
      </div>

      <Link
        href="/contact"
        className={`group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all ${
          highlighted
            ? 'bg-white text-navy hover:bg-primary-50'
            : 'bg-accent text-white hover:bg-primary-600'
        }`}
      >
        เลือกแพ็กเกจนี้
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <div className={`mt-6 space-y-2.5 border-t pt-5 ${highlighted ? 'border-white/10' : 'border-borderc'}`}>
        <MetaRow icon={FileBarChart} label={plan.documents} highlighted={highlighted} />
        <MetaRow icon={CalendarDays} label={plan.meetings} highlighted={highlighted} />
        <MetaRow icon={Users} label={plan.reports} highlighted={highlighted} />
        <MetaRow icon={Headphones} label={plan.support} highlighted={highlighted} />
      </div>

      <ul className={`mt-5 flex-1 space-y-2.5 border-t pt-5 ${highlighted ? 'border-white/10' : 'border-borderc'}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                highlighted ? 'bg-accent' : 'bg-primary-50'
              }`}
            >
              <Check className={`h-2.5 w-2.5 ${highlighted ? 'text-white' : 'text-accent'}`} />
            </span>
            <span className={highlighted ? 'text-primary-100/90' : 'text-muted'}>{f}</span>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

function MetaRow({
  icon: Icon,
  label,
  highlighted,
}: {
  icon: typeof Users;
  label: string;
  highlighted?: boolean;
}) {
  return (
    <p className={`flex items-center gap-2.5 text-xs ${highlighted ? 'text-primary-100/80' : 'text-muted'}`}>
      <Icon className={`h-4 w-4 shrink-0 ${highlighted ? 'text-accent-light' : 'text-accent'}`} />
      {label}
    </p>
  );
}
