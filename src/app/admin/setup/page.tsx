'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ShieldCheck, Eye, EyeOff } from 'lucide-react';

export default function AdminSetup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetch('/api/admin/setup')
      .then(r => r.json())
      .then(d => {
        if (d.exists) router.replace('/admin/login');
        else setChecking(false);
      });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) { setError('Fjalëkalimet nuk përputhen.'); return; }
    if (password.length < 6) { setError('Fjalëkalimi duhet të ketë të paktën 6 karaktere.'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/admin/login');
      } else {
        setError(data.error);
      }
    } catch {
      setError('Diçka shkoi keq. Provo përsëri.');
    } finally {
      setLoading(false);
    }
  }

  if (checking) return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center">
      <p className="text-gray-400 text-sm">Duke kontrolluar...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-600 text-white p-4 rounded-2xl mb-4">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-2xl font-bold text-[#1a3557]">Krijo Admin</h1>
          <p className="text-gray-400 text-sm mt-1 text-center">Kjo bëhet vetëm një herë.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Emri i përdoruesit"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition"
            />
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Fjalëkalimi (min. 6 karaktere)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition"
            />
            <button type="button" onClick={() => setShowPassword(p => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Konfirmo fjalëkalimin"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a6ea8] focus:ring-2 focus:ring-[#1a6ea8]/20 transition"
            />
            <button type="button" onClick={() => setShowConfirm(p => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Duke krijuar...' : 'Krijo Llogarinë'}
          </button>
        </form>
      </div>
    </div>
  );
}
