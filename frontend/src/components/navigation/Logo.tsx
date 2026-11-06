import Link from 'next/link';
import Image from 'next/image';
import { cn, siteConfig } from '@/lib/utils';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
      aria-label={`${siteConfig.name} หน้าหลัก`}
    >
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-primary-100/80 bg-white p-0.5 shadow-sm ring-1 ring-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-soft sm:h-10 sm:w-10">
        <Image
          src={siteConfig.logo}
          alt={`ตราสัญลักษณ์ ${siteConfig.name}`}
          fill
          sizes="(max-width: 640px) 36px, 40px"
          className="rounded-full object-contain"
          priority
        />
      </div>

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            'whitespace-nowrap font-display text-[0.86rem] font-bold tracking-[-0.01em] sm:text-[0.95rem]',
            light ? 'text-white' : 'text-navy',
          )}
        >
          {siteConfig.brandLine1}
        </span>
        <span
          className={cn(
            'mt-1 whitespace-nowrap text-[0.61rem] font-medium tracking-[0.035em] sm:text-[0.7rem]',
            light ? 'text-primary-100/80' : 'text-muted',
          )}
        >
          {siteConfig.brandLine2}
        </span>
      </span>
    </Link>
  );
}
