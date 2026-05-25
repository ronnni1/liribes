'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, BadgeCheck, Award, HeartHandshake, Syringe, Bandage } from 'lucide-react';
import bannerImg from '@/assets/liribes.webp';
import homeImg from '@/assets/home_img.webp';
import benefitsImg from '@/assets/liribes_benefits.webp';
import benefitsImg1 from '@/assets/liribes_benefits1.webp';
import CareProcess from '@/components/CareProcess';
import DoctorTeam from '@/components/DoctorTeam';
import LatestNews from '@/components/LatestNews';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';

const benefitIcons = [Stethoscope, BadgeCheck, Award, HeartHandshake];
const benefitColors = [
  'bg-blue-100 text-blue-500',
  'bg-yellow-100 text-yellow-500',
  'bg-pink-100 text-pink-500',
  'bg-teal-100 text-teal-500',
];
const serviceCardIcons = [Stethoscope, Syringe, Bandage];
const serviceCardColors = [
  { wrap: 'bg-blue-500/20 group-hover:bg-blue-100', icon: 'text-blue-300 group-hover:text-blue-600' },
  { wrap: 'bg-teal-500/20 group-hover:bg-teal-100', icon: 'text-teal-300 group-hover:text-teal-600' },
  { wrap: 'bg-rose-500/20 group-hover:bg-rose-100', icon: 'text-rose-300 group-hover:text-rose-500' },
];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden">
        <Image src={bannerImg} alt="Banner" fill className="object-cover" style={{ objectPosition: '50% 55%' }} priority quality={100} />
        <div className="absolute inset-0 bg-[#1a6fa8]/65" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full block h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px]">
            <path d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {h.heroTitle1}<br />{h.heroTitle2}
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">{h.heroDesc}</p>
            <Link href="/sherbimet" className="inline-flex items-center bg-[#1a3557] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#15294a] transition-colors">
              {h.heroBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none">
          <span className="text-[80px] md:text-[120px] font-extrabold text-gray-100 leading-none tracking-widest">{h.aboutWatermark}</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src={homeImg} alt="Rreth ordinancës" width={480} height={500} className="object-contain w-full h-auto max-w-[480px]" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {h.aboutTitle}<br />{h.aboutTitle2}
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: h.aboutDesc.replace(/<b>/g, '<strong class="text-[#1a3557] font-semibold">').replace(/<\/b>/g, '</strong>') }} />
              <Link href="/sherbimet" className="inline-flex items-center bg-[#1a3557] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#15294a] transition-colors">
                {h.aboutBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative overflow-hidden bg-[#f0f6fc] py-16 md:py-24 pb-32 md:pb-44">
        <div className="absolute top-0 left-1/4 w-[520px] h-[480px] rounded-full bg-white/60 opacity-80 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-white/60 opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full block h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px]">
            <path d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-8 left-0 pointer-events-none select-none overflow-hidden">
          <span className="text-[100px] md:text-[150px] font-extrabold text-gray-100 leading-none">Liribes</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">{h.benefitsLabel}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-10">
                {h.benefitsTitle}<br />{h.benefitsTitle2}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {h.benefits.map((b, i) => {
                  const Icon = benefitIcons[i];
                  const [bg, ic] = benefitColors[i].split(' ');
                  return (
                    <div key={b.title}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${bg}`}>
                        <Icon size={22} className={ic} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                  <Image src={benefitsImg} alt="Shërbime mjekësore" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-[130px] h-[130px] md:w-[155px] md:h-[155px] rounded-full overflow-hidden border-[5px] border-white shadow-xl">
                  <Image src={benefitsImg1} alt="Ekipi mjekësor" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareProcess />

      {/* Services */}
      <section className="relative bg-[#1a3557]">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full block h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px]">
            <path d="M0,15 C150,35 300,105 500,135 C670,162 750,75 920,85 C1090,95 1150,158 1350,162 C1410,164 1435,163 1440,163 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full block h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px]">
            <path d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-[50%] md:bottom-[28%] left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[60px] md:text-[90px] font-extrabold text-white/8 leading-none tracking-widest">Shërbime</span>
        </div>
        <div className="relative z-10 pt-[160px] pb-[180px] md:pt-[200px] md:pb-[220px] px-6">
          <div className="text-center mb-12">
            <p className="text-blue-300 font-semibold text-xs tracking-[0.2em] uppercase mb-3">{h.servicesLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{h.servicesTitle}</h2>
            <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">{h.servicesDesc}</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {h.serviceCards.map((card, i) => {
              const Icon = serviceCardIcons[i];
              const c = serviceCardColors[i];
              return (
                <div key={card.title} className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-default">
                  <div className={`w-16 h-16 rounded-2xl ${c.wrap} flex items-center justify-center mb-5 transition-colors duration-300`}>
                    <Icon size={30} className={`${c.icon} transition-colors duration-300`} />
                  </div>
                  <h3 className="font-bold text-white group-hover:text-gray-900 text-lg mb-2 transition-colors duration-300">{card.title}</h3>
                  <p className="text-white/50 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{card.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Link href="/sherbimet" className="bg-[#1a6fa8] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1558a0] transition-colors">
              {h.servicesBtn}
            </Link>
          </div>
        </div>
      </section>

      <DoctorTeam />
      <LatestNews />
      <FAQ />

    </main>
  );
}
