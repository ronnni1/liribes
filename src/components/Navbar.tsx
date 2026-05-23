'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ballina', href: '/', dropdown: false },
  { label: 'Rreth Ordinancës', href: '/rreth-nesh', dropdown: false },
  { label: 'Shërbimet', href: '/sherbimet', dropdown: false },
  { label: 'Na Kontaktoni', href: '/kontakt', dropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/8.png"
              alt="Liribes"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Appointment button */}
          <Link
            href="/takim"
            className="hidden lg:flex items-center bg-white text-[#1a3557] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            Takim
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between text-sm font-medium text-white/90 hover:text-white py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} />}
            </Link>
          ))}
          <Link
            href="/takim"
            className="mt-2 text-center bg-white text-[#1a3557] font-bold text-sm px-6 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Takim
          </Link>
        </div>
      )}
    </nav>
  );
}
