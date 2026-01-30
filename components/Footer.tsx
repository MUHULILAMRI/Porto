import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { USER_INFO } from '../constants';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Membangun Masa Depan Digital Bersama</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Butuh solusi untuk pengembangan web atau analisis data? Saya siap membantu mewujudkan visi Anda menjadi kenyataan.
            </p>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg"
            >
              <Mail size={20} />
              {USER_INFO.email}
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-center">
            <div className="flex gap-4">
              <a href={`https://${USER_INFO.socials.github}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all">
                <Github size={20} />
              </a>
              <a href={`https://${USER_INFO.socials.linkedin}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`https://${USER_INFO.socials.instagram}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, Tailwind & Gemini API</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;