
import { Project, Experience } from './types';

export const USER_INFO = {
  name: "MUH. ULIL AMRI, S.Kom",
  role: "Fullstack Developer & Data Analyst",
  shortBio: "I bridge the gap between complex data and intuitive user experiences. Specializing in modern web technologies and actionable data insights.",
  location: "Indonesia",
  email: "ulil.amri@example.com", // Placeholder
  profileImage: "./profile.jpg", // Simpan foto Anda sebagai 'profile.jpg' di folder root
  socials: {
    github: "github.com/ulilamri",
    linkedin: "linkedin.com/in/ulilamri"
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: "Senior Fullstack Developer",
    company: "Tech Innovators Ind.",
    period: "2022 - Present",
    description: "Leading the frontend migration to Next.js and implementing Python-based data pipelines for internal analytics tools.",
    technologies: ["Next.js", "Python", "AWS", "TypeScript"]
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "Global Data Solutions",
    period: "2020 - 2022",
    description: "Analyzed large datasets to optimize supply chain logistics. Built dashboard visualizations reducing reporting time by 40%.",
    technologies: ["SQL", "Tableau", "Pandas", "Excel"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Studio",
    period: "2018 - 2020",
    description: "Developed responsive websites for various clients. Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
    technologies: ["React", "HTML/CSS", "JavaScript"]
  }
];

export const SKILL_DATA = [
  { subject: 'Frontend (React/TS)', A: 90, fullMark: 100 },
  { subject: 'Backend (Node/Python)', A: 85, fullMark: 100 },
  { subject: 'Data Analysis (Pandas/SQL)', A: 95, fullMark: 100 },
  { subject: 'Visualization (D3/Tableau)', A: 80, fullMark: 100 },
  { subject: 'DevOps (Docker/AWS)', A: 70, fullMark: 100 },
  { subject: 'AI Integration', A: 75, fullMark: 100 },
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "G-DA-2023-XYZ",
    link: "#",
    color: "blue"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "AWS-SCA-9981",
    link: "#",
    color: "orange"
  },
  {
    id: 3,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-FE-7721",
    link: "#",
    color: "indigo"
  },
  {
    id: 4,
    title: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2021",
    credentialId: "DL-AI-5512",
    link: "#",
    color: "violet"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Analytics Dashboard",
    category: "Data Analysis",
    description: "A real-time dashboard visualization sales trends using Python, Pandas, and Recharts.",
    techStack: ["React", "Python", "Pandas", "D3.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200"
    ],
    link: "https://example.com/dashboard",
    githubLink: "https://github.com/ulilamri/ecommerce-analytics",
    status: "Completed"
  },
  {
    id: 2,
    title: "SaaS Project Management",
    category: "Fullstack",
    description: "Collaborative project management tool with real-time updates via WebSockets.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
    ],
    link: "https://example.com/saas",
    githubLink: "https://github.com/ulilamri/saas-pm",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Predictive Maintenance Model",
    category: "Data Analysis",
    description: "Machine learning model to predict machinery failure rates in manufacturing.",
    techStack: ["Scikit-learn", "Python", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1200"
    ],
    githubLink: "https://github.com/ulilamri/predictive-maintenance",
    status: "Completed"
  },
  {
    id: 4,
    title: "AI Portfolio Assistant",
    category: "Fullstack",
    description: "This very website! Integrated with Google Gemini to answer questions about my career.",
    techStack: ["React", "Gemini API", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
    ],
    link: "#",
    githubLink: "https://github.com/ulilamri/ai-portfolio",
    status: "Completed"
  }
];

export const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant for a portfolio website belonging to ${USER_INFO.name}.
He is a ${USER_INFO.role}.
Key Traits: Professional, Analytical, Creative.
Skills: React, TypeScript, Python, SQL, Data Visualization, Machine Learning.
Goal: Answer questions about Ulil's experience, skills, and projects based on the context of a senior engineer and data analyst.
Keep answers concise, professional, yet friendly. If asked about contact info, provide ${USER_INFO.email}.

Here is the detailed list of projects available in the portfolio. When a user asks about a specific project, use this data to provide a concise summary including the tech stack:

${PROJECTS.map(p => `
- Title: "${p.title}"
  Category: ${p.category}
  Status: ${p.status || 'N/A'}
  Description: ${p.description}
  Tech Stack: ${p.techStack.join(', ')}
  Links: ${p.link ? 'Live Demo' : ''} ${p.githubLink ? 'GitHub Code' : ''}
`).join('\n')}

If a user asks about a project not listed here, strictly state that you only have information on the featured projects shown in the portfolio.
`;