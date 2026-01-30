import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Copy, Check, Calendar } from 'lucide-react';
import { SectionId } from '../types';
import { CERTIFICATES_DATA } from '../constants';

const Certificates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id={SectionId.CERTIFICATES} className="py-24 relative bg-[#020617] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4"
            >
              <Shield size={18} />
              <span>Verified Kredensial</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Daftar Lengkap <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
                Sertifikat & Kompetensi
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 max-w-sm text-lg md:text-right font-medium border-l-2 md:border-l-0 md:border-r-2 border-cyan-500/30 pl-6 md:pl-0 md:pr-6"
          >
            Menampilkan total {CERTIFICATES_DATA.length} sertifikasi profesional yang telah diraih di berbagai bidang keahlian IT.
          </motion.p>
        </div>

        {/* Bento-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full"
            >
              {/* Main Card Container */}
              <div className="relative flex flex-col h-full p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:border-white/10 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] overflow-hidden">

                {/* Visual Preview Section (Top) */}
                <div className="relative mb-8 rounded-[1.5rem] overflow-hidden h-48 border border-white/5 shadow-inner">
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-tighter flex items-center gap-1.5 shadow-xl">
                    <Check size={10} className="text-green-500" /> Valid
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`p-2.5 rounded-xl bg-slate-950/50 border border-white/5 ${getTextColor(cert.color)}`}>
                      <Award size={20} />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{cert.issuer}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                    "{cert.description}"
                  </p>

                  <div className="flex-1" />

                  {/* ID & Date Row */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={14} className="opacity-60" />
                        <span>{cert.date}</span>
                      </div>

                      {/* Copyable ID */}
                      <div
                        className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors cursor-pointer group/id"
                        onClick={() => handleCopy(cert.credentialId, cert.id)}
                      >
                        <span className="truncate max-w-[120px] text-[10px] opacity-70 group-hover/id:opacity-100">{cert.credentialId}</span>
                        {copiedId === cert.id ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="group-hover/id:scale-110 transition-transform" />}
                      </div>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-white/5 hover:bg-cyan-500 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-cyan-400 transition-all duration-300 active:scale-95 text-sm group/btn"
                    >
                      Buka Dokumen <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div
                  className="absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: getColorHex(cert.color) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper Functions
const getColorHex = (color: string) => {
  switch (color) {
    case 'blue': return '#0ea5e9';
    case 'orange': return '#f97316';
    case 'indigo': return '#6366f1';
    case 'violet': return '#8b5cf6';
    case 'cyan': return '#06b6d4';
    default: return '#0ea5e9';
  }
};

const getTextColor = (color: string) => {
  switch (color) {
    case 'blue': return 'text-blue-400';
    case 'orange': return 'text-orange-400';
    case 'indigo': return 'text-indigo-400';
    case 'violet': return 'text-violet-400';
    case 'cyan': return 'text-cyan-400';
    default: return 'text-cyan-400';
  }
};

export default Certificates;