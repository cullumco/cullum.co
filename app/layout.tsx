import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Scott Cullum - Creative Technologist & Product Consultant',
  description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
  metadataBase: new URL('https://scullum.com'),
  alternates: {
    canonical: 'https://scullum.com',
  },
  openGraph: {
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    url: 'https://scullum.com',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Scott Cullum - Creative Technologist & Product Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Scott Cullum',
    url: 'https://scullum.com',
    jobTitle: 'Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    email: 'scott@cullum.co',
    sameAs: [
      'https://www.linkedin.com/in/scullum/',
    ],
    knowsAbout: [
      'Product Strategy',
      'Design Systems',
      'Front-end Development',
      'AI Integration',
      'Team Leadership',
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

