'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Terminal, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('wolf_admin_logged', 'true');
        router.push('/admin');
      } else {
        setError(data.error || 'Erro ao realizar login');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden'>
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none'></div>

      <div className='max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative z-10 space-y-6'>
        <div className='text-center space-y-2'>
          <div className='inline-flex p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400 mb-2'>
            <Terminal className='w-8 h-8' />
          </div>
          <h1 className='text-2xl font-bold text-white tracking-tight'>WOLF DEV <span className='text-emerald-400'>ADMIN</span></h1>
          <p className='text-xs text-slate-400'>Acesse o painel de controle do seu site</p>
        </div>

        {error && (
          <div className='p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center'>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className='space-y-4'>
          <div className='space-y-1.5'>
            <label className='text-xs text-slate-300 font-medium'>E-mail Administrativo</label>
            <div className='relative'>
              <Mail className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='admin@wolfdev.com'
                className='w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors'
              />
            </div>
          </div>

          <div className='space-y-1.5'>
            <label className='text-xs text-slate-300 font-medium'>Senha de Acesso</label>
            <div className='relative'>
              <Lock className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500' />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='••••••••'
                className='w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors'
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-900/30'
          >
            <span>{loading ? 'Entrando...' : 'Acessar Painel'}</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        </form>

        <div className='text-center pt-2'>
          <a href='/' className='text-xs text-slate-500 hover:text-emerald-400 transition-colors'>
            &larr; Voltar para o site principal
          </a>
        </div>
      </div>
    </div>
  );
}

