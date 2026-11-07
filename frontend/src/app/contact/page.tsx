import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ClipboardList,
  ArrowRight,
  PhoneCall,
  FileSearch,
  Handshake,
  ShieldCheck,
  Lock,
  BadgeCheck,
  ArrowUpRight,
} from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactIntent } from '@/components/forms/ContactIntent';
import { ScrollToHash } from '@/components/services/ScrollToHash';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { siteConfig } from '@/lib/utils';
import type { FaqItem } from '@/types';

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description:
    'นัดหมายปรึกษาฟรีกับทีม S2 Accounting Consultant ติดต่อผ่านโทรศัพท์ อีเมล LINE OA หรือกรอกแบบฟอร์มนัดหมาย',
  alternates: { canonical: '/contact' },
};

const contactChannels = [
  { icon: Mail, label: 'อีเมล', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: 'LINE OA', value: siteConfig.lineOA, href: siteConfig.lineUrl },
  { icon: MapPin, label: 'ที่ตั้งสำนักงาน', value: siteConfig.address, href: '#map' },
  { icon: Clock, label: 'เวลาทำการ', value: siteConfig.workingHours, href: undefined },
];

const steps = [
  // EP30 — สิ่งที่เกิดขึ้นหลังติดต่อ (ช่วงผู้สนใจ ยังไม่ใช่ลูกค้า) · เวลาติดต่อกลับเป็น "โดยปกติ" ไม่ใช่การรับประกัน
  { icon: FileSearch, title: 'ทีมอ่านข้อมูลที่คุณส่งมา', description: 'ทบทวนข้อมูลธุรกิจและบริการที่คุณสนใจ' },
  { icon: PhoneCall, title: 'ติดต่อกลับเพื่อพูดคุย', description: 'โดยปกติภายใน 1–2 วันทำการ เพื่อสอบถามความต้องการและข้อมูลที่จำเป็น' },
  { icon: ClipboardList, title: 'ชี้แจงขอบเขตงาน', description: 'สรุปงานที่รวม ไม่รวม และรูปแบบการทำงานที่เหมาะกับธุรกิจ' },
  { icon: Handshake, title: 'เสนอขั้นตอนถัดไป', description: 'จัดทำใบเสนอราคาเมื่อเหมาะสม ให้คุณพิจารณาและตัดสินใจได้โดยไม่มีข้อผูกมัด' },
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
      'ขึ้นกับขอบเขตงานและความพร้อมของข้อมูลและเอกสาร ทีมจะแจ้งกำหนดเริ่มงานและรายการข้อมูลที่ต้องใช้ เมื่อตกลงขอบเขตงานและใบเสนอราคาแล้ว',
  },
  {
    question: 'สามารถปรึกษาแบบออนไลน์ได้หรือไม่',
    answer:
      'ได้ครับ เรารองรับการปรึกษาทั้งแบบเข้าพบที่สำนักงานและแบบออนไลน์ผ่านวิดีโอคอล ตามความสะดวกของคุณ',
  },
];

const securityPoints = [
  { icon: Lock, title: 'ส่งข้อมูลผ่านการเชื่อมต่อ HTTPS', description: 'ข้อมูลจากแบบฟอร์มส่งถึงทีมงานผ่านการเชื่อมต่อที่เข้ารหัสระหว่างทาง' },
  { icon: ShieldCheck, title: 'ดูแลตามนโยบายความเป็นส่วนตัว', description: 'ใช้ข้อมูลเท่าที่จำเป็นต่อการติดต่อกลับและประเมินบริการตามที่แจ้งไว้' },
  { icon: BadgeCheck, title: 'รองรับข้อตกลงรักษาความลับ (NDA) ตามขอบเขตงาน', description: 'สามารถจัดทำข้อตกลงรักษาความลับร่วมกันก่อนเริ่มงานได้' },
];

export default function ContactPage() {
  return (
    <>
      {/* EP40: ลิงก์ #contact-form จาก Health Check / บทความ / แพ็กเกจ เลื่อนไปที่ฟอร์มเสมอ */}
      <ScrollToHash />
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
              <div className="overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-white to-primary-50/55 p-2 shadow-soft">
                <div className="px-3 pb-2 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">ติดต่อทางโทรศัพท์</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {siteConfig.phones.map((phone, index) => (
                    <a
                      key={phone.number}
                      href={phone.href}
                      className={`group relative flex min-w-0 items-center gap-3.5 rounded-2xl border border-borderc/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${index === 0 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''}`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium text-muted">{phone.label}</span>
                        <span className="mt-0.5 block whitespace-nowrap font-display text-base font-bold tracking-[0.01em] text-navy">
                          {phone.number}
                        </span>
                        {'note' in phone && phone.note && (
                          <span className="mt-0.5 block text-[0.68rem] text-muted">{phone.note}</span>
                        )}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-200 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {contactChannels.map((channel, index) => {
                const Icon = channel.icon;
                const content = (
                  <div className="group flex items-start gap-4 rounded-2xl border border-borderc bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted">{channel.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-navy">{channel.value}</p>
                    </div>
                  </div>
                );
                return channel.href ? (
                    <a
                      key={`${channel.label}-${index}`}
                      href={channel.href}
                      className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      {...(channel.label === 'LINE OA' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                    {content}
                  </a>
                ) : (
                  <div key={`${channel.label}-${index}`}>{content}</div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div
              id="map"
              className="mt-6 flex h-56 scroll-mt-28 items-center justify-center overflow-hidden rounded-2xl border border-borderc bg-lightblue/60"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3667012850983!2d100.52897881194889!3d13.81700559572192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d18223aeadd%3A0x6d5960f06d975a2c!2z4Lia4LiI4LiBLuC5gOC4reC4quC4l-C4uSDguYHguK3guITguYDguITguLLguJnguYzguJXguLTguYnguIcg4LiE4Lit4LiZ4LiL4Lix4Lil4LmB4LiV4LiZ4LiX4LmM!5e0!3m2!1sen!2sth!4v1787537445240!5m2!1sen!2sth"
                title="แผนที่สำนักงาน S2 Accounting Consultant"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-7">
            <h2 id="contact-form" className="scroll-mt-28 text-2xl font-bold text-navy">แบบฟอร์มนัดหมายปรึกษา</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              กรอกข้อมูลด้านล่าง โดยปกติทีมของเราจะติดต่อกลับภายใน 1–2 วันทำการ
            </p>
            {/* EP37: เลือกเรื่องที่ติดต่อ (รวมแนวทางสำหรับลูกค้าปัจจุบันจาก EP32) */}
            <ContactIntent />
            <div className="mt-6">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EP30: หลังจากติดต่อเรา จะเกิดอะไรขึ้น */}
      <section className="section bg-lightblue/50" aria-labelledby="after-contact-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">หลังจากติดต่อเรา</span>
            <h2 id="after-contact-heading" className="mt-4 text-display-md font-bold text-navy">
              <span className="inline-block pr-[0.3em]">ส่งข้อมูลแล้ว</span>
              <span className="inline-block">จะเกิดอะไรขึ้นต่อ</span>
            </h2>
          </div>
          <AnimatedSection>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="rounded-2xl border border-borderc bg-white p-6 shadow-soft">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="mt-4 block font-display text-xs font-bold text-accent" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </AnimatedSection>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-muted">
              การส่งแบบฟอร์มหรือการพูดคุยยังไม่ถือเป็นการตกลงใช้บริการ งานจะเริ่มเมื่อตกลงขอบเขตงานและใบเสนอราคาร่วมกันแล้ว
            </p>
            <Link
              href="/#how-we-work"
              className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-600"
            >
              ดูขั้นตอนหลังตกลงร่วมงาน
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
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
                  การดูแลข้อมูลของคุณ
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  เราใช้ข้อมูลที่คุณส่งมาเพื่อติดต่อกลับและประเมินบริการเท่านั้น รายละเอียดอยู่ในนโยบายความเป็นส่วนตัว
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
        eyebrow="ก่อนเริ่มใช้บริการ"
        title="คำถามที่พบบ่อยก่อนเริ่มทำงานกับ S2"
        description="รวมคำถามที่พบบ่อยก่อนเริ่มใช้บริการ"
      />
    </>
  );
}
