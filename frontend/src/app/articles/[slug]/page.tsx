import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { articles, articleRelatedService, getArticle } from '@/data/articles';
import { services } from '@/data/services';
import { siteConfig } from '@/lib/utils';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { CTASection } from '@/components/sections/CTASection';

/** "15 กรกฎาคม 2567" → "2024-07-15" สำหรับข้อมูลโครงสร้าง (ถ้าแปลงไม่ได้คืน undefined) */
const thaiMonths = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
function toIsoDate(thaiDate: string): string | undefined {
  const m = thaiDate.match(/^(\d{1,2}) (\S+) (\d{4})$/);
  if (!m) return undefined;
  const month = thaiMonths.indexOf(m[2]);
  if (month < 0) return undefined;
  return `${Number(m[3]) - 543}-${String(month + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'ไม่พบบทความ' };
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `/articles/${article.slug}`,
      images: [{ url: article.coverImage, alt: article.imageAlt }],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const explicitRelated = (article.relatedSlugs ?? [])
    .map((relatedSlug) => getArticle(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const related = explicitRelated.length > 0
    ? explicitRelated.slice(0, 3)
    : articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);
  const fallback = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallback;

  const relatedService = services.find((sv) => sv.slug === articleRelatedService[article.slug]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    inLanguage: 'th',
    datePublished: toIsoDate(article.date),
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
    articleSection: article.category,
    image: `${siteConfig.url}${article.coverImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <article className="relative overflow-hidden bg-hero-radial pt-32 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40 [background-size:44px_44px] [mask-image:radial-gradient(800px_400px_at_50%_0%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="container">
          <AnimatedSection className="mx-auto max-w-3xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              กลับไปหน้าบทความ
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" /> {article.author}
              </span>
            </div>
            <h1 className="mt-4 text-display-md font-bold text-navy">{article.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
          </AnimatedSection>
        </div>

        <div className="container mt-10">
          <div className="relative mx-auto aspect-[3/1] max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-primary-600 to-accent shadow-lift">
            <Image
              src={article.coverImage}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>
      </article>

      <section className="py-16">
        <div className="container">
          <AnimatedSection className="prose-custom mx-auto max-w-3xl">
            {article.content.map((paragraph, i) => (
              <p key={i} className="mb-5 text-base leading-[1.9] text-ink/85 md:text-lg">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-borderc bg-lightblue/50 p-6">
            <p className="text-sm leading-relaxed text-navy">
              <strong className="font-semibold">หมายเหตุ:</strong>{' '}
              บทความนี้จัดทำขึ้นเพื่อให้ความรู้ทั่วไป ไม่ถือเป็นคำแนะนำเฉพาะราย ข้อมูลอาจเปลี่ยนแปลงตามกฎหมายหรือประกาศที่เกี่ยวข้อง ควรประเมินตามข้อเท็จจริงของแต่ละกรณี หากต้องการคำปรึกษาที่เหมาะกับธุรกิจของคุณ สามารถนัดหมายกับทีมของเราได้
            </p>
          </div>

          {/* EP36: เชื่อมบทความกับบริการที่เกี่ยวข้อง (ลิงก์เดียว) และแบบประเมินเบื้องต้น */}
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-borderc bg-white p-6">
            <p className="font-semibold text-navy">อยากรู้ว่าเรื่องนี้เกี่ยวข้องกับธุรกิจของคุณอย่างไร?</p>
            {relatedService && (
              <p className="mt-2 text-sm text-muted">
                บริการที่เกี่ยวข้อง:{' '}
                <Link href={`/services#${relatedService.slug}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                  {relatedService.title}
                </Link>
              </p>
            )}
            <ul className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <Link href="/business-health-check" className="font-semibold text-accent underline-offset-4 hover:underline">
                  ประเมินสุขภาพธุรกิจเบื้องต้น
                </Link>
              </li>
              <li>
                <Link
                  href={relatedService ? `/contact?service=${relatedService.slug}#contact-form` : '/contact#contact-form'}
                  className="font-semibold text-accent underline-offset-4 hover:underline"
                >
                  คุยกับทีม S2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-lightblue/40">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy">บทความที่เกี่ยวข้อง</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={article.ctaTitle}
        buttonLabel={article.ctaLabel}
        buttonHref={article.ctaHref}
      />
    </>
  );
}
