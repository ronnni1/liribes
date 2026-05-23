import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Ballina', href: '/' },
  { label: 'Rreth Ordinancës', href: '/rreth-nesh' },
  { label: 'Shërbimet', href: '/sherbimet' },
  { label: 'Ekipi', href: '/ekipi' },
  { label: 'Lajmet', href: '/lajmet' },
  { label: 'Na Kontaktoni', href: '/kontakt' },
];

const services = [
  'Vizita Specialistike',
  'Dhënje e Injeksioneve dhe Infuzioneve',
  'Pastrim dhe Fashim të Plagëve',
  'Pastrim i Veshëve',
  'Vizita Shtëpiake',
  'EKG',
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0f2340]">

      {/* Main content */}
      <div className="relative z-10 pt-12 pb-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/8.png" alt="Liribes" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Ordinancë private për mjekësi familjare. Kujdes shëndetësor cilësor për familjen tuaj.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1a6fa8] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Lidhje të Shpejta</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#1a6fa8] group-hover:bg-white transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Shërbimet</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/sherbimet"
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#1a6fa8] group-hover:bg-white transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — contact + newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Na Kontaktoni</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={15} className="text-[#1a6fa8] mt-0.5 shrink-0" />
                Prishtinë, Kosovë
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone size={15} className="text-[#1a6fa8] shrink-0" />
                +383 44 000 000
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail size={15} className="text-[#1a6fa8] shrink-0" />
                info@liribes.com
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-sm">
            © 2025 Liribes. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-white/20 text-xs">
            Ordinancë Private · Mjekësi Familjare
          </p>
        </div>
      </div>

    </footer>
  );
}
