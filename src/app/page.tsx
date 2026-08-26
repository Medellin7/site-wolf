import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      
      <Hero />
      
      <div id="sobre">
        <About />
      </div>

      <div id="competencias">
        <Skills />
      </div>

      <Services />
      
      <Contact />

      <WhatsappFloat />
    </main>
  );
}