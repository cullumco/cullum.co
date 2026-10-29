'use client';

import { homePage } from '@/data/content';
import { motion } from 'framer-motion';

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
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-white pt-6"
              >
                <p className="text-lg font-medium leading-relaxed tracking-tight">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
