import wordmark from '@/public/images/cullum-and-co-wordmark.png';
import { siteMeta } from '@/data/content';

export function Wordmark({
  className = 'w-44 md:w-48',
  tone = 'orange',
}: {
  className?: string;
  tone?: 'orange' | 'white';
}) {
  return (
    <span
      role="img"
      aria-label={siteMeta.name}
      className={`wordmark block bg-current ${tone === 'white' ? 'text-white' : 'text-orange-600'} ${className}`}
      style={{
        aspectRatio: `${wordmark.width} / ${wordmark.height}`,
        maskImage: `url("${wordmark.src}")`,
        WebkitMaskImage: `url("${wordmark.src}")`,
        maskMode: 'alpha',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      }}
    />
  );
}
