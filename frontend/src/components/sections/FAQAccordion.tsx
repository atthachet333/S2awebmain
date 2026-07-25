'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs as defaultFaqs } from '@/data/faq';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { FaqItem } from '@/types';

interface FAQAccordionProps {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FAQAccordion({
  items = defaultFaqs,
  eyebrow = 'คำถามที่พบบ่อย',
  title = 'เรื่องที่ลูกค้ามักถามเรา',
  description = 'รวบรวมคำถามที่พบบ่อย หากมีข้อสงสัยเพิ่มเติม ทีมของเรายินดีให้คำปรึกษา',
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-lightblue/50">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-3 md:grid-cols-2">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors ${
                  isOpen ? 'border-royal/50' : 'border-borderc'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-navy">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-accent text-white' : 'bg-primary-50 text-accent'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
