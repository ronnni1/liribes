'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Si mund të lë termin?',
    a: 'Mund të lini termin duke na kontaktuar direkt nëpërmjet faqes së kontaktit, duke telefonuar në numrin tonë, ose duke vizituar ordinancën gjatë orarit të punës.',
  },
  {
    q: 'Cili është orari i punës?',
    a: 'Ordinanca punon nga e hëna deri të shtunën, nga ora 10:00 deri në 18:00. Të dielën ordinanca është e mbyllur.',
  },
  {
    q: 'A ofrohen vizita shtëpiake?',
    a: 'Po, ofrojmë vizita shtëpiake për pacientët që nuk mund të lëvizin ose kanë nevojë urgjente. Kontaktoni me ne paraprakisht për të caktuar vizitën.',
  },
  {
    q: 'Cilët mjekë punojnë në ordinancë?',
    a: 'Ordinanca udhëhiqet nga Dr. Naser Fetahu, mjek familjar me mbi 40 vjet përvojë, dhe Dr. Besart Fetahu, i cili sjell njohuri dhe energji të reja në shërbim të pacientëve.',
  },
  {
    q: 'A kryhen analiza laboratorike?',
    a: 'Po, kryejmë analiza laboratorike në ordinancën tonë. Ekipi ynë është i pajisur për të kryer analizat e nevojshme dhe për t\'ju ofruar rezultate të shpejta dhe të besueshme.',
  },
  {
    q: 'A mund të vij pa termin paraprak?',
    a: 'Po, pranojmë edhe pacientë pa termin paraprak. Megjithatë, rekomandojmë rezervimin paraprak për të shmangur pritjen dhe për t\'u siguruar që mjeku është i disponueshëm.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-[#1a6ea8] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            Keni pyetje?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3557] leading-tight">
            Pyetjet më të Shpeshta
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-[#1a6ea8]/40 shadow-md' : 'border-gray-100 shadow-sm'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm md:text-base transition-colors ${open === i ? 'text-[#1a3557]' : 'text-gray-700'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#1a6ea8] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                style={{ transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease' }}
                className={`overflow-hidden ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5">
                  <div
                    style={{ transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1) 0.1s' }}
                    className={`h-0.5 bg-[#1a6ea8] rounded-full mb-3 ${open === i ? 'w-8' : 'w-0'}`}
                  />
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
