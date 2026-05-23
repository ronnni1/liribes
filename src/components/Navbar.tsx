'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lang } from '@/lib/translations';

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'sq', label: 'SHQ', flag: '/albanian.png' },
  { code: 'en', label: 'EN', flag: '/uk-flag.png' },
];

function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = languages.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.flag} alt={current.label} className="w-5 h-5 rounded-full object-cover" />
        <span className="text-xs font-semibold text-white/90">{current.label}</span>
        <ChevronDown size={12} className={`text-white/70 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white rounded-xl shadow-lg overflow-hidden min-w-[100px] z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                lang === l.code ? 'bg-[#1a3557]/5 text-[#1a3557] font-semibold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.flag} alt={l.label} className="w-5 h-5 rounded-full object-cover" />
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/rreth-nesh' },
    { label: t.nav.services, href: '/sherbimet' },
    { label: t.nav.contact, href: '/kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#1a3557] text-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">

          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-new.svg" alt="Liribes" className="h-16 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LangSwitcher />
            <Link href="/admin/login" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7ec8f0]/20 hover:bg-[#7ec8f0]/40 transition-colors" aria-label="Admin">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ikona.png" alt="Admin" className="w-4 h-4 object-contain" />
            </Link>
            <Link
              href="/takim"
              className="flex items-center bg-white text-[#1a3557] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              {t.nav.bookBtn}
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-2 pt-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  lang === l.code ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.flag} alt={l.label} className="w-5 h-5 rounded-full object-cover" />
                {l.label}
              </button>
            ))}
          </div>

          <Link
            href="/takim"
            className="mt-1 text-center bg-white text-[#1a3557] font-bold text-sm px-6 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.bookBtn}
          </Link>
        </div>
      )}
    </nav>
  );
}
