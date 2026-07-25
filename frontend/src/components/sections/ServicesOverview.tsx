import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeServices } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerGroup } from '@/components/animations/AnimatedSection';
import { ServiceCard } from '@/components/services/ServiceCard';

export function ServicesOverview() {
  return (
    <section className="section bg-white" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="บริการของเรา"
          title="บริการครบวงจร ดูแลทุกด้านของการเงินธุรกิจ"
          description="ตั้งแต่งานบัญชีประจำวัน ไปจนถึงการวางกลยุทธ์การเงินระดับผู้บริหาร เราออกแบบบริการให้เหมาะกับทุกช่วงการเติบโตของธุรกิจคุณ"
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-borderc bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-accent hover:text-accent"
          >
            ดูบริการทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
