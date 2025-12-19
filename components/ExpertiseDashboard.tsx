import React from 'react';
import { ArrowLeft, Download, FileText, Filter } from 'lucide-react';
import { Button } from './Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExpertiseData } from '../types';

interface ExpertiseDashboardProps {
  data: ExpertiseData;
  onBack: () => void;
}

const MOCK_CHART_DATA = [
  { name: 'Banda Aceh', index: 85 },
  { name: 'Pidie', index: 62 },
  { name: 'Aceh Utara', index: 58 },
  { name: 'Aceh Barat', index: 70 },
  { name: 'Lhokseumawe', index: 78 },
  { name: 'Aceh Timur', index: 55 },
];

export const ExpertiseDashboard: React.FC<ExpertiseDashboardProps> = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-gh-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-zinc-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="font-bold tracking-tight">AIM <span className="text-zinc-500 font-normal">| Expertise Dashboard</span></div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm text-zinc-400">
            <span>{data.identity}</span>
            <span className="w-px h-4 bg-zinc-700"></span>
            <span>{data.regionFocus}</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full grid md:grid-cols-4 gap-6">
        
        {/* Sidebar Controls (Mock) */}
        <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-4 border border-zinc-200 rounded-sm shadow-sm">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Filter Indikator</h3>
                <div className="space-y-2">
                    {['Indeks Gini', 'IPM', 'Tingkat Kemiskinan', 'Pengangguran Terbuka'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-700 p-2 hover:bg-zinc-50 cursor-pointer rounded">
                            <div className={`w-4 h-4 border rounded ${i === 0 ? 'bg-gh-black border-gh-black' : 'border-zinc-300'}`}></div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-white p-4 border border-zinc-200 rounded-sm shadow-sm">
                 <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Export Data</h3>
                 <button className="w-full flex items-center gap-2 justify-center border border-zinc-300 p-2 text-sm rounded-sm hover:bg-zinc-50 mb-2">
                    <Download className="w-4 h-4" /> CSV / Excel
                 </button>
                 <button className="w-full flex items-center gap-2 justify-center border border-zinc-300 p-2 text-sm rounded-sm hover:bg-zinc-50">
                    <FileText className="w-4 h-4" /> Laporan PDF
                 </button>
            </div>
        </div>

        {/* Dashboard Area */}
        <div className="md:col-span-3 space-y-6">
            
            {/* Chart Section */}
            <div className="bg-white p-6 border border-zinc-200 rounded-sm shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gh-black">Indeks Ketimpangan Wilayah</h2>
                        <p className="text-sm text-zinc-500">Perbandingan antardaerah berdasarkan data triwulan terakhir.</p>
                    </div>
                    <Button variant="outline" className="text-xs py-2 px-3 h-auto"><Filter className="w-3 h-3 mr-2"/> Konfigurasi</Button>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MOCK_CHART_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                            <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
                            <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{fill: '#f4f4f5'}} contentStyle={{border: '1px solid #e4e4e7', borderRadius: '4px'}} />
                            <Bar dataKey="index" fill="#111111" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Request Access Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 z-10">
                    <div className="bg-white p-8 border border-zinc-200 shadow-2xl max-w-md rounded-sm">
                        <h3 className="text-2xl font-bold text-gh-black mb-2">Data Analisis Profesional</h3>
                        <p className="text-zinc-600 mb-6 text-sm">
                            Anda melihat preview terbatas. Akses Expertise mencakup dataset terstruktur, dashboard real-time, dan laporan kebijakan otomatis.
                        </p>
                        <Button variant="primary" fullWidth>Request Full Access</Button>
                        <p className="mt-4 text-xs text-zinc-400">Khusus Institusi, NGO, dan Riset.</p>
                    </div>
                </div>
            </div>

            {/* Mock Table Preview */}
            <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden opacity-60">
                <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-50 text-zinc-500 font-semibold border-b border-zinc-200">
                        <tr>
                            <th className="p-4">Wilayah</th>
                            <th className="p-4">IPM</th>
                            <th className="p-4">Gini Ratio</th>
                            <th className="p-4">Tingkat Kemiskinan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map((r) => (
                             <tr key={r} className="border-b border-zinc-100">
                                <td className="p-4"><div className="h-4 w-24 bg-zinc-200 rounded"></div></td>
                                <td className="p-4"><div className="h-4 w-12 bg-zinc-200 rounded"></div></td>
                                <td className="p-4"><div className="h-4 w-12 bg-zinc-200 rounded"></div></td>
                                <td className="p-4"><div className="h-4 w-12 bg-zinc-200 rounded"></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
      </main>
    </div>
  );
};