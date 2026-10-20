import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Search,
  CheckCircle,
  Eye,
  Sparkles,
  Building,
  UserCheck,
  X
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    'All',
    'Internship Project',
    'Machine Learning & Security',
    'Course Assessment',
    'Cybersecurity & Web'
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.organization && project.organization.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            Verified Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Practical Projects</span>
          </h2>
          <p className="section-subtitle">
            Authentic implementations spanning internship software engineering at Future Design, academic machine learning research, course assessments, and practical cybersecurity labs.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              minWidth: '260px',
              maxWidth: '340px',
              width: '100%'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search by tech or title (e.g. Next.js, ML)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color var(--transition-fast)'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: 'var(--text-muted)'
            }}
          >
            <p style={{ fontSize: '1.1rem' }}>No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  border: project.featured ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid var(--border-color)'
                }}
              >
                {/* Project Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '210px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Category Pill Over Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 20, 34, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-secondary)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                        color: '#ffffff',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Sparkles size={12} />
                      Featured
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                  }}
                >
                  {/* Context / Organization tag */}
                  {project.organization && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        marginBottom: '0.5rem'
                      }}
                    >
                      <Building size={14} />
                      <span>{project.organization}</span>
                      {project.role && (
                        <>
                          <span style={{ color: 'var(--text-muted)' }}>•</span>
                          <span style={{ color: 'var(--text-secondary)' }}>{project.role}</span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.35
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      flexGrow: 1
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.75rem'
                    }}
                  >
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub & Modal */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-color)'
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div className="modal-overlay" onClick={() => setActiveProjectModal(null)} role="dialog" aria-modal="true">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto' }}
            >
              {/* Modal Image */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  aria-label="Close modal"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Subheading Badges */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <span className="section-tag" style={{ margin: 0, fontSize: '0.75rem' }}>
                  {activeProjectModal.category}
                </span>

                {activeProjectModal.context && (
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {activeProjectModal.context}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {activeProjectModal.title}
              </h3>

              {/* Role & Org */}
              {activeProjectModal.role && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}
                >
                  <UserCheck size={16} />
                  <span>My Role: {activeProjectModal.role}</span>
                  {activeProjectModal.organization && (
                    <span style={{ color: 'var(--text-muted)' }}>({activeProjectModal.organization})</span>
                  )}
                </div>
              )}

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.65',
                  marginBottom: '1.25rem'
                }}
              >
                {activeProjectModal.description}
              </p>

              {/* Verified Features */}
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Verified Features &amp; Implementation Details:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                {activeProjectModal.features?.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45
                    }}
                  >
                    <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills in Modal */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Technologies &amp; Architecture:
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {activeProjectModal.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={activeProjectModal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>

                {activeProjectModal.live && (
                  <a
                    href={activeProjectModal.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <ExternalLink size={16} />
                    <span>View Project Resource</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
