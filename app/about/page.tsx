import { aboutPage, siteMeta } from '@/data/content';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ExperienceTimeline } from '@/app/components/ExperienceTimeline';
import Image from 'next/image';

export const metadata = {
  title: 'About - Cullum & Co',
  description: "I'm Scott Cullum. Read about the experience, creative instincts, and technical judgment I bring to my practice, Cullum & Co.",
  alternates: {
    canonical: `${siteMeta.url}/about`,
  },
  openGraph: {
    title: 'About - Cullum & Co',
    description: "I'm Scott Cullum. Read about the experience, creative instincts, and technical judgment I bring to my practice, Cullum & Co.",
    url: `${siteMeta.url}/about`,
    siteName: 'Cullum & Co',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Cullum & Co - Scott Cullum, creative technology and fractional advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Cullum & Co',
    description: "I'm Scott Cullum. Read about the experience, creative instincts, and technical judgment I bring to my practice, Cullum & Co.",
    images: [{ url: '/og.png', alt: 'Cullum & Co - Scott Cullum, creative technology and fractional advisory' }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Sidebar with label and photo */}
            <div className="md:col-span-3">
              <h1 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-12 font-semibold">
                {aboutPage.hero.title}
              </h1>

              {/* Photo */}
              <div className="sticky top-32">
                <div className="aspect-square w-full bg-neutral-100 mb-6 relative overflow-hidden">
                  <Image
                    src="/images/scott-cullum.jpg"
                    alt="Scott Cullum"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-9 space-y-12">
              {aboutPage.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} id={section.heading === 'Scott Cullum' ? 'scott-cullum' : undefined}>
                  {section.heading && (
                    <>
                      <h2 className="text-2xl font-semibold tracking-tight mb-6">
                        {section.heading}
                      </h2>
                      <div className="h-px bg-neutral-200 mb-8"></div>
                    </>
                  )}
                  <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <ExperienceTimeline />
        </div>

        {/* CTA to Services */}
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
          <div className="border-t border-neutral-200 pt-12">
            <a
              href="/services"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1"
            >
              View services
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
