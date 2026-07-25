'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, TrendingUp, Wallet, Landmark } from 'lucide-react';
import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { EASE } from '@/lib/motion';

const floatingCards = [
  {
    icon: TrendingUp,
    label: 'รายได้รวม',
    value: '฿4.82M',
    className: '-left-4 top-16 sm:-left-8',
    delay: 0.5,
  },
  {
    icon: Wallet,
    label: 'กระแสเงินสด',
    value: '+18.6%',
    className: '-right-3 top-8 sm:-right-6',
    delay: 0.7,
  },
  {
    icon: Landmark,
    label: 'ภาษีที่ประหยัดได้',
    value: '฿320K',
    className: '-left-3 bottom-24 sm:-left-10',
    delay: 0.9,
  },
];

const trustPills = ['CPA รับรอง', 'ยื่นภาษีตรงเวลา', 'ดูแลกว่า 500 ธุรกิจ'];

export function HeroSection() {
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
              บัญชี · ภาษี · การเงิน · ที่ปรึกษาธุรกิจ
            </span>
          </motion.div>

          <motion.h1
            className="mt-5 text-display-xl font-bold text-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            บริการบัญชีและที่ปรึกษาการเงิน
            <span className="text-gradient"> มืออาชีพ</span>{' '}
            เพื่อการเติบโตที่มั่นคงและยั่งยืน
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            ช่วยให้เจ้าของธุรกิจและผู้บริหารเข้าใจตัวเลข ควบคุมกระแสเงินสด วางแผนภาษี
            และตัดสินใจได้อย่างแม่นยำ ด้วยทีมบัญชีและที่ปรึกษาการเงินมืออาชีพ
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

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustPills.map((pill) => (
              <li key={pill} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                <ShieldCheck className="h-4 w-4 text-accent" />
                {pill}
              </li>
            ))}
          </motion.ul>
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
            <DashboardPreview />

            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                className={`absolute hidden items-center gap-2.5 rounded-xl border border-borderc bg-white/95 px-3.5 py-2.5 shadow-lift backdrop-blur sm:flex ${card.className}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay, ease: EASE }}
              >
                <motion.span
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-accent"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                >
                  <card.icon className="h-4.5 w-4.5" />
                </motion.span>
                <div>
                  <p className="text-[0.7rem] font-medium text-muted">{card.label}</p>
                  <p className="font-display text-sm font-bold text-navy">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-borderc to-transparent" />
    </section>
  );
}
