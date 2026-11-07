import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Award, Lightbulb, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  companyStory,
  mission,
  vision,
  coreValues,
  companyTimeline,
  teamMembers,
  technologyPartner,
  advisoryPrinciples,
  companyEvolution,
  technologyNarrative,
} from '@/data/company';
import { pdaBliss } from '@/data/partnership';
import { siteConfig } from '@/lib/utils';
import { PdaBlissLogo } from '@/components/partners/PdaBlissLogo';
import { industries } from '@/data/industries';
import { stats } from '@/data/stats';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection, StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description:
    'รู้จัก S2 Accounting Consultant บริษัทที่ปรึกษาธุรกิจที่มีงานบัญชีและภาษีเป็นรากฐาน ให้บริการลูกค้ามาแล้วกว่า 100 ราย ทั้งนิติบุคคลและบุคคล',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="เกี่ยวกับเรา"
        eyebrow="เกี่ยวกับเรา"
        title="ที่ปรึกษาธุรกิจ ที่มีงานบัญชีเป็นรากฐาน"
        description="S2 Accounting Consultant เริ่มจากงานบัญชีและภาษี และพัฒนาเป็นที่ปรึกษาธุรกิจที่ช่วยผู้ประกอบการเข้าใจผลประกอบการและตัดสินใจจากข้อมูลจริง"
      />

      {/* Story + Visual (overflow-x-clip: กันแสงตกแต่ง -inset-4 ล้นขอบจอมือถือ) */}
      <section className="section overflow-x-clip bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="eyebrow">เรื่องราวของเรา</span>
            <h2 className="mt-4 text-display-md font-bold text-navy">
              เริ่มจากงานบัญชี และเติบโตตามโจทย์จริงของลูกค้า
            </h2>
            <div className="mt-5 max-w-[38rem] space-y-4">
              {companyStory.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            {/* Accounting → Advisory → Management Insight → Business Systems */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">เส้นทางการพัฒนาของ S2</p>
              <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2.5">
                {companyEvolution.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-sm font-semibold text-navy">
                      {step}
                    </span>
                    {i < companyEvolution.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-borderc bg-white p-4 text-center shadow-soft">
                  <p className="font-display text-2xl font-bold text-navy">
                    {s.value.toLocaleString('th-TH')}
                    {s.suffix}
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/15 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <DashboardPreview compact />
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-borderc bg-lightblue/60 p-5 shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-navy">
                  เราเชื่อว่าธุรกิจทุกขนาดสมควรได้รับข้อมูลการเงินที่ถูกต้อง
                  และคำปรึกษาที่เข้าใจง่าย เพื่อการเติบโตที่ยั่งยืน
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-lightblue/50">
        <div className="container grid gap-6 md:grid-cols-2">
          <AnimatedSection className="rounded-3xl border border-borderc bg-white p-8 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-accent">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">พันธกิจ (Mission)</h3>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{mission}</p>
          </AnimatedSection>
          <AnimatedSection className="rounded-3xl border border-borderc bg-white p-8 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-accent">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">วิสัยทัศน์ (Vision)</h3>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{vision}</p>
          </AnimatedSection>

          {/* Technology & Systems Partner — อธิบายสั้น ๆ ว่าทำไมเทคโนโลยีเป็นส่วนหนึ่งของงาน S2 */}
          <AnimatedSection className="grid gap-6 rounded-3xl border border-borderc bg-white p-6 shadow-soft md:col-span-2 md:mt-2 md:p-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow">วิธีการทำงาน</span>
              <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">
                เทคโนโลยีในวิธีทำงานของ S2
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                S2 ใช้เทคโนโลยีเป็นเครื่องมือภายในทีม เพื่อจัดระเบียบเอกสาร ลดงานซ้ำและข้อผิดพลาดจากการทำมือ และเตรียมข้อมูลสำหรับผู้บริหารได้เร็วขึ้น เป้าหมายคือให้ทีมมีเวลาวิเคราะห์และให้คำปรึกษามากขึ้น
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                เมื่อธุรกิจของลูกค้าต้องการระบบเฉพาะ เช่น ERP หรือการเชื่อมต่อระบบ S2 ทำงานร่วมกับ PDA BLISS ในฐานะพันธมิตรด้านเทคโนโลยีและระบบ การเลือกใช้ขึ้นอยู่กับความเหมาะสม และลูกค้าเลือกระบบหรือผู้ให้บริการได้อย่างอิสระ
              </p>
              <Link
                href="/services#accounting-systems-erp-advisory"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                ที่ปรึกษาระบบบัญชีและ ERP
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              {/* หมายเหตุสถานะทางกฎหมาย — ข้อความรอง (footnote) */}
              <p className="mt-5 border-t border-borderc pt-3 text-[0.72rem] leading-relaxed text-muted">
                S2 Accounting Consultant และ PDA BLISS COMPANY LIMITED เป็นนิติบุคคลแยกจากกัน ทำงานร่วมกันในฐานะพันธมิตรด้านเทคโนโลยีและระบบธุรกิจ งานด้านเทคโนโลยีไม่รวมอยู่ในบริการบัญชีโดยอัตโนมัติ และจะเสนอราคาแยกตามขอบเขตงานที่ตกลง
              </p>
            </div>
            {/* Accounting → Process → Data → Technology → Management Insight */}
            <div className="rounded-2xl border border-borderc bg-primary-50/50 p-5 md:p-6 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">เทคโนโลยีช่วยงานของเราอย่างไร</p>
              <ol className="mt-4 space-y-2">
                {technologyNarrative.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 rounded-xl border border-borderc bg-white px-4 py-2 text-sm font-semibold text-navy">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EP27 — แนวทางการให้คำปรึกษาของ S2 */}
      <section className="section bg-white" aria-labelledby="advisory-approach-heading">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">วิธีคิดของเรา</span>
            <h2 id="advisory-approach-heading" className="mt-4 text-display-md font-bold text-navy">
              แนวทางการให้คำปรึกษาของ S2
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              หลักการที่เราใช้ในทุกงาน ตั้งแต่บัญชีรายเดือนไปจนถึง CFO Advisory
            </p>
          </div>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
            {advisoryPrinciples.map((principle, i) => (
              <li key={principle.title} className="border-t-2 border-accent/30 pt-5">
                <p className="font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-lg font-bold text-navy">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white pt-0 md:pt-0">
        <div className="container">
          <SectionHeader
            eyebrow="ค่านิยมองค์กร"
            title="สิ่งที่เรายึดถือในทุกงาน"
            description="ค่านิยมเหล่านี้คือรากฐานที่กำหนดวิธีการทำงานและการดูแลลูกค้าของเรา"
          />
          <StaggerGroup className="mt-12 flex flex-wrap justify-center gap-5">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem
                  key={value.title}
                  className="group w-full rounded-2xl border border-borderc sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-lightblue/50">
        <div className="container">
          <SectionHeader
            eyebrow="เส้นทางการเติบโต"
            title="ก้าวสำคัญตลอดการเดินทางของเรา"
            description="พัฒนาการของ S2 จากสำนักงานบัญชี สู่บริษัทที่ปรึกษาธุรกิจที่มีงานบัญชีเป็นรากฐาน"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative border-l-2 border-borderc pl-8">
              {companyTimeline.map((item) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.step} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[42px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-accent text-white shadow-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-sm font-bold text-accent">{`พ.ศ. ${item.step}`}</span>
                    <h3 className="mt-1 text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* EP34 — หลักฐานที่ยืนยันได้ในปัจจุบัน แยกตามประเภท (ไม่มีตัวเลขผลลัพธ์ลูกค้าที่ยังไม่ยืนยัน) */}
          <AnimatedSection className="mx-auto mt-14 max-w-5xl" >
            <h3 id="evidence-heading" className="text-center text-xl font-bold text-navy md:text-2xl">S2 จากข้อเท็จจริง</h3>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-labelledby="evidence-heading">
              <li className="rounded-2xl border border-borderc bg-white p-5">
                <p className="text-xs font-semibold text-accent">ข้อเท็จจริงของบริษัท</p>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span>ให้บริการตั้งแต่ พ.ศ. 2562</span></li>
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span>ให้บริการลูกค้ามาแล้วกว่า 100 ราย ทั้งนิติบุคคลและบุคคล</span></li>
                  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span>12 บริการด้านบัญชี ภาษี และที่ปรึกษาธุรกิจ</span></li>
                </ul>
              </li>
              <li className="rounded-2xl border border-borderc bg-white p-5">
                <p className="text-xs font-semibold text-accent">ความสามารถ</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">คำถามทางธุรกิจที่ S2 ช่วยผู้บริหารวิเคราะห์ และข้อมูลที่ใช้พิจารณา</p>
                <Link href="/services#advisory-capabilities" className="mt-3 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline">ดูความสามารถด้านที่ปรึกษา</Link>
              </li>
              <li className="rounded-2xl border border-borderc bg-white p-5">
                <p className="text-xs font-semibold text-accent">วิธีทำงาน</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">แนวทางการให้คำปรึกษา และขั้นตอนตั้งแต่การพูดคุยครั้งแรกจนถึงงานที่ดูแลต่อเนื่อง</p>
                <Link href="/#how-we-work" className="mt-3 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline">ดูขั้นตอนการทำงาน</Link>
              </li>
              <li className="rounded-2xl border border-borderc bg-white p-5">
                <p className="text-xs font-semibold text-accent">กรณีศึกษาของลูกค้า</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">S2 ไม่เผยแพร่ชื่อหรือข้อมูลของลูกค้าโดยไม่ได้รับอนุญาต กรณีศึกษาจะเพิ่มเมื่อลูกค้ายินยอมให้เผยแพร่</p>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="ทีมงานของเรา"
            title="ทีมงานและบทบาทหลักของ S2"
            description="ทีมงานจัดตามขอบเขตความรับผิดชอบ ครอบคลุมงานบัญชี ภาษี การเงิน ที่ปรึกษาธุรกิจ และเทคโนโลยีที่สนับสนุนการทำงาน"
          />
          {/* การ์ดตามบทบาท — ไม่มีบุคคลสมมติ ไม่มีรูป/วุฒิ/จำนวนปีที่ยังไม่ยืนยัน */}
          <StaggerGroup className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {teamMembers.map((member) => {
              const RoleIcon = member.icon;
              return (
                <StaggerItem
                  key={member.name}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-36 flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy to-primary-600 p-4">
                    {RoleIcon ? (
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-soft">
                        <RoleIcon className="h-7 w-7" aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/30 bg-white p-0.5 shadow-soft">
                        <Image
                          src={siteConfig.logo}
                          alt={siteConfig.name}
                          fill
                          sizes="64px"
                          className="rounded-full object-contain"
                        />
                      </span>
                    )}
                    <span className="rounded-full bg-white/10 px-4 py-1 text-center font-display text-sm font-semibold tracking-wide text-white">
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {member.kicker && (
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">{member.kicker}</p>
                    )}
                    <h3 className={`text-lg font-bold text-navy ${member.kicker ? 'mt-1' : ''}`}>{member.name}</h3>
                    {member.role && <p className="mt-0.5 text-sm font-medium text-accent">{member.role}</p>}
                    {member.credentials && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                        <Award className="h-3.5 w-3.5 text-gold" />
                        {member.credentials}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                    {member.capabilities && member.capabilities.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2 border-t border-borderc pt-5">
                        {member.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="rounded-full border border-borderc bg-primary-50/60 px-3 py-1 text-xs font-medium text-navy"
                          >
                            {cap}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          {/* EP33: พันธมิตร — แสดงแบบกระชับนอกกริดทีมงาน (บริษัทแยกจาก S2) · รายละเอียดอยู่ที่ /partners */}
          <AnimatedSection className="mx-auto mt-14 max-w-4xl border-t border-borderc pt-10">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
              <PdaBlissLogo variant="mark" className="h-12 shrink-0" sizes="48px" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{technologyPartner.label}</p>
                <h3 className="mt-1 text-lg font-bold text-navy">{technologyPartner.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-[#1E6B2E] dark:text-[#7DD69A]">{technologyPartner.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{technologyPartner.bio}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
                  <Link href="/partners" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
                    หลักการทำงานกับพันธมิตร
                  </Link>
                  <a
                    href={pdaBliss.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {pdaBliss.displayUrl}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-lightblue/50">
        <div className="container">
          <SectionHeader
            eyebrow="ธุรกิจที่บริการของเราออกแบบไว้รองรับ"
            title="เข้าใจความต่างของแต่ละธุรกิจ"
          />
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <StaggerItem
                  key={industry.name}
                  className="flex items-center gap-3 rounded-2xl border border-borderc bg-white p-4 shadow-soft"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{industry.name}</span>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTASection
        title="อยากรู้ว่าเราจะช่วยธุรกิจคุณได้อย่างไร?"
        description="พูดคุยกับทีมของเรา แล้วมาดูกันว่าเราจะสร้างการเติบโตร่วมกันได้อย่างไร"
      />
    </>
  );
}
