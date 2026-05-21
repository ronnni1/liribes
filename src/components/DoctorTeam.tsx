import Image from 'next/image';
import Link from 'next/link';
import m1 from '@/assets/member1.jpg';
import m2 from '@/assets/member2.jpg';
import m3 from '@/assets/member3.jpg';
import m4 from '@/assets/member4.jpg';

const members = [
  { img: m1, name: 'Dr. Arben Krasniqi',  role: 'Mjek Familjar' },
  { img: m2, name: 'Dr. Erion Halimi',    role: 'Mjek i Brendshëm' },
  { img: m3, name: 'Dr. Arta Berisha',    role: 'Mjeke Familjare' },
  { img: m4, name: 'Inf. Vjosa Gashi',    role: 'Infermiere e Diplomuar' },
];

export default function DoctorTeam() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">

      {/* Watermark */}
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="text-[80px] md:text-[130px] font-extrabold text-gray-100 leading-none tracking-widest">
          Ekipi
        </span>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 px-6">
        <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
          Stafi ynë
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Mjekët tanë me eksperiencë
        </h2>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          Ekip profesionistësh shëndetësorë të dedikuar për kujdesin tuaj dhe të familjes.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((m) => (
          <div key={m.name} className="group flex flex-col items-center text-center">

            {/* Photo */}
            <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <h3 className="font-bold text-gray-900 text-base">{m.name}</h3>
            <p className="text-[#1a6fa8] text-sm mt-0.5">{m.role}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="relative z-10 flex justify-center mt-14 px-6">
        <Link
          href="/ekipi"
          className="bg-[#1a3557] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1a6fa8] transition-colors"
        >
          Shiko të gjithë stafin
        </Link>
      </div>

      {/* Bottom blue wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none"
          className="w-full block h-[80px] sm:h-[110px] md:h-[150px]">
          <path
            d="M0,185 C150,165 300,95 500,65 C670,38 750,125 920,115 C1090,105 1150,42 1350,38 C1410,36 1435,37 1440,37 L1440,200 L0,200 Z"
            fill="#1a6fa8"
          />
        </svg>
      </div>
    </section>
  );
}
