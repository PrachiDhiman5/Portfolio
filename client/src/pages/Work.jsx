import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Workflow, CheckCircle2, FlaskConical, Award, TerminalSquare, PlayCircle, X, ArrowRight, Share2, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const topProjects = [
  {
    id: 'society-help-desk',
    title: 'Society Help Desk',
    subtitle: 'MERN Stack Issue Tracker',
    description: "A comprehensive backend-heavy society management platform utilizing Node.js, Express, and MongoDB. Features secure RBAC middleware for admin routes and automated complaint lifecycle tracking.",
    techStack: ["Node.js", "MongoDB", "OAuth 2.0", "React", "JWT"],
    githubURL: "https://github.com/PrachiDhiman5/Society-Help-Desk",
    accentColor: "cobalt",
    mediaType: "video",
    mediaURL: "/videos/society-demo.mp4",
    workflowNodes: [
      { step: 1, title: 'Authentication Layer', desc: 'OAuth 2.0 & JWT Sessions secure user entry.' },
      { step: 2, title: 'RBAC Middleware', desc: 'Custom roles block unauthorized dashboard access.' },
      { step: 3, title: 'Real-time UI', desc: 'React Frontend filters society records in real-time.' },
      { step: 4, title: 'Database Indexing', desc: 'MongoDB indexed for highly scalable lookups.' },
    ]
  },
  {
    id: 'lifestyle-health-risk',
    title: 'Health Risk Analysis System',
    subtitle: 'Predictive ML Pipeline',
    description: "An end-to-end Python machine learning architecture predicting lifestyle health risks from unstructured survey forms, leveraging automated hyperparameter tuning and model serialization.",
    techStack: ["Python", "Scikit-learn", "Pandas", "AutoML", "Flask"],
    githubURL: "https://github.com/PrachiDhiman5/Lifestyle-Health-Risk-Prediction",
    accentColor: "emerald",
    mediaType: "video",
    mediaURL: "/videos/health.mp4",
    workflowNodes: [
      { step: 1, title: 'Data Aggregation', desc: 'Survey data cleaned & normalized via Pandas.' },
      { step: 2, title: 'Feature Engineering', desc: 'Removes collinear variables to improve accuracy.' },
      { step: 3, title: 'AutoML Optimization', desc: 'Scales hyperparameter tuning automatically.' },
      { step: 4, title: 'Model Evaluation', desc: 'Predictions evaluated against Random Forest schemas.' },
    ]
  },
  {
    id: 'process-visualizer',
    title: 'CPU Scheduling Visualizer',
    subtitle: 'OS Real-Time Simulator',
    description: "A dynamic simulator automating calculation of structural OS metrics across FCFS, SJF, Priority, and Round Robin algorithms with generated Gantt Charts.",
    techStack: ["Python", "Tkinter", "Matplotlib", "DSA", "CSS3"],
    githubURL: "https://github.com/PrachiDhiman5/Process-Visualization-Tool",
    accentColor: "amber",
    mediaType: "video",
    mediaURL: "/videos/process-demo.mp4",
    workflowNodes: [
      { step: 1, title: 'Task Engine', desc: 'Processes preemptive & non-preemptive logic.' },
      { step: 2, title: 'Context Switch Tracker', desc: 'Tracks real-time system performance & latency.' },
      { step: 3, title: 'Tkinter GUI', desc: 'Presents dynamic user controls for algorithms.' },
      { step: 4, title: 'Matplotlib Hooks', desc: 'Provides direct real-time Gantt charting.' },
    ]
  }
];

const otherProjects = [
  {
    id: 'collab-board',
    title: 'CollabBoard',
    subtitle: 'Real-time collaborative whiteboard',
    description: 'A dynamic, real-time whiteboarding interface. Detailed description pending. Will be updated with accurate GitHub repository and workflow breakdown.',
    techStack: ['React', 'WebSockets', 'Node.js'],
    githubURL: 'https://github.com/PrachiDhiman5/CollabBoard',
    accentColor: 'indigo',
    mediaType: "video",
    mediaURL: "/videos/collabBoard.mp4",
    workflowNodes: [
      { step: 1, title: 'Authentication', desc: 'Secure Google OAuth sign-in and room entry protocol.' },
      { step: 2, title: 'Real-time Sync', desc: 'Socket.io connection for instant, lag-free action updates.' },
      { step: 3, title: 'Canvas Engine', desc: 'Object manipulation (shapes, text, notes) with state tracking.' },
      { step: 4, title: 'Live Broadcast', desc: 'Instant transmission of edits across all connected clients.' },
      { step: 5, title: 'Export System', desc: 'High-quality PNG generation while preserving layout design.' }
    ]
  },
  {
    id: 'whisper-wall',
    title: 'Whisper Wall',
    subtitle: 'Anonymous confession board',
    description: 'A securely moderated anonymous confession platform using full MERN stack. Features stateless JWT authentication and a unique anonymous identity mapping system.',
    techStack: ['MERN', 'Google OAuth', 'JWT', 'Passport.js'],
    githubURL: 'https://github.com/PrachiDhiman5/Whisper-Wall',
    accentColor: 'rose',
    mediaType: 'video',
    mediaURL: '/videos/confession.mp4',
    workflowNodes: [
      { step: 1, title: 'Auth Gateway', desc: 'Google OAuth login and JWT generation for secure access.' },
      { step: 2, title: 'Secure Interceptor', desc: 'JWT attached to API requests via Axios interceptors.' },
      { step: 3, title: 'Anonymous ID', desc: 'Confessions stored in MongoDB with masked user identities.' },
      { step: 4, title: 'Security Routes', desc: 'Backend validation through protected middleware layers.' },
      { step: 5, title: 'REST Architecture', desc: 'Scalable data fetching and interaction for global users.' }
    ]
  },
  {
    id: 'travel-expense',
    title: 'Travel Expense Tracker',
    subtitle: 'DSA heavy expenditure analyzer',
    description: 'An algorithmic expenditure tracking application developed during training at LPU. Emphasizes core memory structures like BSTs and Stacks for high-performance data handling.',
    techStack: ['C++', 'JavaScript', 'BST', 'Stacks'],
    githubURL: 'https://github.com/PrachiDhiman5/Travel_expense_Tracker',
    accentColor: 'sky',
    mediaType: 'video',
    mediaURL: '/videos/travel.mp4',
    workflowNodes: [
      { step: 1, title: 'Dashboard Entry', desc: 'Secure user login to the centralized management interface.' },
      { step: 2, title: 'Local Persistence', desc: 'Expense logging by category and date stored in browser storage.' },
      { step: 3, title: 'DSA Organization', desc: 'BST, HashMap, and Stack structures optimizing data operations.' },
      { step: 4, title: 'Algorithmic Search', desc: 'Efficient sorting and search patterns for spend analytics.' },
      { step: 5, title: 'Undo Protocol', desc: 'LIFO Stack action to revert the most recent expense entry.' }
    ]
  },
  {
    id: 'amazon-fashion-dashboard',
    title: 'Amazon Fashion Insights',
    subtitle: 'Power BI & Excel Analytics',
    description: 'An interactive Power BI dashboard built to analyze customer reviews from the Amazon Fashion dataset. Transforms raw review data into meaningful insights using Power Query and DAX.',
    techStack: ['Power BI', 'Excel', 'DAX', 'Power Query'],
    githubURL: 'https://github.com/PrachiDhiman5/Amazon-Fashion-Review-Insights-Dashboard',
    accentColor: 'purple',
    mediaType: 'video',
    mediaURL: '/videos/dashboard.mp4',
    workflowNodes: [
      { step: 1, title: 'Data Preparation', desc: 'Cleaning & formatting date columns via Power Query.' },
      { step: 2, title: 'Sentiment Analysis', desc: 'Derived columns for Positive/Neutral/Negative ratings.' },
      { step: 3, title: 'BI Visualization', desc: 'Multi-page interactive drill-through dashboard.' },
      { step: 4, title: 'Insight Extraction', desc: 'Business patterns in verified vs non-verified purchases.' }
    ]
  }
];

const FlowchartNode = ({ step, title, desc, isLast }) => (
  <div className="flex flex-col md:flex-row items-center gap-4 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-white/10 bg-surface flex items-center justify-center text-white font-mono font-bold group-hover:border-cobalt transition-all z-10 shadow-lg group-hover:shadow-cobalt/20">
        0{step}
      </div>
      {!isLast && <div className="w-0.5 h-12 bg-white/5 md:hidden my-2"></div>}
    </div>

    <div className="hidden md:flex items-center justify-center w-12 opacity-30">
      {!isLast && <ArrowRight size={20} className="text-white" />}
    </div>

    <div className="flex-1 bg-surface/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all">
      <h4 className="text-white font-heading font-bold mb-1 tracking-tight">{title}</h4>
      <p className="text-primary/40 text-[10px] uppercase font-mono">{desc}</p>
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Card */}
      <motion.div
        whileHover={{ y: -5 }}
        onClick={() => setIsOpen(true)}
        className="bg-surface/50 border border-white/5 rounded-2xl overflow-hidden cursor-pointer group hover:border-white/20 transition-all shadow-2xl"
      >
        {/* Media Preview Aspect */}
        <div className="w-full h-64 bg-navy/40 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {project.mediaURL ? (
            project.mediaType === 'video' ? (
              <video
                key={project.mediaURL}
                src={project.mediaURL}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover relative z-0"
              />
            ) : (
              <img
                src={project.mediaURL}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <div className="text-white/10 flex flex-col items-center gap-2 relative z-0 group-hover:scale-105 transition-transform duration-700">
              <Layers size={48} className="opacity-20" />
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Media Preview</span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-${project.accentColor} group-hover:animate-pulse shadow-[0_0_10px_var(--color-${project.accentColor})]`}></span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-primary/60 bg-background/80 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
              {project.subtitle}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-heading font-bold text-white group-hover:text-cobalt transition-colors tracking-tight">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? `text-${project.accentColor}` : ''}>{word} </span>
              ))}
            </h2>
            <div className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-primary/40 group-hover:text-white group-hover:bg-cobalt transition-all shadow-lg">
              <PlayCircle size={20} />
            </div>
          </div>
          <p className="text-primary/40 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className={`px-3 py-1 text-[10px] uppercase tracking-wider font-mono border border-white/5 rounded transition-colors ${tech.toLowerCase().includes('python') ? 'text-emerald bg-emerald/5' :
                tech.toLowerCase().includes('node') || tech.toLowerCase().includes('full') ? 'text-cobalt bg-cobalt/5' :
                  tech.toLowerCase().includes('mern') || tech.toLowerCase().includes('power') ? 'text-purple bg-purple/5' :
                    'text-primary/40 bg-white/5'
                }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-background border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-surface/50">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${project.accentColor}/10 text-${project.accentColor} shadow-lg shadow-${project.accentColor}/10`}>
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">{project.subtitle}</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-primary/20 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                  {/* Left Col: Details & Media */}
                  <div className="space-y-8">
                    <div className="w-full aspect-video bg-navy/60 border border-white/5 rounded-xl relative overflow-hidden flex items-center justify-center group shadow-inner">
                      {project.mediaURL ? (
                        project.mediaType === 'video' ? (
                          <video
                            key={project.mediaURL}
                            src={project.mediaURL}
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover relative z-10"
                          />
                        ) : (
                          <img
                            src={project.mediaURL}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        )
                      ) : (
                        <PlayCircle size={48} className="text-zinc-700 group-hover:text-zinc-500 group-hover:scale-110 transition-all cursor-pointer" />
                      )}
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded text-[10px] font-mono tracking-widest text-white uppercase">
                        Project Preview
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                        <TerminalSquare size={18} className="text-zinc-500" /> Architecture Overview
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map(tech => (
                          <span key={tech} className={`px-3 py-1.5 text-[10px] font-mono border border-white/5 rounded uppercase tracking-widest transition-colors ${tech.toLowerCase().includes('python') ? 'text-emerald bg-emerald/5' :
                            tech.toLowerCase().includes('node') || tech.toLowerCase().includes('full') ? 'text-cobalt bg-cobalt/5' :
                              tech.toLowerCase().includes('mern') || tech.toLowerCase().includes('power') ? 'text-purple bg-purple/5' :
                                'text-primary/60 bg-navy/40'
                            }`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a href={project.githubURL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors font-mono font-bold text-sm w-full justify-center">
                        <Github size={18} /> View Source Repository
                      </a>
                    </div>
                  </div>

                  {/* Right Col: Flowchart */}
                  <div className="bg-navy/40 border border-white/5 rounded-xl p-6 md:p-8 shadow-xl">
                    <h4 className="text-lg font-heading font-bold text-white mb-2 flex items-center gap-2 tracking-tight">
                      <Share2 size={18} className="text-white/20" /> Workflow Logic
                    </h4>
                    <p className="text-[10px] font-mono text-primary/20 mb-8 uppercase tracking-[0.2em]">Execution pipeline visualization</p>

                    <div className="space-y-2 md:space-y-6 relative">
                      {/* Vertical line for mobile */}
                      <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-zinc-800 md:hidden z-0"></div>

                      {project.workflowNodes.map((node, idx) => (
                        <div key={idx} className="relative z-10">
                          <FlowchartNode
                            step={node.step}
                            title={node.title}
                            desc={node.desc}
                            isLast={idx === project.workflowNodes.length - 1}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Work = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 mt-12 bg-navy/40 border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-background text-cobalt text-[10px] font-mono mb-6 border border-cobalt/20 uppercase tracking-[0.3em] relative z-10 font-bold">
              <FlaskConical size={14} />
              THE LAB / EXPERIMENTS
            </div>
            <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6 text-white tracking-tighter relative z-10 leading-none">
              Welcome to the <span className="text-cobalt">Laboratory</span>
            </h1>
            <p className="text-base md:text-xl text-primary/40 max-w-4xl leading-relaxed relative z-10 tracking-tight">
              Explore a curated selection of <span className="text-white font-bold">Deep Learning</span> architectures, <span className="text-white font-bold">Analytical</span> pipelines, and <span className="text-white font-bold">Algorithmic</span> frameworks.
            </p>
          </div>

          <div className="mb-32">
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-white flex items-center gap-4 tracking-tighter underline decoration-cobalt decoration-8 underline-offset-[12px]">
              <TerminalSquare className="text-cobalt" size={40} /> Top Architectures
            </h3>
            {/* Top Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Repository Vault Grid */}
          <div className="mt-20 mb-32">
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-white flex items-center gap-4 tracking-tighter underline decoration-emerald decoration-8 underline-offset-[12px]">
              <Layers className="text-emerald" size={40} /> The Research Vault
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Certifications (Intact) */}
          <div className="mt-32 mb-10 border-t border-white/5 pt-24">
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white flex items-center gap-4 tracking-tighter text-center justify-center underline decoration-amber decoration-8 underline-offset-[12px]">
              <Award className="text-amber" size={40} /> Professional Credentials
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <a
                href="https://drive.google.com/file/d/1vgD65llClf1Cgr_UgoNEZP2kEsI_0xkk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-cobalt transition-all flex flex-col justify-between shadow-xl group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">Jun 25 – Jul 25</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">Data Structures & Algorithms</h4>
                  <p className="text-cobalt font-mono text-xs mb-6 uppercase">Lovely Professional University / byteXL</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Intensive training focusing on algorithmic optimization, computational complexity, and core memory structures to drive performance bottlenecks to absolute zero.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1zh4N66DSQo_v2-ipPaLjL8g2YhU0E0iL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-amber transition-all flex flex-col justify-between shadow-xl group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">Apr 25</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">Cloud Computing</h4>
                  <p className="text-amber font-mono text-xs mb-6 uppercase">NPTEL Certified</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Comprehensive study of IaaS/PaaS architecture, containerized deployment models, and scalable system infrastructure.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1QP0wF2Rmqlx_7QFdS4z7XvnksjqujiDL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-emerald transition-all flex flex-col justify-between shadow-xl group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">AI Specialization</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">Build Gen AI Apps & Solutions</h4>
                  <p className="text-emerald font-mono text-xs mb-6 uppercase">Credential</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Architecting generative AI applications using robust no-code environments and scalable APIs.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1ymiCfrrtscOBm91KnemcbM0GS8iAVGpK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-emerald transition-all flex flex-col justify-between shadow-xl group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">AI Specialization</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">ChatGPT-4 Prompt Engineering</h4>
                  <p className="text-emerald font-mono text-xs mb-6 uppercase">Credential</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Advanced prompt manipulation for complex reasoning and deterministic outputs in LLM integrations.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/10VkYUmhlz0wS-si2Ep0DjJ7PggoaL3yK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-emerald transition-all flex flex-col justify-between shadow-2xl hover:shadow-emerald/5 group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">AI Specialization</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">Master Gen AI & Tools</h4>
                  <p className="text-emerald font-mono text-xs mb-6 uppercase">Credential</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Comprehensive mastery over multimodal generative environments, agents, and tooling pipelines.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1_FE6SsFay3RM-LLL8CtiRlreYgpPf6TT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-surface/50 border border-white/5 rounded-xl p-8 hover:border-cobalt transition-all flex flex-col justify-between shadow-2xl hover:shadow-cobalt/5 group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-primary/20 font-mono tracking-widest uppercase mb-4 block">Web Architecture</span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 tracking-tight">Responsive Web Design</h4>
                  <p className="text-cobalt font-mono text-xs mb-6 uppercase">FreeCodeCamp</p>
                  <p className="text-primary/40 text-sm leading-relaxed mb-6 font-mono text-xs uppercase opacity-60">
                    Structural CSS grid frameworks, flexible styling, and responsive UI optimization methodologies.
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-mono text-primary/40 hover:text-white transition-all mt-auto uppercase tracking-widest">
                  Verify Credential <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Work;
