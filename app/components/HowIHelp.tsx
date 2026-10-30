'use client';

import { homePage } from '@/data/content';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HowIHelp() {
  return (
    <section className="bg-orange-600 border-b-2 border-orange-700 px-8 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-white/70 mb-8 font-semibold"
          >
            {homePage.howIHelp.heading}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-16">
            {homePage.howIHelp.items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-white pt-6"
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium leading-relaxed tracking-tight hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
