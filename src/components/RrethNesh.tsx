'use client';

import Image from 'next/image';
import { MapPin, Armchair, CalendarDays, Building2, Navigation } from 'lucide-react';
import heroBanner from '@/assets/ordinanca.webp';
import room1 from '@/assets/dhomaebesartit.webp';
import room2 from '@/assets/dhomaenaserit.webp';
import room3 from '@/assets/dhomaepritjes_v2.webp';
import room4 from '@/assets/EKG.webp';
import room5 from '@/assets/dhomaeinfuzioneve.webp';
import room6 from '@/assets/dhomaeineksioneve.webp';
import room7 from '@/assets/laboratori.webp';
import room8 from '@/assets/ambienti.webp';
import room9 from '@/assets/liridonii.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const statIcons = [CalendarDays, MapPin, Armchair, Building2];
const roomImgs = [room1, room2, room3, room4, room5, room6, room7, room8, room9];

export default function RrethNesh() {
  const { t } = useLanguage();
  const ab = t.about;

  return (
    <main className="pt-[70px]">

      <section className="relative h-[340px] overflow-hidden">
        <Image src={heroBanner} alt="Rreth Ordinancës" fill className="object-cover object-center" priority quality={100} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3557]/85 via-[#1a3557]/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-2">{ab.heroLabel}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {ab.heroTitle} <span className="text-[#7ec8f0]">{ab.heroHighlight}</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm max-w-xs">{ab.heroDesc}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">{ab.storyLabel}</p>
          <h2 className="text-3xl font-bold text-[#1a3557] leading-snug mb-5">
            {ab.storyTitle} <br className="hidden md:block" /> {ab.storyTitle2}
          </h2>
          <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mb-6" />
          <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: ab.storyP1.replace(/<b>/g, '<strong class="text-[#1a3557]">').replace(/<\/b>/g, '</strong>') }} />
            <p>{ab.storyP2}</p>
            <p dangerouslySetInnerHTML={{ __html: ab.storyP3.replace(/<b>/g, '<strong class="text-[#1a3557]">').replace(/<\/b>/g, '</strong>') }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ab.stats.map(({ value, label }, i) => {
            const Icon = statIcons[i];
            return (
              <div key={label} className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="bg-[#1a3557] text-white p-3 rounded-xl">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1a3557]">{value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">{ab.roomsLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557] leading-tight">{ab.roomsTitle}</h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">{ab.roomsDesc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ab.rooms.map((room, i) => (
              <div key={room.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <Image src={roomImgs[i]} alt={room.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3557]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3557] text-sm mb-1.5">{room.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokacioni */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">{ab.locationLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557]">{ab.locationTitle}</h2>
            <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mx-auto mt-4" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=42.39308039150725,21.180289196573167&hl=sq&z=18&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacioni i Ordinancës Liribes"
            />
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="https://maps.app.goo.gl/R7e83Ge2UKjfWLmF6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1a3557] hover:bg-[#1a6ea8] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-colors duration-200">
              <Navigation size={16} />
              {ab.locationBtn}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
