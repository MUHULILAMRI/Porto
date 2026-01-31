
import { Project, Experience, Certificate } from './types';

export const USER_INFO = {
  name: "MUH. ULIL AMRI, S.Kom",
  // ... (rest of USER_INFO)
  role: "Fullstack Developer & Data Analyst",
  shortBio: "I bridge the gap between complex data and intuitive user experiences. Specializing in modern web technologies and actionable data insights.",
  location: "Indonesia",
  email: "muhulila648@gmail.com",
  profileImage: "./ulil.jpeg", // Foto profil
  socials: {
    github: "github.com/MUHULILAMRI",
    linkedin: "linkedin.com/in/muh-ulil-amri-s-kom-mtcna-34832038b/",
    instagram: "instagram.com/muhulilamri_____"
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

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 1,
    title: "Junior Network Administrator (BNSP)",
    issuer: "BNSP / LSP Teknologi Digital",
    date: "2024",
    description: "Sertifikasi kompetensi nasional untuk pengelolaan infrastruktur jaringan, konfigurasi perangkat, dan pemecahan masalah jaringan komputer.",
    credentialId: "BNSP-JNA-2024",
    link: "./sertifikat/JNA.jpg",
    color: "indigo",
    previewImage: "./sertifikat/JNA.jpg"
  },
  {
    id: 2,
    title: "Data Management Staff (BNSP)",
    issuer: "BNSP / LSP Teknologi Digital",
    date: "2021",
    description: "Sertifikasi profesional dalam pengelolaan aset data organisasi, administrasi database, dan pemrosesan informasi secara efisien.",
    credentialId: "BNSP-DMS-2021",
    link: "./sertifikat/DMS.jpg",
    color: "violet",
    previewImage: "./sertifikat/DMS.jpg"
  },
  {
    id: 3,
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "2024",
    description: "Sertifikasi internasional MikroTik (MTCNA) yang memvalidasi keahlian dalam konfigurasi, manajemen, dan troubleshooting perangkat router MikroTik.",
    credentialId: "MTCNA-24-ULIL",
    link: "./sertifikat/mtcna.png",
    color: "blue",
    previewImage: "./sertifikat/mtcna.png"
  },
  {
    id: 4,
    title: "AI Engineer For Milenial",
    issuer: "Milenial AI Academy",
    date: "2024",
    description: "Program intensif yang berfokus pada pengembangan aplikasi berbasis kecerdasan buatan, integrasi model bahasa besar (LLM), dan teknik engineering AI modern.",
    credentialId: "CERT-AI-2024",
    link: "./sertifikat/AI Engineer.png",
    color: "cyan",
    previewImage: "./sertifikat/AI Engineer.png"
  },
  {
    id: 5,
    title: "Mastering Generative AI",
    issuer: "Kominfo x Milenial AI",
    date: "2024",
    description: "Pelatihan lanjutan Mastering Generative Artificial Intelligence sebagai bagian dari program peningkatan bakat digital.",
    credentialId: "GEN-AI-MASTER-2024",
    link: "./sertifikat/Mastering Generative AI.png",
    color: "violet",
    previewImage: "./sertifikat/Mastering Generative AI.png"
  },
  {
    id: 6,
    title: "Cyber Security Dasar",
    issuer: "ID-Networkers (LMS)",
    date: "2023",
    description: "Pelatihan fundamental keamanan siber yang mencakup perlindungan data, manajemen risiko digital, dan dasar-dasar pertahanan jaringan.",
    credentialId: "CYBER-SEC-BAS-IDN",
    link: "./sertifikat/Cyber Security.png",
    color: "orange",
    previewImage: "./sertifikat/Cyber Security.png"
  },
  {
    id: 7,
    title: "Introduction To Cloud Computing",
    issuer: "Digital Talent Scholarship",
    date: "2023",
    description: "Dasar-dasar teknologi cloud, model layanan (IaaS, PaaS, SaaS), dan pengenalan infrastruktur cloud global.",
    credentialId: "CLOUD-INTRO-DTS-2023",
    link: "./sertifikat/Introducing To Cloud Computing.png",
    color: "blue",
    previewImage: "./sertifikat/Introducing To Cloud Computing.png"
  },
  {
    id: 8,
    title: "Dasar-dasar Keamanan AI",
    issuer: "Kominfo",
    date: "2024",
    description: "Mempelajari etika, risiko keamanan, dan teknik perlindungan data dalam pengembangan sistem kecerdasan buatan.",
    credentialId: "SEC-AI-DTS-2024",
    link: "./sertifikat/Keamana AI.png",
    color: "indigo",
    previewImage: "./sertifikat/Keamana AI.png"
  },
  {
    id: 9,
    title: "Data Management Staff (Pelatihan)",
    issuer: "Vocational School Graduate Academy (VSGA)",
    date: "2021",
    description: "Pelatihan teknis pengelolaan data bagi lulusan vokasi yang diselenggarakan oleh Kominfo di Kabupaten Bantaeng.",
    credentialId: "VSGA-DMS-2021",
    link: "./sertifikat/SERTIFIKAT. kominfo.jpg",
    color: "blue",
    previewImage: "./sertifikat/SERTIFIKAT. kominfo.jpg"
  },
  {
    id: 10,
    title: "Fundamental Javascript",
    issuer: "Dicoding Indonesia",
    date: "2023",
    description: "Memahami konsep dasar JavaScript, sintaksis, logika pemrograman, dan penggunaan fitur modern ES6+.",
    credentialId: "DICODING-JS-2023",
    link: "./sertifikat/Fundamental Javascript.png",
    color: "orange",
    previewImage: "./sertifikat/Fundamental Javascript.png"
  },
  {
    id: 11,
    title: "Mikrotik Networking",
    issuer: "MikroTik Academy",
    date: "2024",
    description: "Pelatihan teknis mengenai infrastruktur jaringan menggunakan perangkat MikroTik, manajemen bandwidth, dan firewall.",
    credentialId: "MIKRO-NET-2024",
    link: "./sertifikat/Mikrotik Networking.png",
    color: "blue",
    previewImage: "./sertifikat/Mikrotik Networking.png"
  },
  {
    id: 12,
    title: "Next Js, Docker, Advance API Architectures",
    issuer: "Fullstack Academy",
    date: "2024",
    description: "Pengembangan aplikasi web modern dengan Next.js, implementasi kontainerisasi Docker, dan perancangan arsitektur API yang skalabel.",
    credentialId: "ADV-WEB-ARCH-2024",
    link: "./sertifikat/Next Js, Docker, Advance API Architectures.png",
    color: "indigo",
    previewImage: "./sertifikat/Next Js, Docker, Advance API Architectures.png"
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
Anda adalah asisten AI yang ramah dan profesional untuk website portofolio milik ${USER_INFO.name}.
Dia adalah seorang ${USER_INFO.role}.

Instruksi Utama:
1. GUNAKAN BAHASA INDONESIA dalam setiap percakapan secara default.
2. Kepribadian: Profesional, Analitis, Kreatif, namun tetap santai dan bersahabat.
3. Keahlian: React, TypeScript, Python, SQL, Visualisasi Data, Machine Learning, Cyber Security.
4. Tujuan: Menjawab pertanyaan tentang pengalaman, skill, proyek, dan sertifikasi Ulil berdasarkan konteks sebagai senior engineer dan analis data.
5. Jawablah dengan ringkas dan jelas. Jika ditanya tentang info kontak, berikan email: ${USER_INFO.email}.

Daftar Proyek yang tersedia:
${PROJECTS.map(p => `
- Judul: "${p.title}"
  Kategori: ${p.category}
  Status: ${p.status || 'N/A'}
  Deskripsi: ${p.description}
  Teknologi: ${p.techStack.join(', ')}
`).join('\n')}

Sertifikasi yang dimiliki:
${CERTIFICATES_DATA.map(c => `- ${c.title} oleh ${c.issuer} (${c.date}): ${c.description}`).join('\n')}

Jika pengguna bertanya tentang hal yang tidak ada di daftar ini, sampaikan dengan sopan bahwa Anda hanya memiliki informasi untuk data yang ditampilkan di portofolio saat ini.
`;