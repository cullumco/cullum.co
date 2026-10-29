import Image from 'next/image';
import wordmark from '@/public/images/cullum-and-co-wordmark.png';
import { siteMeta } from '@/data/content';

export function Wordmark({
  className = 'w-44 md:w-48',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={wordmark}
      alt={siteMeta.name}
      className={`h-auto ${className}`}
      priority={priority}
      unoptimized
    />
  );
}
