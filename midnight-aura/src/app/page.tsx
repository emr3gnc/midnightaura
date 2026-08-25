import ScrollAnimation from "@/components/ScrollAnimation";
import Header from "@/components/Header";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col">
      <Header />
      
      {/* Scroll Animation Hero */}
      <div className="w-full">
        <ScrollAnimation />
      </div>
      
      {/* Spacer to allow scrolling past the pinned animation */}
      
      {/* Content Section below the animation */}
      <section className="py-24 bg-offwhite px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-cherry mb-6">Midnight Koleksiyonunu Keşfet</h2>
          <p className="text-lg text-cherry/80 max-w-2xl mx-auto mb-12 font-light">
            Zarafetin ve tutkunun kusursuz uyumu. Geceye damgasını vuran özel tasarımlarımızla kendinizi daha özel hissedin.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-cherry/10 rounded-sm mb-3 flex items-center justify-center">
                  {/* Placeholder for actual products */}
                  <div className="text-cherry/30 text-lg md:text-2xl font-title">Ürün {item}</div>
                </div>
                <h3 className="text-xs md:text-lg font-semibold text-cherry mb-1 line-clamp-2 leading-tight">Midnight Özel Tasarım Set {item}</h3>
                <p className="text-cherry/80 mb-3 font-bold text-sm md:text-base">₺1,299.00</p>
                <button className="mt-auto flex items-center justify-center space-x-2 w-full border border-cherry text-cherry py-2 md:py-3 text-xs md:text-sm font-semibold hover:bg-cherry hover:text-offwhite transition-colors duration-300 rounded-sm">
                  <span>Sepete Ekle</span>
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <button className="inline-flex items-center space-x-2 bg-cherry text-offwhite px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-cherry/90 transition-colors">
              <span>Tüm Koleksiyonu Gör</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-cherry text-offwhite py-12 px-4 border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif tracking-widest mb-2">MIDNIGHT AURA</h3>
            <p className="font-light text-offwhite/70">© 2026 Midnight Aura. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-offwhite/70 transition-colors">Instagram</a>
            <a href="#" className="hover:text-offwhite/70 transition-colors">Twitter</a>
            <a href="#" className="hover:text-offwhite/70 transition-colors">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
