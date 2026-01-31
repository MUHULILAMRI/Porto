import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Maximize2, X, ChevronLeft, ChevronRight, ImageIcon, Clock, CheckCircle, CircleDashed } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionId, Project } from '../types';
import { Reveal } from './Reveal';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['Semua', 'Fullstack', 'Analisis Data'];

  const filteredProjects = PROJECTS.filter(project =>
    activeCategory === 'Semua' || project.category === (activeCategory === 'Analisis Data' ? 'Data Analysis' : activeCategory)
  );

  // Modal handlers
  const openModal = (project: Project, index: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject || !selectedProject.screenshots) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject || !selectedProject.screenshots) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  const getStatusConfig = (status?: string) => {
    switch (status) {
      case 'Completed':
        return {
          icon: <CheckCircle size={12} />,
          bg: 'bg-green-500/90',
          text: 'text-white',
          shadow: 'shadow-green-500/20'
        };
      case 'In Progress':
        return {
          icon: <Clock size={12} />,
          bg: 'bg-amber-500/90',
          text: 'text-white',
          shadow: 'shadow-amber-500/20'
        };
      case 'Planned':
        return {
          icon: <CircleDashed size={12} />,
          bg: 'bg-slate-500/90',
          text: 'text-white',
          shadow: 'shadow-slate-500/20'
        };
      default:
        return null;
    }
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24" aria-label="Featured Projects">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Karya Unggulan</h2>
            <p className="text-slate-400">
              Pilihan proyek yang menunjukkan kemampuan saya dalam Fullstack Engineering dan Analisis Data.
            </p>
          </div>
        </Reveal>

        {/* Filter Controls */}
        <Reveal width="100%" delay={0.2}>
          <div
            className="flex justify-center gap-3 mb-12 flex-wrap"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                aria-label={`Show ${category} projects`}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${activeCategory === category
                    ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/25 transform scale-105'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
          role="list"
          aria-label="List of projects"
        >
          {filteredProjects.map((project) => {
            const statusConfig = getStatusConfig(project.status);

            return (
              <Reveal key={project.id} width="100%">
                <div
                  role="listitem"
                  className={`group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${project.category === 'Data Analysis'
                      ? 'hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5'
                      : 'hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5'
                    }`}
                >
                  {/* Main Image */}
                  <div
                    className="h-64 overflow-hidden relative cursor-pointer"
                    onClick={() => openModal(project, 0)}
                  >
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 backdrop-blur-md shadow-lg ${project.category === 'Data Analysis'
                            ? 'bg-violet-600/90 text-white shadow-violet-500/20'
                            : 'bg-cyan-500/90 text-slate-950 shadow-cyan-500/20'
                          }`}
                      >
                        {project.category === 'Data Analysis' ? 'Analisis Data' : project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {statusConfig && (
                      <div className="absolute top-4 left-4 z-20">
                        <span
                          className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 backdrop-blur-md shadow-lg ${statusConfig.bg} ${statusConfig.text} ${statusConfig.shadow}`}
                        >
                          {statusConfig.icon}
                          {project.status === 'Completed' ? 'Selesai' : project.status === 'In Progress' ? 'Dalam Proses' : 'Direncanakan'}
                        </span>
                      </div>
                    )}

                    {/* Expand Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full text-white">
                        <Maximize2 size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={tech}
                          style={{ transitionDelay: `${index * 50}ms` }}
                          className={`px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-white/5 transition-all duration-300 
                        group-hover:scale-105 group-hover:bg-slate-700 ${project.category === 'Data Analysis'
                              ? 'group-hover:text-violet-300 group-hover:border-violet-500/30'
                              : 'group-hover:text-cyan-300 group-hover:border-cyan-500/30'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Thumbnail Strip */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                        {project.screenshots.map((shot, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(project, idx);
                            }}
                            className="w-16 h-12 flex-shrink-0 rounded-md overflow-hidden border border-white/10 hover:border-cyan-400 transition-colors relative group/thumb"
                          >
                            <img src={shot} alt="thumb" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-transparent transition-colors" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors border border-white/5"
                        >
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-violet-500/30 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-cyan-100 font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && selectedProject.screenshots && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out]"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 md:p-12 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <img
              src={selectedProject.screenshots[currentImageIndex]}
              alt={`${selectedProject.title} screenshot`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-black/50"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-500/80 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-500/80 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
              <div className="inline-block bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white">
                {currentImageIndex + 1} / {selectedProject.screenshots.length} • {selectedProject.title}
              </div>
            </div>
          </div>

          {/* Thumbnails Footer */}
          <div
            className="h-[15vh] w-full border-t border-white/10 bg-black/40 flex items-center justify-center gap-4 px-4 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.screenshots.map((shot, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-16 w-24 md:h-20 md:w-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx
                    ? 'border-cyan-500 scale-105 opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
              >
                <img src={shot} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;