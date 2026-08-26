'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Terminal, Save, LogOut, MessageSquare, Mail, Globe, CheckCircle, Shield } from 'lucide-react';

export default function AdminPage() {
  const [settings, setSettings] = useState({
    whatsappNumber: '',
    whatsappMessage: '',
    email: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    kwai: '',
  });

  const [security, setSecurity] = useState({
    currentEmail: 'admin@wolfdev.com',
    newEmail: 'admin@wolfdev.com',
    newPassword: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSec, setSavingSec] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [secMsg, setSecMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem('wolf_admin_logged');
    if (!isLogged) {
      router.push('/login');
      return;
    }

    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data) setSettings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg('');

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSuccessMsg('Configurações salvas com sucesso!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Erro ao salvar configurações.');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSecurity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSec(true);
    setSecMsg('');

    try {
      const res = await fetch('/api/auth/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(security),
      });

      const data = await res.json();

      if (res.ok) {
        setSecurity((prev) => ({ ...prev, currentEmail: data.email, newPassword: '' }));
        setSecMsg('Credenciais de acesso atualizadas com sucesso!');
        setTimeout(() => setSecMsg(''), 4000);
      } else {
        alert(data.error || 'Erro ao atualizar credenciais.');
      }
    } catch (err) {
      alert('Erro ao atualizar credenciais.');
    } finally {
      setSavingSec(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('wolf_admin_logged');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400 font-mono'>
        Carregando painel...
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto space-y-8'>
        
        {/* Header */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl'>
          <div className='flex items-center gap-3'>
            <div className='p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400'>
              <Terminal className='w-6 h-6' />
            </div>
            <div>
              <h1 className='text-xl font-bold text-white'>WOLF DEV <span className='text-emerald-400'>BACKOFFICE</span></h1>
              <p className='text-xs text-slate-400'>Gerenciamento centralizado de contatos e redes sociais</p>
            </div>
          </div>
          <div className='flex items-center gap-3 w-full sm:w-auto'>
            <a
              href='/'
              target='_blank'
              className='flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium text-center transition-colors'
            >
              Ver Site &rarr;
            </a>
            <button
              onClick={handleLogout}
              className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-medium transition-colors'
            >
              <LogOut className='w-4 h-4' />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {successMsg && (
          <div className='flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm'>
            <CheckCircle className='w-5 h-5 shrink-0' />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form Settings */}
        <form onSubmit={handleSaveSettings} className='space-y-6'>
          
          {/* WhatsApp & E-mail */}
          <div className='p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6'>
            <div className='flex items-center gap-2 pb-4 border-b border-slate-800 text-emerald-400 font-semibold text-sm'>
              <MessageSquare className='w-4 h-4' />
              <span>Canais de Conversão Direta</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Número do WhatsApp (com DDI e DDD)</label>
                <input
                  type='text'
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  placeholder='5583999999999'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
                <span className='text-[10px] text-slate-500'>Exemplo: 5583998887766</span>
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>E-mail de Contato (Exibido no Site)</label>
                <input
                  type='email'
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  placeholder='contato@wolfdev.com.br'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-xs text-slate-300 font-medium'>Mensagem Padrão do WhatsApp</label>
              <textarea
                rows={2}
                value={settings.whatsappMessage}
                onChange={(e) => setSettings({ ...settings, whatsappMessage: e.target.value })}
                className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 resize-none'
              />
            </div>
          </div>

          {/* Social Networks */}
          <div className='p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6'>
            <div className='flex items-center gap-2 pb-4 border-b border-slate-800 text-emerald-400 font-semibold text-sm'>
              <Globe className='w-4 h-4' />
              <span>Redes Sociais & Links Oficiais</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>GitHub Link</label>
                <input
                  type='text'
                  value={settings.github}
                  onChange={(e) => setSettings({ ...settings, github: e.target.value })}
                  placeholder='https://github.com/...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>LinkedIn Link</label>
                <input
                  type='text'
                  value={settings.linkedin}
                  onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                  placeholder='https://linkedin.com/in/...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Facebook</label>
                <input
                  type='text'
                  value={settings.facebook}
                  onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                  placeholder='https://facebook.com/...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Instagram</label>
                <input
                  type='text'
                  value={settings.instagram}
                  onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                  placeholder='https://instagram.com/...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>TikTok</label>
                <input
                  type='text'
                  value={settings.tiktok}
                  onChange={(e) => setSettings({ ...settings, tiktok: e.target.value })}
                  placeholder='https://tiktok.com/@...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Kwai</label>
                <input
                  type='text'
                  value={settings.kwai}
                  onChange={(e) => setSettings({ ...settings, kwai: e.target.value })}
                  placeholder='https://kwai.com/@...'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>
            </div>
          </div>

          <div className='flex justify-end pt-2'>
            <button
              type='submit'
              disabled={saving}
              className='flex items-center gap-2 py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-xl shadow-emerald-900/35'
            >
              <Save className='w-5 h-5' />
              <span>{saving ? 'Salvando...' : 'Salvar Alterações'}</span>
            </button>
          </div>
        </form>

        {/* Security / Credentials Form */}
        <form onSubmit={handleSaveSecurity} className='space-y-6 pt-6 border-t border-slate-800/80'>
          <div className='p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6'>
            <div className='flex items-center gap-2 pb-4 border-b border-slate-800 text-emerald-400 font-semibold text-sm'>
              <Shield className='w-4 h-4' />
              <span>Segurança & Credenciais de Acesso ao Painel</span>
            </div>

            {secMsg && (
              <div className='flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm'>
                <CheckCircle className='w-5 h-5 shrink-0' />
                <span>{secMsg}</span>
              </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Novo E-mail de Login</label>
                <input
                  type='email'
                  value={security.newEmail}
                  onChange={(e) => setSecurity({ ...security, newEmail: e.target.value })}
                  required
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs text-slate-300 font-medium'>Nova Senha (deixe em branco para não alterar)</label>
                <input
                  type='password'
                  value={security.newPassword}
                  onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                  placeholder='••••••••'
                  className='w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500'
                />
              </div>
            </div>

            <div className='flex justify-end pt-2'>
              <button
                type='submit'
                disabled={savingSec}
                className='flex items-center gap-2 py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs transition-all border border-slate-700'
              >
                <Shield className='w-4 h-4' />
                <span>{savingSec ? 'Atualizando...' : 'Atualizar Credenciais'}</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}

