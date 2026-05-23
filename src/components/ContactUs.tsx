'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CalendarCheck, User } from 'lucide-react';
import contactBanner from '@/assets/contactbanner.png';
import contactUsBanner from '@/assets/contactusbanner.png';
import { useLanguage } from '@/contexts/LanguageContext';

const doctors = ['Dr. Naser Fetahu', 'Dr. Besart Fetahu'];
const publicHolidays = ['01-01', '05-01', '12-31'];

function isBlocked(dateStr: string) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const day = d.getUTCDay();
  if (day === 0) return true;
  const md = dateStr.slice(5);
  return publicHolidays.includes(md);
}

function today() {
  return new Date().toISOString().split('T')[0];
}

export default function ContactUs() {
  const { t } = useLanguage();
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');

  function handleDate(val: string) {
    if (isBlocked(val)) {
      setDate('');
      setDateError(t.contact.dateError);
    } else {
      setDate(val);
      setDateError('');
    }
  }

  const infoItems = [
    { icon: Phone, label: 'Dr. Naser Fetahu', value: '044 172 736', color: 'bg-[#1a3557]' },
    { icon: Phone, label: 'Dr. Besart Fetahu', value: '049 557 216', color: 'bg-[#1a6ea8]' },
    { icon: Mail, label: t.contact.infoLabels.email, value: 'info@liribes.com', color: 'bg-[#1a3557]' },
    { icon: MapPin, label: t.contact.infoLabels.address, value: t.contact.infoLabels.addressVal, color: 'bg-[#1a6ea8]' },
    { icon: Clock, label: t.contact.infoLabels.hours, value: t.contact.infoLabels.hoursVal, color: 'bg-[#1a3557]' },
  ];

  return (
    <main className="pt-[70px]">

      <section className="relative h-[340px] overflow-hidden">
        <Image src={contactUsBanner} alt="Contact banner" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3557]/80 via-[#1a3557]/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-2">{t.contact.heroLabel}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t.contact.heroTitle} <span className="text-[#7ec8f0]">{t.contact.heroHighlight}</span>
          </h1>
          <p className="mt-3 text-white/80 text-sm max-w-xs">{t.contact.heroDesc}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a3557] mb-1">{t.contact.infoTitle}</h2>
            <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <div className={`${color} text-white p-3 rounded-xl flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-56 shadow-lg">
            <Image src={contactBanner} alt="Ordinanca" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3557]/60 to-transparent flex items-end p-5">
              <p className="text-white font-semibold text-sm">{t.contact.clinicCaption}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-[#1a3557] mb-1">{t.contact.formTitle}</h2>
          <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mb-6" />

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder={t.contact.namePlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition" />
            </div>

            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="tel" placeholder={t.contact.phonePlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition" />
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.contact.doctorLabel}</p>
              <div className="grid grid-cols-2 gap-3">
                {doctors.map((d) => (
                  <button key={d} type="button" onClick={() => setDoctor(d)}
                    className={`flex flex-col items-center gap-1.5 px-3 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      doctor === d ? 'border-[#1a6ea8] bg-[#1a6ea8]/5 text-[#1a3557]' : 'border-gray-200 text-gray-500 hover:border-[#1a6ea8]/40'
                    }`}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ${doctor === d ? 'bg-[#1a3557]' : 'bg-gray-300'}`}>
                      {d.split(' ')[1][0]}{d.split(' ')[2][0]}
                    </div>
                    <span className="text-center leading-tight">{d}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.contact.dateLabel}</p>
              <div className="relative">
                <CalendarCheck size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input type="date" min={today()} value={date} onChange={(e) => handleDate(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-800 focus:outline-none focus:ring-2 transition ${
                    dateError ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-[#1a6ea8] focus:ring-[#1a6ea8]/20'
                  }`} />
              </div>
              {dateError && <p className="mt-1.5 text-xs text-red-500">{dateError}</p>}
              <p className="mt-1.5 text-xs text-gray-400">{t.contact.dateHint}</p>
            </div>

            <textarea rows={3} placeholder={t.contact.notesPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition resize-none" />

            <button type="submit"
              className="mt-1 flex items-center justify-center gap-2 bg-[#1a3557] hover:bg-[#1a6ea8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200">
              <CalendarCheck size={16} />
              {t.contact.submitBtn}
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
