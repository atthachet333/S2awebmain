'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Wifi, WifiOff } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion';
import { resolveIcon } from '@/lib/icon-map';
import { useServices } from '@/hooks/useServices';
import type { ApiService } from '@/lib/api';
import { BarChart } from '@/components/dashboard/MiniChart';

// Fallback ในเครื่อง (ตรงกับข้อมูลฝั่ง Backend) — ใช้เมื่อ API ไม่พร้อม
const fallbackServices: ApiService[] = [
  { slug: 'monthly-accounting', icon: 'BookOpenCheck', title: 'รับทำบัญชีรายเดือน', short: 'บันทึกบัญชีครบวงจร ปิดรอบตรงเวลา พร้อมรายงานที่ผู้บริหารเข้าใจง่ายทุกเดือน', category: 'accounting' },
  { slug: 'accounting-system', icon: 'Settings2', title: 'วางระบบบัญชี', short: 'ออกแบบผังบัญชีและกระบวนการทำงานให้ข้อมูลไหลลื่น', category: 'setup' },
  { slug: 'tax-planning', icon: 'Landmark', title: 'วางแผนภาษี', short: 'ใช้สิทธิประโยชน์ทางภาษีเต็มที่อย่างถูกกฎหมาย', category: 'tax' },
  { slug: 'cfo-advisory', icon: 'TrendingUp', title: 'CFO Advisory', short: 'ที่ปรึกษาการเงินระดับผู้บริหาร วางกลยุทธ์จากข้อมูลจริง', category: 'advisory' },
  { slug: 'financial-statements', icon: 'FileSpreadsheet', title: 'ปิดงบการเงิน', short: 'จัดทำและยื่นงบประจำปีอย่างถูกต้องครบถ้วน', category: 'accounting' },
  { slug: 'cash-flow', icon: 'Wallet', title: 'บริหารกระแสเงินสด', short: 'มองเห็นเงินเข้า–ออกล่วงหน้า วางแผนสภาพคล่องไม่ให้สะดุด', category: 'finance' },
  { slug: 'payroll', icon: 'Users2', title: 'Payroll และประกันสังคม', short: 'จัดการเงินเดือน ภาษี และประกันสังคมอย่างเป็นความลับ', category: 'accounting' },
  { slug: 'company-registration', icon: 'Building2', title: 'จดทะเบียนบริษัท', short: 'ดูแลการจดทะเบียนและเอกสารธุรกิจครบวงจร', category: 'setup' },
];

// accent ต่อการ์ด (จำกัด 2–3 สีต่อหน้า: royal / cyan / teal)
const accents = [
  { grad: 'from-royal to-sky', text: 'text-royal', ring: 'group-hover:border-royal/40', soft: 'bg-primary-50' },
  { grad: 'from-cyan to-sky', text: 'text-cyan', ring: 'group-hover:border-cyan/40', soft: 'bg-cyan-soft' },
  { grad: 'from-teal to-cyan', text: 'text-teal', ring: 'group-hover:border-teal/40', soft: 'bg-teal-soft' },
];

// span ต่อ index สำหรับ Bento (lg = 12 คอลัมน์)
const spans = [
  'md:col-span-2 lg:col-span-6 lg:row-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
];

export function BentoServices() {
  const { services, live } = useServices(fallbackServices);
  const items = services.slice(0, 8);

  return (
    <section className="section bg-white" id="services">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="บริการของเรา"
            title="บริการครบวงจร ดูแลทุกด้านของการเงินธุรกิจ"
            description="ตั้งแต่งานบัญชีประจำวัน ไปจนถึงการวางกลยุทธ์การเงินระดับผู้บริหาร เราออกแบบบริการให้เหมาะกับทุกช่วงการเติบโตของธุรกิจคุณ"
          />
          <span
            className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
              live
                ? 'border-teal/30 bg-teal-soft/50 text-teal'
                : 'border-borderc bg-lightblue text-muted'
            }`}
            title={live ? 'ข้อมูลจาก Backend API' : 'กำลังใช้ข้อมูลสำรอง'}
          >
            {live ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
            {live ? 'ข้อมูลบริการเชื่อมต่อจากระบบ Backend' : 'แสดงข้อมูลสำรอง'}
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(0,auto)]"
        >
          {items.map((service, i) => {
            const Icon = resolveIcon(service.icon);
            const accent = accents[i % accents.length];
            const isHighlight = i === 0;

            if (isHighlight) {
              return (
                <motion.div key={service.slug} variants={staggerItem} className={spans[i]}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy-gradient p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8"
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-royal/40 to-cyan/20 blur-3xl"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
                        backgroundSize: '34px 34px',
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative flex items-center gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                        <Icon className="h-7 w-7 text-sky" />
                      </span>
                      <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                        บริการหลัก
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold md:text-3xl">{service.title}</h3>
                    <p className="relative mt-3 max-w-md text-sm leading-relaxed text-primary-100/85">
                      {service.short}
                    </p>
                    <div className="relative mt-auto pt-6">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                        <div className="mb-2 flex items-center justify-between text-xs text-primary-100/70">
                          <span>ผลงานที่ส่งมอบรายเดือน</span>
                          <span className="font-semibold text-teal">+24%</span>
                        </div>
                        <BarChart
                          data={[52, 64, 58, 76, 70, 88]}
                          labels={['ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.']}
                          className="w-full"
                        />
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                        ดูรายละเอียด
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div key={service.slug} variants={staggerItem} className={spans[i]}>
                <Link
                  href={`/services#${service.slug}`}
                  className={`group flex h-full flex-col rounded-3xl border border-borderc bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${accent.ring}`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.grad} text-white shadow-soft transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">{service.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
                    ดูรายละเอียด
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-borderc bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-accent hover:text-accent"
          >
            ดูบริการทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
