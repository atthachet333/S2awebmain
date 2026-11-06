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

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
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
      <WorkProcess />
      <IndustriesServed />
      <ExampleScenarios />
      <FAQAccordion />
      <CTASection
        title="พร้อมเติบโตไปด้วยกัน เมื่อธุรกิจของคุณซับซ้อนขึ้น"
        description="เริ่มจากงานบัญชีที่ถูกต้อง แล้วเพิ่มการวิเคราะห์ งบประมาณ หรือ CFO Advisory เมื่อธุรกิจต้องการ โดยทีมที่เข้าใจข้อมูลของคุณมาตั้งแต่ต้น"
      />
    </>
  );
}
