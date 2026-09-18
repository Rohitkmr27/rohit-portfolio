import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { SectionHeader } from './About';

const projects = [
  {
    id: 1,
    title: 'Intrusion Detection System & AI SOC Platform',
    category: 'ML / AI & Security',
    description:
      'Enterprise-grade multi-class network IDS with real-time alert triage, FastAPI REST inference, PostgreSQL alert lifecycle management, and RAG-powered security analysis.',
    highlights: [
      'Random Forest multi-class IDS model achieving 99.83% accuracy and 90.80% macro F1 on a 504K-flow test set of real CIC-IDS2017 traffic.',
      'FastAPI REST services integrated with PostgreSQL alert-management system (SQLAlchemy, Alembic) supporting alert lifecycles and SOC workflows.',
      'RAG ingestion pipeline for TXT, Markdown, and PDF sources with deterministic document IDs, configurable chunking, and Qdrant vector search.',
    ],
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'RAG', 'Qdrant'],
    color: 'purple',
    icon: '🛡️',
    github: 'https://github.com/Rohitkmr27',
    live: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'MockMate AI | Mock Interview Platform',
    category: 'AI / Full Stack',
    description:
      'AI interview simulator generating role-specific question sets and providing automated answer evaluation with targeted feedback powered by Google Gemini API.',
    highlights: [
      'Generates role-specific question sets in under 5 seconds by integrating Google Gemini API with structured prompt templates.',
      'Automated LLM scoring pipeline rating relevance, structure, and technical depth with personalized improvement suggestions.',
      'Persists user session progression in Firebase Firestore with Firebase Auth; deployed on Vercel with continuous deployment.',
    ],
    tech: ['React.js', 'Node.js', 'Google Gemini API', 'Firebase', 'Firestore', 'Vercel'],
    color: 'cyan',
    icon: '🎙️',
    github: 'https://github.com/Rohitkmr27',
    live: null,
    featured: true,
    status: 'Live',
  },
  {
    id: 3,
    title: 'Student Expense Tracker',
    category: 'Full Stack & Backend',
    description:
      'Full-stack personal finance application built with Django 4.2.7 and normalized SQLite3 schema for categorized daily expense capture and budget analytics.',
    highlights: [
      'Reduced expense logging to under 10 seconds per entry with normalized SQLite3 models, class-based views, and validated forms.',
      'Surfaced overspending through monthly budget thresholds and category aggregation using optimized Django ORM queries and per-user auth.',
    ],
    tech: ['Django', 'Python', 'SQLite3', 'Bootstrap', 'Django ORM'],
    color: 'green',
    icon: '💰',
    github: 'https://github.com/Rohitkmr27',
    live: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Anime Book Store',
    category: 'Frontend',
    description:
      'Responsive client-side storefront for anime manga and light novels with real-time catalogue search, category filtering, and cart calculations.',
    highlights: [
      'Client-side storefront with real-time search, dynamic category filtering, and cart total calculation using vanilla JS DOM manipulation.',
      'Engineered with a responsive, mobile-first CSS Grid and Flexbox layout for seamless browsing across all screen sizes.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'CSS Grid', 'Flexbox'],
    color: 'orange',
    icon: '📚',
    github: 'https://github.com/Rohitkmr27',
    live: null,
    featured: false,
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    category: 'Frontend',
    description:
      'High-performance cyberpunk & glassmorphism developer portfolio showcasing SDE, Backend, and Machine Learning engineering projects.',
    highlights: [
      'Interactive particle canvas, dynamic TypeAnimation roles, responsive navbar with active section spying, and customized terminal card.',
      'Built with React, Vite, Tailwind CSS, and Framer Motion with full mobile responsiveness.',
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    color: 'blue',
    icon: '🌐',
    github: 'https://github.com/Rohitkmr27',
    live: '#',
    featured: false,
    status: 'Live',
  },
];

const filters = ['All', 'ML / AI & Security', 'AI / Full Stack', 'Full Stack & Backend', 'Frontend'];

const colorMap = {
  cyan: { border: 'border-cyan-400/20', hover: 'hover:border-cyan-400/50', badge: 'bg-cyan-400/10 text-cyan-400', glow: 'hover:shadow-[0_20px_60px_rgba(0,212,255,0.12)]', dot: 'bg-cyan-400' },
  green: { border: 'border-green-500/20', hover: 'hover:border-green-500/50', badge: 'bg-green-400/10 text-green-400', glow: 'hover:shadow-[0_20px_60px_rgba(0,255,136,0.12)]', dot: 'bg-green-400' },
  purple: { border: 'border-purple-500/20', hover: 'hover:border-purple-500/50', badge: 'bg-purple-400/10 text-purple-400', glow: 'hover:shadow-[0_20px_60px_rgba(179,71,255,0.12)]', dot: 'bg-purple-400' },
  pink: { border: 'border-pink-500/20', hover: 'hover:border-pink-500/50', badge: 'bg-pink-400/10 text-pink-400', glow: 'hover:shadow-[0_20px_60px_rgba(255,45,120,0.12)]', dot: 'bg-pink-400' },
  orange: { border: 'border-orange-500/20', hover: 'hover:border-orange-500/50', badge: 'bg-orange-400/10 text-orange-400', glow: 'hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]', dot: 'bg-orange-400' },
  blue: { border: 'border-blue-500/20', hover: 'hover:border-blue-500/50', badge: 'bg-blue-400/10 text-blue-400', glow: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]', dot: 'bg-blue-400' },
};

const statusColor = {
  'Completed': 'text-green-400',
  'In Progress': 'text-yellow-400',
  'Live': 'text-cyan-400',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 03. PROJECTS"
          title={<>What I've <span className="gradient-text">Built</span></>}
          subtitle="A selection of projects spanning full-stack development, cybersecurity, and AI automation."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(179,71,255,0.2)]'
                  : 'glass border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const c = colorMap[project.color];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`glass-card rounded-2xl p-6 border ${c.border} ${c.hover} ${c.glow} transition-all duration-300 flex flex-col group relative overflow-hidden`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        ★ Featured
                      </span>
                    </div>
                  )}

                  {/* Top row */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{project.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`font-mono text-xs ${c.badge} px-2 py-0.5 rounded-full`}>
                          {project.category}
                        </span>
                        <span className={`font-mono text-xs ${statusColor[project.status]}`}>
                          • {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-slate-400 text-sm leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-4 text-xs text-slate-400 font-body">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-cyan-400 font-mono mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs font-mono group/link"
                    >
                      <Github size={14} />
                      <span>Code</span>
                      <ChevronRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono group/link"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                        <ChevronRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>

                  {/* Hover glow overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    style={{
                      background: `radial-gradient(ellipse at top left, ${project.color === 'cyan' ? 'rgba(0,212,255,0.05)' : project.color === 'purple' ? 'rgba(179,71,255,0.05)' : 'rgba(0,255,136,0.05)'} 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Rohitkmr27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all font-mono text-sm btn-glow"
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}