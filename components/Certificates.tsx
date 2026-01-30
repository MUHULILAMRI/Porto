import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, Shield, Copy, Calendar, Check } from 'lucide-react';
import { SectionId } from '../types';
import { CERTIFICATES_DATA } from '../constants';

// Helper to map colors to Tailwind classes
const getColorVariants = (color: string) => {
  switch (color) {
    case 'blue': // Google
      return {
        wrapper: 'bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-slate-900/60 hover:border-blue-500/30',
        iconShadow: 'shadow-blue-500/10 text-blue-400',
        badgeColor: 'text-blue-400 border-blue-500/30 shadow-blue-500/20',
        titleHover: 'group-hover:text-blue-300',
        linkHover: 'hover:text-blue-400',
        idBox: 'bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30 group-hover:bg-blue-500/10',
        glow: 'bg-blue-500/10 group-hover:bg-blue-500/20',
        lineGradient: 'via-blue-500'
      };
    case 'orange': // AWS
      return {
        wrapper: 'bg-gradient-to-br from-orange-500/10 via-slate-900/40 to-slate-900/60 hover:border-orange-500/30',
        iconShadow: 'shadow-orange-500/10 text-orange-400',
        badgeColor: 'text-orange-400 border-orange-500/30 shadow-orange-500/20',
        titleHover: 'group-hover:text-orange-300',
        linkHover: 'hover:text-orange-400',
        idBox: 'bg-orange-500/5 border-orange-500/10 hover:border-orange-500/30 group-hover:bg-orange-500/10',
        glow: 'bg-orange-500/10 group-hover:bg-orange-500/20',
        lineGradient: 'via-orange-500'
      };
    case 'indigo': // Meta
      return {
        wrapper: 'bg-gradient-to-br from-indigo-500/10 via-slate-900/40 to-slate-900/60 hover:border-indigo-500/30',
        iconShadow: 'shadow-indigo-500/10 text-indigo-400',
        badgeColor: 'text-indigo-400 border-indigo-500/30 shadow-indigo-500/20',
        titleHover: 'group-hover:text-indigo-300',
        linkHover: 'hover:text-indigo-400',
        idBox: 'bg-indigo-500/5 border-indigo-500/10 hover:border-indigo-500/30 group-hover:bg-indigo-500/10',
        glow: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
        lineGradient: 'via-indigo-500'
      };
    case 'violet': // Deep Learning
      return {
        wrapper: 'bg-gradient-to-br from-violet-500/10 via-slate-900/40 to-slate-900/60 hover:border-violet-500/30',
        iconShadow: 'shadow-violet-500/10 text-violet-400',
        badgeColor: 'text-violet-400 border-violet-500/30 shadow-violet-500/20',
        titleHover: 'group-hover:text-violet-300',
        linkHover: 'hover:text-violet-400',
        idBox: 'bg-violet-500/5 border-violet-500/10 hover:border-violet-500/30 group-hover:bg-violet-500/10',
        glow: 'bg-violet-500/10 group-hover:bg-violet-500/20',
        lineGradient: 'via-violet-500'
      };
    default: // Fallback (Cyan)
      return {
        wrapper: 'bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-slate-900/60 hover:border-cyan-500/30',
        iconShadow: 'shadow-cyan-500/10 text-cyan-400',
        badgeColor: 'text-cyan-400 border-cyan-500/30 shadow-cyan-500/20',
        titleHover: 'group-hover:text-cyan-300',
        linkHover: 'hover:text-cyan-400',
        idBox: 'bg-cyan-500/5 border-cyan-500/10 hover:border-cyan-500/30 group-hover:bg-cyan-500/10',
        glow: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
        lineGradient: 'via-cyan-500'
      };
  }
};

const Certificates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id={SectionId.CERTIFICATES} className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase">
                <Shield size={16} />
                <span>Verified Credentials</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Certifications</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block" />
          <p className="text-slate-400 max-w-sm text-right hidden md:block">
            Continuous learning is the key to staying ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES_DATA.map((cert) => {
            const styles = getColorVariants(cert.color || 'cyan');
            const isCopied = copiedId === cert.id;
            
            return (
              <div 
                key={cert.id} 
                className={`group relative backdrop-blur-sm border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${styles.wrapper}`}
              >
                {/* Tooltip Overlay */}
                <div className="absolute top-0 left-0 w-full p-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 pointer-events-none flex justify-center">
                   <div className={`bg-slate-950/90 backdrop-blur-md border px-3 py-2 rounded-lg shadow-2xl text-center transform ${styles.badgeColor}`}>
                       <p className="text-white text-xs font-bold leading-tight">{cert.title}</p>
                       <p className={`text-[10px] mt-1 font-mono uppercase tracking-wider`}>{cert.issuer}</p>
                   </div>
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${styles.lineGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-12 h-12 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${styles.iconShadow}`}>
                      <Award size={24} className="group-hover:animate-bounce-slight" />
                   </div>
                   <div className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 size={10} /> Valid
                   </div>
                </div>

                <h3 className={`text-white font-bold text-lg leading-tight mb-2 transition-colors ${styles.titleHover}`}>
                  {cert.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 font-medium">
                  {cert.issuer}
                </p>
                
                {/* Credential ID Field */}
                <div 
                  className={`relative mb-6 rounded-lg p-3 border transition-all duration-300 cursor-pointer group/copy ${styles.idBox}`}
                  onClick={() => handleCopy(cert.credentialId, cert.id)}
                >
                   {/* Label Row */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-bold font-mono uppercase tracking-wider">Credential ID</span>
                    {isCopied ? (
                        <span className="text-green-400 flex items-center gap-1 text-[9px] font-bold bg-green-500/10 px-2 py-0.5 rounded-full animate-in fade-in zoom-in duration-300">
                          <Check size={10} strokeWidth={3} /> COPIED
                        </span>
                    ) : (
                         <span className="opacity-0 group-hover/copy:opacity-100 transition-opacity duration-300 text-[9px] text-slate-400 flex items-center gap-1">
                           <Copy size={10} /> COPY
                         </span>
                    )}
                  </div>
                  
                  {/* ID Value Row */}
                  <div className="font-mono text-sm text-slate-300 group-hover/copy:text-white transition-colors truncate" title={cert.credentialId}>
                    {cert.credentialId}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    {cert.date && (
                      <>
                        <Calendar size={12} className="opacity-70" />
                        <span>Issued: {cert.date}</span>
                      </>
                    )}
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1 transition-all cursor-pointer z-10 py-1 hover:underline hover:underline-offset-4 decoration-white/20 hover:decoration-current ${styles.linkHover}`}
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${styles.glow}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;