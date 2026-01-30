
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Header />
      
      <main>
        <Hero />
        
        <Reveal width="100%">
          <TechStack />
        </Reveal>
        
        <Reveal width="100%">
          <Stats />
        </Reveal>

        <Reveal width="100%">
          <Experience />
        </Reveal>
        
        <Reveal width="100%">
          <Skills />
        </Reveal>
        
        <Projects /> {/* Projects has internal Reveals now */}

        <Reveal width="100%">
          <Certificates />
        </Reveal>
        
        <Reveal width="100%">
          <AIChat />
        </Reveal>
      </main>
      
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;
