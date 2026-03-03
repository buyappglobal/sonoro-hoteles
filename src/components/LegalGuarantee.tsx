import React from 'react';
import { ShieldCheck, FileText, TrendingDown } from 'lucide-react';

export default function LegalGuarantee() {
  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <h3 className="text-3xl font-serif mb-6">El Fin del "Impuesto Revolucionario"</h3>
            <p className="text-neutral-400 mb-6 font-light leading-relaxed">
                Un hotel mediano en Huelva gasta entre <span className="text-white font-medium">1.500€ y 3.000€ anuales</span> en cánones a entidades de gestión (SGAE/AGEDI).
            </p>
            <p className="text-neutral-400 mb-8 font-light leading-relaxed">
                Al contratar Andalusian Cinematic, usted recibe un <strong>Certificado de Exención de Derechos</strong>. Nuestra música es 100% original y libre de gestión colectiva. Lo que ahorra en tasas cubre prácticamente el coste de nuestra suscripción.
            </p>
            
            <div className="flex items-center gap-4 text-gold-400">
                <TrendingDown className="w-8 h-8" />
                <span className="text-sm uppercase tracking-widest">Convierta un gasto pasivo en una inversión de marca</span>
            </div>
        </div>

        <div className="bg-white/5 p-8 rounded-xl border border-gold-500/30 relative">
            <div className="absolute -top-5 -right-5 bg-gold-500 text-black p-3 rounded-full shadow-lg">
                <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-gold-400 font-serif text-xl mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Cláusula de Garantía Legal
            </h4>
            <blockquote className="text-neutral-300 font-serif italic text-lg leading-relaxed border-l-2 border-gold-500/50 pl-6">
                "Andalusian Cinematic declara ser el titular único de los derechos de explotación de las obras suministradas y garantiza que no forman parte del repertorio gestionado por entidades de gestión colectiva (SGAE), otorgando licencia de uso directo al establecimiento."
            </blockquote>
            <div className="mt-6 text-xs text-neutral-500 uppercase tracking-widest text-right">
                Incluido en todos los contratos
            </div>
        </div>
      </div>
    </div>
  );
}
