import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, Info, Minus } from 'lucide-react';
import { StaggerItem } from '@/components/animations/AnimatedSection';
import { PdaBlissLogo } from '@/components/partners/PdaBlissLogo';
import { enterpriseFlow, premiumFlow } from '@/data/pricing';
import type { PricingPathway } from '@/types';

/**
 * การ์ดรูปแบบบริการ (EP22)
 * - Premium: พื้นสว่าง โทน navy / royal
 * - Enterprise: พื้น navy เข้ม + accent สีฟ้าของ S2 (EP26: ไม่ใช้สีแบรนด์ PDA BLISS เป็นสีหลักของแพ็กเกจ)
 * ใช้สีแบบ arbitrary (#…) ในการ์ด Enterprise เพื่อไม่ให้ dark-mode override ของ .bg-white / .text-navy ทำให้ปุ่มกลืนกัน
 */
export function PricingCard({ pathway }: { pathway: PricingPathway }) {
  return pathway.slug === 'enterprise' ? <EnterpriseCard pathway={pathway} /> : <PremiumCard pathway={pathway} />;
}

function PriceBlock({ price, dark = false }: { price: number; dark?: boolean }) {
  return (
    <div className="mt-6">
      <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-[#9fb4d9]' : 'text-muted'}`}>เริ่มต้น</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <span className={`font-display text-5xl font-bold tracking-tight ${dark ? 'text-[#ffffff]' : 'text-navy'}`}>
          ฿{price.toLocaleString('en-US')}
        </span>
        <span className={`text-base font-medium ${dark ? 'text-[#c7d4ee]' : 'text-muted'}`}>/ เดือน</span>
      </p>
    </div>
  );
}

function PremiumCard({ pathway }: { pathway: PricingPathway }) {
  return (
    <StaggerItem className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-borderc bg-white p-7 shadow-soft md:p-10">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-royal" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{pathway.label}</p>
      <h2 className="mt-3 text-2xl font-bold text-navy md:text-[1.75rem]">{pathway.name}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{pathway.positioning}</p>
      <p className="mt-4 rounded-2xl border border-borderc bg-primary-50/50 px-4 py-3 text-sm leading-relaxed text-navy">
        <span className="font-semibold">เหมาะกับ: </span>
        {pathway.suitedFor}
      </p>
      <PriceBlock price={pathway.price} />

      {/* ประเมินขอบเขต → ใบเสนอราคา → เริ่มดูแลรายเดือน (ตำแหน่งเดียวกับ flow ของ Enterprise) */}
      <ol className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {premiumFlow.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className="rounded-full border border-primary-100 bg-primary-50 px-2.5 py-1 text-[0.72rem] font-semibold text-navy">
              {step}
            </span>
            {i < premiumFlow.length - 1 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className="mt-7 border-t border-borderc pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-navy">ขอบเขตงานมาตรฐาน</p>
        <ul className="mt-3 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-1 lg:divide-y lg:divide-borderc">
          {pathway.scope.map((item) => (
            <li key={item} className="flex items-start gap-2.5 py-1.5 text-sm text-ink/80 lg:py-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-7">
      <p className="flex items-start gap-2 rounded-2xl border border-borderc bg-primary-50/50 p-4 text-xs leading-relaxed text-muted">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        {pathway.note}
      </p>

      <Link
        href={`/contact?service=${pathway.intent}#contact-form`}
        className="group mt-6 flex w-full min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-soft"
      >
        {pathway.cta}
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
      </div>
    </StaggerItem>
  );
}

function EnterpriseCard({ pathway }: { pathway: PricingPathway }) {
  return (
    <StaggerItem className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#0b2a6b] bg-[#041333] p-7 text-[#ffffff] shadow-lift md:p-10 dark:border-[#1d3b78]">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-royal via-sky to-cyan"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-royal/25 blur-3xl" aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-royal/10 blur-3xl" aria-hidden="true" />

      <div className="relative flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8EC5FF]">{pathway.label}</p>
        <h2 className="mt-3 text-2xl font-bold text-[#ffffff] md:text-[1.75rem]">{pathway.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#c7d4ee] md:text-base">{pathway.positioning}</p>
        <p className="mt-4 rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 px-4 py-3 text-sm leading-relaxed text-[#e6edf9]">
          <span className="font-semibold text-[#ffffff]">เหมาะกับ: </span>
          {pathway.suitedFor}
        </p>
        <PriceBlock price={pathway.price} dark />

        {/* บัญชี → การวิเคราะห์ → ข้อมูลเพื่อผู้บริหาร → การตัดสินใจ */}
        <ol className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label="Accounting to Management Insight">
          {enterpriseFlow.map((step, i) => (
            <li key={step} className="flex items-center gap-1.5">
              <span className="rounded-full border border-[#ffffff]/15 bg-[#ffffff]/5 px-2.5 py-1 text-[0.72rem] font-semibold text-[#e6edf9]">
                {step}
              </span>
              {i < enterpriseFlow.length - 1 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8EC5FF]" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="mt-7 border-t border-[#ffffff]/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">ขอบเขตงานมาตรฐาน</p>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {pathway.scope.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#dbe5f6]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8EC5FF]/15 text-[#8EC5FF]">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {pathway.excluded && (
          <div className="mt-6 rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-4">
            <p className="text-xs font-semibold text-[#ffffff]">ไม่รวมในราคาเริ่มต้น · ประเมินและเสนอราคาแยก</p>
            <ul className="mt-3 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
              {pathway.excluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-[#b9c7e3]">
                  <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9fb4d9]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex items-start gap-3 pt-6 text-xs leading-relaxed text-[#b9c7e3]">
          <PdaBlissLogo variant="mark" className="h-8 shrink-0" sizes="32px" />
          <div>
            <p className="font-semibold text-[#ffffff]">พันธมิตรด้านเทคโนโลยีและระบบ: PDA BLISS</p>
            <p className="mt-1">{pathway.note}</p>
          </div>
        </div>

        <Link
          href={`/contact?service=${pathway.intent}#contact-form`}
          className="group mt-7 flex w-full min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#ffffff] px-6 py-3 text-center text-sm font-semibold text-[#071C4A] transition-all hover:bg-[#EEF6FF] hover:shadow-soft"
        >
          {pathway.cta}
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </StaggerItem>
  );
}
