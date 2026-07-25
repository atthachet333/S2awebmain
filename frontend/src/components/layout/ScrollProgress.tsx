'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-primary-600 to-accent transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
