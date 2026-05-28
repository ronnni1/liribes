'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0f2340]">
      <div className="relative z-10 pt-12 pb-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-new.svg" alt="Liribes" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/AmbulancaLiribesi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1a6fa8] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ordinanca_liribesi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1a6fa8] flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: '/' },
                { label: t.nav.about, href: '/rreth-nesh' },
                { label: t.nav.services, href: '/sherbimet' },
                { label: t.nav.contact, href: '/kontakt' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#1a6fa8] group-hover:bg-white transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t.footer.services}</h4>
            <ul className="space-y-3">
              {t.footer.serviceList.map((s) => (
                <li key={s}>
                  <Link href="/sherbimet" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#1a6fa8] group-hover:bg-white transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={15} className="text-[#1a6fa8] mt-0.5 shrink-0" />
                {t.contact.infoLabels.addressVal}
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone size={15} className="text-[#1a6fa8] shrink-0" />
                044 880 718
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail size={15} className="text-[#1a6fa8] shrink-0" />
                ordinancaliribesi@gmail.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-sm">{t.footer.copyright}</p>
          <p className="text-white/20 text-xs">{t.footer.subtitle}</p>
        </div>
      </div>
    </footer>
  );
}
