import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ScrollToHash } from '@/components/services/ScrollToHash';
import { siteConfig } from '@/lib/utils';
import {
  changesToTell,
  preparationGroups,
  questionExamples,
  smoothWorking,
  workingCycle,
} from '@/data/clientResources';

export const metadata: Metadata = {
  title: 'สำหรับลูกค้า S2',
  description:
    'ข้อมูลสำหรับลูกค้าที่ทำงานร่วมกับ S2: การเตรียมข้อมูล การส่งเอกสาร รอบการทำงาน การเปลี่ยนแปลงที่ควรแจ้ง และช่องทางสอบถาม',
  alternates: { canonical: '/client-resources' },
};

const jumpLinks = [
  { href: '#prepare', label: 'เตรียมข้อมูล' },
  { href: '#sending', label: 'การส่งเอกสาร' },
  { href: '#working-cycle', label: 'รอบการทำงาน' },
  { href: '#changes', label: 'การเปลี่ยนแปลงที่ควรแจ้ง' },
  { href: '#questions', label: 'เมื่อมีคำถาม' },
  { href: '#more-support', label: 'การดูแลเพิ่มเติม' },
];

/** EP32 — หน้าสำหรับลูกค้าปัจจุบัน (ข้อมูลจริงเท่านั้น ไม่ใช่ Portal) */
export default function ClientResourcesPage() {
  const officePhone = siteConfig.phones[0];
  return (
    <>
      <ScrollToHash />
      <PageHero
        breadcrumb="สำหรับลูกค้า"
        eyebrow="Client Resources"
        title="สำหรับลูกค้า S2"
        description="ข้อมูลที่ช่วยให้การทำงานร่วมกับ S2 เป็นระเบียบและชัดเจน ตั้งแต่การเตรียมข้อมูล การส่งเอกสาร ไปจนถึงการสอบถามและความต้องการเพิ่มเติม"
      >
        <nav aria-label="หัวข้อในหน้านี้" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-2">
            {jumpLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-full border border-borderc bg-white/80 px-4 py-2 text-sm font-medium text-navy backdrop-blur transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-6 text-sm text-muted">
          ยังไม่ได้เป็นลูกค้า?{' '}
          <Link href="/#how-we-work" className="font-semibold text-accent underline-offset-4 hover:underline">
            ดูขั้นตอนการเริ่มต้นทำงานกับ S2
          </Link>
        </p>
      </PageHero>

      {/* 1. เตรียมข้อมูล */}
      <section id="prepare" className="section scroll-mt-20 bg-white" aria-labelledby="prepare-heading">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <h2 id="prepare-heading" className="text-display-md font-bold text-navy">เตรียมข้อมูลอย่างไร</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              ข้อมูลที่ต้องใช้ขึ้นกับบริการที่ตกลง ด้านล่างคือหมวดที่พบบ่อย ส่วนรายการจริงของธุรกิจคุณ S2 จะยืนยันตามขอบเขตงาน
            </p>
          </AnimatedSection>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {preparationGroups.map((group) => (
              <li key={group.title} className="rounded-2xl border border-borderc bg-white p-5 shadow-soft">
                <h3 className="font-bold text-navy">{group.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            ตัวอย่างเอกสารของแต่ละบริการ ดูได้ในหัวข้อ “เอกสารที่ต้องเตรียม” ของ{' '}
            <Link href="/services" className="font-semibold text-accent underline-offset-4 hover:underline">
              หน้าบริการ
            </Link>
          </p>

          {/* 2. การส่งเอกสาร */}
          <div id="sending" className="mt-14 scroll-mt-28">
            <h2 id="sending-heading" className="text-display-md font-bold text-navy">ส่งเอกสารอย่างไร</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              <li className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
                <h3 className="text-sm font-bold text-navy">ตกลงวิธีส่งตั้งแต่เริ่มงาน</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  วิธีและรอบการส่งเอกสารตกลงร่วมกันในช่วงเริ่มงาน ตามบริการที่ตกลง หากไม่แน่ใจ สอบถามทีมได้
                </p>
              </li>
              <li className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
                <h3 className="text-sm font-bold text-navy">แบบฟอร์มติดต่อสำหรับการสอบถามครั้งแรก</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  ไฟล์แนบในแบบฟอร์มบนหน้าติดต่อใช้สำหรับข้อมูลประกอบการสอบถามครั้งแรก ไม่ใช่ช่องทางส่งเอกสารบัญชีประจำ
                </p>
              </li>
              <li className="rounded-2xl border border-borderc bg-lightblue/40 p-5">
                <h3 className="text-sm font-bold text-navy">เอกสารที่มีข้อมูลสำคัญ</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  เอกสารที่มีข้อมูลการเงินหรือข้อมูลส่วนบุคคล ควรส่งผ่านวิธีที่ตกลงไว้กับ S2 เท่านั้น
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. รอบการทำงาน */}
      <section id="working-cycle" className="section scroll-mt-20 bg-lightblue/50" aria-labelledby="working-cycle-heading">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <h2 id="working-cycle-heading" className="text-display-md font-bold text-navy">รอบการทำงานโดยทั่วไป</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              ระยะเวลาและวันที่เกี่ยวข้องเป็นไปตามบริการที่ตกลง ข้อมูลที่ล่าช้าหรือไม่ครบอาจกระทบระยะเวลาดำเนินงาน หากต้องการทราบกำหนดที่เกี่ยวกับธุรกิจของคุณ สอบถาม S2 ได้
            </p>
          </AnimatedSection>
          <ol className="mt-8 divide-y divide-borderc overflow-hidden rounded-3xl border border-borderc bg-white">
            {workingCycle.map((step, i) => (
              <li key={step.title} className="flex gap-4 p-5 md:p-6">
                <span className="w-7 shrink-0 font-display text-sm font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl border border-borderc bg-white p-5 md:p-6">
            <h3 className="font-bold text-navy">การทำงานจะราบรื่นขึ้นเมื่อ</h3>
            <ul className="mt-3 grid gap-2 text-sm text-ink/80 sm:grid-cols-2">
              {smoothWorking.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. การเปลี่ยนแปลงที่ควรแจ้ง */}
      <section id="changes" className="section scroll-mt-20 bg-white" aria-labelledby="changes-heading">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <h2 id="changes-heading" className="text-display-md font-bold text-navy">การเปลี่ยนแปลงที่ควรแจ้ง S2</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              เมื่อธุรกิจมีการเปลี่ยนแปลงสำคัญ แจ้งให้ S2 ทราบ เพื่อประเมินว่ามีผลต่องานบัญชี ภาษี หรือขอบเขตบริการที่ตกลงไว้หรือไม่ ตัวอย่างเช่น
            </p>
          </AnimatedSection>
          <ul className="mt-6 grid gap-x-8 gap-y-3 text-ink/80 md:grid-cols-2">
            {changesToTell.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-borderc/70 pb-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. เมื่อมีคำถาม */}
      <section id="questions" className="section scroll-mt-20 bg-lightblue/50" aria-labelledby="questions-heading">
        <div className="container grid max-w-5xl gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <h2 id="questions-heading" className="text-display-md font-bold text-navy">เมื่อมีคำถาม</h2>
            <p className="mt-3 leading-relaxed text-muted">ตัวอย่างเรื่องที่สอบถาม S2 ได้</p>
            <ul className="mt-5 space-y-2.5 text-ink/80">
              {questionExamples.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-8">
              <h3 className="font-bold text-navy">ช่องทางติดต่อสำหรับลูกค้า</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
                    <span><span className="block text-xs text-muted">LINE OA</span><span className="font-semibold text-navy group-hover:text-accent" data-no-translate>{siteConfig.lineOA}</span></span>
                  </a>
                </li>
                <li>
                  <a href={officePhone.href} className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                    <span><span className="block text-xs text-muted">โทรศัพท์สำนักงาน</span><span className="font-semibold text-navy group-hover:text-accent" data-no-translate>{officePhone.number}</span></span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                    <span><span className="block text-xs text-muted">อีเมล</span><span className="font-semibold text-navy group-hover:text-accent" data-no-translate>{siteConfig.email}</span></span>
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted">เวลาทำการ: {siteConfig.workingHours}</p>
              <p className="mt-4 border-t border-borderc pt-4 text-sm leading-relaxed text-muted">
                คำถามเกี่ยวกับงานที่อยู่ในขอบเขต ทีมดูแลตามบริการที่ตกลง หากคำถามต้องใช้การวิเคราะห์หรืองานเพิ่มเติม S2 จะชี้แจงขอบเขตและค่าบริการก่อนเริ่มงาน
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. ต้องการการดูแลเพิ่มเติม */}
      <section id="more-support" className="section scroll-mt-20 bg-white" aria-labelledby="more-support-heading">
        <div className="container max-w-5xl">
          <AnimatedSection className="rounded-3xl border border-borderc bg-gradient-to-br from-primary-50/60 to-white p-7 md:p-10">
            <h2 id="more-support-heading" className="text-display-md font-bold text-navy">ต้องการการดูแลเพิ่มเติม</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              หากธุรกิจต้องการวิเคราะห์การเงิน ต้นทุนและกำไร งบประมาณ CFO Advisory หรือที่ปรึกษาระบบบัญชีและ ERP พูดคุยกับทีมได้ งานเพิ่มเติมกำหนดขอบเขตและเสนอราคาแยก
            </p>
            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <li>
                <Link href="/services#advisory-capabilities" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-600">
                  ดูว่า S2 ช่วยวิเคราะห์อะไรได้บ้าง
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/pricing#working-with-s2" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-600">
                  สิ่งที่ได้จากการทำงานกับ S2 อย่างต่อเนื่อง
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-600">
                  ดูบริการทั้งหมด
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
