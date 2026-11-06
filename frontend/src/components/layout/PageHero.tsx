import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Badge } from '@/components/ui/Badge';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-radial pb-16 pt-32 md:pb-20 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40 [background-size:44px_44px] [mask-image:radial-gradient(800px_400px_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <nav
            className="mb-6 flex items-center justify-center gap-1.5 text-sm text-muted"
            aria-label="breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-accent">
              หน้าหลัก
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-navy">{breadcrumb}</span>
          </nav>
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-4 text-balance text-display-lg font-bold text-navy">{title}</h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}
