import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import type { Article } from '@/types';

const categoryGradients: Record<string, string> = {
  บัญชี: 'from-primary-600 to-accent',
  ภาษี: 'from-navy to-primary-600',
  การเงิน: 'from-accent to-accent-light',
  การบริหารธุรกิจ: 'from-primary-700 to-accent',
  'CFO Insight': 'from-navy-dark to-primary-600',
  ข่าวสารกฎหมาย: 'from-primary-600 to-navy',
};

export function ArticleCard({ article }: { article: Article }) {
  const gradient = categoryGradients[article.category] ?? 'from-primary-600 to-accent';
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-borderc bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative flex h-40 items-end bg-gradient-to-br ${gradient} p-5`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <span className="relative rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mt-3 text-base font-bold leading-snug text-navy transition-colors group-hover:text-accent">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          อ่านบทความ
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
