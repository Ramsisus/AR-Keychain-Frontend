import { motion } from 'motion/react';
import { ScanFace } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'close-scanner') {
        setIsScannerOpen(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#2a2a2a]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-sans tracking-widest uppercase mb-6 bg-[#D4AF37]/5 backdrop-blur-sm">
            La Nueva Era del Recuerdo
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f5f5f0] leading-tight font-medium mb-6">
            Preservando momentos<br /> <span className="italic text-[#D4AF37]">eternos</span>
          </h1>
          <p className="text-[#f5f5f0]/70 font-sans text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Tu llavero es más que un objeto. Es una puerta hacia tus memorias más preciadas a través de la realidad aumentada.
          </p>
        </motion.div>

        {/* The Pulsting Glow Button */}
        <motion.button
          onClick={() => setIsScannerOpen(true)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group mt-12 cursor-pointer"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f5f5f0]/30 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative flex items-center justify-center gap-3 bg-[#1a1a1a] border border-[#D4AF37]/40 px-10 py-5 rounded-full backdrop-blur-xl">
            <ScanFace className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-[#f5f5f0] font-sans font-medium text-lg tracking-wide uppercase">
              Abrir Escáner de Magia
            </span>
          </div>
        </motion.button>
      </div>

      {/* Overlay del Escáner */}
      {isScannerOpen && (
        <div className="fixed inset-0 z-[100] bg-black">
          <iframe
            src="/scanner.html"
            allow="camera; microphone"
            className="w-full h-full border-none"
          />
        </div>
      )}
    </section>
  );
}
