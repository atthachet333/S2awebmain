import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { BentoServices } from '@/components/sections/BentoServices';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { BusinessInsight } from '@/components/sections/BusinessInsight';
import { TechnologyPartnership } from '@/components/sections/TechnologyPartnership';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { IndustriesServed } from '@/components/sections/IndustriesServed';
import { ExampleScenarios } from '@/components/sections/ExampleScenarios';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { AdvisoryModel } from '@/components/sections/AdvisoryModel';
import { GrowthJourney } from '@/components/sections/GrowthJourney';
import { ClientRelationship } from '@/components/sections/ClientRelationship';
import { ScrollToHash } from '@/components/services/ScrollToHash';
import { CaseStudyHighlights } from '@/components/sections/CaseStudyHighlights';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* EP30: รองรับลิงก์ /#how-we-work จากหน้าอื่น */}
      <ScrollToHash />
      <HeroSection />
      <TrustMetrics />
      <LogoMarquee />
      {/* EP26: บัญชี = รากฐาน → ที่ปรึกษาธุรกิจ = แกนหลัก → เทคโนโลยี = เครื่องมือ */}
      <AdvisoryModel />
      <BentoServices />
      <BusinessInsight />
      <WhyChooseUs />
      {/* EP28: เส้นทางการเติบโต (ฉบับย่อ) */}
      <GrowthJourney />
      <TechnologyPartnership />
      {/* EP30: เมื่อเริ่มทำงานกับ S2 จะเกิดอะไรขึ้น (ก่อน/หลังตกลงร่วมงาน) */}
      <WorkProcess />
      {/* EP29: คุณค่าของการทำงานกับ S2 (ทีเซอร์) */}
      <ClientRelationship />
      <IndustriesServed />
      {/* EP34: กรณีศึกษาจริง — แสดงเมื่อมีข้อมูลที่ยืนยันแล้วเท่านั้น (ปัจจุบันว่าง จึงไม่แสดง) */}
      <CaseStudyHighlights />
      <ExampleScenarios />
      <FAQAccordion />
      <CTASection
        title="พร้อมเติบโตไปด้วยกัน เมื่อธุรกิจของคุณซับซ้อนขึ้น"
        description="เริ่มจากงานบัญชีที่ถูกต้อง แล้วเพิ่มการวิเคราะห์ งบประมาณ หรือ CFO Advisory เมื่อธุรกิจต้องการ โดยทีมที่เข้าใจข้อมูลของคุณมาตั้งแต่ต้น"
      />
    </>
  );
}
