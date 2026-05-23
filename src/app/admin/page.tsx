'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, Clock, User, Phone, Stethoscope, Trash2, LogOut, RefreshCw } from 'lucide-react';

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

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'today' | 'past'>('upcoming');
  const [doctorFilter, setDoctorFilter] = useState('Dr. Naser Fetahu');

  async function fetchBookings() {
    setLoading(true);
    const res = await fetch('/api/admin/bookings');
    if (res.status === 401) { router.push('/admin/login'); return; }
    const data = await res.json();
    setBookings(data.bookings ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchBookings(); }, []);

  async function deleteBooking(id: string) {
    if (!confirm('A jeni i sigurt që doni ta fshini këtë termin?')) return;
    await fetch('/api/admin/bookings', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setBookings(prev => prev.filter(b => b.id !== id));
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
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <div className="bg-[#1a3557] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Ordinanca Liribes</h1>
          <p className="text-white/60 text-xs">Panel Administrativ</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchBookings} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition">
            <RefreshCw size={14} /> Rifresko
          </button>
          <button onClick={logout} className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-xl transition">
            <LogOut size={14} /> Dil
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Gjithsej', value: bookings.length, color: 'bg-[#1a3557] text-white' },
            { label: 'Sot', value: bookings.filter(b => b.date === today).length, color: 'bg-amber-500 text-white' },
            { label: 'Ardhshëm', value: bookings.filter(b => b.date > today).length, color: 'bg-green-600 text-white' },
            { label: 'Kaluar', value: bookings.filter(b => b.date < today).length, color: 'bg-gray-400 text-white' },
          ].map(s => (
            <div key={s.label} className={`${s.color} rounded-2xl p-5`}>
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm opacity-80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
            {(['upcoming', 'today', 'all', 'past'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-[#1a3557] text-white' : 'text-gray-500 hover:text-[#1a3557]'}`}>
                {f === 'upcoming' ? 'Ardhshëm' : f === 'today' ? 'Sot' : f === 'all' ? 'Të gjitha' : 'Kaluar'}
              </button>
            ))}
          </div>
          <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
            {doctors.map(d => (
              <button key={d} onClick={() => setDoctorFilter(d)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${doctorFilter === d ? 'bg-[#1a6ea8] text-white' : 'text-gray-500 hover:text-[#1a3557]'}`}>
                {d.replace('Dr. ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-400 text-sm">Duke ngarkuar...</div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center py-20 text-gray-400 text-sm">Nuk ka termine për këtë filtër.</div>
          ) : (
            <div className="overflow-x-auto">
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
                            <CalendarDays size={14} className="text-gray-400" />
                            {b.date}
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400 mt-0.5">
                            <Clock size={13} />
                            {b.time}
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
                            <Phone size={13} className="text-gray-400" />
                            {b.phone}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <User size={13} className="text-gray-400" />
                            {b.doctor}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 text-gray-600">
                            <Stethoscope size={13} className="text-gray-400" />
                            {b.service}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <button onClick={() => deleteBooking(b.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
