'use client';

import { useMemo, useState } from 'react';
import { Search, FileQuestion } from 'lucide-react';
import { articles, articleCategories } from '@/data/articles';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';
import { ArticleCard } from './ArticleCard';

export function ArticlesExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ทั้งหมด');

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCategory = category === 'ทั้งหมด' || a.category === category;
      const matchQuery =
        query.trim() === '' ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาบทความ..."
            aria-label="ค้นหาบทความ"
            className="h-12 w-full rounded-full border border-borderc bg-white pl-12 pr-4 text-sm text-ink shadow-soft transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === cat
                  ? 'border-accent bg-accent text-white'
                  : 'border-borderc bg-white text-navy hover:border-accent hover:text-accent'
              }`}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <StaggerItem key={article.slug}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-accent">
            <FileQuestion className="h-8 w-8" />
          </span>
          <p className="mt-4 text-lg font-semibold text-navy">ไม่พบบทความที่ค้นหา</p>
          <p className="mt-1 text-sm text-muted">ลองเปลี่ยนคำค้นหาหรือหมวดหมู่อื่น</p>
        </div>
      )}
    </div>
  );
}
