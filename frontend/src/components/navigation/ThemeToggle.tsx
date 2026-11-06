'use client';

import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const { t } = useLanguage();
  const dark = mounted && theme === 'dark';
  const label = dark ? t('theme.toLight') : t('theme.toDark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={dark}
      title={label}
      className={`group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-borderc bg-white px-3 text-navy shadow-sm transition-[background-color,color,border-color,box-shadow] duration-200 hover:border-accent/40 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${showLabel ? 'min-w-0 flex-1' : 'w-10 px-0'}`}
    >
      <span className="relative h-4.5 w-4.5">
        <Sun className={`absolute inset-0 h-4.5 w-4.5 transition-[opacity,transform] duration-200 ${dark ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
        <Moon className={`absolute inset-0 h-4.5 w-4.5 transition-[opacity,transform] duration-200 ${dark ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}`} />
      </span>
      {showLabel && <span className="text-sm font-semibold">{dark ? t('theme.dark') : t('theme.light')}</span>}
    </button>
  );
}
