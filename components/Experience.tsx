import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';
import { SectionId } from '../types';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Perjalanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Profesional</span>
          </h2>
          <p className="text-slate-400">Timeline karier dan pencapaian utama saya.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 px-6 py-6 glass-card rounded-xl border-l-4 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono mb-2">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-3 flex items-center gap-2">
                    <Briefcase size={14} /> {job.company}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[10px] uppercase tracking-wider rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;