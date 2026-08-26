import { prisma } from "@/lib/prisma";

export async function Services() {
  // Busca as configurações direto do banco de dados em tempo real
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "settings" },
  });

  const phone = settings?.whatsappNumber || "5583987275030";
  const message = encodeURIComponent(
    settings?.whatsappMessage || "Olá, WOLF DEV! Gostaria de solicitar um orçamento para o meu projeto."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">VITRINE DE SOLUÇÕES</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          O que a WOLF DEV oferece ao seu projeto
        </h3>
        <p className="text-slate-400 text-lg">
          Soluções completas desenhadas sob medida para entregar máxima conversão, robustez e performance ao seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Web Apps & MVPs de Alta Conversão</h4>
            <p className="text-slate-400 text-sm mb-6">Validação rápida de ideias de negócios com Next.js e alta performance de carregamento, focados em conversão e experiência do usuário.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Solicitar Orçamento &rarr;
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">APIs & Backends Escaláveis</h4>
            <p className="text-slate-400 text-sm mb-6">Microsserviços, arquitetura modular, segurança avançada (JWT) e documentação clara com Node.js e NestJS para suportar alto tráfego.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Solicitar Orçamento &rarr;
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Sistemas Sob Medida (Enterprise)</h4>
            <p className="text-slate-400 text-sm mb-6">Plataformas corporativas, ERPs e dashboards personalizados desenvolvidos rigorosamente de acordo com a regra de negócio da sua empresa.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Solicitar Orçamento &rarr;
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Modernização & DevOps</h4>
            <p className="text-slate-400 text-sm mb-6">Implementação de Docker, Nginx, CI/CD, refatoração de código legado e otimização de bancos de dados PostgreSQL com Prisma ORM.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Solicitar Orçamento &rarr;
          </a>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center max-w-3xl mx-auto">
        <p className="text-slate-300 mb-4 font-medium">Tem um projeto personalizado ou precisa de um DEV Sênior?</p>
        <p className="text-slate-400 text-sm mb-6">Vamos conversar sobre a sua ideia, analisar os requisitos técnicos e estruturar o roadmap ideal para o seu sistema.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg"
        >
          Falar Diretamente no WhatsApp
        </a>
      </div>
    </section>
  );
}