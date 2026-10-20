import React from 'react';
import { ArrowUp, Code2, Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = ({ onOpenResumeModal }) => {
  const { name, github, linkedin, email } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Column 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
                Nidhish<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
              Third-year Computer Science &amp; Engineering student at JK Lakshmipat University building practical web development, cybersecurity, and applied machine learning projects.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>About Journey</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills &amp; Tech Stack</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Featured Projects</a>
              <a href="#timeline" style={{ color: 'var(--text-secondary)' }}>Timeline &amp; Education</a>
              <a href="#certifications" style={{ color: 'var(--text-secondary)' }}>Certificates &amp; Honors</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact Direct</a>
            </div>
          </div>

          {/* Column 3: Backend Resources */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              MERN Stack Deliverables
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <button
                onClick={onOpenResumeModal}
                style={{
                  textAlign: 'left',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9rem'
                }}
              >
                <Download size={14} />
                <span>Download CV (PDF / DOCX)</span>
              </button>
              <a href="/api/health" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                API Health Endpoint (/api/health)
              </a>
              <a href="/api/contact" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                View Saved Inquiries (/api/contact)
              </a>
              <a href="/api/projects" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                REST Project Feed (/api/projects)
              </a>
            </div>
          </div>

          {/* Column 4: Social Connections */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Social &amp; Professional
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
              >
                <Github size={18} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${email}`}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
              >
                <Mail size={18} />
              </a>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Built with React 18, Vite, Node.js, Express &amp; MongoDB.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; {CURRENT_YEAR} {name}. Built for MERN Stack Assignment. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
