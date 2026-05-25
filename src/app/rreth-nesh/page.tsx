import type { Metadata } from 'next';
import RrethNesh from '@/components/RrethNesh';

export const metadata: Metadata = {
  title: 'Rreth Ordinancës',
  description: 'Mësoni më shumë rreth Ordinancës Liribes në Ferizaj. Dr. Naser Fetahu dhe Dr. Besart Fetahu ofrojnë kujdes shëndetësor familjar cilësor.',
  alternates: { canonical: 'https://liribes.vercel.app/rreth-nesh' },
};

export default function RrethNeshPage() {
  return <RrethNesh />;
}
