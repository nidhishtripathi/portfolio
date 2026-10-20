import React from 'react';
import { MapPin, Briefcase, GraduationCap, CheckCircle2, User, ArrowUpRight, Download, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = ({ onOpenResumeModal }) => {
  const { name, degree, university, location, status, avatar } = portfolioData.personal;

  const keyStrengths = [
    'Full-stack development with React, Node.js, Express.js & MongoDB',
    'Component-driven frontend interfaces with modern hooks and state',
    'Cybersecurity fundamentals, network traffic analysis & intrusion detection',
    'Applied machine learning model evaluation with Scikit-learn & LightGBM',
    'Cross-platform mobile UI development experience with Expo (React Native)',
    'Version control with Git/GitHub, modular architecture & clean documentation'
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Passionate About Code &amp; <span className="gradient-text">Practical Systems</span>
          </h2>
          <p className="section-subtitle">
            Get to know my academic background, technical focus, and how I build practical projects across web development, cybersecurity, and applied machine learning.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Profile Card with Avatar & Quick Details */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card"
              style={{
                maxWidth: '420px',
                width: '100%',
                padding: '2rem',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              {/* Profile Image with Glowing Border */}
              <div
                style={{
                  position: 'relative',
                  width: '170px',
                  height: '170px',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    filter: 'blur(8px)',
                    opacity: 0.75
                  }}
                />
                <img
                  src={avatar}
                  alt={name}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '3px solid var(--bg-card)',
                    zIndex: 1
                  }}
                />
              </div>

              {/* Name & Title */}
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                {name}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                B.Tech CSE Student (Third-Year)
              </p>

              {/* Badges / Status items */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textAlign: 'left',
                  background: 'var(--bg-tertiary)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GraduationCap size={18} color="#a855f7" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong>Degree:</strong> {degree}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BookOpen size={18} color="#6366f1" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong>University:</strong> {university}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} color="#06b6d4" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong>Location:</strong> {location}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Briefcase size={18} color="#10b981" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong>Status:</strong> {status}
                  </span>
                </div>
              </div>

              {/* CTA button inside card */}
              <button
                onClick={onOpenResumeModal}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>Get Full Resume (PDF / Word)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Strengths */}
          <div>
            <h3 style={{ fontSize: '1.85rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Connecting Computer Science Foundations with Real-World Building
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>{name}</strong>, a third-year Computer Science and Engineering (CSE Core) student at <strong style={{ color: 'var(--text-primary)' }}>JK Lakshmipat University (JKLU)</strong>, Jaipur, Rajasthan.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              My technical interests center around <strong>web development</strong>, <strong>cybersecurity</strong>, <strong>ethical hacking</strong>, <strong>computer networks</strong>, and <strong>machine learning applications</strong>. Rather than focusing solely on theory, I strive to ground my learning in functional software projects.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              During my first internship at <strong>Future Design</strong>, I contributed to the frontend development of <em>Omoide</em>, a Japanese JLPT test and vocabulary learning platform built with Next.js 15, TypeScript, and Expo. Concurrently, I've pursued academic research on lightweight intrusion detection for campus networks and developed full-stack web applications using the MERN stack.
            </p>

            {/* Core Competencies Checklist */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Core Competencies &amp; Learning Focus:
              </h4>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.85rem'
                }}
              >
                {keyStrengths.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem'
                    }}
                  >
                    <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
