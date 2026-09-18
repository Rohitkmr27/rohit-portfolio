import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { SectionHeader } from './About';
import { Trophy, Code2, Clock, Star, Shield, Users } from 'lucide-react';

const stats = [
  {
    icon: <Code2 size={24} />,
    value: 200,
    suffix: '+',
    label: 'DSA Problems',
    sublabel: 'LeetCode & CodeChef',
    color: 'cyan',
  },
  {
    icon: <Shield size={24} />,
    value: 99.8,
    decimals: 1,
    suffix: '%',
    label: 'IDS Model Accuracy',
    sublabel: '504K Network Flows',
    color: 'purple',
  },
  {
    icon: <Trophy size={24} />,
    value: 4,
    suffix: '+',
    label: 'Flagship Projects',
    sublabel: 'ML, AI & Full Stack',
    color: 'green',
  },
  {
    icon: <Star size={24} />,
    value: 3,
    suffix: '',
    label: 'Certifications',
    sublabel: 'IBM, Simplilearn, Deloitte',
    color: 'yellow',
  },
  {
    icon: <Clock size={24} />,
    value: 70.1,
    decimals: 1,
    suffix: '%',
    label: 'B.Tech Aggregate',
    sublabel: 'Till 6th Semester',
    color: 'pink',
  },
  {
    icon: <Users size={24} />,
    value: 2,
    suffix: '',
    label: 'Leadership Roles',
    sublabel: "Genero'26 & Optic Esports",
    color: 'orange',
  },
];

const achievements = [
  {
    icon: '🧩',
    title: '200+ DSA Problems Solved',
    desc: 'Solved 100+ problems on LeetCode and 100+ on CodeChef across arrays, strings, hashing, recursion, trees, and dynamic programming.',
    tag: 'Competitive Programming',
    color: 'cyan',
  },
  {
    icon: '🛡️',
    title: '99.83% Accuracy Network IDS',
    desc: 'Trained Random Forest multi-class intrusion detection model achieving 99.83% accuracy and 90.80% macro F1 on 504K real CIC-IDS2017 flows.',
    tag: 'Machine Learning',
    color: 'purple',
  },
  {
    icon: '🤖',
    title: 'MockMate AI Interview Platform',
    desc: 'Engineered an AI interview platform generating role-specific questions in <5s and automated answer scoring with Google Gemini API.',
    tag: 'Generative AI',
    color: 'green',
  },
  {
    icon: '🎓',
    title: 'Deloitte Cyber Job Simulation',
    desc: 'Completed Deloitte\'s simulation on Forage, analysing log data to identify suspicious network activity and preparing client-facing reports.',
    tag: 'Cybersecurity',
    color: 'pink',
  },
  {
    icon: '🌐',
    title: 'Full Stack Development 101',
    desc: 'Certified by Simplilearn in modern full-stack web development, covering frontend engineering, REST APIs, databases, and deployment.',
    tag: 'Web Development',
    color: 'yellow',
  },
  {
    icon: '📊',
    title: 'Python 101 for Data Science',
    desc: 'Certified by Cognitive Class (IBM), validating proficiency in Python data analysis, manipulation with Pandas, and NumPy array computations.',
    tag: 'Data Science',
    color: 'blue',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-400/20 hover:border-cyan-400/50', icon: 'text-cyan-400 bg-cyan-400/10', tag: 'bg-cyan-400/10 text-cyan-400', counter: 'text-cyan-400' },
  purple: { border: 'border-purple-500/20 hover:border-purple-500/50', icon: 'text-purple-400 bg-purple-400/10', tag: 'bg-purple-400/10 text-purple-400', counter: 'text-purple-400' },
  green: { border: 'border-green-500/20 hover:border-green-500/50', icon: 'text-green-400 bg-green-400/10', tag: 'bg-green-400/10 text-green-400', counter: 'text-green-400' },
  yellow: { border: 'border-yellow-500/20 hover:border-yellow-500/50', icon: 'text-yellow-400 bg-yellow-400/10', tag: 'bg-yellow-400/10 text-yellow-400', counter: 'text-yellow-400' },
  pink: { border: 'border-pink-500/20 hover:border-pink-500/50', icon: 'text-pink-400 bg-pink-400/10', tag: 'bg-pink-400/10 text-pink-400', counter: 'text-pink-400' },
  orange: { border: 'border-orange-500/20 hover:border-orange-500/50', icon: 'text-orange-400 bg-orange-400/10', tag: 'bg-orange-400/10 text-orange-400', counter: 'text-orange-400' },
  blue: { border: 'border-blue-500/20 hover:border-blue-500/50', icon: 'text-blue-400 bg-blue-400/10', tag: 'bg-blue-400/10 text-blue-400', counter: 'text-blue-400' },
};

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="relative py-24 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 05. ACHIEVEMENTS"
          title={<>My <span className="gradient-text">Milestones</span></>}
          subtitle="Numbers that reflect dedication, consistency, and continuous growth."
        />

        {/* Stats counters */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className={`glass-card rounded-2xl p-5 border ${c.border} text-center transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className={`font-display text-3xl font-bold ${c.counter} mb-1`}>
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      delay={i * 0.1}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="font-body text-white text-xs font-semibold mb-0.5">{stat.label}</div>
                <div className="font-mono text-slate-600 text-xs">{stat.sublabel}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl p-6 border ${c.border} transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-white text-sm leading-tight">{item.title}</h3>
                    </div>
                    <p className="font-body text-slate-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${c.tag}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 border border-cyan-400/10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-purple-500/5" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">💡</div>
              <blockquote className="font-display text-lg text-white font-medium mb-3">
                "The only way to do great work is to love what you do."
              </blockquote>
              <cite className="font-mono text-xs text-slate-500">— Steve Jobs</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}