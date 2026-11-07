import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { BentoServices } from '@/components/sections/BentoServices';
import { BusinessInsight } from '@/components/sections/BusinessInsight';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { AdvisoryModel } from '@/components/sections/AdvisoryModel';
import { GrowthJourney } from '@/components/sections/GrowthJourney';
import { ProfessionalPrinciples } from '@/components/sections/ProfessionalPrinciples';
import { KnowledgeTeaser } from '@/components/sections/KnowledgeTeaser';
import { ScrollToHash } from '@/components/services/ScrollToHash';
import { CaseStudyHighlights } from '@/components/sections/CaseStudyHighlights';

export const metadata: Metadata = {
  title: { absolute: 'S2 Accounting Consultant | สำนักงานบัญชีและที่ปรึกษาธุรกิจ' },
  description:
    'S2 Accounting Consultant รับทำบัญชีรายเดือน ภาษี และปิดงบ พร้อมงานที่ปรึกษาธุรกิจ: วิเคราะห์ต้นทุนและกำไร งบประมาณ และ CFO Advisory ช่วยผู้บริหารเข้าใจตัวเลขก่อนตัดสินใจ',
  alternates: { canonical: '/' },
};

/**
 * Content distillation — หน้าแรก 11 ส่วน (จากเดิม 15): ตัวตน → ข้อเท็จจริง → บัญชีสู่ที่ปรึกษา → บริการ
 * → คำถามของผู้บริหาร → หลักการทำงาน → เส้นทางธุรกิจ + Health Check → การเริ่มทำงาน → คลังความรู้ → คำถามที่พบบ่อย → ติดต่อ
 * ส่วนที่นำออก: แถบประเภทธุรกิจ (ซ้ำกับหน้า About), เทคโนโลยี (รวมใน AdvisoryModel), ความสัมพันธ์กับลูกค้า (รวมใน WorkProcess),
 * ธุรกิจที่รองรับ (อยู่หน้า About), สถานการณ์สมมติ (ซ้ำกับคำถามของผู้บริหาร)
 */
export default function HomePage() {
  return (
    <>
      {/* EP30: รองรับลิงก์ /#how-we-work จากหน้าอื่น */}
      <ScrollToHash />
      <HeroSection />
      <TrustMetrics />
      <AdvisoryModel />
      <BentoServices />
      <BusinessInsight />
      <ProfessionalPrinciples />
      <GrowthJourney />
      <WorkProcess compact />
      {/* EP34: กรณีศึกษาจริง — แสดงเมื่อมีข้อมูลที่ยืนยันและได้รับอนุญาตแล้วเท่านั้น (ปัจจุบันว่าง จึงไม่แสดง) */}
      <CaseStudyHighlights />
      <KnowledgeTeaser />
      <FAQAccordion />
      <CTASection
        title="เล่าคำถามของธุรกิจ แล้วเราจะบอกว่าควรเริ่มจากตรงไหน"
        description="การพูดคุยครั้งแรกไม่มีค่าใช้จ่าย S2 จะสรุปขอบเขตงานและใบเสนอราคาให้พิจารณาก่อนเริ่มงานทุกครั้ง"
      />
    </>
  );
}
