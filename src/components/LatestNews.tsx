'use client';

import Image, { StaticImageData } from 'next/image';
import { CalendarDays, Stethoscope } from 'lucide-react';
import stetoskopiImg from '@/assets/orari_ri.webp';
import article2Img from '@/assets/farmaci.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const postImages: (StaticImageData | null)[] = [stetoskopiImg, article2Img];
const postIcons = [CalendarDays, Stethoscope];
const postGradients = ['from-[#1a3557] via-[#1a4a6e] to-[#1a6fa8]', 'from-slate-700 via-teal-800 to-teal-600'];
const postTagColors = ['text-[#1a6fa8] bg-blue-50', 'text-teal-600 bg-teal-50'];

export default function LatestNews() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-20 overflow-hidden">

      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="text-[80px] md:text-[130px] font-extrabold leading-none tracking-widest text-gray-900 opacity-[0.05]">
          {t.news.watermark}
        </span>
      </div>

      <div className="relative z-10 text-center mb-14 px-6">
        <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
          {t.news.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.news.title}
        </h2>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          {t.news.desc}
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7">
        {t.news.posts.map((p, i) => {
          const Icon = postIcons[i];
          return (
            <div key={i} className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
              <div className="relative h-[180px]">
                {postImages[i] ? (
                  <Image src={postImages[i]!} alt={p.title} fill className={i === 1 ? 'object-contain p-4' : 'object-cover'} />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${postGradients[i]} flex items-center justify-center`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${postTagColors[i]}`}>{p.tag}</span>
                  {p.date && <span className="text-gray-400 text-xs">{p.date}</span>}
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
