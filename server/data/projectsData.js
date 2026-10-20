const projects = [
  {
    id: 'omoide-japanese-learning',
    title: 'Omoide — Japanese JLPT Test and Learning Website',
    category: 'Full Stack',
    tags: ['Next.js 15', 'React Native / Expo', 'TypeScript', 'TailwindCSS', 'Turborepo', 'PostgreSQL / Neon'],
    description:
      'A Japanese language learning and JLPT preparation platform featuring spaced-repetition vocabulary flashcards, interactive multi-script study modes, and personal study analytics. Developed during internship at Future Design.',
    features: [
      'Interactive flashcard study sessions supporting Kanji, Hiragana, Romaji, and Jukugo compound scripts',
      'Instant grading feedback overlays and customizable study modules with randomized shuffle mode',
      'User dashboard with active study streaks, lesson completion grids, and weak words lists',
      'Turborepo monorepo architecture linking Next.js 15 web client and Expo React Native mobile app'
    ],
    image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/nidhishtripathi',
    live: 'https://github.com/nidhishtripathi',
    organization: 'Future Design',
    role: 'Intern — Web Development',
    featured: true
  },
  {
    id: 'campus-network-ids',
    title: 'Lightweight ML-Based Intrusion Detection for Campus Networks',
    category: 'Machine Learning & Security',
    tags: ['Python', 'Scikit-learn', 'LightGBM', 'Pandas', 'NumPy', 'Cybersecurity'],
    description:
      'A lightweight machine learning intrusion detection system designed to analyze network flow statistics and classify traffic as benign or malicious for resource-constrained campus and IoT environments.',
    features: [
      'Evaluated lightweight ML models (Decision Trees, Random Forest, Logistic Regression, LightGBM, KNN)',
      'Feature extraction pipeline processing packet sizes, flow duration, protocols, and port statistics',
      'Detection benchmarked against network intrusion datasets (CICIDS) for port scans and DoS attacks',
      'Designed for efficient real-time alert generation without requiring high-performance compute clusters'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/nidhishtripathi',
    live: 'https://github.com/nidhishtripathi',
    context: 'CS1140 Cyber Security Course Project, JK Lakshmipat University',
    featured: true
  },
  {
    id: 'mern-personal-portfolio',
    title: 'Full-Stack MERN Personal Portfolio & Assessment Web App',
    category: 'Full Stack',
    tags: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Vite', 'Vanilla CSS'],
    description:
      'Personal portfolio and coursework assessment application built with the MERN stack demonstrating component-driven architecture, dark/light mode toggle, MongoDB persistence, and backend-served CV downloads.',
    features: [
      'Single-page application (SPA) with React Router and persistent custom theme management',
      'Express.js REST API with health check route (/api/health) and automated in-memory fallback',
      'Contact form wired to MongoDB database with Mongoose validation and real-time user feedback',
      'Backend endpoints serving authenticated resume downloads in both PDF and DOCX formats'
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/nidhishtripathi/mern-portfolio-assignment',
    live: 'http://localhost:5173',
    context: 'Full-Stack MERN Course Assessment, 3rd Year B.Tech CSE, JKLU',
    featured: true
  },
  {
    id: 'hackchain-labs',
    title: 'HackChain Labs — Cybersecurity Learning Platform',
    category: 'Cybersecurity & Web',
    tags: ['Python', 'Django', 'SQLite/PostgreSQL', 'HTML5/CSS3', 'Ethical Hacking', 'OWASP'],
    description:
      'An interactive cybersecurity and ethical hacking learning platform featuring sandbox modules for exploring web vulnerabilities, defensive protocols, and security fundamentals.',
    features: [
      'Hands-on lab environments demonstrating common web vulnerabilities (OWASP Top 10)',
      'Django backend managing interactive challenge flags and user learning progression',
      'Network protocol inspection modules and defensive security best-practice guides'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/nidhishtripathi',
    live: 'https://github.com/nidhishtripathi',
    context: 'Cybersecurity Learning & Practical Lab Project',
    featured: false
  }
];

module.exports = projects;
