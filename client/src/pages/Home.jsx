import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowRight, TerminalSquare, FolderGit2, Award, Heart, Github, Linkedin, Download, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// SVG Icon mappings for the Visual Power Grid using official CDN slugs
const skills = {
  dataScience: [
    { slug: "python", name: "Python", color: "#3776AB" },
    { slug: "pandas", name: "Pandas", color: "#150458" },
    { slug: "numpy", name: "NumPy", color: "#013243" },
    { slug: "scikitlearn", name: "Scikit-Learn", color: "#F7931E" },
  ],
  languages: [
    { slug: "cplusplus", name: "C++", color: "#00599C" },
    { slug: "c", name: "C", color: "#A8B9CC" },
    { slug: "openjdk", name: "Java", color: "#007396" },
    { slug: "kotlin", name: "Kotlin", color: "#7F52FF" },
    { slug: "javascript", name: "JavaScript", color: "#F7DF1E" },
  ],
  development: [
    { slug: "react", name: "React", color: "#61DAFB" },
    { slug: "nodedotjs", name: "Node.js", color: "#339933" },
    { slug: "androidstudio", name: "Android Studio", color: "#3DDC84" },
    { slug: "html5", name: "HTML5", color: "#E34F26" },
    { slug: "css3", name: "CSS3", color: "#1572B6" },
  ],
  tools: [
    { slug: "mongodb", name: "MongoDB", color: "#47A248" },
    { slug: "mysql", name: "MySQL", color: "#4479A1" },
    { slug: "git", name: "Git", color: "#F05032" },
    { slug: "postman", name: "Postman", color: "#FF6C37" },
    { slug: "railway", name: "Railway", color: "#0B0D0E" },
  ]
};

const SkillIcon = ({ slug, name, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="relative flex items-center justify-center p-4 rounded-xl border border-white/5 bg-zinc-900/50 cursor-pointer overflow-visible transition-all duration-300 hover:border-white/20 hover:bg-zinc-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 0 20px ${color}40` : 'none',
        borderColor: isHovered ? `${color}80` : ''
      }}
    >
      {!hasError ? (
        <img
          src={`https://cdn.simpleicons.org/${slug === 'css3' ? 'css3' : slug}/${color.replace('#', '')}`}
          alt={name}
          onError={() => setHasError(true)}
          className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        />
      ) : (
        <span className="w-10 h-10 flex items-center justify-center font-bold text-xs" style={{ color }}>
          {name}
        </span>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -top-12 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-xs font-mono rounded-md shadow-xl whitespace-nowrap z-50 pointer-events-none"
          >
            {name}
            {/* Tooltip Triangle */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-b border-r border-zinc-700 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Deep Depth Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,41,59,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cobalt/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-forest/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl lg:w-3/5 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cobalt/30 bg-cobalt/5 text-cobalt text-[10px] font-mono font-medium mb-8 uppercase tracking-widest">
                <TerminalSquare size={14} className="text-cobalt" />
                SYSTEM.READY // VERSION_ACTIVE
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tighter text-white drop-shadow-2xl">
                Prachi <span className="text-purple">Dhiman</span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-heading tracking-tight mb-8 font-extrabold text-emerald">
                AI-Integrated Software Engineer
              </h2>

              <p className="text-lg md:text-xl text-primary/40 mb-8 max-w-xl leading-relaxed">
                Deeply exploring AI/ML to build data-driven solutions for Web and Mobile. Architecting intelligent systems that bridge analytical models with robust full-stack applications.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a href="https://github.com/PrachiDhiman5" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/5 bg-surface flex items-center justify-center text-primary/20 hover:text-white hover:bg-cobalt transition-all shadow-lg hover:shadow-cobalt/20">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/prachi-dhiman05/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/5 bg-surface flex items-center justify-center text-primary/20 hover:text-white hover:bg-cobalt transition-all shadow-lg hover:shadow-cobalt/20">
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/lab" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group font-mono text-sm tracking-widest shadow-2xl shadow-white/5">
                  ENTER THE LAB
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="/RESUME_PRACHI.pdf" download className="w-full sm:w-auto px-8 py-4 bg-navy/40 border border-white/5 text-white font-bold rounded-lg hover:bg-navy/60 transition-all flex items-center justify-center gap-2 group font-mono text-sm tracking-widest shadow-xl">
                  DOWNLOAD CV
                  <Download size={20} className="group-hover:-translate-y-1 transition-transform text-white/40" />
                </a>
              </div>
            </motion.div>

            {/* Profile Image Column - Floating with no background */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="lg:w-1/2 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Aura background glow - "Aura type light" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cobalt/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald/10 blur-[100px] rounded-full pointer-events-none"></div>

                <img
                  src="/images/profile.png"
                  alt="Prachi Dhiman"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Power Grid Section */}
      <section className="py-24 border-t border-white/5 relative bg-navy/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white tracking-tight underline decoration-cobalt decoration-4 underline-offset-8">Visual Power Grid</h2>
            <p className="text-primary/20 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Core Technology Matrix // v2.0</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Group 1: Data Science & AI */}
            <div className="bg-navy/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col hover:border-forest transition-all shadow-xl group/card">
              <h3 className="font-heading text-lg text-emerald mb-6 border-b border-white/5 pb-4 tracking-tighter uppercase font-bold">Data Science <span className="text-white">&</span> AI</h3>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                {skills.dataScience.map((skill, idx) => (
                  <SkillIcon key={skill.name} {...skill} delay={idx * 0.1} />
                ))}
              </div>
            </div>

            {/* Group 2: Languages */}
            <div className="bg-navy/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col hover:border-cobalt transition-all shadow-xl group/card">
              <h3 className="font-heading text-lg text-cobalt mb-6 border-b border-white/5 pb-4 tracking-tighter uppercase font-bold">Core Languages</h3>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                {skills.languages.map((skill, idx) => (
                  <SkillIcon key={skill.name} {...skill} delay={idx * 0.1 + 0.2} />
                ))}
              </div>
            </div>

            {/* Group 3: Development */}
            <div className="bg-navy/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col hover:border-emerald transition-all shadow-xl group/card">
              <h3 className="font-heading text-lg text-emerald mb-6 border-b border-white/5 pb-4 tracking-tighter uppercase font-bold">Development</h3>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                {skills.development.map((skill, idx) => (
                  <SkillIcon key={skill.name} {...skill} delay={idx * 0.1 + 0.4} />
                ))}
              </div>
            </div>

            {/* Group 4: Tools & DB */}
            <div className="bg-navy/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col hover:border-amber transition-all shadow-xl group/card">
              <h3 className="font-heading text-lg text-amber mb-6 border-b border-white/5 pb-4 tracking-tighter uppercase font-bold">Tools <span className="text-white">&</span> Databases</h3>
              <div className="grid grid-cols-3 gap-3 mt-auto">
                {skills.tools.map((skill, idx) => (
                  <SkillIcon key={skill.name} {...skill} delay={idx * 0.1 + 0.6} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-24 border-t border-white/5 bg-navy/40 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-forest/5 blur-[120px] rounded-full rotate-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-white text-center tracking-tighter uppercase underline decoration-cobalt decoration-8 underline-offset-[12px]">Academic Foundation</h2>

          <div className="max-w-3xl mx-auto relative pl-8 md:pl-0">
            {/* Central Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-zinc-800 -translate-x-1/2"></div>

            <div className="space-y-16">

              {/* Node 1 */}
              <div className="relative md:flex items-center justify-between w-full group">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="font-mono text-cobalt text-sm uppercase font-bold">2023 - Present</span>
                </div>
                <div className="absolute left-[-2rem] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-cobalt -translate-x-1/2 z-10 group-hover:bg-cobalt group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all"></div>
                <div className="md:w-5/12 pl-4 md:pl-8">
                  <div className="md:hidden mb-2">
                    <span className="font-mono text-cobalt text-sm uppercase">2023 - Present</span>
                  </div>
                  <div className="glass-card">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">B.Tech - Computer Science</h3>
                    <p className="text-primary/60 mb-4">Lovely Professional University</p>
                    <div className="inline-block px-3 py-1 bg-cobalt/10 border border-cobalt/20 rounded font-mono text-sm text-cobalt">CGPA: 8.1</div>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="relative md:flex items-center justify-between w-full group">
                <div className="md:w-5/12 md:text-right pr-4 md:pr-8 md:order-1 order-2 mt-4 md:mt-0 pl-4 md:pl-0">
                  <div className="md:hidden mb-2">
                    <span className="font-mono text-primary/40 text-sm uppercase">2021 - 2022</span>
                  </div>
                  <div className="glass-card">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">Intermediate (12th Grade)</h3>
                    <p className="text-primary/60 mb-4">Bhartiya Public School</p>
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/5 rounded font-mono text-sm text-primary/40">Score: 90.02%</div>
                  </div>
                </div>
                <div className="absolute left-[-2rem] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/10 -translate-x-1/2 z-10 group-hover:bg-white/40 transition-all md:order-2 order-1"></div>
                <div className="hidden md:block w-5/12 pl-8 md:order-3">
                  <span className="font-mono text-primary/40 text-sm uppercase">2021 - 2022</span>
                </div>
              </div>

              {/* Node 3 */}
              <div className="relative md:flex items-center justify-between w-full group">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="font-mono text-primary/40 text-sm uppercase">2019 - 2020</span>
                </div>
                <div className="absolute left-[-2rem] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/10 -translate-x-1/2 z-10 group-hover:bg-white/40 transition-all"></div>
                <div className="md:w-5/12 pl-4 md:pl-8">
                  <div className="md:hidden mb-2">
                    <span className="font-mono text-primary/40 text-sm uppercase">2019 - 2020</span>
                  </div>
                  <div className="glass-card">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">Matriculation (10th Grade)</h3>
                    <p className="text-primary/60 mb-4">Bhartiya Public School</p>
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/5 rounded font-mono text-sm text-primary/40">Score: 84%</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cobalt to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white tracking-tighter">Featured <span className="text-cobalt">Architecture</span></h2>
              <p className="text-primary/20 font-mono text-xs uppercase tracking-[0.4em] font-bold">Top deployed systems // v2.0</p>
            </div>
            <Link to="/lab" className="inline-flex items-center gap-2 text-cobalt hover:text-white font-mono text-xs font-bold transition-all group uppercase tracking-widest bg-cobalt/10 px-6 py-3 rounded-xl border border-cobalt/20 shadow-lg shadow-cobalt/5">
              Access Full Repository <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-navy/40 border border-white/5 rounded-3xl p-8 hover:border-cobalt transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <FolderGit2 size={80} className="text-cobalt" />
              </div>
              <div className="w-14 h-14 bg-cobalt/10 rounded-2xl flex items-center justify-center mb-8 text-cobalt group-hover:bg-cobalt group-hover:text-white transition-all shadow-lg shadow-cobalt/20 border border-cobalt/20">
                <FolderGit2 size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tighter uppercase group-hover:text-cobalt transition-all">Society Help Desk</h3>
              <p className="text-primary/40 text-sm leading-relaxed mb-8 flex-grow tracking-tight">A comprehensive <span className="text-white font-bold">backend-heavy</span> society management platform utilizing Node.js, Express, and MongoDB with secure RBAC. <span className="text-cobalt font-bold">In Production.</span></p>
              <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">Node.js</span>
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">MongoDB</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-navy/40 border border-white/5 rounded-3xl p-8 hover:border-cobalt transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <FolderGit2 size={80} className="text-cobalt" />
              </div>
              <div className="w-14 h-14 bg-cobalt/10 rounded-2xl flex items-center justify-center mb-8 text-cobalt group-hover:bg-cobalt group-hover:text-white transition-all shadow-lg shadow-cobalt/20 border border-cobalt/20">
                <FolderGit2 size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tighter uppercase group-hover:text-cobalt transition-all">Health Risk Analysis</h3>
              <p className="text-primary/40 text-sm leading-relaxed mb-8 flex-grow tracking-tight">End-to-end <span className="text-white font-bold">Python ML</span> architecture predicting lifestyle health risks leveraging automated hyperparameter tuning. <span className="text-cobalt font-bold">Accuracy: 94%.</span></p>
              <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">Python</span>
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">Scipy</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-navy/40 border border-white/5 rounded-3xl p-8 hover:border-cobalt transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <FolderGit2 size={80} className="text-cobalt" />
              </div>
              <div className="w-14 h-14 bg-cobalt/10 rounded-2xl flex items-center justify-center mb-8 text-cobalt group-hover:bg-cobalt group-hover:text-white transition-all shadow-lg shadow-cobalt/20 border border-cobalt/20">
                <FolderGit2 size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tighter uppercase group-hover:text-cobalt transition-all">CPU Process Visualizer</h3>
              <p className="text-primary/40 text-sm leading-relaxed mb-8 flex-grow tracking-tight">A dynamic <span className="text-white font-bold">simulator</span> automating calculation of structural OS metrics across scheduling algorithms. <span className="text-cobalt font-bold">Educational Tool.</span></p>
              <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">Python</span>
                <span className="text-cobalt bg-cobalt/5 px-2 py-1 rounded border border-cobalt/10">Matplotlib</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Impact */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Certifications */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-10 text-white flex items-center gap-4 tracking-tighter uppercase">
                <Award className="text-cobalt" size={32} /> Technical <span className="text-cobalt">Credentials</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Build Gen AI Apps & Solutions with No-Code Tools", issuer: "Credential", color: "text-cobalt" },
                  { title: "ChatGPT-4 Prompt Engineering", issuer: "Credential", color: "text-emerald" },
                  { title: "Master Gen AI & Gen AI Tools", issuer: "Credential", color: "text-purple" },
                  { title: "Responsive Web Design", issuer: "FreeCodeCamp", color: "text-amber" },
                  { title: "Data Structures & Algorithms", issuer: "byteXL / LPU", color: "text-cobalt" },
                  { title: "Cloud Computing", issuer: "NPTEL", color: "text-emerald" }
                ].map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-navy/40 hover:bg-navy/60 transition-all group cursor-default shadow-xl group/item">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-background border border-white/5 flex items-center justify-center ${cert.color} shadow-inner group-hover/item:scale-110 transition-transform`}>
                        <Award size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-tight group-hover/item:text-cobalt transition-colors">{cert.title}</h4>
                        <p className={`font-mono text-[10px] mt-1 uppercase font-bold tracking-[0.2em] ${cert.color} opacity-60 group-hover/item:opacity-100`}>{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteering */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-10 text-white flex items-center gap-4 tracking-tighter uppercase">
                <Heart className="text-emerald" size={32} /> Social <span className="text-emerald">Impact</span>
              </h2>
              <div className="bg-navy/40 border-l-4 border-emerald rounded-3xl p-10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Heart size={160} className="text-emerald" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-1.5 bg-emerald text-white font-mono text-[10px] font-bold rounded-lg mb-8 uppercase shadow-lg shadow-emerald/20">
                    2024 - 2025
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tighter uppercase group-hover:text-emerald transition-colors">Drops of Change (NGO)</h3>
                  <h4 className="text-xl text-emerald/60 mb-8 font-heading font-bold">CORE VOLUNTEER</h4>
                  <p className="text-primary/40 leading-relaxed text-base tracking-tight font-medium group-hover:text-primary transition-colors">
                    Providing essential education and mentorship to underprivileged children while actively contributing to comprehensive community assessment and development initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white flex items-center justify-center gap-6 tracking-tighter uppercase leading-none underline decoration-cobalt decoration-8 underline-offset-[16px]">
              Initiate Collab
            </h2>
            <p className="text-emerald font-mono text-xs font-bold max-w-xl mx-auto uppercase tracking-[0.5em] mb-12">
              System access open for deep learning & web architecture
            </p>
          </div>
          <div className="glass-card backdrop-blur-sm shadow-2xl shadow-cobalt/5">
            <ContactForm />
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Home;
