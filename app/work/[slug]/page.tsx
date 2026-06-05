import { workPage } from '@/data/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return workPage.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const project = workPage.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const url = `https://scullum.com/work/${project.slug}`;
  const imageUrl = project.image || '/images/scott-cullum.jpg';

  return {
    title: `${project.name} - Scott Cullum`,
    description: project.tagline,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.name} - Scott Cullum`,
      description: project.tagline,
      url: url,
      siteName: 'Scott Cullum',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} - Scott Cullum`,
      description: project.tagline,
      images: [imageUrl],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = workPage.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.tagline,
    author: {
      '@type': 'Person',
      name: 'Scott Cullum',
      url: 'https://scullum.com',
    },
    publisher: {
      '@type': 'Organization',
      name: project.company,
    },
    url: `https://scullum.com/work/${project.slug}`,
    image: project.image,
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center text-neutral-600 hover:text-orange-600 transition-colors mb-12"
          >
            ← Back to work
          </Link>

          {/* Project header */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 font-semibold">
              {project.company}
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 text-orange-600">
              {project.name}
            </h1>
            <p className="text-2xl text-neutral-700 leading-relaxed max-w-prose">
              {project.tagline}
            </p>
            {'externalUrl' in project && project.externalUrl && (
              <div className="mt-8">
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 transition-colors pb-1"
                >
                  {('externalLabel' in project && project.externalLabel) ||
                    'Read full case study →'}
                </a>
              </div>
            )}
          </div>

          {/* Video player */}
          {project.videoUrl && (
            <div className="aspect-[16/9] relative bg-neutral-900 mb-16 -mx-8 md:mx-0">
              <iframe
                src={project.videoUrl}
                title={`${project.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}

          {/* Hero image */}
          {project.image && !project.videoUrl && (
            <div className="aspect-[16/9] relative bg-neutral-100 mb-16 -mx-8 md:mx-0">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Project sections */}
          <div className="space-y-16">
            {project.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="text-3xl font-semibold tracking-tight mb-4">
                    {section.heading}
                  </h2>
                )}
                {'subheading' in section && section.subheading && (
                  <p className="text-xl text-neutral-700 mb-6 italic leading-relaxed">
                    {section.subheading}
                  </p>
                )}
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
                  {section.body.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                {index < project.sections.length - 1 && (
                  <div className="h-px bg-neutral-200 mt-16"></div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation to next project */}
          <div className="mt-24 pt-12 border-t border-neutral-200">
            <Link
              href="/work"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1"
            >
              View work
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
