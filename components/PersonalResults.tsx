import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Share2, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { PersonalData } from '../types';

interface PersonalResultsProps {
  data: PersonalData;
  onBack: () => void;
}

export const PersonalResults: React.FC<PersonalResultsProps> = ({ data, onBack }) => {
  // Placeholder logic for dynamic content based on inputs
  const isHighInequality = ["Pidie", "Aceh Utara", "Aceh Timur"].includes(data.location);

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8">
      <div className="max-w-md mx-auto space-y-6">
        
        <header className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-gh-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </button>
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">AIM Personal</span>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold text-gh-black mb-2">Posisi Hidupmu di Aceh</h1>
          <p className="text-zinc-500 text-sm">Berbasis data wilayah {data.location}, bukan penilaian personal.</p>
        </motion.div>

        {/* Card 1 - Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gh-black text-white p-6 md:p-8 rounded-sm shadow-xl"
        >
          <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Kondisi Wilayah</div>
          <h2 className="text-2xl font-bold leading-tight mb-4">
            Kamu hidup di wilayah dengan tingkat ketimpangan {isHighInequality ? 'di atas' : 'mendekati'} rata-rata Aceh.
          </h2>
          <div className="h-1 w-20 bg-white/20 rounded-full mt-4"></div>
        </motion.div>

        {/* Card 2 - Comparison */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-zinc-200"
        >
          <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Wilayah & Banding</div>
          <h3 className="text-xl font-bold mb-3 text-gh-black">Akses ekonomi di {data.location} tertinggal dibanding kota utama.</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Perbedaan ini memengaruhi peluang kerja dan kualitas hidup secara signifikan, terutama bagi {data.position}.
          </p>
        </motion.div>

        {/* Card 3 - Social Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-zinc-200"
        >
          <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Untuk kondisi seperti kamu</div>
          <h3 className="text-xl font-bold mb-3 text-gh-black">Hambatan Struktural</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Kelompok dengan latar belakang serupa cenderung menghadapi kesulitan dalam {data.issues[0]?.toLowerCase() || "akses layanan"}. Ini bukan persoalan individu semata.
          </p>
        </motion.div>

        {/* Card 4 - Reflection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-200 p-6 md:p-8 rounded-sm"
        >
          <h3 className="text-lg font-bold mb-2 text-gh-black">Apa artinya ini?</h3>
          <p className="text-zinc-700 text-sm leading-relaxed italic">
            "Data menunjukkan bahwa banyak keputusan hidup dipengaruhi oleh tempat dan struktur, bukan hanya usaha pribadi."
          </p>
        </motion.div>

        <div className="flex justify-center py-4">
            <button className="flex items-center gap-2 text-zinc-500 hover:text-gh-black transition-colors text-sm font-medium">
                <Share2 className="w-4 h-4" /> Simpan & Bagikan
            </button>
        </div>

        {/* Paywall */}
        <div className="mt-12 relative overflow-hidden rounded-sm border border-zinc-200 bg-white">
          <div className="p-6 filter blur-sm select-none opacity-50">
             <h3 className="text-xl font-bold mb-4">Tren Ketimpangan 5 Tahun Terakhir</h3>
             <div className="h-32 bg-zinc-100 rounded mb-4"></div>
             <p>Analisis mendalam mengenai pergeseran ekonomi di wilayah Anda...</p>
          </div>
          
          <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
            <Lock className="w-8 h-8 text-gh-black mb-4" />
            <h3 className="text-lg font-bold text-gh-black mb-2">Ingin melihat gambaran lebih lengkap?</h3>
            <p className="text-sm text-zinc-600 mb-6 max-w-xs">
              Akses perbandingan wilayah detail, tren 3-5 tahun, dan rekomendasi kebijakan.
            </p>
            <Button variant="primary" className="w-full shadow-lg">
              Dukung & Buka Akses Penuh (Rp 29rb/bln)
            </Button>
            <p className="mt-3 text-xs text-zinc-500">Mendukung jurnalisme data independen.</p>
          </div>
        </div>

        <div className="py-10 text-center">
            <p className="text-zinc-400 text-xs">
                Memahami kondisi bukan berarti menyerah. Ia membantu kita melihat persoalan dengan lebih jujur.
            </p>
        </div>

      </div>
    </div>
  );
};