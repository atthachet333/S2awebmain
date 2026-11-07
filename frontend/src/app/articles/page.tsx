import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, Calendar, TrendingUp } from 'lucide-react';
import { featuredArticle, popularArticles } from '@/data/articles';
import { PageHero } from '@/components/layout/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ArticlesExplorer } from '@/components/articles/ArticlesExplorer';
import { ArticlesHelp } from '@/components/articles/ArticlesHelp';

export const metadata: Metadata = {
  title: 'คลังความรู้ธุรกิจ',
  description:
    'คลังความรู้ธุรกิจจาก S2 ด้านบัญชีและภาษี ต้นทุนและกำไร การเงินและการบริหาร และระบบบัญชี สำหรับเจ้าของธุรกิจและผู้บริหาร',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        breadcrumb="คลังความรู้"
        eyebrow="Knowledge Center"
        title="คลังความรู้ธุรกิจจาก S2"
        description="บทความด้านบัญชีและภาษี ต้นทุนและกำไร การเงินและการบริหาร และระบบบัญชี ที่ช่วยให้เจ้าของธุรกิจและผู้บริหารเข้าใจตัวเลขและตัดสินใจได้ดีขึ้น"
      >
        {/* EP36: ทางเข้าสู่แบบประเมินเบื้องต้นสำหรับผู้ที่ยังไม่แน่ใจว่าควรเริ่มจากเรื่องใด */}
        <p className="mt-6 text-sm text-muted">
          ไม่แน่ใจว่าควรเริ่มจากเรื่องใด?{' '}
          <Link href="/business-health-check" className="font-semibold text-accent underline-offset-4 hover:underline">
            ลองประเมินสุขภาพธุรกิจเบื้องต้น
          </Link>
        </p>
      </PageHero>

      {/* Featured + Popular */}
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-8">
            <Link
              href={`/articles/${featuredArticle.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-borderc bg-white shadow-soft transition-all duration-300 hover:shadow-card"
            >
              <div className="relative aspect-[3/1] overflow-hidden bg-gradient-to-br from-navy via-primary-600 to-accent">
                <Image
                  src={featuredArticle.featuredImage ?? featuredArticle.coverImage}
                  alt={featuredArticle.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-primary-50 px-2.5 py-1 font-semibold text-accent">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-navy transition-colors group-hover:text-accent md:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{featuredArticle.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  อ่านบทความเต็ม
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4">
            <div className="rounded-3xl border border-borderc bg-lightblue/40 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                <TrendingUp className="h-5 w-5 text-accent" />
                บทความยอดนิยม
              </h3>
              <ul className="mt-4 space-y-4">
                {popularArticles.map((article, i) => (
                  <li key={article.slug}>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="group flex gap-3"
                    >
                      <span className="font-display text-xl font-bold text-primary-100" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-accent">
                          {article.title}
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          {article.category} · {article.readTime}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Explorer */}
      <section className="section bg-lightblue/40">
        <div className="container">
          <SectionHeader
            eyebrow="บทความทั้งหมด"
            title="ค้นหาความรู้ที่คุณสนใจ"
            description="กรองตามหมวดหมู่หรือค้นหาหัวข้อที่ต้องการ"
          />
          <div className="mt-10">
            <ArticlesExplorer />
          </div>
        </div>
      </section>

      {/* EP29: ช่องทางสอบถาม (แทนฟอร์มสมัครรับข่าวสารที่ไม่มีระบบส่งจริง) */}
      <section className="section bg-white">
        <div className="container">
          <ArticlesHelp />
        </div>
      </section>
    </>
  );
}
