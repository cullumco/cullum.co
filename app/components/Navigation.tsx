'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { nav, siteMeta } from '@/data/content';
import { Wordmark } from './Wordmark';

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'contact') {
            setActiveSection('#contact');
          } else if (id === 'work') {
            setActiveSection('#work');
          } else {
            setActiveSection('');
          }
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px', threshold: 0 });

    const sections = ['home', 'work', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const isLinkActive = (href: string) => {
    if (activeSection === '#contact') return false;
    if (href === '/work') return pathname === '/work' || pathname.startsWith('/work/');
    return pathname === href;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-neutral-50 border-b border-neutral-200">
        <div className="px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            aria-label={`${siteMeta.name} home`}
            className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            onClick={handleLinkClick}
          >
            <Wordmark priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            {nav.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-orange-600 transition-colors pb-1 ${
                  isLinkActive(link.href) ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className={`hover:text-orange-600 transition-colors pb-1 ${
                activeSection === '#contact' ? 'border-b-2 border-orange-600' : ''
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-orange-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-neutral-200 bg-neutral-50">
          <div className="px-8 py-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
              {nav.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg hover:text-orange-600 transition-colors pb-1 inline-block ${
                    isLinkActive(link.href) ? 'border-b-2 border-orange-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className={`text-lg hover:text-orange-600 transition-colors pb-1 inline-block ${
                  activeSection === '#contact' ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}

