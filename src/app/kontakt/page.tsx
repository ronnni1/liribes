import type { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Na Kontaktoni – Lër Termin',
  description: 'Lër termin online në Ordinancën Liribes, Ferizaj. Zgjidhni datën, orën dhe doktorin. E hënë–e shtunë 10:00–18:00. Tel: 044 880 718.',
  alternates: { canonical: 'https://liribes.vercel.app/kontakt' },
};

export default function KontaktPage() {
  return <ContactUs />;
}
