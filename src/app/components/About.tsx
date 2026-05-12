import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#D4AF37] text-sm font-sans tracking-widest uppercase mb-6 inline-block">
            El Regalo Perfecto
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f0] mb-10 leading-snug font-medium">
            <span className="italic">Donde lo Físico</span><br />
            Encuentra lo Eterno
          </h2>
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mb-10" />
          <p className="text-[#f5f5f0]/70 font-sans text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Creemos que los objetos cotidianos pueden albergar memorias extraordinarias. 
            Nuestro objetivo es unir la elegancia minimalista de un accesorio atemporal 
            con la tecnología inmersiva de la realidad aumentada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
