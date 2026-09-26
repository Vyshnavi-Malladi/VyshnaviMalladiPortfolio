import farmxpertImg from "@/assets/farmxpert.jpg";
import skillGapNavigatorImg from "@/assets/skill-gap-navigator.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const profile = {
  name: "Vyshnavi Malladi",
  role: "AI & Full Stack Developer",
  tagline:
    "B.Tech graduate in Artificial Intelligence & Machine Learning who builds scalable MERN stack products and applied ML solutions for real-world problems.",
  location: "Kakinada, Andhra Pradesh",
  email: "vyshnavimalladi2004@gmail.com",
  phone: "+91 95736 51729",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://instagram.com/",
  },
  resumeUrl: resumeAsset.url,
};

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { label: "CGPA", value: 9.39, suffix: "/10" },
  { label: "Major Projects", value: 2, suffix: "" },
  { label: "Certifications", value: 4, suffix: "+" },
  { label: "Technologies", value: 8, suffix: "+" },
];

const timeline = [
  {
    period: "2022 — 2026",
    title: "B.Tech, Artificial Intelligence & Machine Learning",
    org: "Aditya Engineering College",
    detail:
      "CGPA 9.39 / 10 · Coursework across AI, ML, DBMS and full stack development",
  },
  {
    period: "2020 — 2022",
    title: "Intermediate (MPC)",
    org: "Aditya Junior College",
    detail:
      "971 / 1000 · Mathematics, Physics and Chemistry",
  },
  {
    period: "Objective",
    title: "Where I'm heading",
    org: "Software Engineering",
    detail:
      "To join an innovative engineering team where I can build scalable software and apply machine learning to real-world problems.",
  },
];

const skillGroups = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 94 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: 92 },
      { name: "React Native", level: 78 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "MySQL", level: 84 },
    ],
  },
  {
    category: "Developer Tools",
    icon: "tool",
    skills: [
      { name: "VS Code", level: 94 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 89 },
      { name: "Jupyter Notebook", level: 86 },
      { name: "Spyder", level: 80 },
    ],
  },
];

const experience = [
  {
    type: "Internship",
    role: "Full Stack Developer Intern",
    org: "Technical Hub, Surampalem",
    period: "May 2025 — Jun 2025",
    logo: "TH",
    points: [
      "Developed MERN stack applications using React.js, Node.js, Express.js and MongoDB.",
      "Built responsive interfaces and integrated RESTful APIs for seamless frontend–backend communication.",
      "Created reusable React components and optimised application performance.",
    ],
  },
  {
    type: "Education",
    role: "B.Tech in Artificial Intelligence & Machine Learning",
    org: "Aditya Engineering College",
    period: "2022 — 2026",
    logo: "AEC",
    points: [
      "Graduated with a CGPA of 9.39 / 10.",
      "Focus on machine learning, deep learning and scalable web engineering.",
    ],
  },
  {
    type: "Certification",
    role: "Red Hat Certified System Administrator (RHCSA)",
    org: "Red Hat",
    period: "Certified",
    logo: "RH",
    points: [
      "Hands-on Linux system administration, user management and service configuration.",
    ],
  },
  {
    type: "Strengths",
    role: "Problem Solving & Team Leadership",
    org: "Soft Skills",
    period: "Ongoing",
    logo: "SS",
    points: [
      "Strong communication, teamwork and leadership across academic and project teams.",
    ],
  },
];

const projects = [
  {
    slug: "farmxpert",
    title: "FarmXpert — Smart Crop Advisory System",
    summary:
      "MERN + ML smart agriculture platform with crop recommendation and disease detection.",
    description:
      "A MERN-based smart agriculture platform that combines machine learning crop recommendation with deep-learning crop disease detection, plus weather forecasting, soil testing centre discovery, crop tracking and fertilizer guidance for farmers.",

    image: farmxpertImg,

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "ML",
      "DL",
    ],

    features: [
      "ML-based crop recommendation engine",
      "Deep-learning crop disease detection",
      "Weather forecasting and soil testing centre locator",
      "Crop tracking and fertilizer recommendation",
      "REST APIs built with Node.js, Express.js and MongoDB",
    ],

    github: "https://github.com/",
    demo: "https://github.com/",
  },

  {
    slug: "skill-gap-navigator",
    title: "Skill Gap Navigator",
    summary:
      "Career guidance platform with resume analysis, skill gap assessment and personalized roadmaps.",
    description:
      "A MERN-based career guidance platform that analyses resumes, assesses skill gaps and generates personalized learning roadmaps, alongside interview preparation and job application tracking with secure authentication and responsive dashboards.",

    image: skillGapNavigatorImg,

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Resume analysis and skill gap assessment",
      "Personalized learning roadmaps",
      "Interview preparation and job tracking",
      "Secure authentication and user profile management",
      "Scalable REST APIs with MongoDB data management",
    ],

    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

const certifications = [
  {
    title: "IT Specialist — HTML & CSS",
    issuer: "Certiport",
    date: "Certified",
    badge: "HTML",
  },
  {
    title: "IT Specialist — JavaScript",
    issuer: "Certiport",
    date: "Certified",
    badge: "JS",
  },
  {
    title: "IT Specialist — Python",
    issuer: "Certiport",
    date: "Certified",
    badge: "PY",
  },
  {
    title: "Red Hat Certified System Administrator",
    issuer: "Red Hat",
    date: "Certified",
    badge: "RHCSA",
  },
  {
    title: "Database Management Systems — Elite",
    issuer: "NPTEL",
    date: "Elite Certificate",
    badge: "DBMS",
  },
  {
    title: "Internet of Things — Gold",
    issuer: "NPTEL",
    date: "Gold Certificate",
    badge: "IoT",
  },
];

const achievements = [
  {
    title: "CGPA 9.39 / 10",
    org: "Aditya Engineering College",
    detail:
      "Consistent academic excellence across the B.Tech AI & ML programme.",
    icon: "award",
  },
  {
    title: "971 / 1000 in Intermediate",
    org: "Aditya Junior College",
    detail:
      "Top-tier score in the MPC stream (Mathematics, Physics, Chemistry).",
    icon: "star",
  },
  {
    title: "NPTEL Elite & Gold",
    org: "NPTEL",
    detail:
      "Elite certificate in DBMS and Gold certificate in Internet of Things.",
    icon: "medal",
  },
  {
    title: "RHCSA Certified",
    org: "Red Hat",
    detail:
      "Industry-recognised Linux system administration certification.",
    icon: "shield",
  },
];

export {
  achievements,
  certifications,
  experience,
  navLinks,
  profile,
  projects,
  skillGroups,
  stats,
  timeline,
};
