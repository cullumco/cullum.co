'use client';

import { homePage, workPage } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const featuredProjects = homePage.featuredWork.projects.flatMap((feature) => {
  const project = workPage.projects.find((project) => project.slug === feature.slug);
  return project ? [{ ...project, description: feature.description }] : [];
});

export function Work() {
  return (
    <section id="work" className="min-h-screen px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-6 font-semibold"
          >
            {homePage.featuredWork.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-700 leading-relaxed max-w-prose"
          >
            {homePage.featuredWork.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group border border-neutral-200 hover:border-neutral-900 transition-all bg-white overflow-hidden block h-full hover:shadow-xl"
              >
                {project.image && (
                  <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 md:p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 font-semibold">
                    {project.company}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block mt-6 text-sm uppercase tracking-wide font-medium border-b border-neutral-400 group-hover:border-neutral-900 transition-colors pb-1">
                    Read case study
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View work CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/work"
            className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1"
          >
            View work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

