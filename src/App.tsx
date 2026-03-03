import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Music, Film, ShieldCheck, Coins } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';
import VisualGallery from './components/VisualGallery';
import ContactForm from './components/ContactForm';

function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-serif tracking-wider font-bold">ANDALUSIAN CINEMATIC</div>
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block text-xs uppercase tracking-widest hover:text-gold-400 transition-colors"
        >
          Contacto
        </button>
      </nav>

      {/* Hero Section */}
      <header ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop" 
            alt="Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-white/80"
          >
            Identidad Sensorial para Hospitality
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8"
          >
            El Sonido del <br/>
            <span className="italic text-gold-400">Lujo Silencioso</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <button 
              onClick={() => scrollToSection('audio')}
              className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase text-xs tracking-widest"
            >
              Escuche la Experiencia
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </header>

      {/* Concept Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              No vendemos música de fondo. <br/>
              <span className="text-neutral-500 italic">Vendemos una atmósfera.</span>
            </h2>
          </div>
          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
            <p>
              El huésped de hoy busca desconexión y autenticidad. Nuestra propuesta es dotar a su hotel de una banda sonora propia, inspirada en el entorno de Huelva (Doñana, Riotinto, Sierra), que refuerce su marca y mejore el bienestar del cliente.
            </p>
            <p>
              Transforme su espacio en un destino inolvidable a través del diseño sonoro y visual.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section id="audio" className="py-32 bg-neutral-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-widest mb-4 block">La Propuesta Sonora</span>
            <h2 className="text-4xl md:text-5xl font-serif">Paisajes Sonoros</h2>
          </div>
          <AudioPlayer />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-2xl bg-white/[0.02]">
            <Music className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="text-2xl font-serif">Diseño A Medida</h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Creación de paisajes sonoros (Soundscapes) exclusivos para Lobby, Spa y zonas comunes.
            </p>
          </div>
          <div className="space-y-4 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-2xl bg-white/[0.02]">
            <ShieldCheck className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="text-2xl font-serif">Licencia Directa</h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Música 100% original de Andalusian Cinematic, libre de gestiones externas de derechos de autor.
            </p>
          </div>
          <div className="space-y-4 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-2xl bg-white/[0.02]">
            <Film className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="text-2xl font-serif">Curaduría Atmosférica</h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Listas de reproducción que evolucionan según la hora del día (mañanas enérgicas, atardeceres chill-out).
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-0">
        <div className="py-16 px-6 text-center">
           <span className="text-gold-500 text-xs uppercase tracking-widest mb-4 block">El Complemento Visual</span>
           <h2 className="text-4xl md:text-5xl font-serif mb-8">La imagen que acompaña al sonido</h2>
           <p className="text-neutral-400 max-w-2xl mx-auto font-light">
             Visualizers de Alta Gama y paisajes de Huelva capturados con drones cinematográficos.
           </p>
        </div>
        <VisualGallery />
      </section>

      {/* Business / Tax Rebate */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Ventajas Competitivas</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">30% Tax Rebate</h4>
                  <p className="text-neutral-600 font-light">
                    Acceso a servicios de filmación profesional con apoyo en incentivos fiscales para campañas internacionales.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Ahorro Administrativo</h4>
                  <p className="text-neutral-600 font-light">
                    Al ser música propia, simplificamos drásticamente la gestión de licencias y derechos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-neutral-100 rounded-2xl overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
              alt="Hotel Luxury" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Comience el Viaje</h2>
          <p className="text-neutral-400 mb-16 font-light">Solicite una demo personalizada para su establecimiento.</p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-serif tracking-widest">ANDALUSIAN CINEMATIC</div>
          <div className="text-xs text-neutral-500 font-mono">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
