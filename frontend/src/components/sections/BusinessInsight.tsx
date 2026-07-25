import { Check } from 'lucide-react';
import { DashboardPreview } from '@/components/dashboard/DashboardPreview';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const insights = [
  'รายได้ กำไรขั้นต้น และกำไรสุทธิ แบบเห็นแนวโน้มชัดเจน',
  'กระแสเงินสดเข้า–ออก พร้อมสัญญาณเตือนล่วงหน้า',
  'โครงสร้างค่าใช้จ่ายและสรุปภาษี ในหน้าจอเดียว',
  'ผลประกอบการรายเดือน เทียบเป้าหมายและงวดก่อน',
];

export function BusinessInsight() {
  return (
    <section className="section relative overflow-hidden bg-navy-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection className="order-2 lg:order-1">
          <DashboardPreview />
        </AnimatedSection>

        <AnimatedSection className="order-1 lg:order-2">
          <Badge variant="gold">Business Insight Dashboard</Badge>
          <h2 className="mt-4 text-display-md font-bold text-white">
            เห็นภาพธุรกิจชัดเจน ในหน้าจอเดียว
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-100/85 md:text-lg">
            เราไม่ได้ส่งแค่งบการเงิน แต่มอบ Dashboard ผู้บริหารที่แปลงตัวเลขซับซ้อน
            ให้เป็นข้อมูลที่เข้าใจง่ายและนำไปตัดสินใจได้ทันที
          </p>
          <ul className="mt-6 space-y-3">
            {insights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-primary-100/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3 w-3 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="white" size="lg" className="mt-8">
            ขอชม Dashboard ตัวอย่าง
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
