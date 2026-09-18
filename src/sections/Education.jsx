import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';
import { SectionHeader } from './About';

const education = [
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'B.Tech in Information Technology',
    org: 'ABES Engineering College, Ghaziabad',
    period: 'Nov 2023 – July 2027',
    detail: 'Aggregate: 70.12% (till 6th semester)',
    desc: 'Final-year IT curriculum focusing on full-stack web applications, applied machine learning, data structures, and secure backend systems.',
    color: 'cyan',
    status: 'Pursuing',
  },
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Class XII — CBSE',
    org: 'Army Public School, Meerut',
    period: '2022',
    detail: 'Score: 81.6%',
    desc: 'Completed senior secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science.',
    color: 'purple',
    status: 'Completed',
  },
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Class X — CBSE',
    org: 'Army Public School, Hisar',
    period: '2019',
    detail: 'Score: 91.4%',
    desc: 'Completed secondary education with distinction, demonstrating solid quantitative and academic foundations.',
    color: 'green',
    status: 'Completed',
  },
];

const certifications = [
  {
    type: 'cert',
    icon: <Award size={18} />,
    title: 'Python 101 for Data Science',
    org: 'Cognitive Class (IBM)',
    period: 'Certified',
    detail: 'Data Science & Python',
    desc: 'Covered Python fundamentals, data manipulation with Pandas, NumPy arrays, and exploratory data analysis.',
    color: 'blue',
    status: 'Certified',
  },
  {
    type: 'cert',
    icon: <Award size={18} />,
    title: 'Full Stack Development 101',
    org: 'Simplilearn',
    period: 'Certified',
    detail: 'Full-Stack Web Development',
    desc: 'Comprehensive training in modern web engineering covering frontend design, backend REST APIs, databases, and deployment.',
    color: 'orange',
    status: 'Certified',
  },
  {
    type: 'cert',
    icon: <Award size={18} />,
    title: 'Deloitte Cyber Job Simulation',
    org: 'Deloitte (Forage)',
    period: 'Simulation Completed',
    detail: 'Cybersecurity & Log Analysis',
    desc: 'Analysed security log data to identify suspicious activity, threat vectors, and synthesized findings into client-facing reports.',
    color: 'pink',
    status: 'Completed',
  },
];

const experience = [
  {
    type: 'experience',
    icon: <Briefcase size={18} />,
    title: "Coordinator, Genero'26 (E-Gaming)",
    org: 'ABES Engineering College',
    period: 'Annual College Fest',
    detail: 'Event Operations & Leadership',
    desc: 'Ran campus e-sports tournaments end to end, managing registrations, match scheduling, and live event operations during the annual college fest.',
    color: 'cyan',
    status: 'Coordinator',
  },
  {
    type: 'experience',
    icon: <Briefcase size={18} />,
    title: 'Head, Optic Esports Community',
    org: 'Optic Esports Community',
    period: 'Community Leadership',
    detail: 'Tournament Org & Team Management',
    desc: 'Led an online gaming community, organising recurring tournaments and coordinating a moderator team.',
    color: 'yellow',
    status: 'Lead',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-400/30', icon: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30', dot: 'bg-cyan-400 shadow-[0_0_8px_#00d4ff]', badge: 'bg-cyan-400/10 text-cyan-400' },
  purple: { border: 'border-purple-500/30', icon: 'bg-purple-400/10 text-purple-400 border-purple-400/30', dot: 'bg-purple-400 shadow-[0_0_8px_#b347ff]', badge: 'bg-purple-400/10 text-purple-400' },
  green: { border: 'border-green-500/30', icon: 'bg-green-400/10 text-green-400 border-green-400/30', dot: 'bg-green-400 shadow-[0_0_8px_#4ade80]', badge: 'bg-green-400/10 text-green-400' },
  blue: { border: 'border-blue-500/30', icon: 'bg-blue-400/10 text-blue-400 border-blue-400/30', dot: 'bg-blue-400 shadow-[0_0_8px_#60a5fa]', badge: 'bg-blue-400/10 text-blue-400' },
  orange: { border: 'border-orange-500/30', icon: 'bg-orange-400/10 text-orange-400 border-orange-400/30', dot: 'bg-orange-400 shadow-[0_0_8px_#fb923c]', badge: 'bg-orange-400/10 text-orange-400' },
  pink: { border: 'border-pink-500/30', icon: 'bg-pink-400/10 text-pink-400 border-pink-400/30', dot: 'bg-pink-400 shadow-[0_0_8px_#f472b6]', badge: 'bg-pink-400/10 text-pink-400' },
  yellow: { border: 'border-yellow-500/30', icon: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30', dot: 'bg-yellow-400 shadow-[0_0_8px_#facc15]', badge: 'bg-yellow-400/10 text-yellow-400' },
};

function TimelineItem({ item, index, inView, side = 'left' }) {
  const c = colorMap[item.color];
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className={`relative flex ${side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 lg:gap-8 items-start`}
    >
      {/* Card */}
      <div className={`flex-1 glass-card rounded-2xl p-5 border ${c.border} hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300`}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-sm leading-tight">{item.title}</h3>
              <p className="font-body text-slate-500 text-xs mt-0.5">{item.org}</p>
            </div>
          </div>
          <span className={`font-mono text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${c.badge}`}>
            {item.status}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
            <Calendar size={11} />
            {item.period}
          </div>
          <span className="text-slate-700">•</span>
          <span className="text-slate-500 text-xs font-mono">{item.detail}</span>
        </div>

        <p className="font-body text-slate-400 text-xs leading-relaxed">{item.desc}</p>
      </div>

      {/* Timeline dot (desktop) */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-4">
        <div className={`w-3 h-3 rounded-full mt-5 ${c.dot}`} />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 04. EDUCATION & EXPERIENCE"
          title={<>My <span className="gradient-text">Journey</span></>}
          subtitle="Academic background, certifications, and professional experience."
        />

        <div ref={ref} className="space-y-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <GraduationCap size={16} />
              </div>
              <h3 className="font-display font-bold text-white text-xl">Education</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
            </motion.div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} side={i % 2 === 0 ? 'left' : 'right'} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                <Award size={16} />
              </div>
              <h3 className="font-display font-bold text-white text-xl">Certifications</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((item, i) => {
                const c = colorMap[item.color];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`glass-card rounded-2xl p-5 border ${c.border} hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300`}
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${c.icon}`}>
                      {item.icon}
                    </div>
                    <h4 className="font-display font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="font-body text-slate-500 text-xs mb-2">{item.org}</p>
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono mb-3">
                      <Calendar size={10} />
                      {item.period}
                    </div>
                    <p className="font-body text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    <div className={`mt-3 inline-flex font-mono text-xs px-2 py-0.5 rounded-full ${c.badge}`}>
                      ✓ {item.status}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
                <Briefcase size={16} />
              </div>
              <h3 className="font-display font-bold text-white text-xl">Experience</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/30 to-transparent" />
            </motion.div>
            <div className="space-y-4">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} side="left" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}