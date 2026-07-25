import type { Metadata } from 'next';
import { Target, Eye, Award } from 'lucide-react';
import {
  companyStory,
  mission,
  vision,
  coreValues,
  companyTimeline,
  teamMembers,
} from '@/data/company';
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
    'รู้จัก S2 Accounting & Finance Advisory ทีมที่ปรึกษาบัญชีและการเงินที่ธุรกิจไทยไว้วางใจ ด้วยประสบการณ์กว่า 10 ปี',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="เกี่ยวกับเรา"
        eyebrow="เกี่ยวกับเรา"
        title="พันธมิตรด้านการเงินที่เติบโตไปกับธุรกิจไทย"
        description="กว่า 10 ปีที่เราอยู่เคียงข้างผู้ประกอบการ ช่วยให้ตัวเลขกลายเป็นข้อมูลที่ตัดสินใจได้จริง"
      />

      {/* Story + Visual */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="eyebrow">เรื่องราวของเรา</span>
            <h2 className="mt-4 text-display-md font-bold text-navy">
              เริ่มต้นจากความตั้งใจ สู่ทีมที่ปรึกษาที่ไว้วางใจได้
            </h2>
            <div className="mt-5 space-y-4">
              {companyStory.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
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
              <div className="mt-4 rounded-2xl border border-borderc bg-lightblue/60 p-5">
                <p className="text-sm leading-relaxed text-navy">
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
            <p className="mt-3 leading-relaxed text-muted">{mission}</p>
          </AnimatedSection>
          <AnimatedSection className="rounded-3xl border border-borderc bg-white p-8 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-accent">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">วิสัยทัศน์ (Vision)</h3>
            <p className="mt-3 leading-relaxed text-muted">{vision}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="ค่านิยมองค์กร"
            title="สิ่งที่เรายึดถือในทุกงาน"
            description="ค่านิยมเหล่านี้คือรากฐานที่กำหนดวิธีการทำงานและการดูแลลูกค้าของเรา"
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem
                  key={value.title}
                  className="group rounded-2xl border border-borderc bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
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
                    <span className="font-display text-sm font-bold text-accent">พ.ศ. {item.step}</span>
                    <h3 className="mt-1 text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="ทีมงานของเรา"
            title="ผู้เชี่ยวชาญที่ดูแลธุรกิจของคุณ"
            description="ทีมมืออาชีพที่มีวุฒิและประสบการณ์จริง พร้อมดูแลงานของคุณด้วยมาตรฐานสูง"
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <StaggerItem
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-borderc bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy to-primary-600">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 font-display text-2xl font-bold text-white backdrop-blur">
                    {member.initials}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                    <Award className="h-3.5 w-3.5 text-gold" />
                    {member.credentials}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-lightblue/50">
        <div className="container">
          <SectionHeader
            eyebrow="อุตสาหกรรมที่เราดูแล"
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
