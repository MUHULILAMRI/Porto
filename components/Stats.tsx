import React, { useEffect, useState, useRef } from 'react';
import { Code, Coffee, Award, Users } from 'lucide-react';

const stats = [
  { id: 1, label: "Years Experience", value: 5, suffix: "+", icon: <Award className="text-cyan-400" size={24} /> },
  { id: 2, label: "Projects Completed", value: 32, suffix: "", icon: <Code className="text-violet-400" size={24} /> },
  { id: 3, label: "Happy Clients", value: 18, suffix: "+", icon: <Users className="text-pink-400" size={24} /> },
  { id: 4, label: "Coffees Consumed", value: 1240, suffix: "", icon: <Coffee className="text-yellow-400" size={24} /> },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-12 border-b border-white/5 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CounterProps {
  stat: typeof stats[0];
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds
    const incrementTime = (duration / end) * (end > 100 ? 10 : 1); // Speed adjustment

    const timer = setInterval(() => {
      start += Math.ceil(end / 50); // Increment steps
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="flex flex-col items-center justify-center p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300">
      <div className="mb-3 p-3 bg-slate-800 rounded-full border border-white/5 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-black/20">
        {stat.icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-slate-400 uppercase tracking-wider font-medium text-center">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;