import { prisma } from "@/lib/prisma";

export async function Contact() {
  // Busca as configurações direto do banco de dados em tempo real
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "settings" },
  });

  const phone = settings?.whatsappNumber || "5583987275030";
  const message = encodeURIComponent(
    settings?.whatsappMessage || "Olá, WOLF DEV! Gostaria de solicitar um orçamento para o meu projeto."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const emailAddress = settings?.email || "contato@wolfdev.com.br";

  return (
    <section id="contato" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">VAMOS INICIAR SEU PROJETO</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
          Entre em Contato com a WOLF DEV
        </h2>
        <p className="text-slate-400 text-lg">
          Estamos prontos para transformar sua visão em um software seguro, escalável e de altíssima performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp Direto</h3>
            <p className="text-slate-400 text-sm mb-2">Atendimento ágil para tirar dúvidas e solicitar orçamentos em tempo real.</p>
            <p className="text-xs text-slate-500 mb-6">Clique no botão abaixo para ser direcionado diretamente ao WhatsApp oficial.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30"
          >
            Abrir conversa no WhatsApp
          </a>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">E-mail Corporativo</h3>
            <p className="text-slate-400 text-sm mb-2">Envie o escopo detalhado do seu projeto para análise técnica.</p>
            <p className="text-xs text-slate-500 mb-6">{emailAddress}</p>
          </div>
          <a
            href={"mailto:" + emailAddress}
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700"
          >
            Enviar E-mail Corporativo
          </a>
        </div>
      </div>
    </section>
  );
}