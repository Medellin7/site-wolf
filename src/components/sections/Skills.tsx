import React from "react";
import { SKILLS_DATA } from "@/data/content";
import { Layout, Server, Database, Cpu, Wrench, CheckCircle } from "lucide-react";

export function Skills() {
  return (
    <section id="competencias" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Stack Tecnológica de Ponta
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competências Técnicas Validadas no Mercado
          </h3>
          <p className="text-slate-300 text-base sm:text-lg">
            Ferramentas modernas de alto desempenho escolhidas estrategicamente para garantir escalabilidade, segurança e estabilidade.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Frontend */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Layout className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Frontend</h4>
            </div>
            <ul className="space-y-2.5">
              {SKILLS_DATA.frontend.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Backend</h4>
            </div>
            <ul className="space-y-2.5">
              {SKILLS_DATA.backend.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Banco de Dados */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Banco de Dados</h4>
            </div>
            <ul className="space-y-2.5">
              {SKILLS_DATA.database.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">DevOps & Infra</h4>
            </div>
            <ul className="space-y-2.5">
              {SKILLS_DATA.devops.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engenharia & Qualidade */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Engenharia de Software</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SKILLS_DATA.engineering.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
