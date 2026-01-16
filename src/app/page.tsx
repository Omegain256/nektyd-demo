import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConversionEngine from "@/components/ConversionEngine";
import GeoSilo from "@/components/GeoSilo";
import FAQ from "@/components/FAQ";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Snowflake } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup />
      <Header />
      <Hero />

      {/* Proof Banner */}
      <section className="bg-white/5 py-12 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-cyan/5 blur-[120px] pointer-events-none" />
          <div className="space-y-2 relative">
            <div className="text-4xl font-industrial text-cyan">$40M+</div>
            <p className="text-[10px] uppercase font-industrial opacity-50 tracking-widest leading-none">LIABILITY CLAIMS PROTECTED</p>
          </div>
          <div className="space-y-2 relative">
            <div className="text-4xl font-industrial text-cyan">12,000+</div>
            <p className="text-[10px] uppercase font-industrial opacity-50 tracking-widest leading-none">ACTIVE TRACTORS MONITORING</p>
          </div>
          <div className="space-y-2 relative">
            <div className="text-4xl font-industrial text-cyan">2HRS</div>
            <p className="text-[10px] uppercase font-industrial opacity-50 tracking-widest leading-none">SAVED PER ROUTE / NIGHT</p>
          </div>
        </div>
      </section>

      <ConversionEngine />
      <GeoSilo />
      <FAQ />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="font-industrial text-3xl tracking-tighter flex items-center gap-2 justify-center md:justify-start">
              <Snowflake className="w-6 h-6 text-cyan" />
              NEKTYD DEMO.
            </div>
            <p className="font-sans text-white/40 max-w-sm">
              The industry's first "Gravity-Defying" platform for <span className="text-white/60">Winter Service Management</span> and <span className="text-white/60">Snow removal management</span>.
            </p>
            <div className="text-[10px] font-industrial text-white/20 uppercase tracking-widest">
              Serving: Chicago, Minneapolis, Toronto, Buffalo, Salt Lake City, Denver.
            </div>
          </div>

          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="text-xs opacity-50">PRODUCT</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>Fleet tracking</li>
                <li>Automated invoicing</li>
                <li>Enterprise Dispatch</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs opacity-50">SEO ARCHITECTURE</h4>
              <ul className="space-y-2 text-sm font-sans">
                <li>Snow Removal Software</li>
                <li>Salt Tracking Logs</li>
                <li>Winter Service Management</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-[10px] text-white/20 font-industrial text-center">
          © 2026 NEKTYD DEMO SOFTWARE INC. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}
