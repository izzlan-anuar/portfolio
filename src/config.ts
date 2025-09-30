export const siteConfig = {
  name: 'Izzlan Anuar',
  title: 'Tech Support Engineer',
  description: 'Portfolio website of Izzlan Anuar',
  accentColor: '#1d4ed8',
  social: {
    email: 'eizlan09@gmail.com',
    linkedin: 'https://linkedin.com/in/muhammad-izzlan-917707200',
    github: 'https://github.com/beginnerIzz',
  },
  aboutMe:
    'A Tech enthusiast with a passion for exploring, learning, and building in the world of technology. This website serves as my personal portfolio — a space where I can showcase my projects, document my journey, and share ideas that excite me. From hands-on experiments to real-world applications, each project reflects my curiosity and commitment to continuous growth. Beyond just a portfolio, this site is a representation of my learning path and a hub to connect with like-minded people, potential collaborators, and future opportunities.',
  skills: ['Javascript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
  projects: [
    /*{
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },*/
    {
      name: 'Kubernetes Intro',
      description: 'Learning Kubernetes from scratch ',
      link: 'https://medium.com/@eizlan09/kubernetes-introduction-784e7c1724a4',
      skills: ['AWS', 'Docker', 'Kubernetes'],
    },
  ],
  experience: [
    {
      company: 'BigPay',
      title: 'Tech Support Engineer',
      dateRange: 'April 2024 - Present',
      bullets: [
        'Mitigate issue as first responder from Tech side across all production environment',
        'Collaborate with DevOps/SRE/Developer to find root cause and provide improvement',
        'Automate a process by writing a script to fulfill specific requirements',
      ],
    },
    {
      company: 'AirAsia Move',
      title: 'L1/L2 Cloud Engineer',
      dateRange: 'Dec 2022 - April 2024',
      bullets: [
        'Access the severity of the issue across all internal system',
        'Responsible as Incident Manager to manage stakeholders during downtime',
        'Monitor all layers (Infra/Platform/Application)',
      ],
    },
    {
      company: 'Huawei Inc',
      title: 'IT Cloud Engineer',
      dateRange: 'Dec 2021 - Dec 2022',
      bullets: [
        'Provide Technical Analysis for clients in APAC',
        'Handled various product from Server/Storage/Cloud',
        'Ensure timely service delivery in accordance to agreed SLA ',
      ],
    },
  ],
  education: [
    {
      school: 'Multimedia University (MMU)',
      degree: 'Bachelor of Computer Science (Data Science)',
      dateRange: '2019 - 2021',
      achievements: [
        /*"Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",*/
      ],
    },
  ],
};
