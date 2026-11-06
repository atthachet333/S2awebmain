import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { siteConfig } from '@/lib/utils';
import { AppProviders } from '@/providers/AppProviders';

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-thai',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'รับทำบัญชี',
    'ที่ปรึกษาการเงิน',
    'วางแผนภาษี',
    'ปิดงบการเงิน',
    'CFO Advisory',
    'สำนักงานบัญชี',
    'บัญชี SME',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: siteConfig.logo, type: 'image/png' }],
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'กรุงเทพมหานคร',
    addressCountry: 'TH',
  },
  areaServed: 'TH',
  priceRange: '฿฿',
  openingHours: 'Mo-Sa 09:00-17:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning className={`${plexThai.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('s2-theme');var dark=saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark);document.documentElement.dataset.theme=dark?'dark':'light';document.documentElement.style.colorScheme=dark?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <AppProviders>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
