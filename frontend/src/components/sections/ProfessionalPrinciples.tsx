import Link from 'next/link';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { confidentialityStatement, homePrincipleIds, professionalPrinciples } from '@/data/principles';

/**
 * Content distillation — หลักการทำงานของ S2 (แทน "ทำไมธุรกิจเลือก S2" แบบเดิม)
 * variant="home": ข้อความเรื่องความลับ + 4 หลักการ + ลิงก์ไปหน้า About · variant="full": ครบ 6 ข้อ (หน้า About #principles)
 */
export function ProfessionalPrinciples({ variant = 'home' }: { variant?: 'home' | 'full' }) {
  const full = variant === 'full';
  const items = full ? professionalPrinciples : professionalPrinciples.filter((p) => homePrincipleIds.includes(p.id));
  return (
    <section
      id={full ? 'principles' : undefined}
      className={`section scroll-mt-20 ${full ? 'bg-white' : 'bg-lightblue/60'}`}
      aria-labelledby={full ? 'principles-heading' : 'why-s2-heading'}
    >
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <AnimatedSection className="lg:col-span-5">
          <span className="eyebrow">{full ? 'หลักการทำงาน' : 'ทำไมธุรกิจเลือก S2'}</span>
          {full ? (
            <h2 id="principles-heading" className="mt-4 text-display-md font-bold text-navy">
              หลักการที่ S2 ใช้ในทุกงาน
            </h2>
          ) : (
            <h2 id="why-s2-heading" className="mt-4 text-display-md font-bold text-navy">
              {/* แบ่งเป็นวลีเพื่อไม่ให้ตัดคำกลางวลี — ใช้ระยะขอบแทนช่องว่าง (ภาษาจีนไม่เว้นวรรค) */}
              <span className="inline-block pr-[0.3em]">ตัวเลขที่ถูกต้อง</span>
              <span className="inline-block pr-[0.3em]">คือจุดเริ่มต้น</span>
              <span className="inline-block">ไม่ใช่ปลายทาง</span>
            </h2>
          )}
          <p className="mt-4 leading-relaxed text-muted md:text-lg">
            หลักการเหล่านี้กำหนดวิธีที่ S2 รับงาน ให้คำปรึกษา และดูแลข้อมูลของลูกค้า
          </p>
          <div className="mt-8 rounded-3xl bg-navy-gradient p-6 text-white shadow-card md:p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sky">
              <LockKeyhole className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold md:text-xl">{confidentialityStatement.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-100/85">{confidentialityStatement.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-7">
          <ol className="divide-y divide-borderc border-y border-borderc">
            {items.map((item, i) => (
              <li key={item.id} className="flex gap-4 py-5">
                <span className="mt-0.5 w-7 shrink-0 font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          {full ? (
            <p className="mt-6 text-sm text-muted">
              วิธีทำงานด้านที่ปรึกษาตั้งแต่เข้าใจคำถามจนถึงการทบทวน{' '}
              <Link href="/services#advisory-method" className="font-semibold text-accent underline-offset-4 hover:underline">
                ดูวิธีทำงานด้านที่ปรึกษา
              </Link>
            </p>
          ) : (
            <Link
              href="/about#principles"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              ดูหลักการทำงานทั้งหมด
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
