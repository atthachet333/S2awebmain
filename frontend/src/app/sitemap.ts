import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { siteConfig } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/pricing', '/articles', '/contact'].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    }),
  );

  const legalRoutes = ['/privacy', '/terms'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteConfig.url}/articles/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articleRoutes, ...legalRoutes];
}
