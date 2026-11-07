'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { EASE } from '@/lib/motion';
import { useLanguage } from '@/providers/LanguageProvider';

export function HeroSection() {
  const { locale } = useLanguage();
  const heroCopy = {
    th: {
      lead: 'จากงานบัญชีที่แม่นยำ',
      accent: 'สู่การตัดสินใจทางธุรกิจ',
      tail: 'ที่ดีกว่า',
      description: 'S2 ดูแลบัญชีและภาษีให้ข้อมูลของธุรกิจเชื่อถือได้ แล้วช่วยผู้บริหารเข้าใจว่าต้นทุน กำไร และกระแสเงินสดเปลี่ยนเพราะอะไร ก่อนตัดสินใจเรื่องสำคัญ',
    },
    en: {
      lead: 'From Reliable Accounting',
      accent: 'to Better Business',
      tail: 'Decisions',
      description: 'S2 keeps your accounting and tax reliable, then helps management understand why costs, margins and cash flow are changing before larger decisions are made.',
    },
    zh: {
      lead: '以可靠的会计为基础，',
      accent: '做出更好的',
      tail: '经营决策',
      description: 'S2 确保企业的会计与税务数据可靠，并帮助管理层在做出重要决策前，理解成本、利润和现金流为何发生变化。',
    },
  }[locale];
  // ภาษาจีนไม่เว้นวรรคระหว่างวลี
  const sep = locale === 'zh' ? '' : ' ';

  return (
    <section className="relative overflow-hidden bg-hero-radial pt-32 md:pt-40">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40 [background-size:44px_44px] [mask-image:radial-gradient(900px_500px_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      {/* floating gradient blobs */}
      <div
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-royal/20 to-cyan/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-cyan/15 to-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container grid items-center gap-12 pb-24 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              ที่ปรึกษาธุรกิจ บนรากฐานงานบัญชี
            </span>
          </motion.div>

          <motion.h1
            className="mt-5 text-display-xl font-bold text-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            {heroCopy.lead}{sep}
            <span className="text-gradient">{heroCopy.accent}</span>{sep}
            {heroCopy.tail}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            {heroCopy.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          >
            <Link
              href="/contact"
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-lift"
            >
              นัดปรึกษาฟรี
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-13 items-center gap-2 rounded-full border border-borderc bg-white px-7 text-base font-semibold text-navy transition-all hover:border-accent hover:text-accent"
            >
              <PlayCircle className="h-5 w-5 text-accent" />
              ดูบริการของเรา
            </Link>
          </motion.div>

        </div>

        {/* Visual */}
        <div className="lg:col-span-5">
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none lg:pl-6"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {/* glow */}
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-royal/25 via-cyan/15 to-teal/10 blur-2xl"
              aria-hidden="true"
            />
            {/* EP34: นำการ์ดตัวเลขลอยออก — เหลือเฉพาะ Dashboard ที่ระบุว่าเป็นข้อมูลตัวอย่าง */}
            <DashboardPreview />
          </motion.div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-borderc to-transparent" />
    </section>
  );
}
