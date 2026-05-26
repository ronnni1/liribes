'use client';

import { useState } from 'react';
import Image from 'next/image';
import staffImg from '@/assets/stafi.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const bgs = [
  'bg-gradient-to-br from-slate-700 via-[#1a4a6e] to-[#1a6fa8]',
  'bg-gradient-to-br from-slate-700 via-teal-800 to-teal-600',
  'bg-gradient-to-br from-slate-700 via-blue-900 to-blue-700',
  'bg-gradient-to-br from-slate-700 via-[#1a3557] to-[#1a5a8a]',
];

export default function CareProcess() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          <div className="w-full lg:w-1/2">
            <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              {t.care.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              <span className="text-[#1a6fa8]">{t.care.title1}</span> {t.care.title2}
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-0">
              {t.care.desc}
            </p>
            <Image
              src={staffImg}
              alt="Ekipi mjekësor Liribes"
              width={520}
              height={340}
              className="w-full h-auto object-contain -mt-16 md:-mt-40"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {t.care.steps.map((step, i) => (
              <div
                key={step.number}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={[
                  'relative overflow-hidden rounded-2xl cursor-pointer select-none',
                  'transition-all duration-500 ease-in-out',
                  bgs[i],
                  active === i ? 'h-[190px] shadow-xl' : 'h-[80px]',
                ].join(' ')}
              >
                <span className={['absolute top-5 left-6 font-bold text-white transition-all duration-300', active === i ? 'text-3xl' : 'text-2xl'].join(' ')}>
                  {step.number}
                </span>
                <div className={['absolute bottom-0 left-0 right-0 px-6 pb-6', 'transition-all duration-500', active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'].join(' ')}>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
