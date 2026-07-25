'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Options {
  duration?: number;
  start?: number;
}

/**
 * Animate a number from `start` to `end` once the element scrolls into view.
 * Respects prefers-reduced-motion by snapping straight to the final value.
 */
export function useCountUp(end: number, { duration = 1800, start = 0 }: Options = {}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration, start]);

  return { ref, value };
}
