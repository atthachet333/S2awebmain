import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { LegalDocument } from '@/components/legal/LegalDocument';
import { termsContent } from '@/data/legal';

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน',
  description:
    'ข้อกำหนดการใช้งานเว็บไซต์ S2 Accounting Consultant: ข้อมูลทั่วไป การเริ่มงานตามใบเสนอราคา ทรัพย์สินทางปัญญา และข้อจำกัดความรับผิด',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="ข้อกำหนดการใช้งาน"
        eyebrow="Terms"
        title="ข้อกำหนดการใช้งาน"
        description="เงื่อนไขการใช้งานเว็บไซต์ S2 Accounting Consultant"
      />
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <LegalDocument content={termsContent} />
        </div>
      </section>
    </>
  );
}
