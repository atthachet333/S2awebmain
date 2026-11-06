import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gold' | 'solid';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variants = {
    // ใช้สไตล์เดียวกับ .eyebrow (มีค่าสีสำหรับ Dark mode แล้ว)
    default: 'eyebrow',
    gold: 'border-gold-soft bg-gold-soft/20 text-gold',
    solid: 'border-transparent bg-navy text-white',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
