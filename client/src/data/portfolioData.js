export const portfolioData = {
  personal: {
    name: 'Nidhish Tripathi',
    role: 'B.Tech CSE Student',
    headline: 'B.Tech CSE Student | Web Development | Cybersecurity Enthusiast',
    degree: 'B.Tech in Computer Science and Engineering (CSE Core)',
    university: 'JK Lakshmipat University (JKLU), Jaipur, Rajasthan',
    academicStatus: 'Third-year student (Roll No. 2024btech253)',
    typewriterRoles: [
      'B.Tech CSE Student',
      'Web Development Learner',
      'Cybersecurity Enthusiast',
      'Practical Project Builder'
    ],
    bio: 'Third-year Computer Science & Engineering student at JK Lakshmipat University, Jaipur. Passionate about web development, cybersecurity, ethical hacking, networking, and machine learning applications. Dedicated to building practical projects that reinforce core software engineering and systems concepts.',
    location: 'Jaipur, Rajasthan, India',
    status: 'Third-Year Student | Open to Internship & Learning Opportunities',
    experienceYears: 'First Internship Completed at Future Design',
    avatar: '/nidhish-avatar.png',
    email: 'nidhishtripathi11@gmail.com',
    emailPlaceholder: 'nidhishtripathi11@gmail.com',
    github: 'https://github.com/nidhishtripathi',
    linkedin: 'https://www.linkedin.com/in/nidhishtripathii/',
    stats: [
      { label: 'Academic Status', value: '3rd Year' },
      { label: 'University', value: 'JKLU Jaipur' },
      { label: 'Internship', value: 'Future Design' },
      { label: 'Core Projects', value: '3 Featured' }
    ]
  },

  // 7 Organized Skill Categories as required by Requirement 8
  skills: {
    languages: [
      { name: 'Python', stage: 'Completed Projects', icon: 'Code', note: 'Used in ML Intrusion Detection & HackChain' },
      { name: 'C', stage: 'Coursework & Labs', icon: 'FileCode', note: 'Core programming foundations & memory concepts' },
      { name: 'C++', stage: 'Coursework & Labs', icon: 'FileCode2', note: 'Object-oriented programming & algorithms' },
      { name: 'JavaScript (ES6+)', stage: 'Completed Projects', icon: 'Zap', note: 'Used in MERN portfolio & full-stack apps' },
      { name: 'TypeScript', stage: 'Completed Projects', icon: 'CheckCircle', note: 'Used during Future Design internship (Omoide)' },
      { name: 'SQL', stage: 'Coursework & Labs', icon: 'Database', note: 'Relational schema modeling & queries' }
    ],
    frontend: [
      { name: 'React.js', stage: 'Completed Projects', icon: 'Atom', note: 'SPAs, component architecture, hooks' },
      { name: 'Next.js 15', stage: 'Completed Projects', icon: 'Globe', note: 'Used for Omoide web client during internship' },
      { name: 'React Native (Expo)', stage: 'Completed Projects', icon: 'Smartphone', note: 'Cross-platform mobile UI for Omoide' },
      { name: 'HTML5 & CSS3', stage: 'Completed Projects', icon: 'Layout', note: 'Semantic markup and responsive layouts' },
      { name: 'TailwindCSS', stage: 'Completed Projects', icon: 'Palette', note: 'Utility-first styling applied in Omoide' },
      { name: 'Vanilla CSS & Variables', stage: 'Completed Projects', icon: 'Layers', note: 'Custom design tokens and dark/light themes' }
    ],
    backend: [
      { name: 'Node.js', stage: 'Completed Projects', icon: 'Server', note: 'JavaScript runtime for backend services' },
      { name: 'Express.js', stage: 'Completed Projects', icon: 'Cpu', note: 'REST API routing, middleware, and controllers' },
      { name: 'Django', stage: 'Completed Projects', icon: 'Server', note: 'Used in HackChain Labs learning platform' },
      { name: 'RESTful API Design', stage: 'Completed Projects', icon: 'Network', note: 'HTTP methods, status codes, JSON payloads' }
    ],
    databases: [
      { name: 'MongoDB', stage: 'Completed Projects', icon: 'Database', note: 'NoSQL document database for portfolio contact' },
      { name: 'Mongoose ODM', stage: 'Completed Projects', icon: 'Database', note: 'Schema definition, validation, and queries' },
      { name: 'PostgreSQL / Neon', stage: 'Completed Projects', icon: 'Database', note: 'Cloud database utilized in Omoide monorepo' },
      { name: 'SQLite', stage: 'Completed Projects', icon: 'Database', note: 'Embedded database for lightweight Django labs' }
    ],
    security: [
      { name: 'Network Traffic Analysis', stage: 'Coursework & Labs', icon: 'Shield', note: 'Packet flow feature extraction & protocols' },
      { name: 'Intrusion Detection (IDS)', stage: 'Completed Projects', icon: 'ShieldAlert', note: 'ML-based anomaly and threat detection' },
      { name: 'OWASP Top 10 Concepts', stage: 'Currently Learning', icon: 'Lock', note: 'Understanding web security vulnerabilities' },
      { name: 'Ethical Hacking Fundamentals', stage: 'Currently Learning', icon: 'Terminal', note: 'Reconnaissance, scanning, defense concepts' },
      { name: 'Linux Fundamentals', stage: 'Coursework & Labs', icon: 'Terminal', note: 'Command-line utilities and shell environment' }
    ],
    mlData: [
      { name: 'Scikit-Learn', stage: 'Completed Projects', icon: 'Cpu', note: 'ML classifiers (Decision Trees, Random Forest)' },
      { name: 'LightGBM', stage: 'Completed Projects', icon: 'Zap', note: 'Fast gradient boosted decision trees for IDS' },
      { name: 'Pandas', stage: 'Completed Projects', icon: 'FileText', note: 'Network dataset manipulation & cleaning' },
      { name: 'NumPy', stage: 'Completed Projects', icon: 'Cpu', note: 'Numerical arrays and feature matrix operations' },
      { name: 'Feature Extraction', stage: 'Completed Projects', icon: 'Layers', note: 'Flow statistical feature generation' }
    ],
    tools: [
      { name: 'Git & GitHub', stage: 'Completed Projects', icon: 'GitBranch', note: 'Version control, branches, and collaboration' },
      { name: 'Docker Fundamentals', stage: 'Completed Projects', icon: 'Box', note: 'Container compose workflows in Omoide' },
      { name: 'Turborepo', stage: 'Completed Projects', icon: 'Workflow', note: 'Monorepo workspace orchestration' },
      { name: 'Postman', stage: 'Completed Projects', icon: 'Send', note: 'API endpoint testing and payload validation' },
      { name: 'Vite', stage: 'Completed Projects', icon: 'Zap', note: 'Modern frontend tooling and bundling' },
      { name: 'VS Code', stage: 'Completed Projects', icon: 'Terminal', note: 'Primary development environment & extensions' }
    ]
  },

  projects: [
    {
      id: 'omoide-japanese-learning',
      title: 'Omoide — Japanese JLPT Test and Learning Website',
      category: 'Internship Project',
      tags: ['Next.js 15', 'React Native / Expo', 'TypeScript', 'TailwindCSS', 'Turborepo', 'PostgreSQL / Neon'],
      description:
        'A comprehensive Japanese language learning and JLPT preparation platform featuring spaced-repetition vocabulary flashcards, multi-script study modes, and learning statistics. Developed during my first internship at Future Design.',
      features: [
        'Interactive flashcard study sessions supporting Kanji, Hiragana, Romaji, and Jukugo compound scripts',
        'Study session setup with JLPT level selection, lesson pickers, and randomized card shuffling',
        'User dashboard displaying active study streak counter, weak words analytics, and lesson completion grids',
        'Turborepo monorepo connecting Next.js 15 web client with Expo React Native mobile client',
        'Cross-platform UI styled with TailwindCSS and custom CSS variables matching Omoide warm-beige palette'
      ],
      image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/nidhishtripathi',
      live: 'https://github.com/nidhishtripathi',
      context: 'Future Design Internship (May 2026 – July 2026)',
      role: 'Intern — Web Development',
      organization: 'Future Design',
      featured: true
    },
    {
      id: 'campus-network-ids',
      title: 'Lightweight ML-Based Intrusion Detection for Campus Networks',
      category: 'Machine Learning & Security',
      tags: ['Python', 'Scikit-learn', 'LightGBM', 'Pandas', 'NumPy', 'Cybersecurity'],
      description:
        'A machine-learning-based intrusion detection system designed to analyze network flow characteristics and classify traffic as normal or malicious for resource-constrained campus networks and IoT devices.',
      features: [
        'Evaluated lightweight ML models (Decision Trees, Random Forest, Logistic Regression, LightGBM, KNN)',
        'Extracted network flow features including packet statistics, flow duration, protocol distributions, and ports',
        'Benchmarked against network intrusion datasets (CICIDS) for detecting port scanning and DoS threats',
        'Designed for low computational latency and real-time security alert capability in campus environments'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/nidhishtripathi',
      live: 'https://github.com/nidhishtripathi',
      context: 'CS1140 Introduction to Cyber Security Course Project, JKLU',
      role: 'Project Contributor / Lead (Roll: 2024btech253)',
      organization: 'JK Lakshmipat University',
      featured: true
    },
    {
      id: 'nayaysetu',
      title: 'NaayaSetu — Legal Aid & Justice Access Platform',
      category: 'Civic Tech & Web',
      tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Vercel'],
      description:
        'A civic-tech web platform designed to bridge the gap between citizens and legal aid resources. NaayaSetu (meaning "Justice Bridge") provides accessible information and guidance on legal rights, built collaboratively as a team hackathon project.',
      features: [
        'Single-page React + TypeScript app providing structured legal aid information to underserved communities',
        'Responsive UI built with TailwindCSS, designed for accessibility and ease of navigation',
        'Deployed to Vercel for instant global availability with zero-config CI/CD pipeline',
        'Collaborative team project developed using Vite for fast development iteration and build tooling'
      ],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/nidhishtripathi/nayaysetu_first_draft',
      live: 'https://nayaysetu-first-draft.vercel.app',
      context: 'Collaborative Team Hackathon Project',
      role: 'Team Contributor — Frontend Development',
      organization: 'Team Project',
      featured: true
    }
  ],

  timeline: [
    {
      type: 'experience',
      title: 'Intern — Web Development',
      institution: 'Future Design',
      period: 'May 2026 – July 2026',
      location: 'India',
      project: 'Omoide — Japanese JLPT Test and Learning Website',
      description:
        'Contributed to the frontend development of the Omoide Japanese language flashcard and JLPT preparation platform across web and mobile clients within a Turborepo monorepo.',
      highlights: [
        'Built interactive flashcard study interfaces supporting Kanji, Hiragana, Romaji, and Jukugo scripts with instant feedback',
        'Developed user dashboard views featuring active study streak counters, lesson pickers, and weak words lists',
        'Created responsive authentication views (login, registration, password reset) with client validation and toast alerts',
        'Collaborated on cross-platform UX testing across Next.js 15 web client and Expo React Native mobile client'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering (CSE Core)',
      institution: 'JK Lakshmipat University (JKLU)',
      period: '2024 – Present (Third-Year Student)',
      location: 'Jaipur, Rajasthan',
      description:
        'Pursuing B.Tech CSE Core curriculum with strong focus on computer systems, web technologies, networking, and information security.',
      highlights: [
        'Third-Year Student (Roll No. 2024btech253)',
        'Relevant Coursework: Introduction to Cyber Security (CS1140), Computer Networks, Optimization for CS, Database Management Systems, Web Development',
        'Course Project: Lightweight ML-Based Intrusion Detection for Campus Networks (CS1140)'
      ]
    }
  ],

  certifications: [
    {
      title: 'CS1140: Introduction to Cyber Security Project Submission',
      issuer: 'Institute of Engineering & Technology, JKLU',
      issueDate: 'October 2026',
      credentialId: 'JKLU-CS1140-2024BTECH253',
      link: 'https://github.com/nidhishtripathi',
      badge: 'Academic Project',
      description: 'Submitted and presented project on Lightweight ML-Based Intrusion Detection for Campus Networks evaluated under faculty guidance.'
    },
    {
      title: 'Full-Stack MERN Course Assessment',
      issuer: 'Department of Computer Science & Engineering, JKLU',
      issueDate: 'October 2026',
      credentialId: 'MERN-COURSE-2026',
      link: 'https://github.com/nidhishtripathi/mern-portfolio-assignment',
      badge: 'Coursework Assessment',
      description: 'Demonstrated complete MERN stack architecture including React 18 SPA, Node.js + Express backend APIs, and MongoDB persistence.'
    },
    {
      title: 'Industry / Platform Certification [Editable Placeholder]',
      issuer: '[NPTEL / Coursera / Platform Name]',
      issueDate: '[Pending / In-Progress]',
      credentialId: '[Add Verified Certificate ID]',
      link: 'https://github.com/nidhishtripathi',
      badge: 'Editable Placeholder',
      description: 'Placeholder ready for adding verified certifications from NPTEL, Coursera, or industry platforms when completed.'
    },
    {
      title: 'Hackathon & Technical Event Participation [Editable Placeholder]',
      issuer: '[University / Organization Name]',
      issueDate: '[Date / Year]',
      credentialId: '[Participant ID / Reference]',
      link: 'https://github.com/nidhishtripathi',
      badge: 'Editable Placeholder',
      description: 'Placeholder reserved for hackathons, coding challenges, and collegiate competitive events.'
    }
  ]
};
