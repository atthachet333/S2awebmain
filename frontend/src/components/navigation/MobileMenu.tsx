'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, Mail, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { siteConfig } from '@/lib/utils';
import { Logo } from './Logo';
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

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const { t } = useLanguage();
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={t('menu.main')}
        >
          <div
            className="absolute inset-0 bg-navy-dark/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.nav
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lift"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-borderc px-5 py-4">
              <Logo />
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-primary-50"
                aria-label={t('menu.close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-4 py-5">
              <div className="mb-5 space-y-4 rounded-2xl border border-borderc bg-lightblue/40 p-4">
                <LanguageSwitcher mobile />
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{t('control.theme')}</p>
                  <ThemeToggle showLabel />
                </div>
              </div>
              <div className="flex flex-col gap-1 border-t border-borderc pt-4">
              {navItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                        active
                          ? 'bg-primary-50 text-accent'
                          : 'text-navy hover:bg-primary-50'
                      }`}
                    >
                      {t(navKeys[item.href as keyof typeof navKeys])}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.div>
                );
              })}
              </div>
            </div>

            <div className="border-t border-borderc px-5 py-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent font-semibold text-white shadow-soft transition-colors hover:bg-primary-600"
              >
                {t('action.consultation')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.phones[0].href}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phones[0].number} (Office)
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 flex items-center justify-center gap-2 break-all text-sm font-medium text-muted"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
