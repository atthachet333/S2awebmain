import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileBarChart, FolderOpen, Repeat, Timer } from 'lucide-react';
import { AnimatedSection, StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { PdaBlissLogo } from '@/components/partners/PdaBlissLogo';
import { pdaBliss } from '@/data/partnership';

/**
 * EP26 — "S2 ทำงานอย่างชาญฉลาดขึ้น" (Working Smarter)
 * เทคโนโลยีเป็นเครื่องมือในการทำงานของทีม S2 ไม่ใช่สินค้าหลัก
 * PDA BLISS แสดงเป็นพันธมิตรด้านเทคโนโลยีและระบบ (บริษัทแยก) ในบทบาทสนับสนุน — ไม่ใช่ฝ่ายหนึ่งของ S2
 */
const benefits = [
  {
    icon: FolderOpen,
    title: 'จัดการเอกสารอย่างเป็นระบบ',
    description: 'รับ ส่ง และจัดเก็บเอกสารอย่างมีโครงสร้าง ค้นหาและตรวจสอบย้อนหลังได้ง่าย',
  },
  {
    icon: Repeat,
    title: 'ลดงานซ้ำและข้อผิดพลาด',
    description: 'ลดการกรอกข้อมูลซ้ำด้วยมือ ซึ่งเป็นต้นเหตุสำคัญของความคลาดเคลื่อน',
  },
  {
    icon: Timer,
    title: 'เตรียมข้อมูลได้เร็วขึ้น',
    description: 'สรุปตัวเลขสำหรับผู้บริหารได้เร็วขึ้น ทีมจึงมีเวลาวิเคราะห์และให้คำปรึกษามากขึ้น',
  },
  {
    icon: FileBarChart,
    title: 'รายงานที่สม่ำเสมอ',
    description: 'รูปแบบรายงานที่คงที่ทุกงวด ทำให้เปรียบเทียบผลประกอบการได้ง่าย',
  },
];

export function TechnologyPartnership() {
  return (
    <section className="section relative overflow-hidden bg-lightblue/50" aria-labelledby="working-smarter-heading">
      <div className="container relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <AnimatedSection>
            <span className="eyebrow">วิธีการทำงานของเรา</span>
            <h2 id="working-smarter-heading" className="mt-4 text-display-md font-bold text-navy">
              ทำงานอย่างชาญฉลาดขึ้น เพื่อมีเวลาให้คำปรึกษามากขึ้น
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              S2 ใช้เทคโนโลยีเป็นเครื่องมือในการทำงานของทีม ไม่ใช่สินค้าที่เราขาย เป้าหมายคือให้ข้อมูลของลูกค้าถูกต้องและพร้อมใช้เร็วขึ้น
            </p>
          </AnimatedSection>
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title} className="rounded-2xl border border-borderc bg-white p-5 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{benefit.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* พันธมิตรด้านเทคโนโลยีและระบบ — บทบาทสนับสนุน */}
        <AnimatedSection className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-7">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#1E6B2E] dark:bg-[#5FBF7A]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Technology &amp; Systems Partner</p>
            <div className="mt-4 flex items-center gap-3">
              <PdaBlissLogo variant="mark" className="h-12 shadow-sm" sizes="48px" />
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-navy">PDA BLISS</h3>
                <p className="text-sm font-medium text-[#1E6B2E] dark:text-[#7DD69A]">พันธมิตรด้านเทคโนโลยีและระบบ</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              เมื่อธุรกิจต้องการระบบเฉพาะ เช่น ERP, Workflow หรือการเชื่อมต่อระบบ S2 ทำงานร่วมกับ PDA BLISS การเลือกใช้ขึ้นอยู่กับความเหมาะสมของแต่ละธุรกิจ และลูกค้าเลือกระบบหรือผู้ให้บริการได้อย่างอิสระ
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/services#accounting-systems-erp-advisory"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                ที่ปรึกษาระบบบัญชีและ ERP
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
            <p className="mt-5 border-t border-borderc pt-3 text-[0.72rem] leading-relaxed text-muted">
              S2 Accounting Consultant และ PDA BLISS COMPANY LIMITED เป็นนิติบุคคลแยกจากกัน ทำงานร่วมกันในฐานะพันธมิตรด้านเทคโนโลยีและระบบธุรกิจ งานด้านเทคโนโลยีไม่รวมอยู่ในบริการบัญชีโดยอัตโนมัติ และจะเสนอราคาแยกตามขอบเขตงานที่ตกลง
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
