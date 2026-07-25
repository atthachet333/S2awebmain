import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-glow hover:shadow-lift hover:brightness-105 focus-visible:outline-accent',
  secondary:
    'bg-white text-navy border border-borderc hover:border-accent hover:text-accent hover:shadow-soft',
  ghost: 'text-navy hover:bg-primary-50',
  white: 'bg-white text-navy hover:bg-primary-50 shadow-soft',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 will-change-transform active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<'button'> & { href?: undefined };
type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<'a'>,
    'href'
  >;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
