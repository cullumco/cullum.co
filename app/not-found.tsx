import Link from 'next/link';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'Page Not Found - Cullum & Co',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-9xl font-semibold tracking-tight text-orange-600 mb-8">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Page not found
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed mb-12 max-w-prose mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
            >
              Go to homepage
            </Link>
            <Link
              href="/work"
              className="inline-block px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition-colors"
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
