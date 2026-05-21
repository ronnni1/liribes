'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ballina', href: '/', dropdown: false },
  { label: 'Lajmet', href: '/lajmet', dropdown: true },
  { label: 'Rreth Klinikës', href: '/rreth-nesh', dropdown: false },
  { label: 'Shërbimet', href: '/sherbimet', dropdown: true },
  { label: 'Faqet', href: '#', dropdown: true },
  { label: 'Na Kontaktoni', href: '/kontakt', dropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#1a3557] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 31s-13-8.5-13-17A8 8 0 0 1 18 8a8 8 0 0 1 13 6c0 8.5-13 17-13 17z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line x1="18" y1="13" x2="18" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="18" x2="23" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold tracking-wide">Liribes</span>
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
