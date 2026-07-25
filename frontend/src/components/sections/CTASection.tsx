import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { siteConfig } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = 'พร้อมยกระดับระบบบัญชีและการเงินของธุรกิจคุณหรือยัง?',
  description = 'นัดปรึกษาฟรีกับทีมผู้เชี่ยวชาญของเรา เพื่อค้นหาแนวทางที่เหมาะกับธุรกิจของคุณโดยเฉพาะ',
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection className="relative overflow-hidden rounded-3xl bg-navy-dark px-6 py-14 text-center shadow-lift md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-display-md font-bold text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-100/85 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-navy shadow-soft transition-all hover:bg-primary-50 hover:shadow-lift"
              >
                นัดหมายปรึกษาฟรี
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
