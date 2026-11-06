'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { localeCodes, localeLabels, locales } from '@/locales';
import { useLanguage } from '@/providers/LanguageProvider';

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  if (mobile) {
    return (
      <div>
        <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          <Languages className="h-4 w-4" /> {t('control.language')}
        </p>
        <div className="grid grid-cols-3 gap-2" role="group" aria-label={t('control.language')}>
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLocale(item)}
              aria-pressed={locale === item}
              className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors ${locale === item ? 'border-accent bg-primary-50 text-accent' : 'border-borderc bg-white text-navy hover:border-accent/40'}`}
            >
              {localeLabels[item]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative hidden xl:block">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t('control.language')}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-borderc bg-white px-3 text-xs font-bold text-navy shadow-sm transition-[background-color,color,border-color] hover:border-accent/40 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Languages className="h-4 w-4 text-accent" />
        {localeCodes[locale]}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-2xl border border-borderc bg-white p-1.5 shadow-card" role="listbox">
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={locale === item}
              onClick={() => { setLocale(item); setOpen(false); }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${locale === item ? 'bg-primary-50 font-semibold text-accent' : 'text-navy hover:bg-primary-50'}`}
            >
              {localeLabels[item]}
              {locale === item && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
