import { CheckCircle2 } from 'lucide-react';
import { whyChooseUs } from '@/data/features';
import { AnimatedSection, StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-lightblue/60">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30 [background-size:44px_44px] [mask-image:radial-gradient(700px_400px_at_100%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-12">
        <AnimatedSection className="lg:col-span-5">
          <Badge>ทำไมต้องเลือกเรา</Badge>
          <h2 className="mt-4 text-display-md font-bold text-navy">
            พันธมิตรที่ธุรกิจไว้วางใจ ในทุกการตัดสินใจด้านการเงิน
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            เราไม่ได้เป็นเพียงผู้ทำบัญชี แต่เป็นทีมที่เข้าใจธุรกิจของคุณ
            พร้อมดูแลอย่างใกล้ชิดและให้คำปรึกษาที่นำไปใช้ได้จริง
          </p>
          <ul className="mt-6 space-y-3">
            {['ผู้ดูแลบัญชีประจำที่เข้าใจธุรกิจคุณ', 'มาตรฐานวิชาชีพและการควบคุมคุณภาพ', 'สื่อสารชัดเจน โปร่งใส ตรวจสอบได้'].map(
              (item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ),
            )}
          </ul>
          <Button href="/about" variant="secondary" className="mt-8">
            รู้จักเราเพิ่มเติม
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedSection>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {whyChooseUs.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem
                key={feature.title}
                className="group rounded-2xl border border-borderc bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
