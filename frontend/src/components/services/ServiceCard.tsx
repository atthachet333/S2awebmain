import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StaggerItem } from '@/components/animations/AnimatedSection';
import type { Service } from '@/types';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <StaggerItem>
      <Link
        href={`/services#${service.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-borderc bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          ดูรายละเอียด
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </StaggerItem>
  );
}
