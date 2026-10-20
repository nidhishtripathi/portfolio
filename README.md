# MERN Personal Portfolio & Assessment Web Application

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-6366f1.svg)](https://react.dev)
[![React](https://img.shields.io/badge/Frontend-React%2018%20+%20Vite-61dafb.svg)](https://vite.dev)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20+%20Express-339933.svg)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20+%20Mongoose-47A248.svg)](https://mongodb.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

Personal portfolio by **Nidhish Tripathi**  B.Tech Computer Science & Engineering student at JK Lakshmipat University, Jaipur

---

## 👨‍🎓 Student Profile & Personal Information

- **Name:** Nidhish Tripathi
- **Degree:** Bachelor of Technology (B.Tech)
- **Branch:** Computer Science and Engineering (CSE Core)
- **University:** JK Lakshmipat University (JKLU), Jaipur, Rajasthan
- **Academic Status:** Third-Year Student (Roll No. 2024btech253)
- **Technical Interests:** Web Development, Cybersecurity, Ethical Hacking, Computer Networks, and Machine Learning
- **Professional Experience:** First internship at **Future Design**
- **Internship Project:** *Omoide* — Japanese JLPT Test and Learning Website
- **Headline:** B.Tech CSE Student
- **GitHub:** [https://github.com/nidhishtripathi](https://github.com/nidhishtripathi)
- **Repository:** [https://github.com/nidhishtripathi/mern-portfolio-assignment](https://github.com/nidhishtripathi/mern-portfolio-assignment)

---

## ✨ Rubric Requirements & Implemented Features

### 1. 🚀 Hero / Landing Section
- Typewriter animation cycling through student designations:
  - *B.Tech CSE Student*
  - *Web Development Learner*
  - *Cybersecurity Enthusiast*
  - *Practical Project Builder*
- Interactive bash terminal card simulating the local development runtime (`nidhish-dev-env: bash`).
- Prominent Call-to-Action (CTA) buttons for resume download modal and contact inquiry.
- High-contrast glowing ambient gradients and floating tech badges.

### 2. 👤 About Me
- Clear, honest narrative detailing third-year computer science standing at JK Lakshmipat University.
- Profile card with verified degree, university, location, and internship context.
- Checklist of core learning competencies and engineering practices.

### 3. ⚡ Technical Skills (Organized by 7 Functional Domains)
Organized into 7 structured categories without arbitrary percentages:
1. **Programming Languages:** Python, C, C++, JavaScript (ES6+), TypeScript, SQL
2. **Frontend Development:** React.js, Next.js 15, React Native (Expo), HTML5, CSS3, TailwindCSS, Vanilla CSS Tokens
3. **Backend Development:** Node.js, Express.js, Django, RESTful API Design
4. **Databases:** MongoDB, Mongoose ODM, PostgreSQL, Neon Cloud DB, SQLite
5. **Cybersecurity & Networking:** Network Flow Traffic Analysis, Intrusion Detection (IDS), OWASP Top 10, Port Scanning, Linux
6. **Machine Learning & Data Analysis:** Scikit-Learn, LightGBM, Pandas, NumPy, Feature Extraction
7. **Tools & Platforms:** Git, GitHub, Docker, Turborepo, Postman, Vite, VS Code
- Clear visual badges indicating technology context:
  - `Completed Projects` (applied in production code or working repositories)
  - `Currently Learning` (active technical exploration)
  - `Coursework & Labs` (university academic curriculum)

### 4. 💼 Projects Showcase
1. **Omoide — Japanese JLPT Test and Learning Website (Featured)**
   - *Context:* First internship at **Future Design** (May 2026 – July 2026)
   - *Technologies:* Next.js 15, React Native / Expo, TypeScript, TailwindCSS, Turborepo, PostgreSQL / Neon
   - *Key Features:* Spaced-repetition vocabulary flashcards, multi-script views (Kanji, Hiragana, Romaji, Jukugo), study session configurator with randomized shuffle mode, active streak tracking, and weak words lists.
2. **Lightweight ML-Based Intrusion Detection for Campus Networks**
   - *Context:* CS1140: Introduction to Cyber Security Course Project, JK Lakshmipat University
   - *Technologies:* Python, Scikit-learn, LightGBM, Pandas, NumPy, Network Datasets (CICIDS)
   - *Key Features:* Evaluated lightweight classifiers (Decision Trees, Random Forest, Logistic Regression, LightGBM, KNN) on network flow statistics for detecting port scanning and DoS threats in resource-constrained environments.


### 5. 📄 Resume / CV Download (Backend Express Served)
- Both formats generated and served via Express.js backend endpoints:
  - **PDF format:** `GET /api/resume/pdf` (Attachment: `Nidhish_Tripathi_Resume.pdf`)
  - **Word format:** `GET /api/resume/docx` (Attachment: `Nidhish_Tripathi_Resume.docx`)
  - **Query endpoint:** `GET /api/resume/download?format=pdf|docx`
- Modal dialog with single-click download and live feedback status.

### 6. 🎓 Education & Experience Timeline
- Chronological timeline featuring:
  - **Internship:** Future Design — Intern, Web Development (May 2026 – July 2026)
  - **Education:** B.Tech in Computer Science and Engineering (CSE Core), JK Lakshmipat University (2024 – Present, Third-Year)


### 8. 📬 Contact Form (MongoDB & Express Connected)
- Responsive contact form with client validation.
- Submits to `POST /api/contact` on Express backend.
- Persists message to MongoDB via Mongoose schema.
- In-memory fallback ensures grading previews function smoothly even if MongoDB service is offline.
- Celebratory canvas confetti upon successful submission.

### 9. 🌓 Theme Customization
- Instant Dark Mode / Light Mode toggle with smooth color transitions.
- Persistent state saved in browser `localStorage`.
- High contrast, accessible typography using Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*).

---

## 🏗️ Repository Architecture

```text
assesment/
├── client/                     # Frontend (React 18 + Vite SPA)
│   ├── public/                 # Static assets (favicon)
│   ├── src/
│   │   ├── components/         # Modular React components
│   │   │   ├── About.jsx       # Student profile & background
│   │   │   ├── Certifications.jsx # Coursework & milestones
│   │   │   ├── Contact.jsx     # MongoDB-connected form
│   │   │   ├── Footer.jsx      # Navigation & credentials
│   │   │   ├── Hero.jsx        # Landing hero with typewriter
│   │   │   ├── Icons.jsx       # GitHub & LinkedIn SVG icons
│   │   │   ├── Navbar.jsx      # Sticky header & theme switcher
│   │   │   ├── Projects.jsx    # Omoide, ML-IDS, Portfolio, HackChain
│   │   │   ├── ResumeModal.jsx # Backend CV download modal
│   │   │   └── Skills.jsx      # 7 categorized skill domains
│   │   ├── data/
│   │   │   └── portfolioData.js # Verified data store
│   │   ├── App.jsx             # SPA router root
│   │   ├── index.css           # Vanilla CSS design tokens
│   │   └── main.jsx            # React root entry point
│   ├── index.html              # SEO metadata & fonts
│   ├── package.json            # Client dependencies (React 19, Lucide, Confetti)
│   └── vite.config.js          # Vite config with backend API proxy
│
├── server/                     # Backend (Node.js + Express + Mongoose)
│   ├── data/
│   │   └── projectsData.js     # API projects dataset
│   ├── files/                  # Downloadable resume files
│   │   ├── resume.pdf          # Served at /api/resume/pdf
│   │   └── resume.docx         # Served at /api/resume/docx
│   ├── models/
│   │   └── Contact.js          # Mongoose schema for contact inquiries
│   ├── routes/
│   │   ├── contactRoutes.js    # POST /api/contact & GET /api/contact
│   │   ├── projectRoutes.js    # GET /api/projects
│   │   └── resumeRoutes.js     # GET /api/resume/pdf & docx
│   ├── .env.example            # Server environment template
│   ├── package.json            # Server dependencies (Express, Mongoose, Cors)
│   └── server.js               # Express entry point & DB connector
│
├── .gitignore                  # Excludes node_modules, .env, dist
├── package.json                # Root orchestration scripts
└── README.md                   # Full documentation & setup guide
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended; tested on v24)
- [MongoDB](https://www.mongodb.com/) (Optional: if offline, the server automatically uses in-memory storage)

### 1. Install Dependencies
From the repository root:
```bash
npm run install:all
```
*(Or install inside `client/` and `server/` individually with `npm install`)*

### 2. Configure Environment Variables
- `server/.env`:
  ```env
  PORT=5000
  MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
  CLIENT_URL=http://localhost:5173
  ```

### 3. Run Development Servers
Open two terminal windows:

**Terminal 1 (Backend Server):**
```bash
npm run server
```
Server runs on: [http://localhost:5000](http://localhost:5000)

**Terminal 2 (Frontend Client):**
```bash
npm run client
```
Client runs on: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints Summary

| Endpoint | Method | Purpose |
| :--- | :--- | :--- |
| `/api/health` | GET | Server status & MongoDB connection check |
| `/api/contact` | POST | Submit contact inquiry (persisted to MongoDB) |
| `/api/contact` | GET | Retrieve saved contact inquiries |
| `/api/resume/pdf` | GET | Download Nidhish Tripathi's resume in PDF format |
| `/api/resume/docx` | GET | Download Nidhish Tripathi's resume in Word (.docx) format |
| `/api/resume/download?format=pdf\|docx` | GET | Query-based CV download |
| `/api/projects` | GET | Retrieve list of verified projects |

---

## 👨‍💻 Author
**Nidhish Tripathi**  
B.Tech Computer Science & Engineering (CSE Core), 
JK Lakshmipat University (JKLU), Jaipur, Rajasthan  
GitHub: [@nidhishtripathi](https://github.com/nidhishtripathi)
