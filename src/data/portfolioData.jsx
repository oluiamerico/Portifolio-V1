import { DiIntellij, DiVisualstudio } from 'react-icons/di';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaJava } from 'react-icons/fa'; // Example icons
import { FaGolang } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython, SiSpringboot, SiPostman, SiJunit5 } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Luis Américo",
  title: "Software Engineer",
  email: "luiamericobusiness@gmail.com",
  linkedin: "https://linkedin.com/in/luis-americo-reis",
  github: "https://github.com/oluiamerico",
  resumeLink: "/curriculo.pdf", // Make sure your resume is in public/
  bio: "Minha missão é unir tecnologia e propósito para criar sistemas que entreguem valor real e impacto positivo.",
  // shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "Universidade Católica de Salvador",
    degree: "Bacharelado de Engenharia de Software",
    duration: "Julh 2023 – Julh 2027",
  },
  {
    institution: "Udemy",
    degree: "Cusro comlpeto de SpringBoot",
    duration: "Julh 2025 – Ago 2025",
  }
];

export const projects = [
  {
    title: "Ucsal - Alocação de Professores",
    tech: ["Java", "SpringBoot", "PostgreSQL", "Angular"],
    description: "Desenvolvimento do sistema de Alocação de Professores da UCSAL. Trabalhamos em **equipe** utilizando a metodologia ágil **Scrum**, focando na análise e definição robusta das **regras de negócio** em conjunto para solucionar o problema de alocação de forma eficiente. O projeto está sendo construído com **código** de alta qualidade e será **evoluído para uso prático** pela universidade.",
    date: "Setembro 2025 – Presente",
    githubLink: "https://github.com/ucsal/apiback03-grupo-02-code-miners/tree/develop", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Backend",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Library API",
    tech: ["Java", "SpringBoot", "PostgreSQL"],
    description: "Desenvolvimento de uma **API de Biblioteca** completa, com foco na arquitetura **Backend**. O projeto serviu como um laboratório de aprendizado aprofundado em **Spring Boot**, implementação de segurança com **Spring Security e JWT (JSON Web Token)** para autenticação e autorização, além da containerização da aplicação utilizando **Docker**.",
    date: "Julh 2025",
    githubLink: "https://github.com/oluiamerico/libraryApi", // Replace with actual link
    liveLink: null,
    category: "Backend",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "URL Shortener",
    tech: ["React JS", "Node.js", "PostgreSQL"],
    description: "Um encurtador de url fullstack com React, NodeJS e PostgreSQL, onde o usuário pode inserir a url dele, receber a url encurtada e acessar com redirecionamento automático. ",
    date: "Maio 2025",
    githubLink: "https://github.com/oluiamerico/UrlShortener",
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Sequelize Node ",
    tech: ["Node JS", "Sequelize"],
    description: "Uma API REST desenvolvida com NodeJS e Sequelize integrada ao banco de dados SQL. A API gerencia entidades como pessoas, cursos e matrículas, permitindo operações CRUD e consultas específicas",
    date: "Abril 2025",
    githubLink: "https://github.com/oluiamerico/sequelize-node",
    liveLink: null,
    category: "Backend",
    icon: <SiFirebase size={24} className="text-accent-1"/>
  }
];

export const skills = {
  languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "GoLang", icon: <FaGolang /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "SpringBoot", icon: <SiSpringboot /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
  ],
  toolsAndPlatforms: [
    { name: "Postman", icon: <SiPostman /> },
    { name: "VSCode", icon: <DiVisualstudio /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "IntelliJ", icon: <DiIntellij /> }, // Or a more specific icon
    { name: "JUnit", icon: <SiJunit5 /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Resolução de Problemas",
    "Apresentações",
    "Trabalho em Equpie",
    "Metodologias Ágeis"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};