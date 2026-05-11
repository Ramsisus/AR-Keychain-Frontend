import { Hexagon, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#121212] flex flex-col items-center border-t border-[#D4AF37]/10">
      <div className="flex items-center gap-2 mb-8">
        <Hexagon className="w-5 h-5 text-[#D4AF37]/80" strokeWidth={1.5} />
        <span className="font-serif text-lg font-medium tracking-wide text-[#f5f5f0]/80">[Por definir]</span>
      </div>
      
      <div className="flex gap-8 mb-12">
        <a href="#" className="text-[#f5f5f0]/50 hover:text-[#D4AF37] transition-colors font-sans text-sm uppercase tracking-widest">
          Instagram
        </a>
        <a href="#" className="text-[#f5f5f0]/50 hover:text-[#D4AF37] transition-colors font-sans text-sm uppercase tracking-widest">
          Twitter
        </a>
        <a href="#" className="text-[#f5f5f0]/50 hover:text-[#D4AF37] transition-colors font-sans text-sm uppercase tracking-widest">
          Contacto
        </a>
      </div>

      <div className="text-[#f5f5f0]/30 text-xs font-sans tracking-wide text-center">
        © 2026 [Por definir] AR Llaveros. El Regalo Perfecto.
      </div>
    </footer>
  );
}
