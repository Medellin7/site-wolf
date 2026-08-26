
const fs = require("fs");

// 1. Atualizar whatsapp.ts
fs.writeFileSync("src/utils/whatsapp.ts", `import { SITE_CONFIG } from "@/data/content";

export function getWhatsAppUrl(): string {
  const phone = SITE_CONFIG.whatsappNumber;
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return \`https://wa.me/\${phone}?text=\${message}\`;
}
`);

// 2. Atualizar Footer.tsx
fs.writeFileSync("src/components/layout/Footer.tsx", `import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider text-white">
                  WOLF <span className="text-emerald-400">DEV</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase">Full Stack</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm">
              Software House especializada em engenharia de software de alta performance, arquitetura modular e soluções escaláveis para o seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre a Empresa</Link></li>
              <li><Link href="#competencias" className="hover:text-emerald-400 transition-colors">Competências Técnicas</Link></li>
              <li><Link href="#servicos" className="hover:text-emerald-400 transition-colors">Nossas Soluções</Link></li>
              <li><Link href="#contato" className="hover:text-emerald-400 transition-colors">Contato Direto</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Canais Oficiais</h3>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:\${SITE_CONFIG.email}`}
                aria-label="E-mail"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500">E-mail: {SITE_CONFIG.email}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WOLF DEV FULL STACK. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0 text-emerald-500 font-mono">Clean Code & High Performance</p>
        </div>
      </div>
    </footer>
  );
}
`);

// 3. Atualizar Contact.tsx
fs.writeFileSync("src/components/sections/Contact.tsx", `import React from "react";
import { MessageCircle, Mail, Github, Linkedin, Terminal, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function Contact() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Vamos Iniciar Seu Projeto
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em Contato com a WOLF DEV
          </h3>
          <p className="text-slate-300 text-base sm:text-lg">
            Estamos prontos para transformar sua visão em um software seguro, escalável e de altíssima performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">WhatsApp Direto</h4>
                <p className="text-slate-400 text-sm">Atendimento ágil para tirar dúvidas e solicitar orçamentos em tempo real.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-2 text-emerald-400 font-semibold text-sm hover:underline"
                >
                  Abrir conversa no WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">E-mail Corporativo</h4>
                <p className="text-slate-400 text-sm">Envie o escopo detalhado do seu projeto para análise técnica.</p>
                <a
                  href={\`mailto:\${SITE_CONFIG.email}\`}
                  className="inline-block pt-2 text-emerald-400 font-semibold text-sm hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Iniciar Conversa</h4>
                <p className="text-xs text-slate-400">Resposta rápida via WhatsApp</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Clique no botão abaixo para ser direcionado diretamente ao WhatsApp oficial da <strong className="text-white">WOLF DEV FULL STACK</strong> com uma mensagem pronta para conversarmos sobre o seu projeto.
            </p>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-xl shadow-emerald-900/30 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-500 font-mono">// Desenvolvimento profissional do zero ao enterprise</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
`);

console.log("Atualizacao concluida com sucesso!");

