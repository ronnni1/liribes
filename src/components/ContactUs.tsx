'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CalendarCheck, User, CheckCircle2 } from 'lucide-react';
import contactBanner from '@/assets/contactbanner.webp';
import contactUsBanner from '@/assets/contactusbanner.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const doctors = ['Dr. Naser Fetahu', 'Dr. Besart Fetahu'];
const publicHolidays = ['01-01', '05-01', '12-31'];

const ALL_SLOTS = [
  '10:00','10:30','11:00','11:30','12:00','12:30',
  '13:00','13:30','14:00','14:30','15:00','15:30',
  '16:00','16:30','17:00','17:30',
];

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [doctor, setDoctor] = useState('');
  const [service, setService] = useState(t.contact.services[0]);
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [time, setTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!date || !doctor) { setBookedSlots([]); setTime(''); return; }
    setLoadingSlots(true);
    setTime('');
    fetch(`/api/bookings/slots?date=${date}&doctor=${encodeURIComponent(doctor)}`)
      .then(r => r.json())
      .then(data => { setBookedSlots(data.booked ?? []); })
      .finally(() => setLoadingSlots(false));
  }, [date, doctor]);

  function handleDate(val: string) {
    if (isBlocked(val)) {
      setDate('');
      setDateError(t.contact.dateError);
    } else {
      setDate(val);
      setDateError('');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !doctor || !service || !date || !time) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctor, date, time, name: `${firstName} ${lastName}`, phone, service }),
      });
      if (res.status === 409) {
        setSubmitError(t.contact.slotTaken);
        setTime('');
        setBookedSlots(prev => [...prev, time]);
      } else if (!res.ok) {
        setSubmitError(t.contact.submitErrorMsg);
      } else {
        setSuccess(true);
      }
    } catch {
      setSubmitError(t.contact.submitErrorMsg);
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSuccess(false);
    setFirstName(''); setLastName(''); setPhone('');
    setDoctor(''); setService(''); setDate(''); setTime('');
  }

  const infoItems = [
    { icon: Phone, label: t.contact.infoLabels.phone, value: '044 880 718', color: 'bg-[#1a3557]' },
    { icon: Mail, label: t.contact.infoLabels.email, value: 'ordinancaliribesi@gmail.com', color: 'bg-[#1a3557]' },
    { icon: MapPin, label: t.contact.infoLabels.address, value: t.contact.infoLabels.addressVal, color: 'bg-[#1a6ea8]' },
    { icon: Clock, label: t.contact.infoLabels.hours, value: t.contact.infoLabels.hoursVal, color: 'bg-[#1a3557]' },
  ];

  return (
    <main className="pt-[70px]">

      <section className="relative h-[340px] overflow-hidden">
        <Image src={contactUsBanner} alt="Contact banner" fill className="object-cover object-center" priority quality={100} />
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
                    <p className="text-sm font-medium text-gray-800 mt-0.5 break-all">{value}</p>
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
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <CheckCircle2 size={56} className="text-green-500" />
              <h3 className="text-xl font-bold text-[#1a3557]">{t.contact.successTitle}</h3>
              <p className="text-gray-400 text-sm max-w-xs">{t.contact.successDesc}</p>
              <button onClick={resetForm} className="mt-2 text-sm text-[#1a6ea8] font-semibold hover:underline">
                {t.contact.successReset}
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#1a3557] mb-1">{t.contact.formTitle}</h2>
              <div className="w-12 h-1 rounded-full bg-[#1a6ea8] mb-6" />

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* Emri + Mbiemri */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={t.contact.firstNamePlaceholder} value={firstName} onChange={e => setFirstName(e.target.value)} required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition" />
                  </div>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={t.contact.lastNamePlaceholder} value={lastName} onChange={e => setLastName(e.target.value)} required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition" />
                  </div>
                </div>

                {/* Telefoni */}
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="tel" placeholder={t.contact.phonePlaceholder} value={phone} onChange={e => setPhone(e.target.value)} required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition" />
                </div>

                {/* Doktori */}
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

                {/* Lloji i shërbimit */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.contact.serviceLabel}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {t.contact.services.map((s) => (
                      <button key={s} type="button" onClick={() => setService(s)}
                        className={`px-3 py-2.5 rounded-xl border-2 text-xs font-medium text-left transition-all ${
                          service === s ? 'border-[#1a6ea8] bg-[#1a6ea8]/5 text-[#1a3557]' : 'border-gray-200 text-gray-500 hover:border-[#1a6ea8]/40'
                        }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data */}
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

                {/* Orët */}
                {date && doctor && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.contact.timeLabel}</p>
                    {loadingSlots ? (
                      <p className="text-xs text-gray-400">{t.contact.loadingSlots}</p>
                    ) : (
                      <div className="grid grid-cols-4 gap-2">
                        {ALL_SLOTS.map(slot => {
                          const taken = bookedSlots.includes(slot);
                          const selected = time === slot;
                          return (
                            <button key={slot} type="button" disabled={taken} onClick={() => setTime(slot)}
                              className={`py-2 rounded-xl text-xs font-semibold border-2 transition-all ${
                                taken
                                  ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed line-through'
                                  : selected
                                  ? 'border-[#1a6ea8] bg-[#1a6ea8] text-white'
                                  : 'border-gray-200 text-gray-600 hover:border-[#1a6ea8]/50 hover:text-[#1a3557]'
                              }`}>
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="w-3 h-3 rounded bg-gray-100 border border-gray-200 inline-block" />{t.contact.slotTakenLabel}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="w-3 h-3 rounded bg-[#1a6ea8] inline-block" />{t.contact.slotSelectedLabel}
                      </span>
                    </div>
                  </div>
                )}

                {submitError && <p className="text-xs text-red-500 text-center">{submitError}</p>}

                <button type="submit"
                  disabled={submitting || !firstName || !lastName || !phone || !doctor || !service || !date || !time}
                  className="mt-1 flex items-center justify-center gap-2 bg-[#1a3557] hover:bg-[#1a6ea8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <CalendarCheck size={16} />
                  {submitting ? t.contact.submitting : t.contact.submitBtn}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

    </main>
  );
}
