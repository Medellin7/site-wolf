import React from "react";
import { ShieldCheck, Rocket, Wrench, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Profissionalismo e Seriedade
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia de Software focada em resultados reais
          </h3>
          <p className="text-slate-300 text-base sm:text-lg">
            Na <strong className="text-white">WOLF DEV FULL STACK</strong>, unimos rigor técnico, arquitetura modular e compromisso absoluto com prazos para entregar sistemas que impulsionam o seu negócio.
          </p>
        </div>

        {/* Grid de Abordagens de Trabalho */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Projetos do Zero */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Projetos do Zero (Greenfield)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Desenvolvemos sua aplicação inteiramente planejada, desde a modelagem relacional do banco de dados até a interface de usuário de alta conversão.
              </p>
              <ul className="space-y-2 text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Arquitetura modular planejada para escala</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Escolha inteligente de banco de dados (PostgreSQL + Prisma)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deploy automatizado com Docker e Nginx</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-900 text-xs text-emerald-400 font-mono">
              // Da ideia ao produto pronto para o mercado
            </div>
          </div>

          {/* Card 2: Projetos Padrões e Evolução */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Projetos Padrões & Evolução</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Refatoramos código legado, otimizamos performance de sistemas existentes e injetamos novas funcionalidades com segurança total.
              </p>
              <ul className="space-y-2 text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aplicação rigorosa de Clean Code e Clean Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Segurança avançada com autenticação e autorização robustas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Testes, debugging e estabilidade em ambiente de produção</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-900 text-xs text-emerald-400 font-mono">
              // Evolução contínua e manutenibilidade
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
