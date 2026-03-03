import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop",
    title: "Amanecer en Doñana",
    desc: "Calma infinita"
  },
  {
    url: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=2070&auto=format&fit=crop",
    title: "Texturas de Riotinto",
    desc: "Historia mineral"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
    title: "Niebla en la Sierra",
    desc: "Misterio natural"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    title: "Costa de la Luz",
    desc: "Horizontes dorados"
  }
];

export default function VisualGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {images.map((img, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="relative group aspect-[16/9] overflow-hidden cursor-pointer"
        >
          <img 
            src={img.url} 
            alt={img.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-2xl font-serif text-white italic mb-2">{img.title}</h3>
            <p className="text-xs font-sans text-white/80 uppercase tracking-widest">{img.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
