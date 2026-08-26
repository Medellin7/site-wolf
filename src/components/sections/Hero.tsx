'use client';

import React, { useEffect, useState } from 'react';
import { Terminal, ArrowRight, ShieldCheck, Code, Cpu } from 'lucide-react';

export function Hero() {
  const [whatsappUrl, setWhatsappUrl] = useState('https://wa.me/5583999999999');

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.whatsappNumber) {
          const phone = data.whatsappNumber.replace(/\D/g, '');
          const message = encodeURIComponent(data.whatsappMessage || 'Olá, vim pelo site e gostaria de um orçamento.');
          setWhatsappUrl(`https://wa.me/${phone}?text=${message}`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden'>
      <div className='max-w-7xl mx-auto space-y-12'>
        <div className='text-center space-y-6 max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono'>
            <Terminal className='w-3.5 h-3.5' />
            <span>FULL STACK SOFTWARE HOUSE & ENGENHARIA DE ALTA PERFORMANCE</span>
          </div>
          
          <h1 className='text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none'>
            Transformamos ideias complexas em <span className='text-emerald-400'>softwares robustos e escaláveis.</span>
          </h1>

          <p className='text-base sm:text-lg text-slate-400 max-w-2xl mx-auto'>
            Desenvolvimento Full Stack sob medida. Do MVP ao sistema enterprise, entregamos código limpo, arquitetura sólida e foco total no crescimento do seu negócio.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-xl shadow-emerald-950'
            >
              <span>Solicitar Orçamento Gratuito</span>
              <ArrowRight className='w-4 h-4' />
            </a>

            <a
              href='#services'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all border border-slate-800'
            >
              <span>Conhecer Soluções</span>
              &rarr;
            </a>
          </div>
        </div>

        {/* Features badges */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-900'>
          <div className='flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80'>
            <div className='p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400'>
              <Code className='w-5 h-5' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-white'>Clean Code & Arquitetura</h3>
              <p className='text-xs text-slate-400'>Padrões rigorosos de engenharia.</p>
            </div>
          </div>

          <div className='flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80'>
            <div className='p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400'>
              <ShieldCheck className='w-5 h-5' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-white'>Segurança & Performance</h3>
              <p className='text-xs text-slate-400'>Proteção e velocidade máxima.</p>
            </div>
          </div>

          <div className='flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80'>
            <div className='p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400'>
              <Cpu className='w-5 h-5' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-white'>Do Zero ao Enterprise</h3>
              <p className='text-xs text-slate-400'>Escalabilidade para o seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}