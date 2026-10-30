import { workPage, siteMeta } from '@/data/content';
import { socialImage } from '@/data/brand';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Work - Cullum & Co',
  description: 'My work across design, engineering, and product, including Cullum & Co projects and my contributions at World Wide Technology and AKQA.',
  alternates: {
    canonical: `${siteMeta.url}/work`,
  },
  openGraph: {
    title: 'Work - Cullum & Co',
    description: 'My work across design, engineering, and product, including Cullum & Co projects and my contributions at World Wide Technology and AKQA.',
    url: `${siteMeta.url}/work`,
    siteName: 'Cullum & Co',
    locale: 'en_US',
    type: 'website',
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work - Cullum & Co',
    description: 'My work across design, engineering, and product, including Cullum & Co projects and my contributions at World Wide Technology and AKQA.',
    images: [socialImage],
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h1 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-6 font-semibold">
              {workPage.hero.title}
            </h1>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
              {workPage.hero.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {workPage.projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group border border-neutral-200 hover:border-neutral-900 transition-all bg-white overflow-hidden block"
              >
                {project.image && (
                  <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 font-semibold">
                    {project.company}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {project.tagline}
                  </p>
                  <span className="inline-block mt-6 text-sm uppercase tracking-wide font-medium border-b border-neutral-400 group-hover:border-neutral-900 transition-colors pb-1">
                    Read case study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
