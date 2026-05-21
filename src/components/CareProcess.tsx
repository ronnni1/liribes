'use client';

import { useState } from 'react';
import Image from 'next/image';
import staffImg from '@/assets/staff.png';

const steps = [
  {
    number: '01',
    title: 'Rezervo Takim',
    desc: 'Planifiko takimin tënd mjekësor shpejt dhe pa vështirësi, sipas orarit dhe nevojave tuaja.',
    bg: 'bg-gradient-to-br from-slate-700 via-[#1a4a6e] to-[#1a6fa8]',
  },
  {
    number: '02',
    title: 'Konsultim me Mjekun Familjar',
    desc: 'Diskutim i plotë dhe i personalizuar me mjekun tuaj familjar për gjendjen shëndetësore.',
    bg: 'bg-gradient-to-br from-slate-700 via-teal-800 to-teal-600',
  },
  {
    number: '03',
    title: 'Diagnoza dhe Plani i Trajtimit',
    desc: 'Mjeku harton një plan trajtimi të personalizuar, të qartë dhe efektiv për ju.',
    bg: 'bg-gradient-to-br from-slate-700 via-blue-900 to-blue-700',
  },
  {
    number: '04',
    title: 'Mbështetje e Vazhdueshme',
    desc: 'Ndjekja e rregullt e shëndetit tuaj dhe të familjes për rezultate afatgjata.',
    bg: 'bg-gradient-to-br from-slate-700 via-[#1a3557] to-[#1a5a8a]',
  },
];

export default function CareProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* ── Left ── */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#1a6fa8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              PROCESI YNË I KUJDESIT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              <span className="text-[#1a6fa8]">Udhëtimi Juaj</span> drejt<br />
              Kujdesit më të Mirë Fillon Këtu
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
              Ndjekim një qasje të strukturuar dhe të fokusuar tek pacienti, për të siguruar
              që çdo hap i udhëtimit tuaj shëndetësor të jetë i thjeshtë, i qartë dhe efektiv.
            </p>

            <Image
              src={staffImg}
              alt="Ekipi mjekësor Liribes"
              width={520}
              height={340}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ── Right — accordion cards ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={[
                  'relative overflow-hidden rounded-2xl cursor-pointer select-none',
                  'transition-all duration-500 ease-in-out',
                  step.bg,
                  active === i ? 'h-[190px] shadow-xl' : 'h-[80px]',
                ].join(' ')}
              >
                {/* Number */}
                <span
                  className={[
                    'absolute top-5 left-6 font-bold text-white transition-all duration-300',
                    active === i ? 'text-3xl' : 'text-2xl',
                  ].join(' ')}
                >
                  {step.number}
                </span>

                {/* Text — slides in when active */}
                <div
                  className={[
                    'absolute bottom-0 left-0 right-0 px-6 pb-6',
                    'transition-all duration-500',
                    active === i
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5 pointer-events-none',
                  ].join(' ')}
                >
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
