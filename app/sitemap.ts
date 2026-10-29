import { MetadataRoute } from 'next';
import { workPage, siteMeta } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = workPage.projects.map((project) => ({
    url: `${siteMeta.url}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteMeta.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMeta.url}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMeta.url}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...workEntries,
  ];
}
