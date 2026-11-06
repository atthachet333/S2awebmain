import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { LegalDocument } from '@/components/legal/LegalDocument';
import { privacyContent } from '@/data/legal';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว',
  description:
    'นโยบายความเป็นส่วนตัวของเว็บไซต์ S2 Accounting Consultant: ข้อมูลที่เก็บ วัตถุประสงค์ การส่งต่อข้อมูล และสิทธิของเจ้าของข้อมูล',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb="นโยบายความเป็นส่วนตัว"
        eyebrow="Privacy"
        title="นโยบายความเป็นส่วนตัว"
        description="วิธีที่เราเก็บ ใช้ และดูแลข้อมูลที่คุณส่งผ่านเว็บไซต์นี้"
      />
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <LegalDocument content={privacyContent} />
        </div>
      </section>
    </>
  );
}
