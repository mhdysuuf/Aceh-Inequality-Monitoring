import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from './Button';
import { PersonalData, PersonalStep } from '../types';
import { ACEH_DISTRICTS, POSITIONS, ISSUES, WORRIES } from '../constants';

interface PersonalFlowProps {
  onComplete: (data: PersonalData) => void;
  onBack: () => void;
}

export const PersonalFlow: React.FC<PersonalFlowProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState<PersonalStep>(PersonalStep.LOCATION);
  const [formData, setFormData] = useState<PersonalData>({
    location: '',
    position: '',
    issues: [],
    worry: ''
  });

  const handleNext = () => {
    if (step === PersonalStep.CONFIRMATION) {
      onComplete(formData);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step === PersonalStep.LOCATION) {
      onBack();
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const updateField = (field: keyof PersonalData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleIssue = (issue: string) => {
    setFormData(prev => {
      const current = prev.issues;
      if (current.includes(issue)) {
        return { ...prev, issues: current.filter(i => i !== issue) };
      }
      return { ...prev, issues: [...current, issue] };
    });
  };

  const isStepValid = () => {
    switch (step) {
      case PersonalStep.LOCATION: return !!formData.location;
      case PersonalStep.POSITION: return !!formData.position;
      case PersonalStep.ISSUES: return formData.issues.length > 0;
      case PersonalStep.TIME: return !!formData.worry;
      default: return true;
    }
  };

  const stepVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-zinc-400 mb-2">
          <span>Langkah {step} dari 5</span>
          <button onClick={onBack} className="hover:text-gh-black transition-colors">Batal</button>
        </div>
        <div className="h-1 w-full bg-zinc-200 rounded-full">
          <motion.div 
            className="h-full bg-gh-black rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === PersonalStep.LOCATION && (
            <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Kamu tinggal atau berasal dari wilayah mana di Aceh?</h2>
              <p className="text-zinc-500 mb-6">Lokasi adalah penentu utama ketimpangan akses dan layanan.</p>
              <div className="relative">
                <select 
                  className="w-full p-4 text-lg border border-zinc-300 rounded-sm bg-white focus:ring-2 focus:ring-gh-black focus:border-transparent outline-none appearance-none"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                >
                  <option value="" disabled>Pilih Kabupaten/Kota</option>
                  {ACEH_DISTRICTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">▼</div>
              </div>
            </motion.div>
          )}

          {step === PersonalStep.POSITION && (
            <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Saat ini, kamu paling dekat dengan kondisi apa?</h2>
              <p className="text-zinc-500 mb-6">Ini membantu kami mengelompokkan risiko dan peluang.</p>
              <div className="space-y-3">
                {POSITIONS.map(pos => (
                  <button
                    key={pos}
                    onClick={() => updateField('position', pos)}
                    className={`w-full p-4 text-left border rounded-sm transition-all ${
                      formData.position === pos 
                        ? 'bg-gh-black text-white border-gh-black' 
                        : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === PersonalStep.ISSUES && (
            <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Hal apa yang paling kamu rasakan dalam hidup sehari-hari?</h2>
              <p className="text-zinc-500 mb-6">Pilih satu atau lebih. Ini menentukan fokus insight.</p>
              <div className="space-y-3">
                {ISSUES.map(issue => (
                  <button
                    key={issue}
                    onClick={() => toggleIssue(issue)}
                    className={`w-full p-4 flex items-center justify-between border rounded-sm transition-all ${
                      formData.issues.includes(issue)
                        ? 'bg-zinc-100 border-gh-black text-gh-black font-medium' 
                        : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <span>{issue}</span>
                    {formData.issues.includes(issue) && <Check className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === PersonalStep.TIME && (
            <motion.div key="step4" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-3xl font-bold mb-6">Dalam 2–3 tahun ke depan, kamu lebih khawatir soal apa?</h2>
              <div className="space-y-3">
                {WORRIES.map(w => (
                  <button
                    key={w}
                    onClick={() => updateField('worry', w)}
                    className={`w-full p-4 text-left border rounded-sm transition-all ${
                      formData.worry === w
                        ? 'bg-gh-black text-white border-gh-black' 
                        : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === PersonalStep.CONFIRMATION && (
            <motion.div key="step5" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center py-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Terima kasih.</h2>
              <p className="text-xl text-zinc-600 mb-10 max-w-lg mx-auto leading-relaxed">
                Jawaban kamu membantu kami membaca data dengan konteks hidup nyata, bukan sekadar angka statistik.
              </p>
              <div className="flex justify-center">
                 {/* The button is handled by the main nav below, but visually we center content here */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex gap-4">
        {step > 1 && (
          <Button variant="outline" onClick={handlePrev} className="flex-1">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Button>
        )}
        <Button 
          variant="primary" 
          onClick={handleNext} 
          disabled={!isStepValid()} 
          className={`flex-1 ${!isStepValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {step === PersonalStep.CONFIRMATION ? "Lihat Insight Saya" : "Lanjut"}
          {step !== PersonalStep.CONFIRMATION && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};