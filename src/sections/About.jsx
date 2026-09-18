import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Shield, Cpu, Gamepad2, MapPin, GraduationCap, Calendar } from 'lucide-react';

const traits = [
  {
    icon: <Code2 size={20} />,
    title: 'SDE & Backend Dev',
    desc: 'Engineering scalable backend services with FastAPI, Django, Node.js, PostgreSQL, and REST APIs.',
    color: 'cyan',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Applied Machine Learning',
    desc: 'Building ML & RAG pipelines with Scikit-learn, Random Forest, Gemini API, Qdrant, and Sentence Transformers.',
    color: 'purple',
  },
  {
    icon: <Shield size={20} />,
    title: 'Network IDS & SOC',
    desc: 'Trained 99.83% accuracy IDS on 504K network flows with PostgreSQL alert lifecycle workflows.',
    color: 'green',
  },
  {
    icon: <Gamepad2 size={20} />,
    title: 'Leadership & Events',
    desc: "Coordinator for Genero'26 (E-Gaming Fest) at ABES & Head of Optic Esports Community.",
    color: 'pink',
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-400/20 hover:border-cyan-400/50',
    icon: 'text-cyan-400 bg-cyan-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]',
  },
  purple: {
    border: 'border-purple-500/20 hover:border-purple-500/50',
    icon: 'text-purple-400 bg-purple-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(179,71,255,0.15)]',
  },
  green: {
    border: 'border-green-500/20 hover:border-green-500/50',
    icon: 'text-green-400 bg-green-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]',
  },
  pink: {
    border: 'border-pink-500/20 hover:border-pink-500/50',
    icon: 'text-pink-400 bg-pink-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(255,45,120,0.15)]',
  },
};

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-tag mb-3"
      >
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-slate-500 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export { SectionHeader };

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 bg-dark-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 01. ABOUT ME"
          title={<>Who Am <span className="gradient-text">I?</span></>}
          subtitle="A passionate technologist building at the intersection of security, software, and intelligence."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Terminal-style bio */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-400/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="font-mono text-xs text-slate-600 ml-2">about.json</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-400">rohit</span> <span className="text-white">= {'{'}</span></div>
                <div className="pl-4"><span className="text-green-400">"name"</span><span className="text-white">: </span><span className="text-yellow-300">"Rohit Kumar"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"location"</span><span className="text-white">: </span><span className="text-yellow-300">"Ghaziabad, UP, India"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"degree"</span><span className="text-white">: </span><span className="text-yellow-300">"B.Tech IT @ ABES"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"aggregate"</span><span className="text-white">: </span><span className="text-orange-400">"70.12% (till 6th sem)"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"dsaSolved"</span><span className="text-white">: </span><span className="text-cyan-400">"200+ (LeetCode & CodeChef)"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"seekingRole"</span><span className="text-white">: </span><span className="text-yellow-300">"SDE / Backend / ML Engineer"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-green-400">"status"</span><span className="text-white">: </span><span className="text-green-400">"Available for Opportunities"</span></div>
                <div><span className="text-white">{'}'}</span></div>
              </div>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <MapPin size={14} />, text: 'Ghaziabad, UP' },
                { icon: <GraduationCap size={14} />, text: 'ABES Engineering College' },
                { icon: <Calendar size={14} />, text: 'Batch 2023–2027 (Final Year)' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/5 text-slate-400 text-xs font-mono"
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-slate-400 font-body text-sm leading-relaxed">
              <p>
                I'm a final-year B.Tech (Information Technology) student at ABES Engineering College, Ghaziabad,
                with full-stack and applied machine learning experience across Python, FastAPI, React.js, Django,
                and PostgreSQL. I have solved 200+ Data Structures and Algorithms problems across LeetCode (100+) and CodeChef (100+).
              </p>
              <p>
                My projects range from building an enterprise-grade Random Forest Network Intrusion Detection System
                achieving 99.83% accuracy and 90.80% macro F1 on 504K network flows with FastAPI and a RAG ingestion pipeline,
                to MockMate AI — an automated mock interview platform leveraging Google Gemini API and LLM scoring pipelines.
              </p>
              <p>
                Beyond coding, I led competitive esports operations as Coordinator for Genero'26 (E-Gaming Fest) at
                ABES Engineering College and Head of the Optic Esports Community.
              </p>
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const c = colorMap[trait.color];
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`glass-card rounded-2xl p-5 border ${c.border} ${c.glow} transition-all duration-300 cursor-default`}
                >
                  <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mb-3`}>
                    {trait.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2">{trait.title}</h3>
                  <p className="font-body text-slate-500 text-xs leading-relaxed">{trait.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}