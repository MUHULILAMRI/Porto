
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'Experience', id: SectionId.EXPERIENCE },
    { label: 'Expertise', id: SectionId.SKILLS },
    { label: 'Projects', id: SectionId.PROJECTS },
    { label: 'Certificates', id: SectionId.CERTIFICATES },
    { label: 'Ask AI', id: SectionId.AI_CHAT },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
          <div className="bg-gradient-to-br from-cyan-400 to-violet-500 p-2 rounded-lg">
            <Code2 size={20} className="text-white" />
          </div>
          <span>ULIL<span className="text-cyan-400">.DEV</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:border-cyan-500/50"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-300 hover:text-cyan-400 py-2 text-left text-lg font-medium border-b border-white/5 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white py-3 rounded-lg font-bold mt-2"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
