import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Stethoscope } from 'lucide-react';
import stetoskopiImg from '@/assets/stetoskopi.webp';
import article2Img from '@/assets/article2.jpg';

type Post = {
  image?: StaticImageData;
  gradient: string;
  icon: React.ElementType;
  iconBg: string;
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  desc: string;
  href: string;
};

const posts: Post[] = [
  {
    image: stetoskopiImg,
    gradient: 'from-[#1a3557] via-[#1a4a6e] to-[#1a6fa8]',
    icon: CalendarDays,
    iconBg: 'bg-white/20',
    tag: 'Njoftim',
    tagColor: 'text-[#1a6fa8] bg-blue-50',
    date: 'Korrik 2025',
    title: 'Orare të Reja të Punës nga Korriku',
    desc: "Nga korriku, ordinanca do të funksionojë me dy turne: paradite Dr. Besart Fetahu dhe pasdite Dr. Naser Fetahu, për t'ju shërbyer sa më mirë.",
    href: '/lajmet/orare-te-reja',
  },
  {
    image: article2Img,
    gradient: 'from-slate-700 via-teal-800 to-teal-600',
    icon: Stethoscope,
    iconBg: 'bg-white/20',
    tag: 'Shërbime',
    tagColor: 'text-teal-600 bg-teal-50',
    date: 'Qershor 2025',
    title: 'Shërbime të Reja Mjekësore',
    desc: 'Kemi zgjeruar shërbimet tona me pajisje moderne për diagnozë të shpejtë, duke siguruar kujdes më të plotë për çdo pacient.',
    href: '/lajmet/sherbime-te-reja',
  },
];

export default function LatestNews() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">

      {/* Watermark */}
      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="text-[80px] md:text-[130px] font-extrabold text-gray-100 leading-none tracking-widest">
          Lajmet
        </span>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 px-6">
        <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
          Çka ka të re
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Lajmet nga Ordinanca Jonë
        </h2>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          Njoftimet dhe lajmet më të fundit nga ekipi i Liribes.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7">
        {posts.map((p) => (
          <div key={p.title} className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">

            {/* Header — photo or gradient */}
            <div className="relative h-[180px]">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center`}>
                    <p.icon size={28} className="text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
                <span className="text-gray-400 text-xs">{p.date}</span>
              </div>

              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                {p.desc}
              </p>

              <Link
                href={p.href}
                className="inline-flex items-center gap-1.5 text-[#1a6fa8] font-semibold text-sm hover:gap-2.5 transition-all duration-200"
              >
                Lexo më shumë <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
