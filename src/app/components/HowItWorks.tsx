import { QrCode, Pointer, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Pointer className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.2} />,
    title: '1. Presiona el Botón',
    desc: 'Activa el escáner mágico web.',
  },
  {
    icon: <QrCode className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.2} />,
    title: '2. Enfoca tu Cámara',
    desc: 'Otorga permisos y enfoca la imagen.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.2} />,
    title: '3. Descubre la Magia AR',
    desc: 'Revive el momento sobre tu llavero.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#121212] border-t border-b border-[#D4AF37]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-[#f5f5f0] mb-16 text-center">
          La Experiencia <span className="text-[#D4AF37] italic">[Por definir]</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {/* Subtle connecting line on desktop */}
          <div className="hidden md:block absolute top-[2rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center bg-[#1a1a1a]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#D4AF37]/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 ring-1 ring-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-sans font-medium text-[#f5f5f0] mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-[#f5f5f0]/60 font-sans text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
