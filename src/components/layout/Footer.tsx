import React from 'react';
import { prisma } from '@/lib/prisma';
import { Terminal, Globe, Mail } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function Footer() {
  let settings = null;
  try {
    settings = await prisma.siteSettings.findUnique({
      where: { id: 'settings' },
    });
  } catch (e) {
    settings = null;
  }

  const email = settings?.email || 'wolfdevfullstack77@gmail.com';
  const github = settings?.github || 'https://github.com';
  const linkedin = settings?.linkedin || 'https://linkedin.com';
  const facebook = settings?.facebook || '';
  const instagram = settings?.instagram || '';

  return (
    <footer className='bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
        <div className='space-y-4 md:col-span-2'>
          <div className='flex items-center gap-2'>
            <div className='p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400'>
              <Terminal className='w-5 h-5' />
            </div>
            <span className='font-bold text-white text-lg tracking-tight'>
              WOLF DEV <span className='text-emerald-400'>FULL STACK</span>
            </span>
          </div>
          <p className='text-xs text-slate-400 max-w-sm'>
            Software House especializada em engenharia de software de alta performance, arquitetura modular e soluções escaláveis para o seu negócio.
          </p>
          <div className='flex items-center gap-2 text-xs text-emerald-400 font-mono'>
            <Mail className='w-4 h-4' />
            <span>{email}</span>
          </div>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase tracking-wider text-white mb-4'>Links Rápidos</h4>
          <ul className='space-y-2 text-xs'>
            <li><a href='#about' className='hover:text-emerald-400 transition-colors'>Sobre a Empresa</a></li>
            <li><a href='#skills' className='hover:text-emerald-400 transition-colors'>Competências Técnicas</a></li>
            <li><a href='#services' className='hover:text-emerald-400 transition-colors'>Nossas Soluções</a></li>
            <li><a href='#contact' className='hover:text-emerald-400 transition-colors'>Contato Direto</a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase tracking-wider text-white mb-4'>Redes Sociais</h4>
          <div className='flex flex-wrap gap-3'>
            {github && (
              <a href={github} target='_blank' rel='noopener noreferrer' className='px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 text-xs flex items-center gap-2 transition-colors'>
                <Globe className='w-3.5 h-3.5' /> GitHub
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target='_blank' rel='noopener noreferrer' className='px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 text-xs flex items-center gap-2 transition-colors'>
                <Globe className='w-3.5 h-3.5' /> LinkedIn
              </a>
            )}
            {instagram && (
              <a href={instagram} target='_blank' rel='noopener noreferrer' className='px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 text-xs flex items-center gap-2 transition-colors'>
                <Globe className='w-3.5 h-3.5' /> Instagram
              </a>
            )}
            {facebook && (
              <a href={facebook} target='_blank' rel='noopener noreferrer' className='px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 text-xs flex items-center gap-2 transition-colors'>
                <Globe className='w-3.5 h-3.5' /> Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500'>
        <p>&copy; {new Date().getFullYear()} WOLF DEV FULL STACK. Todos os direitos reservados.</p>
        <p className='mt-2 sm:mt-0 font-mono text-emerald-500/80'>Clean Code & High Performance</p>
      </div>
    </footer>
  );
}