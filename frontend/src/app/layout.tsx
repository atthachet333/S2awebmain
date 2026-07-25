import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { siteConfig } from '@/lib/utils';

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
  title: {
    default: `${siteConfig.name} | บริการบัญชี ภาษี และที่ปรึกษาการเงิน`,
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
  alternates: { canonical: siteConfig.url },
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
  openingHours: 'Mo-Fr 09:00-18:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${plexThai.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
