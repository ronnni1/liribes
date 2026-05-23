import Image from 'next/image';
import { MapPin, Armchair, CalendarDays, Building2 } from 'lucide-react';
import heroBanner from '@/assets/contactusbanner.png';
import room1 from '@/assets/liribes_benefits.png';
import room2 from '@/assets/liribes_benefits1.png';
import room3 from '@/assets/stetoskopi.webp';
import room4 from '@/assets/contactbanner.png';
import room5 from '@/assets/staff.png';
import room6 from '@/assets/servicesbanner.jpg';

const stats = [
  { icon: CalendarDays, value: '2004', label: 'Viti i themelimit' },
  { icon: MapPin, value: 'Ferizaj', label: 'Talinoç i Muhaxherëve' },
  { icon: Armchair, value: 'Ambient Modern', label: 'Pajisje të avancuara' },
  { icon: Building2, value: 'Ordinancë Private', label: 'Mjekësi Familjare' },
];

const rooms = [
  { title: 'Dhoma e Vizitave', desc: 'Hapësirë e pajisur për ekzaminime të përgjithshme dhe konsultime me mjekun familjar.', img: room1 },
  { title: 'Laboratori', desc: 'Laborator modern për analiza laboratorike me rezultate të shpejta dhe të besueshme.', img: room2 },
  { title: 'Dhoma e Procedurave', desc: 'Dhomë e dedikuar për injeksione, infuzione, pastrim plagësh dhe procedura të tjera.', img: room3 },
  { title: 'Dhoma e EKG-së', desc: 'Pajisje të avancuara për regjistrimin dhe analizimin e aktivitetit elektrik të zemrës.', img: room4 },
  { title: 'Pastrim i Veshëve', desc: 'Shërbim i specializuar për pastrimin dhe trajtimin e veshëve në mjedis steril.', img: room5 },
  { title: 'Dhoma e Pritjes', desc: 'Ambient i rehatshëm dhe i qetë ku pacientët presin me komoditet para vizitës.', img: room6 },
];

export default function RrethNesh() {
  return (
    <main className="pt-[70px]">

      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden">
        <Image
          src={heroBanner}
          alt="Rreth Ordinancës"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3557]/85 via-[#1a3557]/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-2">Ordinanca Liribes</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Rreth <span className="text-[#7ec8f0]">Ordinancës</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm max-w-xs">
            Mbi dy dekada kujdes shëndetësor cilësor për familjet e Prishtinës.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">Historia jonë</p>
          <h2 className="text-3xl font-bold text-[#1a3557] leading-snug mb-5">
            Mbi dy dekada në shërbim <br className="hidden md:block" /> të shëndetit tuaj
          </h2>
          <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mb-6" />
          <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Ordinanca Liribes u themelua në vitin <strong className="text-[#1a3557]">2004</strong> me një vizion të qartë: t'u ofrojë banorëve të Prishtinës kujdes shëndetësor familjar të besueshëm, human dhe të aksesueshëm.
            </p>
            <p>
              Gjatë dy dekadave të fundit, kemi shërbyer mijëra pacientë dhe familje, duke ndërtuar marrëdhënie afatgjata të bazuara mbi besim dhe profesionalizëm. Çdo pacient trajtohet me kujdes individual dhe respekt të plotë.
            </p>
            <p>
              Ordinanca ndodhet në <strong className="text-[#1a3557]">Talinoç i Muhaxherëve, Ferizaj</strong> — lehtësisht e aksesueshme, me ambient modern dhe ekip të dedikuar mjekësor.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="bg-[#1a3557] text-white p-3 rounded-xl">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1a3557]">{value}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">Ambientet tona</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557] leading-tight">
              Foto të Ordinancës
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">
              Ambiente moderne dhe të pajisura mirë për të siguruar kujdesin më të mirë shëndetësor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={room.img}
                    alt={room.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
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

    </main>
  );
}
