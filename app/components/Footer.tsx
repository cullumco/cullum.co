import { footer, siteMeta } from '@/data/content';
import Link from 'next/link';
import { Wordmark } from './Wordmark';

export function Footer() {
  return (
    <footer id="contact" className="px-8 py-32 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            {footer.heading}
          </h2>
          <div className="space-y-4">
            <a
              href={`mailto:${footer.email}`}
              className="text-3xl md:text-4xl text-orange-600 hover:text-orange-700 transition-colors inline-block break-all"
            >
              {footer.email}
            </a>
            <div>
              <a
                href={siteMeta.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-neutral-900 hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
              >
                {footer.linkedinLabel}
              </a>
            </div>
          </div>
          {footer.availability && (
            <p className="text-neutral-600 text-base mt-8">
              {footer.availability}
            </p>
          )}
        </div>

        <div className="pt-16 border-t border-neutral-200">
          <Link href="/" aria-label={`${siteMeta.name} home`} className="inline-block mb-6">
            <Wordmark className="w-64 max-w-full" />
          </Link>
          <p className="text-neutral-500 text-sm tracking-wide leading-relaxed">
            {footer.tagline}
          </p>
          <p className="text-neutral-400 text-xs mt-8">
            © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

