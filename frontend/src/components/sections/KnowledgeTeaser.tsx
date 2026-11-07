import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

/** Content distillation — คลังความรู้บนหน้าแรก: บทความละหนึ่งหัวข้อหลัก (ต้นทุน · การเงินและการบริหาร · บัญชีและภาษี) */
const featuredSlugs = ['gross-margin-guide', 'read-financial-statements', 'tax-planning-year-end'];

export function KnowledgeTeaser() {
  const items = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is (typeof articles)[number] => Boolean(a));
  return (
    <section className="section bg-white" aria-labelledby="knowledge-teaser-heading">
      <div className="container">
        <AnimatedSection className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">คลังความรู้</span>
            <h2 id="knowledge-teaser-heading" className="mt-4 text-display-md font-bold text-navy">
              ความรู้ที่ช่วยอ่านตัวเลขของธุรกิจ
            </h2>
          </div>
          <Link
            href="/articles"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            ดูคลังความรู้ทั้งหมด
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </AnimatedSection>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
