'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AdminLogin() {
  const router = useRouter();
  const { t } = useLanguage();
  const al = t.adminLogin;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        router.push('/admin');
      } else {
        const data = await res.json();
        setError(data.error);
      }
    } catch {
      setError(al.errorMsg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#1a3557] text-white p-4 rounded-2xl mb-4">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-bold text-[#1a3557]">{al.title}</h1>
          <p className="text-gray-400 text-sm mt-1">{al.subtitle}</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-center">
          <p className="text-xs text-amber-700 font-medium">{al.notice}</p>
          <p className="text-xs text-amber-600 mt-0.5">{al.noticePatient}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={al.usernamePlaceholder}
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
              placeholder={al.passwordPlaceholder}
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

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 bg-[#1a3557] hover:bg-[#1a6ea8] text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? al.loggingIn : al.loginBtn}
          </button>
        </form>
      </div>
    </div>
  );
}
