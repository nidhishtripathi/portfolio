import React, { useState } from 'react';
import {
  Code,
  Server,
  Wrench,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Shield,
  Zap,
  CheckCircle,
  BookOpen,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { languages, frontend, backend, databases, security, mlData, tools } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles },
    { id: 'languages', name: 'Programming Languages', icon: Code },
    { id: 'frontend', name: 'Frontend Development', icon: Layers },
    { id: 'backend', name: 'Backend Development', icon: Server },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'security', name: 'Cybersecurity & Networking', icon: Shield },
    { id: 'mlData', name: 'Machine Learning & Data', icon: Cpu },
    { id: 'tools', name: 'Tools & Platforms', icon: Wrench }
  ];

  const categoryDataMap = [
    { id: 'languages', title: 'Programming Languages', icon: Code, items: languages, color: '#6366f1' },
    { id: 'frontend', title: 'Frontend Development', icon: Layers, items: frontend, color: '#38bdf8' },
    { id: 'backend', title: 'Backend Development', icon: Server, items: backend, color: '#10b981' },
    { id: 'databases', title: 'Databases & Storage', icon: Database, items: databases, color: '#06b6d4' },
    { id: 'security', title: 'Cybersecurity & Networking', icon: Shield, items: security, color: '#f59e0b' },
    { id: 'mlData', title: 'Machine Learning & Data Analysis', icon: Cpu, items: mlData, color: '#a855f7' },
    { id: 'tools', title: 'Tools, DevOps & Platforms', icon: Wrench, items: tools, color: '#ec4899' }
  ];

  const getVisibleGroups = () => {
    if (activeTab === 'all') return categoryDataMap;
    return categoryDataMap.filter((g) => g.id === activeTab);
  };

  const getStageBadgeStyle = (stage) => {
    switch (stage) {
      case 'Completed Projects':
        return {
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.3)',
          color: '#10b981',
          icon: CheckCircle
        };
      case 'Currently Learning':
        return {
          bg: 'rgba(168, 85, 247, 0.12)',
          border: 'rgba(168, 85, 247, 0.3)',
          color: '#a855f7',
          icon: Compass
        };
      case 'Coursework & Labs':
      default:
        return {
          bg: 'rgba(6, 182, 212, 0.12)',
          border: 'rgba(6, 182, 212, 0.3)',
          color: '#06b6d4',
          icon: BookOpen
        };
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Zap size={14} />
            Technical Competencies
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Practical Toolkit</span>
          </h2>
          <p className="section-subtitle">
            Organized by functional domains reflecting real project implementation, active learning, and university coursework. Honest proficiency without arbitrary percentages.
          </p>
        </div>

        {/* Legend / Stage Clarification */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            fontSize: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#10b981' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <strong>Completed Projects</strong> — Proven in working applications
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#a855f7' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
            <strong>Currently Learning</strong> — Active exploration &amp; deep-dive
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#06b6d4' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4' }} />
            <strong>Coursework &amp; Labs</strong> — University curriculum foundation
          </div>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Categories Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(340px, 1fr))' : '1fr',
            gap: '2rem'
          }}
        >
          {getVisibleGroups().map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: `rgba(99, 102, 241, 0.12)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: group.color
                    }}
                  >
                    <GroupIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                      {group.title}
                    </h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {group.items.length} verified technologies
                    </div>
                  </div>
                </div>

                {/* Skill Items Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flexGrow: 1 }}>
                  {group.items.map((skill, sIdx) => {
                    const badge = getStageBadgeStyle(skill.stage);
                    const StageIcon = badge.icon;
                    return (
                      <div
                        key={sIdx}
                        style={{
                          padding: '0.85rem 1rem',
                          background: 'var(--bg-tertiary)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-color)',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '0.35rem',
                            flexWrap: 'wrap',
                            gap: '0.4rem'
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              color: 'var(--text-primary)'
                            }}
                          >
                            {skill.name}
                          </span>

                          {/* Stage Pill */}
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              padding: '0.2rem 0.55rem',
                              borderRadius: 'var(--radius-full)',
                              background: badge.bg,
                              border: `1px solid ${badge.border}`,
                              color: badge.color,
                              fontSize: '0.725rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600
                            }}
                          >
                            <StageIcon size={12} />
                            {skill.stage}
                          </span>
                        </div>

                        {/* Practical Note / Context */}
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
