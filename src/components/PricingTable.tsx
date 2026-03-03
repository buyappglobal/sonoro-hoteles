import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Info, Mic, Radio, Calendar } from 'lucide-react';

const tiers = [
  {
    name: "BASIC",
    subtitle: "Identidad",
    price: "59 €",
    period: "/ mes",
    description: "La suite esencial con identidad de marca.",
    features: [
      { label: "Spoken con Marca", value: true },
      { label: "Zonas Cubiertas", value: "Lobby / Comunes" },
      { label: "Eventos / Seminarios", value: false },
      { label: "Cambio Estacional", value: "1 vez al año" },
      { label: "Uso en Publicidad", value: false },
    ],
    highlight: false
  },
  {
    name: "PREMIUM",
    subtitle: "Versatilidad",
    price: "129 €",
    period: "/ mes",
    description: "Ambientes expandidos y audios para eventos.",
    features: [
      { label: "Spoken con Marca", value: true },
      { label: "Zonas Cubiertas", value: "Lobby + Spa + Rest." },
      { label: "Eventos / Seminarios", value: "3 audios / año" },
      { label: "Cambio Estacional", value: "4 veces (Estacional)" },
      { label: "Uso en Publicidad", value: "Solo Redes Sociales" },
    ],
    highlight: true
  },
  {
    name: "EXCLUSIVE",
    subtitle: "Partnership",
    price: "249 €",
    period: "/ mes",
    description: "Su departamento creativo de sonido in-house.",
    features: [
      { label: "Spoken con Marca", value: true },
      { label: "Zonas Cubiertas", value: "Todo el Hotel + Ext." },
      { label: "Eventos / Seminarios", value: "Ilimitados" },
      { label: "Cambio Estacional", value: "Mensual / Demand" },
      { label: "Uso en Publicidad", value: "Radio, TV y Digital" },
    ],
    highlight: false,
    extraNote: "Incluye Cuñas de Megafonía Premium y producción bajo demanda."
  }
];

export default function PricingTable() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Annual Payment Incentive */}
      <div className="text-center mb-12">
        <span className="inline-block bg-gold-500/10 text-gold-400 border border-gold-500/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
          ✨ Contratación anual: 2 meses de suscripción GRATIS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              tier.highlight 
                ? 'bg-white/5 border-gold-500 shadow-2xl shadow-gold-500/10 scale-105 z-10' 
                : 'bg-transparent border-white/10 hover:border-white/20'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-gold-500/20">
                <Star className="w-3 h-3 fill-current" /> Recomendado
              </div>
            )}

            <div className="text-center mb-8 border-b border-white/10 pb-8">
              <h3 className={`text-sm font-serif tracking-widest mb-2 ${tier.highlight ? 'text-gold-400 font-bold' : 'text-neutral-400'}`}>{tier.name}</h3>
              <div className="text-3xl font-serif font-light mb-2">{tier.subtitle}</div>
              <p className="text-xs text-neutral-500 mb-6 h-8">{tier.description}</p>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-serif">{tier.price}</span>
                <span className="text-neutral-500 text-sm">{tier.period}</span>
              </div>
            </div>

            <div className="flex-1 space-y-5 mb-8">
              {tier.features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-1 text-sm">
                  <span className="text-neutral-500 text-xs uppercase tracking-wider">{feature.label}</span>
                  <div className="font-light flex items-center gap-2">
                    {feature.value === true ? (
                      <span className="flex items-center gap-2 text-white">
                        <Check className="w-4 h-4 text-gold-500" /> Incluido
                      </span>
                    ) : feature.value === false ? (
                      <span className="flex items-center gap-2 text-neutral-600">
                        <X className="w-4 h-4" /> No incluido
                      </span>
                    ) : (
                      <span className={`text-white ${tier.highlight ? 'font-medium' : ''}`}>
                        {feature.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {tier.extraNote && (
              <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10 text-xs text-neutral-300 italic leading-relaxed flex gap-3">
                <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                {tier.extraNote}
              </div>
            )}

            <button className={`w-full py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-bold ${
              tier.highlight
                ? 'bg-gold-500 text-black hover:bg-gold-400 shadow-lg shadow-gold-500/20'
                : 'border border-white/20 hover:bg-white hover:text-black'
            }`}>
              Seleccionar
            </button>
          </motion.div>
        ))}
      </div>

      {/* Savings Hook */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-neutral-400 text-sm italic leading-relaxed">
          "Nuestros clientes reportan un ahorro de hasta el <span className="text-white font-medium">70% en cánones de derechos de autor</span> al sustituir hilos musicales genéricos por composiciones originales de Andalusian Cinematic."
        </p>
      </div>
    </div>
  );
}
