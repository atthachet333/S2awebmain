'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const t = testimonials[index];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          eyebrow="เสียงจากลูกค้า"
          title="ธุรกิจที่เติบโตไปกับเรา"
          description="ความไว้วางใจของลูกค้าคือสิ่งที่เราภูมิใจที่สุด"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-borderc bg-gradient-to-br from-primary-50/60 to-white p-8 shadow-soft md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary-100" aria-hidden="true" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1" aria-label={`ให้คะแนน ${t.rating} จาก 5 ดาว`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="relative mt-5 text-lg font-medium leading-relaxed text-ink md:text-xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display font-bold text-white">
                    {t.name.replace('คุณ', '').trim().charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-sm text-muted">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borderc bg-white text-navy transition-colors hover:border-accent hover:text-accent"
              aria-label="รีวิวก่อนหน้า"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-2 bg-borderc hover:bg-muted'
                  }`}
                  aria-label={`ไปที่รีวิวที่ ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borderc bg-white text-navy transition-colors hover:border-accent hover:text-accent"
              aria-label="รีวิวถัดไป"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
