'use client';

import { homePage } from '@/data/content';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white px-8 pt-24 pb-32 animate-gradient bg-[length:200%_200%]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8 mb-4"
          >
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">
              {homePage.hero.title}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-12"
          >
            {homePage.hero.subtitle}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed max-w-prose mb-8"
          >
            {homePage.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-8"
          >
            <a
              href={homePage.hero.cta.href}
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-white hover:border-white/70 hover:text-white/70 transition-colors pb-1"
            >
              {homePage.hero.cta.label}
            </a>
            <a
              href="/about"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-white hover:border-white/70 hover:text-white/70 transition-colors pb-1"
            >
              About the practice
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

