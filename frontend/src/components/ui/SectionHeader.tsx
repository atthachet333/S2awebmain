import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow',
            light && 'border-white/20 bg-white/10 text-primary-100',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 text-balance text-display-md font-bold',
          light && 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-muted md:text-lg',
            light && 'text-primary-100/90',
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
