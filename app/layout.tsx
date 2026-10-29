import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { siteMeta } from '@/data/content';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Cullum & Co - Creative Technology & Fractional Advisory',
  description: 'Creative technology, fractional advisory, and AI-native prototyping. A practice led by Scott Cullum, with trusted collaborators joining as the work requires.',
  metadataBase: new URL(siteMeta.url),
  alternates: {
    canonical: siteMeta.url,
  },
  openGraph: {
    title: 'Cullum & Co - Creative Technology & Fractional Advisory',
    description: siteMeta.tagline,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Cullum & Co - Creative technology and fractional advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cullum & Co - Creative Technology & Fractional Advisory',
    description: siteMeta.tagline,
    images: [{ url: '/og.png', alt: 'Cullum & Co - Creative technology and fractional advisory' }],
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
        logo: `${siteMeta.url}/images/cullum-and-co-wordmark.png`,
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

