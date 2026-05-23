'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, Syringe, Bandage, Ear, House, Activity, CalendarCheck } from 'lucide-react';
import stetoskopi from '@/assets/servicesbanner.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Stethoscope, Syringe, Bandage, Ear, House, Activity];
const colors = [
  'bg-blue-100 text-blue-600',
  'bg-teal-100 text-teal-600',
  'bg-rose-100 text-rose-600',
  'bg-amber-100 text-amber-600',
  'bg-purple-100 text-purple-600',
  'bg-green-100 text-green-600',
];
const nums = ['01', '02', '03', '04', '05', '06'];

export default function Sherbimet() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <main className="pt-[70px]">

      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden">
        <Image src={stetoskopi} alt="Shërbimet" fill className="object-cover object-center" priority quality={100} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3557]/85 via-[#1a3557]/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-2">{s.heroLabel}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {s.heroTitle} <span className="text-[#7ec8f0]">{s.heroHighlight}</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm max-w-sm">{s.heroDesc}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center">
        <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">{s.introLabel}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557] leading-tight mb-4">{s.introTitle}</h2>
        <p className="text-gray-400 text-base leading-relaxed">{s.introDesc}</p>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {s.cards.map((card, i) => {
          const Icon = icons[i];
          const [bg, ic] = colors[i].split(' ');
          return (
            <div key={nums[i]} className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-7 overflow-hidden group">
              <span className="absolute top-2 -right-1 text-[72px] font-extrabold text-gray-100 leading-none select-none group-hover:text-[#1a6ea8]/10 transition-colors duration-300">
                {nums[i]}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${bg}`}>
                <Icon size={22} className={ic} />
              </div>
              <h3 className="font-bold text-[#1a3557] text-lg mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1a6ea8]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="relative bg-[#1a3557] py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[100px] md:text-[160px] font-extrabold text-white/5 leading-none">Liribes</span>
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <CalendarCheck size={36} className="text-[#7ec8f0] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">{s.ctaTitle}</h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">{s.ctaDesc}</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-[#1a3557] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#7ec8f0] transition-colors duration-200">
            <CalendarCheck size={16} />
            {s.ctaBtn}
          </Link>
        </div>
      </section>

    </main>
  );
}
