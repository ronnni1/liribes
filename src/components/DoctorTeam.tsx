'use client';

import Image from 'next/image';

import m1 from '@/assets/Naseri.webp';
import m2 from '@/assets/besarti1.webp';
import m3 from '@/assets/Greta.webp';
import m4 from '@/assets/Qendresa.webp';
import m5 from '@/assets/Liridoni1.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const memberImgs = [m1, m2, m3, m4, m5];
const memberNames = ['Naser Fetahu', 'Besart Fetahu', 'Greta Fetahu', 'Qendresa Fetahu', 'Liridon Fetahu'];

export default function DoctorTeam() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-20 overflow-hidden">

      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span className="text-[80px] md:text-[130px] font-extrabold text-gray-100 leading-none tracking-widest">
          {t.team.watermark}
        </span>
      </div>

      <div className="relative z-10 text-center mb-14 px-6">
        <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
          {t.team.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.team.title}
        </h2>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          {t.team.desc}
        </p>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-10 grid grid-cols-2 md:grid-cols-5 gap-10">
        {memberImgs.map((img, i) => (
          <div key={memberNames[i]} className={`group flex flex-col items-center text-center${i === 4 ? ' col-span-2 md:col-span-1' : ''}`}>
            <div className={`${i === 4 ? 'w-1/2 md:w-full' : 'w-full'} flex flex-col items-center text-center`}>
              <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-white">
                <Image
                  src={img}
                  alt={memberNames[i]}
                  fill
                  quality={100}
                  className={i === 2 ? 'object-cover object-center scale-[2.1] origin-center' : i === 4 ? 'object-cover object-center scale-[1.6] origin-[68%_50%]' : 'object-cover object-center scale-[1.6] origin-center'}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-base">{memberNames[i]}</h3>
              <p className="text-[#1a6fa8] text-sm mt-0.5">{t.team.roles[i]}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-16">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full block h-[80px] sm:h-[110px] md:h-[150px]">
          <path d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z" fill="#1a6fa8" />
        </svg>
      </div>
    </section>
  );
}
