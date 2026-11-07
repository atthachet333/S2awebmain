import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/lib/utils';
import { Logo } from '@/components/navigation/Logo';

const contactRows = [
  ...siteConfig.phones.map((phone) => ({
    icon: Phone,
    label: phone.label,
    value: phone.number,
    href: phone.href,
  })),
  { icon: Mail, label: 'อีเมล', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: 'LINE OA', value: siteConfig.lineOA, href: siteConfig.lineUrl },
];
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-borderc bg-navy-gradient text-primary-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* ส่วนบน: CTA Banner */}
      <div className="container relative pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur md:px-10 md:py-9">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-royal/40 to-cyan/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">
                พร้อมเริ่มต้นดูแลการเงินธุรกิจของคุณแล้วหรือยัง?
              </h2>
              <p className="mt-2 text-sm text-primary-100/75">
                นัดปรึกษาฟรีกับทีมผู้เชี่ยวชาญ หรือติดต่อเราผ่านช่องทางด้านล่าง
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-105"
              >
                นัดปรึกษาฟรี
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href={siteConfig.phones[0].href}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phones[0].number} (Office)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ส่วนล่าง: ข้อมูลบริษัท */}
      <div className="container relative py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="[&_span]:text-white">
              <Logo light />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-100/70">
              ที่ปรึกษาธุรกิจที่มีงานบัญชีและภาษีเป็นรากฐาน
              ช่วยผู้บริหารเข้าใจตัวเลขและตัดสินใจได้อย่างมั่นใจ
            </p>
            
            <div className="mt-6 space-y-3">
              {contactRows.map((row) => (
                <a
                  key={`${row.label}-${row.value}`}
                  href={row.href}
                  className="group flex items-center gap-3 rounded-lg text-sm text-primary-100/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                  {...(row.label === 'LINE OA' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/15">
                    <row.icon className="h-4 w-4" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[0.68rem] font-medium text-primary-100/55">{row.label}</span>
                    <span className="break-all font-medium">{row.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">เมนู</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* EP32: ข้อมูลสำหรับลูกค้าปัจจุบัน */}
              <li>
                <Link
                  href="/client-resources"
                  className="text-sm text-primary-100/70 transition-colors hover:text-white"
                >
                  สำหรับลูกค้า S2
                </Link>
              </li>
              {/* EP33: หลักการทำงานกับพันธมิตร */}
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-primary-100/70 transition-colors hover:text-white"
                >
                  พันธมิตร
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">บริการยอดนิยม</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-primary-100/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">ติดต่อสำนักงาน</h3>
            <div className="mt-4 space-y-4 text-sm text-primary-100/70">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {siteConfig.address}
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {siteConfig.workingHours}
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-primary-50"
            >
              นัดปรึกษาฟรี
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-primary-100/60 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p>© {new Date().getFullYear()} {siteConfig.name} สงวนลิขสิทธิ์</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="transition-colors hover:text-white">ข้อกำหนดการใช้งาน</Link>
          </div>
        </div>
        <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-primary-100/50 sm:text-left">
          ข้อมูลบนเว็บไซต์เป็นข้อมูลทั่วไปและอาจเปลี่ยนแปลงตามกฎหมายหรือประกาศที่เกี่ยวข้อง ควรประเมินตามข้อเท็จจริงของแต่ละกรณี
        </p>
      </div>
    </footer>
  );
}
