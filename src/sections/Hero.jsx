import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';
import profilePhoto from '../assets/profile.jpeg';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#b347ff';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 z-0" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${50 + mousePos.x * 0.5}% ${50 + mousePos.y * 0.5}%, rgba(0,212,255,0.08) 0%, transparent 70%)`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Scan line */}
      <div className="scan-line z-10" />

      {/* Corner brackets */}
      {[
        'top-8 left-8 border-t border-l',
        'top-8 right-8 border-t border-r',
        'bottom-8 left-8 border-b border-l',
        'bottom-8 right-8 border-b border-r',
      ].map((cls, i) => (
        <div key={i} className={`absolute ${cls} w-12 h-12 border-cyan-400/30 z-10`} />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 w-fit"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="font-mono text-xs text-slate-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-mono text-cyan-400 text-sm tracking-[0.3em]">
                &gt; Hello, World! I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none"
            >
              <span className="text-white">Rohit</span>
              <br />
              <span className="gradient-text">Kumar</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 h-10"
            >
              <span className="text-slate-500 font-mono text-sm">//</span>
              <span className="font-display text-xl sm:text-2xl font-semibold text-cyan-300">
                <TypeAnimation
                  sequence={[
                    'Software Development Engineer', 2000,
                    'Backend Developer', 2000,
                    'Machine Learning Engineer', 2000,
                    'Full Stack Developer', 2000,
                    'Cybersecurity & SOC Builder', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-body text-slate-400 text-base leading-relaxed max-w-lg"
            >
              Final-year B.Tech (IT) student at ABES Engineering College with full-stack and applied
              machine learning experience across Python, FastAPI, React.js, Django, and PostgreSQL.
              Solved 200+ DSA problems. Seeking Software Development Engineer, Backend, or Machine Learning Engineer roles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link to="projects" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm btn-glow shadow-neon-blue"
                >
                  <Eye size={16} />
                  View Projects
                </motion.button>
              </Link>

              <motion.a
                href="/rohit_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-400 font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all btn-glow"
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/40 text-purple-400 font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-500/70 transition-all btn-glow"
                >
                  <Mail size={16} />
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 mt-4 pt-6 border-t border-white/5"
            >
              {[
                { value: '4+', label: 'Flagship Projects' },
                { value: '200+', label: 'DSA Solved' },
                { value: '99.83%', label: 'IDS Model Accuracy' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold gradient-text-blue">{stat.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center items-center"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-cyan-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-16 rounded-full border border-dashed border-purple-500/15"
              />

              {/* Glow rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-neon-blue float-animation">
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />

                {/* Scan overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-scan-line pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl border border-cyan-400/20"
              >
                <div className="font-mono text-xs text-cyan-400">⚡ SDE & Backend</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl border border-purple-500/20"
              >
                <div className="font-mono text-xs text-purple-400">🤖 Applied AI / ML</div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-12 glass-card px-3 py-2 rounded-xl border border-green-500/20"
              >
                <div className="font-mono text-xs text-green-400">🔐 Cybersecurity & SOC</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-cyan-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}