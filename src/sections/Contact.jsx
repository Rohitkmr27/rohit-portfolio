import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from './About';

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'rohitkumar142017@gmail.com',
    href: 'mailto:rohitkumar142017@gmail.com',
    color: 'cyan',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 9005321262',
    href: 'tel:+919005321262',
    color: 'green',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Ghaziabad, Uttar Pradesh, India',
    href: null,
    color: 'purple',
  },
];

const socials = [
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    handle: '@Rohitkmr27',
    href: 'https://github.com/Rohitkmr27',
    color: 'slate',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    handle: 'rohit-kumar-364328298',
    href: 'https://linkedin.com/in/rohit-kumar-364328298',
    color: 'blue',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-400/20', icon: 'text-cyan-400 bg-cyan-400/10', hover: 'hover:border-cyan-400/50' },
  green: { border: 'border-green-500/20', icon: 'text-green-400 bg-green-400/10', hover: 'hover:border-green-500/50' },
  purple: { border: 'border-purple-500/20', icon: 'text-purple-400 bg-purple-400/10', hover: 'hover:border-purple-500/50' },
  slate: { border: 'border-slate-500/20', icon: 'text-slate-400 bg-slate-400/10', hover: 'hover:border-slate-400/50' },
  blue: { border: 'border-blue-500/20', icon: 'text-blue-400 bg-blue-400/10', hover: 'hover:border-blue-500/50' },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    // Simulate sending (replace with actual API call)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 06. CONTACT"
          title={<>Let's <span className="gradient-text">Connect</span></>}
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Availability card */}
            <div className="glass-card rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="font-mono text-sm text-green-400">Available for Opportunities</span>
              </div>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                I'm currently open to internships, freelance projects, and full-time opportunities.
                Whether it's a quick question or a long-term collaboration — my inbox is always open!
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const c = colorMap[item.color];
                const content = (
                  <div className={`glass-card rounded-xl p-4 border ${c.border} ${c.hover} transition-all duration-300 flex items-center gap-4`}>
                    <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 mb-0.5">{item.label}</div>
                      <div className="font-body text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block hover:scale-[1.01] transition-transform">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <div className="section-tag mb-4">FIND ME ON</div>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const c = colorMap[s.color];
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex-1 glass-card rounded-xl p-4 border ${c.border} ${c.hover} transition-all duration-300 flex items-center gap-3`}
                    >
                      <div className={`w-9 h-9 rounded-lg ${c.icon} flex items-center justify-center flex-shrink-0`}>
                        {s.icon}
                      </div>
                      <div>
                        <div className="font-body text-white text-xs font-semibold">{s.label}</div>
                        <div className="font-mono text-slate-500 text-xs truncate">{s.handle}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-cyan-400/10 space-y-5">
              <div className="flex items-center gap-2 mb-2 pb-4 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs text-slate-500 tracking-widest">SEND A MESSAGE</span>
              </div>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-slate-500 mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full bg-dark-700 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-dark-600 transition-all`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-dark-700 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-dark-600 transition-all`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-dark-600 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full bg-dark-700 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-dark-600 transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm btn-glow shadow-neon-blue disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <div className="font-display text-2xl font-bold gradient-text mb-2">Rohit Kumar</div>
          <div className="font-mono text-xs text-slate-600 mb-4">
            Software Development Engineer · Backend · Machine Learning Engineer
          </div>
          <div className="font-mono text-xs text-slate-700">
            © {new Date().getFullYear()} Rohit Kumar. Built with React & ❤️
          </div>
        </motion.div>
      </div>
    </section>
  );
}