'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/providers/LanguageProvider';

const navKeys = {
  '/': 'nav.home',
  '/services': 'nav.services',
  '/about': 'nav.about',
  '/pricing': 'nav.pricing',
  '/articles': 'nav.articles',
  '/contact': 'nav.contact',
} as const;

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(12);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/50 bg-white/70 shadow-soft backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div
          className={cn(
            'container flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-15' : 'h-[72px]',
          )}
        >
          <div className="lg:flex-1">
            <Logo />
          </div>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full lg:flex"
            aria-label={t('menu.main')}
          >
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-accent'
                      : 'text-ink/80 hover:text-navy',
                  )}
                >
                  {t(navKeys[item.href as keyof typeof navKeys])}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
            <LanguageSwitcher />
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="group hidden h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand-gradient px-5 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-105 hover:shadow-lift xl:inline-flex"
            >
              {t('action.consultation')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borderc bg-white text-navy transition-colors hover:bg-primary-50 lg:hidden"
              aria-label={t('menu.open')}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
