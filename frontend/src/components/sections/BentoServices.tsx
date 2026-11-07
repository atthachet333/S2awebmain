import Link from 'next/link';
import { ArrowRight, BookOpenCheck, Compass, Settings2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { serviceGroups, services } from '@/data/services';

/**
 * Content distillation — บริการบนหน้าแรกจัดเป็น 3 กลุ่ม (รากฐานงานบัญชี → ที่ปรึกษาธุรกิจและการเงิน → ระบบธุรกิจ)
 * แสดงครบ 12 บริการเป็นลิงก์ไปยังรายละเอียดในหน้า Services · ไม่มีกราฟตกแต่ง
 */
const groupIcons: Record<string, typeof BookOpenCheck> = {
  'accounting-foundation': BookOpenCheck,
  'business-financial-advisory': Compass,
  'business-systems-advisory': Settings2,
};

export function BentoServices() {
  return (
    <section className="section bg-white" id="services" aria-labelledby="home-services-heading">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="บริการของเรา"
            title={<span id="home-services-heading">เริ่มจากงานบัญชี และต่อยอดสู่การบริหาร</span>}
            description="12 บริการใน 3 กลุ่ม ขอบเขตของแต่ละบริการตกลงตามความต้องการจริง ไม่จำเป็นต้องใช้ทุกบริการ"
          />
        </div>

        <StaggerGroup className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
          {serviceGroups.map((group) => {
            const Icon = groupIcons[group.id] ?? BookOpenCheck;
            const core = group.id === 'business-financial-advisory';
            const items = group.slugs
              .map((slug) => services.find((s) => s.slug === slug))
              .filter((s): s is (typeof services)[number] => Boolean(s));
            return (
              <StaggerItem
                key={group.id}
                className={
                  core
                    ? 'flex flex-col rounded-3xl bg-navy-gradient p-7 text-white shadow-card'
                    : 'flex flex-col rounded-3xl border border-borderc bg-white p-7 shadow-soft'
                }
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${core ? 'bg-white/10 text-sky' : 'bg-primary-50 text-accent'}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className={`mt-5 text-xl font-bold ${core ? 'text-white' : 'text-navy'}`}>{group.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${core ? 'text-primary-100/85' : 'text-muted'}`}>
                  {group.description}
                </p>
                <ul className={`mt-5 flex-1 space-y-1 border-t pt-4 ${core ? 'border-white/10' : 'border-borderc'}`}>
                  {items.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services#${service.slug}`}
                        className={`group flex items-center justify-between gap-3 rounded-lg py-1.5 text-sm font-semibold underline-offset-4 hover:underline ${core ? 'text-white' : 'text-navy hover:text-accent'}`}
                      >
                        {service.title}
                        <ArrowRight
                          className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${core ? 'text-sky' : 'text-accent'}`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-borderc bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-accent hover:text-accent"
          >
            ดูขอบเขตของทุกบริการ
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
