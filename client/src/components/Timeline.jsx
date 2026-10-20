import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Timeline = () => {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Milestone size={14} />
            Academic &amp; Experience Journey
          </span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Internship Timeline</span>
          </h2>
          <p className="section-subtitle">
            My chronological progression as a third-year Computer Science student, including university coursework and practical industry internship experience.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '850px',
            margin: '0 auto',
            padding: '1rem 0'
          }}
        >
          {/* Vertical Center Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '28px',
              width: '3px',
              background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 50%, #10b981 100%)',
              borderRadius: 'var(--radius-full)'
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timeline.map((item, idx) => {
              const isExperience = item.type === 'experience';
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    paddingLeft: '72px'
                  }}
                >
                  {/* Glowing Icon Node on the Line */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '0',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: isExperience ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                      boxShadow: isExperience ? 'var(--shadow-glow)' : 'var(--shadow-cyan-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      border: '4px solid var(--bg-primary)',
                      zIndex: 2
                    }}
                  >
                    {isExperience ? <Briefcase size={18} /> : <GraduationCap size={20} />}
                  </div>

                  {/* Card Content */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.85rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-color)',
                      transition: 'transform var(--transition-normal)'
                    }}
                  >
                    {/* Period & Tag */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          background: isExperience ? 'rgba(99, 102, 241, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                          color: isExperience ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                          fontWeight: 600
                        }}
                      >
                        {isExperience ? 'Internship Experience' : 'University Education'}
                      </span>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title & Institution */}
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        marginBottom: '0.85rem',
                        flexWrap: 'wrap'
                      }}
                    >
                      <span>{item.institution}</span>
                      <span style={{ color: 'var(--text-muted)' }}>•</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    </div>

                    {/* Project subtitle if applicable */}
                    {item.project && (
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--accent-secondary)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          marginBottom: '0.85rem'
                        }}
                      >
                        Project: {item.project}
                      </div>
                    )}

                    {/* Description */}
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {item.description}
                    </p>

                    {/* Highlights bullet points */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
