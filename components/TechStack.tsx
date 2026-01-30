import React from 'react';
import { Database, Server, Code, Globe, Cpu, Layers, Terminal, BarChart } from 'lucide-react';

const TechStack: React.FC = () => {
  const techs = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Python", icon: <Terminal size={24} /> },
    { name: "Next.js", icon: <Globe size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
    { name: "Pandas", icon: <BarChart size={24} /> },
    { name: "Tableau", icon: <BarChart size={24} /> },
    { name: "AWS", icon: <Server size={24} /> },
    { name: "Docker", icon: <Layers size={24} /> },
    { name: "Tailwind", icon: <Code size={24} /> },
    { name: "Gemini AI", icon: <Cpu size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
  ];

  // Duplicate for seamless loop
  const allTechs = [...techs, ...techs];

  return (
    <div className="w-full py-8 bg-slate-950/50 border-y border-white/5 overflow-hidden backdrop-blur-sm">
      <div className="relative flex w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-950 to-transparent"></div>
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee min-w-full gap-16 pr-16">
          {allTechs.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="flex items-center gap-3 text-slate-400 font-mono text-sm font-semibold whitespace-nowrap hover:text-cyan-400 transition-colors cursor-default group"
            >
              <span className="p-2 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all">
                {tech.icon}
              </span>
              <span className="tracking-wide uppercase">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-950 to-transparent"></div>
      </div>
    </div>
  );
};

export default TechStack;