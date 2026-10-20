import React from 'react';
import { Award, ExternalLink, BookCheck, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} />
            Academic &amp; Project Milestones
          </span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Coursework Milestones</span>
          </h2>
          <p className="section-subtitle">
            Verified course project evaluations at JK Lakshmipat University alongside structured, editable placeholders for external industry credentials and certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {certifications.map((cert, idx) => {
            const isPlaceholder = cert.badge.includes('Placeholder');
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  border: isPlaceholder
                    ? '1px dashed var(--border-color)'
                    : '1px solid var(--border-color)'
                }}
              >
                <div>
                  {/* Header Icon & Issuer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: isPlaceholder ? 'rgba(100, 116, 139, 0.12)' : 'rgba(99, 102, 241, 0.12)',
                        color: isPlaceholder ? 'var(--text-muted)' : 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {isPlaceholder ? <HelpCircle size={22} /> : <BookCheck size={22} />}
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: isPlaceholder ? 'var(--bg-tertiary)' : 'rgba(99, 102, 241, 0.15)',
                        color: isPlaceholder ? 'var(--text-muted)' : 'var(--accent-primary)',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}
                  >
                    <span>{cert.issuer}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{cert.issueDate}</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Credential ID & Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.8rem'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {cert.credentialId}
                  </span>

                  {!isPlaceholder ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600
                      }}
                    >
                      <span>View Repo</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      Ready to populate
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
