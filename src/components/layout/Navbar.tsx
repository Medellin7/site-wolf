import React from "react";
import Link from "next/link";
import { MessageCircle, Terminal } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function Navbar() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white">
              WOLF <span className="text-emerald-400">DEV</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase">Full Stack</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</Link>
          <Link href="#competencias" className="hover:text-emerald-400 transition-colors">Competências</Link>
          <Link href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</Link>
          <Link href="#contato" className="hover:text-emerald-400 transition-colors">Contato</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
