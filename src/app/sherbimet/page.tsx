import type { Metadata } from 'next';
import Sherbimet from '@/components/Sherbimet';

export const metadata: Metadata = {
  title: 'Shërbimet',
  description: 'Vizita kontrolli, vaksinime, pastrim plagësh, pastrim veshësh, EKG, vizita shtëpiake dhe më shumë – Ordinanca Liribes Ferizaj.',
  alternates: { canonical: 'https://liribes.vercel.app/sherbimet' },
};

export default function SherbimetPage() {
  return <Sherbimet />;
}
