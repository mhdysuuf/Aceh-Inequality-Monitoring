import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ExpertiseData } from '../types';
import { EXPERTISE_IDENTITIES, DATA_NEEDS, ACEH_DISTRICTS } from '../constants';

interface ExpertiseFlowProps {
  onComplete: (data: ExpertiseData) => void;
  onBack: () => void;
}

export const ExpertiseFlow: React.FC<ExpertiseFlowProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ExpertiseData>({
    identity: '',
    needs: '',
    regionFocus: ''
  });

  const updateField = (field: keyof ExpertiseData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 3) {
      onComplete(data);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const isStepValid = () => {
    if (step === 1) return !!data.identity;
    if (step === 2) return !!data.needs;
    if (step === 3) return !!data.regionFocus;
    return false;
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-zinc-100 rounded-full">
                <ArrowLeft className="w-5 h-5 text-zinc-600" />
            </button>
            <span className="font-bold tracking-tight">AIM Expertise</span>
         </div>
         <div className="text-sm text-zinc-500">Langkah {step} / 3</div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full p-6 flex flex-col justify-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold text-gh-black">Identitas Profesional</h2>
              <p className="text-zinc-600">Kamu menggunakan data ini sebagai apa?</p>
              <div className="grid gap-3">
                {EXPERTISE_IDENTITIES.map(id => (
                  <button
                    key={id}
                    onClick={() => updateField('identity', id)}
                    className={`p-4 text-left border rounded-sm transition-all font-medium ${
                      data.identity === id 
                      ? 'bg-gh-black text-white border-gh-black' 
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold text-gh-black">Kebutuhan Utama</h2>
              <p className="text-zinc-600">Data ini akan digunakan untuk kebutuhan apa?</p>
              <div className="grid gap-3">
                {DATA_NEEDS.map(need => (
                  <button
                    key={need}
                    onClick={() => updateField('needs', need)}
                    className={`p-4 text-left border rounded-sm transition-all font-medium ${
                      data.needs === need
                      ? 'bg-gh-black text-white border-gh-black' 
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                    }`}
                  >
                    {need}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold text-gh-black">Cakupan Wilayah</h2>
              <p className="text-zinc-600">Wilayah mana yang menjadi fokus analisis Anda?</p>
              <select 
                  className="w-full p-4 text-lg border border-zinc-300 rounded-sm bg-white focus:ring-2 focus:ring-gh-black focus:border-transparent outline-none"
                  value={data.regionFocus}
                  onChange={(e) => updateField('regionFocus', e.target.value)}
                >
                  <option value="" disabled>Pilih Fokus Wilayah</option>
                  <option value="Seluruh Aceh">Seluruh Provinsi Aceh</option>
                  <optgroup label="Kabupaten/Kota">
                    {ACEH_DISTRICTS.map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                  </optgroup>
                </select>
            </>
          )}

          <Button 
            fullWidth 
            disabled={!isStepValid()} 
            onClick={handleNext}
            className={!isStepValid() ? "opacity-50" : ""}
          >
            {step === 3 ? "Masuk ke Dashboard" : "Lanjut"} <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};