'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, Clock, User, Phone, Stethoscope, LogOut, RefreshCw, XCircle, MessageCircle } from 'lucide-react';

type Booking = {
  id: string;
  name: string;
  phone: string;
  doctor: string;
  service: string;
  date: string;
  time: string;
  created_at: string;
};

function statusBadge(date: string) {
  const today = new Date().toISOString().split('T')[0];
  if (date === today) return { label: 'Sot', cls: 'bg-amber-100 text-amber-700' };
  if (date > today) return { label: 'Ardhshëm', cls: 'bg-green-100 text-green-700' };
  return { label: 'Kaluar', cls: 'bg-gray-100 text-gray-500' };
}

function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) return '383' + digits.slice(1);
  return digits;
}

type RefuzeModal = { booking: Booking; reason: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'today' | 'past'>('upcoming');
  const [doctorFilter, setDoctorFilter] = useState('Dr. Naser Fetahu');
  const [refuzeModal, setRefuzeModal] = useState<RefuzeModal | null>(null);
  const [deleting, setDeleting] = useState(false);

  async function fetchBookings() {
    setLoading(true);
    const res = await fetch('/api/admin/bookings');
    if (res.status === 401) { router.push('/admin/login'); return; }
    const data = await res.json();
    setBookings(data.bookings ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchBookings(); }, []);

  async function confirmRefuze() {
    if (!refuzeModal) return;
    const { booking, reason } = refuzeModal;

    // window.open must be called synchronously (direct user action) before any await
    const msg = `Pershendetje ${booking.name},\n\nTermini juaj në Ordinancën Liribes për datën *${booking.date}* në orën *${booking.time}* është anuluar.\n\nArsyeja: ${reason || 'Nuk është specifikuar'}\n\nJu faleminderit për mirëkuptim.\n— Ordinanca Liribes`;
    const phone = formatPhone(booking.phone);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');

    setRefuzeModal(null);
    setDeleting(true);

    await fetch('/api/admin/bookings', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: booking.id }),
    });
    setBookings(prev => prev.filter(b => b.id !== booking.id));
    setDeleting(false);
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const today = new Date().toISOString().split('T')[0];

  const filtered = bookings.filter(b => {
    if (b.doctor !== doctorFilter) return false;
    if (filter === 'today') return b.date === today;
    if (filter === 'upcoming') return b.date >= today;
    if (filter === 'past') return b.date < today;
    return true;
  });

  const doctors = ['Dr. Naser Fetahu', 'Dr. Besart Fetahu'];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f0f4f8] pt-[70px]">
      {/* Header */}
      <div className="bg-[#1a3557] text-white px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Ordinanca Liribes</h1>
          <p className="text-white/60 text-xs">Panel Administrativ</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={fetchBookings} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition">
            <RefreshCw size={14} /> Rifresko
          </button>
          <button onClick={logout} className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 rounded-xl transition">
            <LogOut size={14} /> Dil
          </button>
        </div>
      </div>

      <div className="w-full px-4 py-6 md:max-w-6xl md:mx-auto md:px-6 md:py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-4 md:gap-4 md:mb-8">
          {[
            { label: 'Gjithsej', value: bookings.length, color: 'bg-[#1a3557] text-white' },
            { label: 'Sot', value: bookings.filter(b => b.date === today).length, color: 'bg-amber-500 text-white' },
            { label: 'Ardhshëm', value: bookings.filter(b => b.date > today).length, color: 'bg-green-600 text-white' },
            { label: 'Kaluar', value: bookings.filter(b => b.date < today).length, color: 'bg-gray-400 text-white' },
          ].map(s => (
            <div key={s.label} className={`${s.color} rounded-2xl p-4 md:p-5`}>
              <p className="text-2xl md:text-3xl font-bold">{s.value}</p>
              <p className="text-sm opacity-80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 mb-5 md:flex-row md:flex-wrap md:items-center md:mb-6">
          <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100 w-full md:w-auto">
            {(['upcoming', 'today', 'all', 'past'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${filter === f ? 'bg-[#1a3557] text-white' : 'text-gray-500 hover:text-[#1a3557]'}`}>
                {f === 'upcoming' ? 'Ardhshëm' : f === 'today' ? 'Sot' : f === 'all' ? 'Të gjitha' : 'Kaluar'}
              </button>
            ))}
          </div>
          <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100 w-full md:w-auto">
            {doctors.map(d => (
              <button key={d} onClick={() => setDoctorFilter(d)}
                className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${doctorFilter === d ? 'bg-[#1a6ea8] text-white' : 'text-gray-500 hover:text-[#1a3557]'}`}>
                {d.replace('Dr. ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-400 text-sm">Duke ngarkuar...</div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl flex items-center justify-center py-20 text-gray-400 text-sm shadow-sm border border-gray-100">Nuk ka termine për këtë filtër.</div>
        ) : (
          <>
            {/* Mobile cards */}
            <div className="flex flex-col gap-3 md:hidden">
              {filtered.map(b => {
                const status = statusBadge(b.date);
                return (
                  <div key={b.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.cls}`}>{status.label}</span>
                      <button onClick={() => setRefuzeModal({ booking: b, reason: '' })}
                        className="flex items-center gap-1 text-xs font-medium text-red-400 border border-red-200 px-2.5 py-1.5 rounded-lg">
                        <XCircle size={13} /> Refuzo
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                      <div>
                        <p className="text-gray-400 mb-0.5">Pacienti</p>
                        <p className="font-semibold text-gray-800">{b.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Data &amp; Ora</p>
                        <p className="font-semibold text-[#1a3557]">{b.date} · {b.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Telefoni</p>
                        <p className="text-gray-600">{b.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Doktori</p>
                        <p className="text-gray-600">{b.doctor.replace('Dr. ', '')}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-400 mb-0.5">Shërbimi</p>
                        <p className="text-gray-600">{b.service}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Statusi</th>
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Data &amp; Ora</th>
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Pacienti</th>
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Telefoni</th>
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Doktori</th>
                    <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-4">Shërbimi</th>
                    <th className="px-5 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map(b => {
                    const status = statusBadge(b.date);
                    return (
                      <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.cls}`}>{status.label}</span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 text-[#1a3557] font-semibold">
                            <CalendarDays size={14} className="text-gray-400" />{b.date}
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400 mt-0.5">
                            <Clock size={13} />{b.time}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#1a3557]/10 flex items-center justify-center text-[#1a3557] font-bold text-xs flex-shrink-0">
                              {b.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            <span className="font-medium text-gray-800">{b.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 text-gray-600">
                            <Phone size={13} className="text-gray-400" />{b.phone}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <User size={13} className="text-gray-400" />{b.doctor}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 text-gray-600">
                            <Stethoscope size={13} className="text-gray-400" />{b.service}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <button onClick={() => setRefuzeModal({ booking: b, reason: '' })}
                            className="flex items-center gap-1 text-xs font-medium text-red-400 hover:text-red-600 border border-red-200 hover:border-red-400 px-2.5 py-1.5 rounded-lg transition-all">
                            <XCircle size={13} /> Refuzo
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Refuze Modal */}
      {refuzeModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a3557] text-base">Refuzo Terminin</h3>
                <p className="text-xs text-gray-400">{refuzeModal.booking.name} · {refuzeModal.booking.date} {refuzeModal.booking.time}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-2">Arsyeja e refuzimit (do të dërgohet në WhatsApp):</p>
            <textarea
              rows={3}
              placeholder="p.sh. Doktori është i zënë atë ditë..."
              value={refuzeModal.reason}
              onChange={e => setRefuzeModal(m => m ? { ...m, reason: e.target.value } : m)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 resize-none transition"
            />

            <div className="mt-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-600">Mesazhi që do të dërgohet:</span><br />
              Pershendetje <b>{refuzeModal.booking.name}</b>, termini juaj për datën <b>{refuzeModal.booking.date}</b> në orën <b>{refuzeModal.booking.time}</b> është anuluar. Arsyeja: <i>{refuzeModal.reason || '—'}</i>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setRefuzeModal(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition">
                Anulo
              </button>
              <button
                onClick={confirmRefuze}
                disabled={deleting}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold transition disabled:opacity-50">
                <MessageCircle size={15} />
                {deleting ? 'Duke dërguar...' : 'Fshi & Dërgo WhatsApp'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
