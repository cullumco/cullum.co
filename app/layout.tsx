import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { siteMeta } from '@/data/content';
import { socialImage } from '@/data/brand';
import wordmark from '@/public/images/cullum-and-co-wordmark.png';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Cullum & Co - Scott Cullum, Creative Technologist',
  description: siteMeta.tagline,
  metadataBase: new URL(siteMeta.url),
  alternates: {
    canonical: siteMeta.url,
  },
  openGraph: {
    title: 'Cullum & Co - Scott Cullum, Creative Technologist',
    description: siteMeta.tagline,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: 'en_US',
    type: 'website',
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cullum & Co - Scott Cullum, Creative Technologist',
    description: siteMeta.tagline,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteMeta.url}/#practice`,
        name: siteMeta.name,
        url: siteMeta.url,
        description: siteMeta.tagline,
        email: siteMeta.email,
        logo: `${siteMeta.url}/images/cullum-and-co-wordmark-orange.png`,
        member: { '@id': `${siteMeta.url}/about#scott-cullum` },
      },
      {
        '@type': 'Person',
        '@id': `${siteMeta.url}/about#scott-cullum`,
        name: 'Scott Cullum',
        url: `${siteMeta.url}/about`,
        jobTitle: 'Creative Technologist & Product Consultant',
        sameAs: [siteMeta.social.linkedin],
        knowsAbout: [
          'Product Strategy',
          'Design Systems',
          'Front-end Development',
          'AI Integration',
          'Team Leadership',
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href={wordmark.src} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={manrope.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

