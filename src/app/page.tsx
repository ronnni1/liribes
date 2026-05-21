import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, BadgeCheck, Award, HeartHandshake } from 'lucide-react';
import bannerImg from '@/assets/banner.png';
import homeImg from '@/assets/home_img.png';
import benefitsImg from '@/assets/liribes_benefits.png';
import benefitsImg1 from '@/assets/liribes_benefits1.png';

const benefits = [
  {
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-500',
    title: 'Të gjitha shërbimet mjekësore',
    desc: 'Ofrojmë shërbime të plota mjekësore për çdo nevojë shëndetësore të familjes.',
  },
  {
    icon: BadgeCheck,
    color: 'bg-yellow-100 text-yellow-500',
    title: 'Çmimet më të ulëta në qytet',
    desc: 'Shërbime cilësore me çmime të përballueshme për çdo familje.',
  },
  {
    icon: Award,
    color: 'bg-pink-100 text-pink-500',
    title: 'Mjekë me Eksperiencë',
    desc: 'Stafi ynë ka vite eksperiencë në fushën e mjekësisë familjare.',
  },
  {
    icon: HeartHandshake,
    color: 'bg-teal-100 text-teal-500',
    title: '5000+ Pacientë të Kënaqur',
    desc: 'Besimi i pacientëve tanë është dëshmi e cilësisë së shërbimit tonë.',
  },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Banner"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 15%' }}
          priority
        />
        <div className="absolute inset-0 bg-[#1a6fa8]/65" />

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="w-full block h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px]"
          >
            <path
              d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Gjeni Mjekun &<br />Rezervoni Takim
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
              Që nga dita e parë e hapjes, ekipi ynë është fokusuar në ofrimin e shërbimeve
              cilësore mjekësore për të gjithë familjen tuaj.
            </p>
            <Link
              href="/sherbimet"
              className="inline-flex items-center bg-[#1a3557] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#15294a] transition-colors"
            >
              Kërko Specialitetin
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none">
          <span className="text-[120px] md:text-[180px] font-extrabold text-gray-100 leading-none tracking-widest">
            ABOUT
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={homeImg}
                alt="Rreth klinikës"
                width={480}
                height={500}
                className="object-contain w-full h-auto max-w-[480px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Liribes — Klinika më e Mirë,<br />
                Shërbime për çdo nevojë shëndetësore.
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                Klinika jonë private ofron kujdes shëndetësor të personalizuar për të gjithë
                familjen. Me mjekë të specializuar dhe pajisje moderne, jemi të përkushtuar
                ndaj shëndetit tuaj në çdo hap të rrugës.
              </p>
              <Link
                href="/sherbimet"
                className="inline-flex items-center bg-[#1a3557] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#15294a] transition-colors"
              >
                Shfleto Shërbimet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">

        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-[520px] h-[480px] rounded-full bg-slate-50 opacity-80 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-slate-50 opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* Watermark */}
        <div className="absolute top-8 left-0 pointer-events-none select-none overflow-hidden">
          <span className="text-[100px] md:text-[150px] font-extrabold text-gray-100 leading-none">
            Benefit
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — benefits list */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-10">
                Kontroll mjekësor i specializuar<br />
                i personalizuar për pacientin
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${b.color.split(' ')[0]}`}>
                      <b.icon size={22} className={b.color.split(' ')[1]} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — circular images */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">

                {/* Main large circle */}
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                  <Image
                    src={benefitsImg}
                    alt="Shërbime mjekësore"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary smaller circle — bottom-left overlapping */}
                <div className="absolute -bottom-6 -left-6 w-[130px] h-[130px] md:w-[155px] md:h-[155px] rounded-full overflow-hidden border-[5px] border-white shadow-xl">
                  <Image
                    src={benefitsImg1}
                    alt="Ekipi mjekësor"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
