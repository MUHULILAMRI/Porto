import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, ScanLine, Wifi, Cpu, ShieldCheck, MousePointer2, Activity } from 'lucide-react';
import { SectionId } from '../types';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [USER_INFO.role, "Data Scientist", "Prompt Engineer", "React Specialist", "Problem Solver"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  // State for 3D Tilt Effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    let i = textIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTextIndex(textIndex + 1);
      setDelta(100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (limit to +/- 10 degrees for subtler effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });

    // Calculate glare position (percentage)
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-20 lg:pb-0 overflow-hidden">

      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-[128px] animate-blob -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000 -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-blob animation-delay-4000 -z-10" />

      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[40vh] overflow-hidden z-0 pointer-events-none">
        {/* Layer 1 - Back - Slow - Violet */}
        <div className="absolute bottom-0 w-[200%] flex animate-wave-slow opacity-20 translate-y-10">
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#8b5cf6" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#8b5cf6" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Layer 2 - Front - Fast - Cyan */}
        <div className="absolute bottom-0 w-[200%] flex animate-wave opacity-20">
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#0ea5e9" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#0ea5e9" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-400 text-sm font-medium backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Tersedia untuk Proyek Baru
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-light text-slate-300">
              Halo, Saya <span className="text-white font-semibold">{USER_INFO.name}</span>
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Saya Adalah <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-glow">
                {displayText}
              </span>
              <span className="animate-pulse text-slate-500">|</span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-slate-700 pl-6 mx-auto lg:mx-0">
            Menjembatani kesenjangan antara data kompleks dan pengalaman pengguna yang intuitif.
            Saya mengubah angka mentah menjadi wawasan nyata dan aplikasi web yang tangguh.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-cyan-500 rounded-full font-bold text-white overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <div className="flex items-center gap-2 relative z-10">
                Lihat Proyek
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button
              onClick={() => document.getElementById(SectionId.AI_CHAT)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-bold text-white border border-slate-700 hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all flex items-center gap-2"
            >
              <Sparkles size={18} />
              Tanya AI Agen
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Futuristic ID Card */}
        <div className="relative w-full h-[600px] perspective-1000 flex items-center justify-center mt-8 lg:mt-0">

          {/* Helper Tooltip */}
          <div className={`absolute top-10 right-10 flex items-center gap-2 text-cyan-500/50 text-xs font-mono transition-opacity duration-500 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
            <MousePointer2 size={14} className="animate-bounce" />
            <span>ARAHKAN KRUSOR</span>
          </div>

          {/* Main Card Container with 3D Interaction */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-[340px] h-[520px] relative z-20 cursor-grab active:cursor-grabbing transition-transform duration-100 ease-linear"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transformStyle: 'preserve-3d'
            }}
          >

            {/* The Glass Card Body - Background Layer */}
            <div className="absolute inset-0 rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-cyan-500/10 overflow-hidden group">

              {/* Dynamic Glare Effect */}
              <div
                className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`,
                  opacity: isHovering ? 0.6 : 0
                }}
              />

              {/* Decorative Holographic Gradient */}
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rotate-45 animate-[shimmer_3s_infinite]"></div>

              {/* Card Header Background */}
              <div className="h-32 bg-gradient-to-br from-cyan-600/30 via-violet-600/30 to-slate-900/50 relative border-b border-white/5">
                <div className="absolute top-4 right-4 text-cyan-400 opacity-50 flex gap-2 items-center">
                  <Activity size={14} className="animate-pulse" />
                  <Wifi size={18} />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 box-shadow-glow"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 box-shadow-glow"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 box-shadow-glow"></div>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </div>
            </div>

            {/* Card Content Layer - Pop-out elements (No overflow hidden) */}
            <div className="absolute inset-0 flex flex-col items-center" style={{ transform: 'translateZ(20px)' }}>

              {/* Profile Image - Pops out */}
              <div
                className="absolute top-20 w-32 h-44 rounded-xl bg-slate-950 p-1 border border-cyan-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] z-10 transition-transform duration-300 group-hover:scale-105"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <img
                    src={USER_INFO.profileImage}
                    alt={USER_INFO.name}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay Scan Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent opacity-50 animate-scan"></div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-[-6px] right-[-6px] w-5 h-5 rounded-full bg-green-500 border-4 border-slate-900 z-20 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>

                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-slate-900 px-3 py-0.5 rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/30 whitespace-nowrap shadow-lg">
                  FULLSTACK DEV
                </div>
              </div>

              {/* Main Text Content */}
              <div className="w-full pt-[265px] px-6 pb-6 text-center space-y-3 h-full flex flex-col" style={{ transform: 'translateZ(30px)' }}>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">{USER_INFO.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-cyan-400/80">
                    <ShieldCheck size={14} />
                    <p className="text-xs font-mono uppercase tracking-widest">ID: 8X2-001-DEV</p>
                  </div>
                </div>

                {/* Skills Mini-Grid */}
                <div className="grid grid-cols-2 gap-2 w-full mt-1">
                  <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5 backdrop-blur-sm">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Stack</span>
                    <span className="text-xs text-cyan-300 font-mono">MERN / Next</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5 backdrop-blur-sm">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="text-xs text-violet-300 font-mono">Python / SQL</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between items-center px-2 py-2 border-t border-white/5 mt-auto w-full">
                  <div className="text-center">
                    <span className="block text-lg font-bold text-white">5+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Tahun</span>
                  </div>
                  <div className="h-8 w-px bg-white/10"></div>
                  <div className="text-center">
                    <span className="block text-lg font-bold text-white">30+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Proyek</span>
                  </div>
                  <div className="h-8 w-px bg-white/10"></div>
                  <div className="text-center">
                    <span className="block text-lg font-bold text-white">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Komitmen</span>
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="flex justify-between items-center opacity-40 pt-1">
                  <Cpu size={16} className="text-slate-500" />
                  <div className="h-1 flex-1 mx-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-cyan-500/50"></div>
                  </div>
                  <ScanLine size={16} className="text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Background Ring behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/5 to-violet-500/5 rounded-full border border-white/5 backdrop-blur-[1px] -z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full border border-dashed border-white/10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;