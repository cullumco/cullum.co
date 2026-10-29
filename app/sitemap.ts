import { MetadataRoute } from 'next';
import { workPage } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = workPage.projects.map((project) => ({
    url: `https://cullum.co/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://cullum.co',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://cullum.co/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cullum.co/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cullum.co/work',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...workEntries,
  ];
}
