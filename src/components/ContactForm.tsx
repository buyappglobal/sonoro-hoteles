import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500">Nombre</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors font-serif text-lg"
              placeholder="Su nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500">Hotel / Empresa</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors font-serif text-lg"
              placeholder="Nombre del establecimiento"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
          <input 
            type="email" 
            className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors font-serif text-lg"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-500">Mensaje</label>
          <textarea 
            rows={4}
            className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors font-serif text-lg resize-none"
            placeholder="Cuéntenos sobre su espacio..."
          />
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300"
        >
          Solicitar Demo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>
    </div>
  );
}
