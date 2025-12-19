import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface HomeProps {
  onEnter: () => void;
}

export const Home: React.FC<HomeProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 max-w-4xl mx-auto text-center bg-gh-paper font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        {/* Brand Element */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-1.5 bg-gh-black"></div>
          <span className="text-sm tracking-[0.2em] font-bold text-zinc-400 uppercase">Garis Hitam</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gh-black">
            Data & Monitoring
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-zinc-600">
            Membaca realitas Aceh berbasis data.
          </h2>
        </div>

        <p className="max-w-xl mx-auto text-base md:text-lg text-zinc-500 leading-relaxed">
          Sebagian kritik membutuhkan data, bukan hanya opini. <br className="hidden md:block" />
          <strong className="text-gh-black font-semibold">Aceh Inequality Monitoring (AIM)</strong> adalah upaya Garis Hitam membaca ketimpangan Aceh secara terstruktur.
        </p>

        <div className="pt-8">
          <Button variant="primary" onClick={onEnter} className="mx-auto text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Masuk ke Aceh Inequality Monitoring <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="pt-12 text-zinc-400 text-xs tracking-widest uppercase">
          Eksplorasi • Analisis • Kebijakan
        </div>
      </motion.div>
    </div>
  );
};