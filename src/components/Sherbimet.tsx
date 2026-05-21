import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  Droplets,
  ShieldCheck,
  Ear,
  House,
  Activity,
  CalendarCheck,
} from 'lucide-react';
import stetoskopi from '@/assets/servicesbanner.jpg';

const services = [
  {
    num: '01',
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600',
    title: 'Vizita Specialistike',
    desc: 'Konsultime të plota me mjekë familjarë të specializuar, sipas nevojave tuaja shëndetësore.',
  },
  {
    num: '02',
    icon: Droplets,
    color: 'bg-teal-100 text-teal-600',
    title: 'Injeksione dhe Infuzione',
    desc: 'Dhënje e injeksioneve dhe infuzioneve intravenore sipas recetës dhe rekomandimit mjekësor.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    color: 'bg-rose-100 text-rose-600',
    title: 'Pastrim dhe Fashim Plagësh',
    desc: 'Pastrim dhe fashim profesional i plagëve për rikuperim të shpejtë dhe pa komplikime.',
  },
  {
    num: '04',
    icon: Ear,
    color: 'bg-amber-100 text-amber-600',
    title: 'Pastrim i Veshëve',
    desc: 'Procedurë e sigurt dhe efektive për heqjen e ceruminit dhe pastrim të kanalit të veshit.',
  },
  {
    num: '05',
    icon: House,
    color: 'bg-purple-100 text-purple-600',
    title: 'Vizita Shtëpiake',
    desc: 'Vizitë mjekësore direkt në shtëpinë tuaj — për ata që nuk mund të lëvizin ose kanë nevojë urgjente.',
  },
  {
    num: '06',
    icon: Activity,
    color: 'bg-green-100 text-green-600',
    title: 'EKG',
    desc: 'Elektrokardiogram për monitorimin e aktivitetit elektrik të zemrës dhe diagnostikim të hershëm.',
  },
];

export default function Sherbimet() {
  return (
    <main className="pt-[70px]">

      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden">
        <Image
          src={stetoskopi}
          alt="Shërbimet"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3557]/85 via-[#1a3557]/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-2">Ordinanca Liribes</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Shërbimet <span className="text-[#7ec8f0]">Tona</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm max-w-sm">
            Kujdes shëndetësor i personalizuar — nga vizita e parë deri te rikuperimi.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center">
        <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">Çfarë ofrojmë</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557] leading-tight mb-4">
          Shërbime të plota për çdo nevojë shëndetësore
        </h2>
        <p className="text-gray-400 text-base leading-relaxed">
          Ekipi ynë i specializuar ju ofron kujdes të personalizuar, me teknologji moderne dhe vëmendje të plotë ndaj çdo pacienti.
        </p>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ num, icon: Icon, color, title, desc }) => (
          <div
            key={num}
            className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-7 overflow-hidden group"
          >
            {/* Watermark number */}
            <span className="absolute top-2 -right-1 text-[72px] font-extrabold text-gray-100 leading-none select-none group-hover:text-[#1a6ea8]/10 transition-colors duration-300">
              {num}
            </span>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color.split(' ')[0]}`}>
              <Icon size={22} className={color.split(' ')[1]} />
            </div>

            {/* Text */}
            <h3 className="font-bold text-[#1a3557] text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1a6ea8]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="relative bg-[#1a3557] py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[100px] md:text-[160px] font-extrabold text-white/5 leading-none">Liribes</span>
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <CalendarCheck size={36} className="text-[#7ec8f0] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Gati për një vizitë?</h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            Kontaktoni ordinancën tonë dhe lini termin me mjekun tuaj sot.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[#1a3557] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#7ec8f0] transition-colors duration-200"
          >
            <CalendarCheck size={16} />
            Lëni Termin
          </Link>
        </div>

      </section>

    </main>
  );
}
