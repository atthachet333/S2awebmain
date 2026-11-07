'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { EASE } from '@/lib/motion';
import { useLanguage } from '@/providers/LanguageProvider';

/** EP34 — ใช้เฉพาะข้อเท็จจริงที่ยืนยันแล้ว (ปีก่อตั้ง · จำนวนลูกค้าที่ให้บริการมาแล้วรวม · ขอบเขตบริการ) */
const trustPills = ['ให้บริการตั้งแต่ พ.ศ. 2562', 'ให้บริการลูกค้ามาแล้วกว่า 100 ราย ทั้งนิติบุคคลและบุคคล', 'บัญชี ภาษี และที่ปรึกษาธุรกิจในทีมเดียว'];

export function HeroSection() {
  const { locale } = useLanguage();
  const heroCopy = {
    th: {
      lead: 'จากงานบัญชีที่แม่นยำ',
      accent: 'สู่การตัดสินใจทางธุรกิจ',
      tail: 'ที่ดีกว่า',
      description: 'S2 เป็นที่ปรึกษาธุรกิจที่มีงานบัญชีและภาษีเป็นรากฐาน เราช่วยเจ้าของธุรกิจและผู้บริหารเข้าใจตัวเลข เห็นต้นทุนและกำไรที่แท้จริง และวางแผนธุรกิจได้อย่างมั่นใจ',
    },
    en: {
      lead: 'From Reliable Accounting',
      accent: 'to Better Business',
      tail: 'Decisions',
      description: 'S2 is a business advisory firm built on strong accounting and tax foundations. We help owners and executives understand their numbers, see their true costs and profits, and plan with confidence.',
    },
    zh: {
      lead: '以可靠的会计为基础，',
      accent: '做出更好的',
      tail: '经营决策',
      description: 'S2 是一家以会计与税务为基础的企业咨询公司。我们帮助企业主和管理层读懂数字、看清真实的成本与利润，并更有把握地规划业务。',
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
