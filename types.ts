
export interface Project {
  id: number;
  title: string;
  category: 'Fullstack' | 'Data Analysis';
  description: string;
  techStack: string[];
  imageUrl: string;
  screenshots?: string[];
  link?: string;
  githubLink?: string;
  status?: 'Completed' | 'In Progress' | 'Planned';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId: string;
  link: string;
  color: string;
  previewImage?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HOME = 'home',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CERTIFICATES = 'certificates',
  AI_CHAT = 'ai-chat',
  CONTACT = 'contact'
}