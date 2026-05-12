import { X, User, Menu } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-6 md:px-12 bg-transparent absolute top-0 z-50">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Memory Key Logo" className="w-8 h-8 object-contain" />
        <span className="font-serif text-xl font-medium tracking-wide text-[#f5f5f0]">Memory Key</span>
      </div>
      <nav className="flex items-center gap-6">
        <a 
          href="#how-it-works" 
          className="text-sm font-sans tracking-widest uppercase text-[#f5f5f0]/80 hover:text-[#D4AF37] transition-colors"
        >
          How It Works
        </a>

        <Dialog.Root>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-[#f5f5f0]/80 hover:text-[#D4AF37] transition-colors outline-none cursor-pointer flex items-center ml-2">
                <Menu className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#121212] border border-[#D4AF37]/20 p-2 min-w-[150px] shadow-[0_0_20px_rgba(212,175,55,0.05)] rounded-xl mt-4 z-[100]" align="end">
              <Dialog.Trigger asChild>
                <DropdownMenuItem className="text-sm font-sans tracking-widest uppercase text-[#f5f5f0]/80 focus:bg-[#1a1a1a] focus:text-[#D4AF37] cursor-pointer rounded-lg py-3 px-4 outline-none">
                  Acerca de
                </DropdownMenuItem>
              </Dialog.Trigger>
              <DropdownMenuItem asChild className="text-sm font-sans tracking-widest uppercase text-[#f5f5f0]/80 focus:bg-[#1a1a1a] focus:text-[#D4AF37] cursor-pointer rounded-lg py-3 px-4 outline-none">
                <a 
                  href="http://localhost:3000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex"
                >
                  Admin
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
            <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-[90vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-[#121212] border border-[#D4AF37]/20 p-6 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.05)] max-h-[85vh] overflow-y-auto focus:outline-none">
              <div className="flex justify-between items-start mb-10">
                <Dialog.Title className="font-serif text-3xl md:text-4xl text-[#f5f5f0] font-medium">
                  Acerca de <span className="italic text-[#D4AF37]">Memory Key</span>
                </Dialog.Title>
                <Dialog.Close className="text-[#f5f5f0]/50 hover:text-[#D4AF37] transition-colors cursor-pointer rounded-full p-2 bg-white/5 hover:bg-white/10 outline-none">
                  <X className="w-5 h-5" />
                </Dialog.Close>
              </div>

              <div className="space-y-10">
                {/* Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
                    <h3 className="font-sans text-xs tracking-widest uppercase text-[#D4AF37] mb-4 font-semibold">Misión</h3>
                    <p className="text-[#f5f5f0]/70 font-sans text-sm md:text-base leading-relaxed font-light">
                      Somos un negocio dedicado a crear artículos personalizados que busca generar una experiencia única e inolvidable con la realidad aumentada, brindando una forma innovadora y emotiva al conservar sus mejores recuerdos en un pequeño detalle.
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
                    <h3 className="font-sans text-xs tracking-widest uppercase text-[#D4AF37] mb-4 font-semibold">Visión</h3>
                    <p className="text-[#f5f5f0]/70 font-sans text-sm md:text-base leading-relaxed font-light">
                      Ser reconocidos como creadores de experiencias únicas detalles personalizados, con la tecnología de realidad aumentada de fotos a videos, manteniendo la innovación y el servicio al cliente personalizado.
                    </p>
                  </div>
                </div>

                {/* Mi Equipo */}
                <div className="pt-4 border-t border-[#D4AF37]/10">
                  <h3 className="font-serif text-2xl text-[#f5f5f0] mb-8">Socios</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a1a1a] border border-[#D4AF37]/20 mb-4 flex items-center justify-center overflow-hidden group-hover:border-[#D4AF37]/60 transition-colors shadow-lg">
                          <User className="w-8 h-8 text-[#f5f5f0]/20 group-hover:text-[#D4AF37]/50 transition-colors" />
                        </div>
                        <h4 className="font-sans font-medium text-[#f5f5f0] text-sm md:text-base tracking-wide">Por definir</h4>
                        <span className="font-sans text-xs md:text-sm text-[#D4AF37]/70 mt-1">Rol por definir</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
