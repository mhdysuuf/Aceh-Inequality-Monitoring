import React from 'react';
import { Button } from './Button';
import { ArrowRight, BarChart2, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingProps {
  onSelectPersonal: () => void;
  onSelectExpertise: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onSelectPersonal, onSelectExpertise }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-6"
      >
        <div className="inline-block px-3 py-1 border border-zinc-200 text-xs tracking-widest uppercase font-semibold mb-4 text-zinc-500">
          Aceh Inequality Monitoring
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gh-black leading-[1.2] max-w-4xl mx-auto">
          Ketimpangan di Aceh bukan sekadar angka.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
          Ia memengaruhi hidup personal dan keputusan kebijakan setiap hari.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Personal Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white p-8 md:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          onClick={onSelectPersonal}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-zinc-200 group-hover:bg-zinc-400 transition-colors"></div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center rounded-full">
                <User className="w-5 h-5 text-zinc-700" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Jalur Warga</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-gh-black">Ingin tahu "apa artinya buat hidup saya?"</h3>
            <p className="text-zinc-500 text-base leading-relaxed">
              Pahami posisi Anda dalam struktur ketimpangan Aceh dan bagaimana hal itu memengaruhi peluang masa depan.
            </p>
          </div>
          <Button variant="primary" fullWidth onClick={(e) => { e.stopPropagation(); onSelectPersonal(); }} className="justify-between">
            Saya ingin memahami kondisi hidup saya <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Expertise Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gh-black p-8 md:p-10 border border-gh-black shadow-lg flex flex-col justify-between group cursor-pointer text-white relative overflow-hidden"
          onClick={onSelectExpertise}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700 group-hover:bg-white transition-colors"></div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full">
                <BarChart2 className="w-5 h-5 text-zinc-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Jalur Profesional</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3">Butuh data untuk keputusan?</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Akses dataset terstruktur, visualisasi mendalam, dan laporan kebijakan untuk referensi riset atau program.
            </p>
          </div>
          <Button variant="secondary" fullWidth onClick={(e) => { e.stopPropagation(); onSelectExpertise(); }} className="justify-between">
            Saya butuh data untuk analisis & keputusan <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
      
      <footer className="mt-20 text-zinc-400 text-xs text-center">
        &copy; {new Date().getFullYear()} Garis Hitam. Produk Intelektual.
      </footer>
    </div>
  );
};