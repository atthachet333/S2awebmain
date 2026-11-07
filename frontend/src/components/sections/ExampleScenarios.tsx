'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FlaskConical, ChevronLeft, ChevronRight } from 'lucide-react';
import { exampleScenarios } from '@/data/scenarios';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/providers/LanguageProvider';

const navLabels = {
  th: { prev: 'สถานการณ์ก่อนหน้า', next: 'สถานการณ์ถัดไป', goTo: 'ไปที่สถานการณ์ที่' },
  en: { prev: 'Previous scenario', next: 'Next scenario', goTo: 'Go to scenario' },
  zh: { prev: '上一个情景', next: '下一个情景', goTo: '前往情景' },
} as const;

/**
 * ตัวอย่างโจทย์ธุรกิจที่เราช่วยวิเคราะห์ได้
 * แทนที่ส่วน Testimonial เดิม — ทุกการ์ดติดป้าย "ตัวอย่างสถานการณ์" และไม่อ้างอิงลูกค้าจริง
 */
export function ExampleScenarios() {
  const { locale } = useLanguage();
  const labels = navLabels[locale];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = exampleScenarios.length;

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
    }, 8000);
    return () => clearInterval(timer);
  }, [total]);

  const s = exampleScenarios[index];
  const Icon = s.icon;

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          eyebrow="สถานการณ์สมมติ"
          title="ตัวอย่างโจทย์ธุรกิจที่เราช่วยวิเคราะห์ได้"
          description="สถานการณ์ด้านล่างเป็นตัวอย่างสมมติเพื่ออธิบายแนวทางการทำงาน ไม่ใช่กรณีศึกษาหรือคำรับรองจากลูกค้ารายใด และไม่ใช่ผลลัพธ์ที่รับประกัน"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-borderc bg-gradient-to-br from-primary-50/60 to-white p-8 shadow-soft md:p-12">
            <Icon className="absolute right-8 top-8 h-16 w-16 text-primary-100" aria-hidden="true" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="eyebrow">
                  <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                  สถานการณ์สมมติ
                </span>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">โจทย์ธุรกิจ</p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-ink md:text-xl">{s.challenge}</p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">
                  แนวทางที่เราช่วยวิเคราะห์ได้
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{s.approach}</p>

                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-navy">{s.businessType}</p>
                    <p className="text-sm text-muted">{s.services}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borderc bg-white text-navy transition-colors hover:border-accent hover:text-accent"
              aria-label={labels.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {exampleScenarios.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-2 bg-borderc hover:bg-muted'
                  }`}
                  aria-label={`${labels.goTo} ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borderc bg-white text-navy transition-colors hover:border-accent hover:text-accent"
              aria-label={labels.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
