import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="S2 Accounting & Finance Advisory หน้าหลัก"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-lg font-bold leading-none">S2</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-[0.95rem] font-bold',
            light ? 'text-white' : 'text-navy',
          )}
        >
          S2 Accounting
        </span>
        <span
          className={cn(
            'text-[0.7rem] font-medium tracking-wide',
            light ? 'text-primary-100/80' : 'text-muted',
          )}
        >
          & Finance Advisory
        </span>
      </span>
    </Link>
  );
}
