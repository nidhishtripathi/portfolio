import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Sparkles, Terminal, Code } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onOpenResumeModal }) => {
  const { name, typewriterRoles, bio, github, linkedin, email, stats, headline } =
    portfolioData.personal;

  // Typewriter Effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(1800); // Pause before deleting
        } else {
          setTypingSpeed(90);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed, typewriterRoles]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '40px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem'
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#10b981',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              Third-Year B.Tech Student | CSE Core @ JKLU
            </div>

            {/* Name & Intro */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '0.85rem',
                lineHeight: 1.15
              }}
            >
              Hi, I'm <span className="gradient-text">{name}</span>
            </h1>

            {/* Typewriter designation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '44px',
                marginBottom: '1rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.7rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                &gt; {text}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.5rem',
                  backgroundColor: 'var(--accent-primary)',
                  animation: 'blink 1s step-end infinite'
                }}
              />
            </div>

            {/* Verified Student Headline */}
            <div
              style={{
                fontSize: '1rem',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                marginBottom: '1.25rem'
              }}
            >
              {headline}
            </div>

            {/* Bio */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '560px',
                marginBottom: '2rem'
              }}
            >
              {bio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {/* Download CV Button */}
              <button onClick={onOpenResumeModal} className="btn btn-primary">
                <Download size={18} />
                <span>Download Resume (PDF / Word)</span>
              </button>

              {/* Contact Button */}
              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </a>

              {/* Social Icon Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginLeft: '0.5rem' }}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Github size={20} />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0077b5';
                    e.currentTarget.style.borderColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={`mailto:${email}`}
                  aria-label={`Email ${name}`}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-secondary)';
                    e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              {stats.map((s, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      lineHeight: 1
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.3rem',
                      fontWeight: 500
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg), var(--shadow-glow)'
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  padding: '0.8rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Terminal size={14} />
                  <span>nidhish-dev-env: bash</span>
                </div>
                <div style={{ width: '36px' }} />
              </div>

              {/* Terminal Body */}
              <div
                style={{
                  padding: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)'
                }}
              >
                <p>
                  <span style={{ color: '#10b981' }}>nidhish@portfolio</span>:
                  <span style={{ color: '#38bdf8' }}>~</span>$ npm run dev
                </p>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  &gt; Compiling React 18 SPA (Vite)...
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  &gt; Connecting Express.js REST API with Mongoose...
                </p>
                <p style={{ color: '#10b981' }}>
                  ✓ MongoDB connection: <strong style={{ color: '#34d399' }}>ESTABLISHED</strong>
                </p>
                <p style={{ color: '#10b981' }}>
                  ✓ Resume endpoints: <span style={{ color: '#60a5fa' }}>/api/resume/pdf</span> &amp;{' '}
                  <span style={{ color: '#60a5fa' }}>/api/resume/docx</span> active
                </p>

                <div
                  style={{
                    margin: '1.25rem 0',
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent-primary)'
                  }}
                >
                  <span style={{ color: '#f43f5e' }}>const</span> student = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span style={{ color: '#a78bfa' }}>'Nidhish Tripathi'</span>,
                  <br />
                  &nbsp;&nbsp;degree: <span style={{ color: '#38bdf8' }}>'B.Tech CSE Core (3rd Year)'</span>,
                  <br />
                  &nbsp;&nbsp;university: <span style={{ color: '#34d399' }}>'JK Lakshmipat University'</span>,
                  <br />
                  &nbsp;&nbsp;interests: [<span style={{ color: '#60a5fa' }}>'Web Dev'</span>,{' '}
                  <span style={{ color: '#f59e0b' }}>'Cybersecurity'</span>,{' '}
                  <span style={{ color: '#a855f7' }}>'Networking'</span>,{' '}
                  <span style={{ color: '#4ade80' }}>'Machine Learning'</span>],
                  <br />
                  &nbsp;&nbsp;internship: <span style={{ color: '#38bdf8' }}>'Future Design (Omoide)'</span>
                  <br />
                  &#125;;
                </div>

                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8' }}>
                  <Sparkles size={14} /> Building practical web &amp; cybersecurity projects.
                </p>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div
              className="floating-element"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-15px',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(10px)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#38bdf8'
              }}
            >
              <Code size={16} />
              <span>React 18 &amp; Vite SPA</span>
            </div>

            <div
              className="floating-element"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-15px',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(10px)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#10b981',
                animationDelay: '1.5s'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span>Express &amp; MongoDB Connected</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
