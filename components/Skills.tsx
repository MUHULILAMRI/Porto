import React, { useState, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Layout, Server, Database, BrainCircuit } from 'lucide-react';
import { SKILL_DATA } from '../constants';
import { SectionId } from '../types';

const Skills: React.FC = () => {
  const categories = [
    { icon: <Layout size={20} />, title: 'Frontend', skills: 'React, Next.js, Tailwind, TypeScript', color: 'text-cyan-400', border: 'border-cyan-500/20' },
    { icon: <Server size={20} />, title: 'Backend', skills: 'Node.js, Express, Python (FastAPI)', color: 'text-green-400', border: 'border-green-500/20' },
    { icon: <Database size={20} />, title: 'Data Analysis', skills: 'SQL, Pandas, NumPy, Tableau', color: 'text-violet-400', border: 'border-violet-500/20' },
    { icon: <BrainCircuit size={20} />, title: 'AI Integration', skills: 'Gemini API, OpenAI, LangChain', color: 'text-pink-400', border: 'border-pink-500/20' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Initialize with 0 values for animation effect
  const [chartData, setChartData] = useState(SKILL_DATA.map(d => ({ ...d, A: 0 })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setChartData(SKILL_DATA);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id={SectionId.SKILLS} className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Proficiency</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                I don't just write code; I architect solutions. My skillset spans the entire development lifecycle, 
                from raw data processing to pixel-perfect user interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className={`p-5 rounded-xl bg-slate-900/50 border ${cat.border} hover:bg-slate-800/50 transition-all duration-300 group`}>
                  <div className={`${cat.color} mb-3 p-2 bg-slate-950 rounded-lg inline-block`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-300 transition-colors">{cat.title}</h3>
                  <p className="text-slate-400 text-sm">{cat.skills}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative h-[450px] w-full glass-card rounded-3xl p-6 border border-white/10 overflow-hidden">
               {/* Decorative background in chart */}
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 z-0" />
               
               <h3 className="text-center text-slate-300 font-mono text-sm uppercase tracking-widest mb-4 relative z-10">Skill Balance Radar</h3>
               
               <ResponsiveContainer width="100%" height="90%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#e2e8f0', fontSize: 11, fontWeight: 600 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="#8b5cf6"
                    fillOpacity={0.2}
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                   <Radar
                    name="Full Mark"
                    dataKey="fullMark"
                    stroke="transparent"
                    fill="transparent"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                      borderColor: 'rgba(139, 92, 246, 0.3)', 
                      color: '#f8fafc',
                      borderRadius: '8px',
                      backdropFilter: 'blur(4px)'
                    }}
                    itemStyle={{ color: '#a78bfa' }}
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;