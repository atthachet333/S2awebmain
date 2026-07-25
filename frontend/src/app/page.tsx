import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMetrics } from '@/components/sections/TrustMetrics';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { BentoServices } from '@/components/sections/BentoServices';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { BusinessInsight } from '@/components/sections/BusinessInsight';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { IndustriesServed } from '@/components/sections/IndustriesServed';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <LogoMarquee />
      <BentoServices />
      <WhyChooseUs />
      <BusinessInsight />
      <WorkProcess />
      <IndustriesServed />
      <TestimonialCarousel />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
