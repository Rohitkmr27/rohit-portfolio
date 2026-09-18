import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeader } from './About';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 90, color: '#3b82f6' },
      { name: 'JavaScript (ES6+)', level: 85, color: '#f59e0b' },
      { name: 'TypeScript', level: 80, color: '#3178c6' },
      { name: 'C++', level: 82, color: '#8b5cf6' },
      { name: 'C', level: 78, color: '#6366f1' },
      { name: 'SQL', level: 85, color: '#10b981' },
      { name: 'Java (Basic)', level: 65, color: '#ef4444' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    icon: '⚙',
    skills: [
      { name: 'FastAPI', level: 88, color: '#009688' },
      { name: 'Django / Django ORM', level: 86, color: '#10b981' },
      { name: 'PostgreSQL & SQLAlchemy', level: 85, color: '#336791' },
      { name: 'Node.js & Express.js', level: 80, color: '#4ade80' },
      { name: 'REST APIs & Alembic', level: 85, color: '#f59e0b' },
      { name: 'Firebase Firestore & SQLite3', level: 82, color: '#f97316' },
    ],
  },
  {
    id: 'ml_ai',
    label: 'Machine Learning & AI',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn & Random Forest', level: 90, color: '#f59e0b' },
      { name: 'RAG Knowledge Pipeline', level: 85, color: '#00d4ff' },
      { name: 'Google Gemini API & Prompts', level: 88, color: '#8b5cf6' },
      { name: 'Qdrant & Vector Search', level: 80, color: '#dc2626' },
      { name: 'Sentence Transformers', level: 82, color: '#ec4899' },
      { name: 'Pandas, NumPy & Model Eval', level: 88, color: '#10b981' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React.js', level: 86, color: '#00d4ff' },
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
      { name: 'HTML5 & CSS3', level: 92, color: '#f97316' },
      { name: 'Bootstrap & Vite', level: 84, color: '#7c3aed' },
      { name: 'Responsive Design', level: 90, color: '#10b981' },
      { name: 'REST API Integration', level: 88, color: '#eab308' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠',
    skills: [
      { name: 'Git & GitHub', level: 88, color: '#f97316' },
      { name: 'VS Code & Postman', level: 90, color: '#3b82f6' },
      { name: 'Vercel Deployment', level: 85, color: '#a855f7' },
      { name: 'Firebase Authentication', level: 84, color: '#f59e0b' },
      { name: 'Android Studio', level: 68, color: '#3ddc84' },
    ],
  },
  {
    id: 'cs',
    label: 'CS Fundamentals',
    icon: '📊',
    skills: [
      { name: 'Data Structures & Algorithms', level: 88, color: '#00d4ff' },
      { name: 'OOP (Object Oriented)', level: 88, color: '#a855f7' },
      { name: 'DBMS', level: 85, color: '#10b981' },
      { name: 'Operating Systems', level: 80, color: '#f59e0b' },
      { name: 'Computer Networks', level: 82, color: '#3b82f6' },
    ],
  },
];

const techStack = [
  'Python', 'FastAPI', 'React.js', 'Django', 'PostgreSQL', 'Scikit-learn',
  'Random Forest', 'Google Gemini API', 'RAG Pipelines', 'Qdrant', 'Sentence Transformers',
  'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js', 'SQLAlchemy', 'Alembic',
  'Tailwind CSS', 'Vite', 'Git', 'GitHub', 'Vercel', 'Postman', 'Firebase Auth',
  'SQLite3', 'MySQL', 'C++', 'C', 'Pandas', 'NumPy', 'Data Structures & Algorithms',
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 02. SKILLS"
          title={<>Technical <span className="gradient-text">Arsenal</span></>}
          subtitle="Technologies and tools I work with to build, secure, and ship products."
        />

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                  : 'glass border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Skill bars */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 border border-cyan-400/10"
          >
            <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-xl">{activeCategory.icon}</span>
              {activeCategory.label}
            </h3>
            <div className="space-y-5">
              {activeCategory.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  inView={inView}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Radar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 border border-purple-500/10 flex flex-col justify-between"
          >
            <h3 className="font-display font-semibold text-white mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { label: 'Problem Solving (200+ DSA)', value: 88, icon: '🧩' },
                { label: 'Backend Architecture', value: 85, icon: '⚙' },
                { label: 'Machine Learning & RAG', value: 86, icon: '🤖' },
                { label: 'Full Stack Development', value: 84, icon: '🌐' },
                { label: 'Network Security & SOC', value: 82, icon: '🔐' },
                { label: 'Esports Event Leadership', value: 85, icon: '👥' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-400/20 transition-all group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-body text-xs text-slate-400 mb-2">{item.label}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.value}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                      />
                    </div>
                    <span className="font-mono text-xs text-slate-600">{item.value}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="section-tag mb-6">FULL TECH STACK</div>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tech-tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}