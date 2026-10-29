import { servicesPage } from '@/data/content';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Services - Cullum & Co',
  description: 'I offer fractional advisory, AI-native prototyping, capability support, and technical direction through my practice, Cullum & Co.',
  alternates: {
    canonical: 'https://cullum.co/services',
  },
  openGraph: {
    title: 'Services - Cullum & Co',
    description: 'I offer fractional advisory, AI-native prototyping, capability support, and technical direction through my practice, Cullum & Co.',
    url: 'https://cullum.co/services',
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
    title: 'Services - Cullum & Co',
    description: 'I offer fractional advisory, AI-native prototyping, capability support, and technical direction through my practice, Cullum & Co.',
    images: [{ url: '/og.png', alt: 'Cullum & Co - Scott Cullum, creative technology and fractional advisory' }],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h1 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-6 font-semibold">
              {servicesPage.hero.title}
            </h1>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
              {servicesPage.hero.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {servicesPage.services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-neutral-200 p-12 hover:border-neutral-900 transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-5">
                    <h2 className="text-3xl font-semibold tracking-tight mb-3">
                      {service.name}
                    </h2>
                    <p className="text-neutral-700 text-lg mb-6 leading-relaxed">
                      {service.summary}
                    </p>
                    <div className="space-y-4 text-neutral-700 leading-relaxed max-w-prose">
                      {service.description.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-8">
                    {service.whatThisIncludes.length > 0 && (
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-4 font-semibold">
                          What this includes
                        </h3>
                        <ul className="space-y-3 text-neutral-700 leading-relaxed">
                          {service.whatThisIncludes.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-600 mr-3 mt-1">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {service.goodFor.length > 0 && (
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-4 font-semibold">
                          Good for
                        </h3>
                        <ul className="space-y-3 text-neutral-700 leading-relaxed">
                          {service.goodFor.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-600 mr-3 mt-1">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Work */}
          <div className="pt-16 mt-16 border-t border-neutral-200">
            <a
              href="/work"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1"
            >
              View work
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
