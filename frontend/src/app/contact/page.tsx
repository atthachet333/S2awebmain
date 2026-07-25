import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CalendarCheck,
  PhoneCall,
  FileSearch,
  Handshake,
  ShieldCheck,
  Lock,
  BadgeCheck,
} from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection, StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { siteConfig } from '@/lib/utils';
import type { FaqItem } from '@/types';

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description:
    'นัดหมายปรึกษาฟรีกับทีม S2 Accounting & Finance Advisory ติดต่อผ่านโทรศัพท์ อีเมล LINE OA หรือกรอกแบบฟอร์มนัดหมาย',
};

const contactChannels = [
  { icon: Phone, label: 'โทรศัพท์', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: 'อีเมล', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: 'LINE OA', value: siteConfig.lineOA, href: '#' },
  { icon: MapPin, label: 'ที่ตั้งสำนักงาน', value: siteConfig.address, href: '#map' },
  { icon: Clock, label: 'เวลาทำการ', value: siteConfig.workingHours, href: undefined },
];

const steps = [
  { icon: CalendarCheck, title: 'กรอกแบบฟอร์มนัดหมาย', description: 'บอกข้อมูลธุรกิจและบริการที่คุณสนใจ' },
  { icon: PhoneCall, title: 'ทีมติดต่อกลับ', description: 'เราติดต่อกลับภายใน 1 วันทำการเพื่อนัดเวลา' },
  { icon: FileSearch, title: 'ปรึกษาและประเมิน', description: 'พูดคุยเข้าใจธุรกิจและเสนอแนวทางที่เหมาะสม' },
  { icon: Handshake, title: 'เริ่มต้นทำงานร่วมกัน', description: 'ตกลงแพ็กเกจ วางระบบ และเริ่มดูแลทันที' },
];

const newClientFaqs: FaqItem[] = [
  {
    question: 'การนัดปรึกษาครั้งแรกมีค่าใช้จ่ายหรือไม่',
    answer:
      'ไม่มีค่าใช้จ่ายครับ การปรึกษาครั้งแรกฟรี เพื่อให้เราเข้าใจธุรกิจของคุณและเสนอแนวทางที่เหมาะสม โดยไม่มีข้อผูกมัดใดๆ',
  },
  {
    question: 'ต้องเตรียมเอกสารอะไรบ้างสำหรับการปรึกษา',
    answer:
      'สำหรับการปรึกษาครั้งแรก ไม่จำเป็นต้องเตรียมเอกสารพิเศษ เพียงข้อมูลภาพรวมธุรกิจก็เพียงพอ หากมีงบการเงินหรือข้อมูลบัญชีเดิม จะช่วยให้เราประเมินได้แม่นยำขึ้น',
  },
  {
    question: 'ใช้เวลานานแค่ไหนกว่าจะเริ่มบริการได้',
    answer:
      'โดยทั่วไปหลังตกลงร่วมงาน เราสามารถเริ่มรับข้อมูลและวางระบบได้ภายใน 3-5 วันทำการ ขึ้นกับความพร้อมของเอกสารและขนาดธุรกิจ',
  },
  {
    question: 'สามารถปรึกษาแบบออนไลน์ได้หรือไม่',
    answer:
      'ได้ครับ เรารองรับการปรึกษาทั้งแบบเข้าพบที่สำนักงานและแบบออนไลน์ผ่านวิดีโอคอล ตามความสะดวกของคุณ',
  },
];

const securityPoints = [
  { icon: Lock, title: 'ข้อมูลเข้ารหัสปลอดภัย', description: 'ควบคุมการเข้าถึงและจัดเก็บข้อมูลอย่างรัดกุม' },
  { icon: ShieldCheck, title: 'ปฏิบัติตาม PDPA', description: 'ดูแลข้อมูลส่วนบุคคลตามกฎหมายอย่างเคร่งครัด' },
  { icon: BadgeCheck, title: 'ลงนามรักษาความลับ', description: 'มีข้อตกลงรักษาความลับกับลูกค้าทุกราย' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="ติดต่อ"
        eyebrow="ติดต่อเรา"
        title="เริ่มต้นพูดคุยกับทีมของเรา"
        description="ไม่ว่าคุณกำลังเริ่มต้นธุรกิจหรือกำลังขยายตัว เรายินดีให้คำปรึกษาฟรีเพื่อหาแนวทางที่เหมาะกับคุณ"
      />

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-12">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-navy">ช่องทางติดต่อ</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              เลือกช่องทางที่สะดวกสำหรับคุณ ทีมงานพร้อมดูแลและตอบทุกคำถาม
            </p>

            <div className="mt-6 space-y-3">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-borderc bg-white p-4 shadow-soft transition-colors hover:border-accent/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted">{channel.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-navy">{channel.value}</p>
                    </div>
                  </div>
                );
                return channel.href ? (
                  <a key={channel.label} href={channel.href}>
                    {content}
                  </a>
                ) : (
                  <div key={channel.label}>{content}</div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div
              id="map"
              className="mt-6 flex h-56 scroll-mt-28 items-center justify-center overflow-hidden rounded-2xl border border-borderc bg-lightblue/60"
            >
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-2 text-sm font-medium text-navy">แผนที่สำนักงาน</p>
                <p className="mt-1 text-xs text-muted">
                  {/* Placeholder แผนที่ — เชื่อมต่อ Google Maps Embed ภายหลัง */}
                  ถนนสาทรเหนือ เขตบางรัก กรุงเทพฯ
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-navy">แบบฟอร์มนัดหมายปรึกษา</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              กรอกข้อมูลด้านล่าง แล้วทีมของเราจะติดต่อกลับภายใน 1 วันทำการ
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-lightblue/50">
        <div className="container">
          <SectionHeader
            eyebrow="ขั้นตอนการนัดปรึกษา"
            title="เริ่มต้นง่ายๆ เพียง 4 ขั้นตอน"
          />
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem
                  key={step.title}
                  className="relative rounded-2xl border border-borderc bg-white p-6 text-center shadow-soft"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 block font-display text-xs font-bold text-accent">
                    ขั้นตอนที่ {i + 1}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="rounded-3xl border border-borderc bg-gradient-to-br from-primary-50/60 to-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-1">
                <span className="eyebrow">ความปลอดภัยของข้อมูล</span>
                <h2 className="mt-4 text-2xl font-bold text-navy">
                  ข้อมูลของคุณ ปลอดภัยกับเรา
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  เราให้ความสำคัญกับความลับและความปลอดภัยของข้อมูลทางการเงินสูงสุด
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
                {securityPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="rounded-2xl border border-borderc bg-white p-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-sm font-bold text-navy">{point.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">{point.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FAQAccordion
        items={newClientFaqs}
        eyebrow="คำถามลูกค้าใหม่"
        title="สิ่งที่ลูกค้าใหม่มักถามเรา"
        description="รวมคำถามที่พบบ่อยก่อนเริ่มใช้บริการ"
      />
    </>
  );
}
