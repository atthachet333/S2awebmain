import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/utils';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#071c4a',
    icons: [
      {
        src: siteConfig.logo,
        sizes: '1254x1254',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
