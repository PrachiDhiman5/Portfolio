import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText, ExternalLink, Award, BookOpen, Cpu, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = ['Education', 'Skills', 'Projects', 'Training', 'Extracurricular', 'Certificates'];

  const educationData = [
    {
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      info: 'CGPA: 8.1',
      date: "Aug'23 – Present"
    },
    {
      institution: 'Bhartiya Public School',
      location: 'Haryana, India',
      degree: 'Intermediate',
      info: 'Percentage: 84',
      date: "Apr'21 – May 22"
    },
    {
      institution: 'Bhartiya Public School',
      location: 'Haryana, India',
      degree: 'Matriculation',
      info: 'Percentage: 90.02',
      date: "Apr'19 – May 20"
    }
  ];

  const skillsData = [
    { category: 'Languages', items: ['C', 'C++', 'JavaScript', 'Python', 'Java', 'Kotlin'] },
    { category: 'Web & Mobile', items: ['HTML', 'CSS', 'REST APIs', 'JWT', 'Google OAuth 2.0', 'MySQL', 'MongoDB', 'MongoDB Atlas'] },
    { category: 'Machine Learning & AI', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'AutoML'] },
    { category: 'Tools & Deployment', items: ['Git', 'GitHub', 'Postman', 'Railway', 'Android Studio'] },
    { category: 'Soft Skills', items: ['Adaptability', 'Problem Solving', 'Collaboration', 'Team Management'] }
  ];

  const projectsData = [
    {
      title: 'Society Help Desk',
      sub: 'Complaint & Issue Tracker System | Full-Stack',
      date: "Jan'26",
      bullets: [
        'Developed a full-stack platform using Node.js, Express, and MongoDB for structured complaint handling.',
        'Integrated Google OAuth 2.0 and JWT for secure authentication and RBAC middleware.',
        'Engineered dual-mode auth fallback and optimized MongoDB with unique/sparse indexing.',
        'Designed a responsive glassmorphism UI with real-time tracking, deployed via Railway.'
      ],
      tech: 'Node.js, Express.js, MongoDB Atlas, Google OAuth 2.0, JWT, REST API, JavaScript, Railway'
    },
    {
      title: 'Lifestyle Health Risk Prediction',
      sub: 'ML-Based Lifestyle Risk Analysis System',
      date: "Dec'25",
      bullets: [
        'Developed an end-to-end ML pipeline to predict health risks using survey data.',
        'Implemented data preprocessing, feature engineering, and exploratory analysis.',
        'Used regression, classification, and clustering models to identify risk patterns.',
        'Leveraged AutoML for automated model selection and hyperparameter optimization.'
      ],
      tech: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Machine Learning, AutoML'
    },
    {
      title: 'Process Visualizer',
      sub: 'CPU Scheduling Simulator with Real-Time Visualization',
      date: "Mar'25",
      bullets: [
        'Implemented FCFS, SJF, Priority, and Round Robin algorithms for core OS metrics.',
        'Engineered a modular engine with dynamic state transitions across preemptive scenarios.',
        'Built a Tkinter-based GUI with Matplotlib-integrated Gantt charts for visualization.'
      ],
      tech: 'Python, Tkinter, Matplotlib, DSA, Operating Systems'
    }
  ];

  const trainingData = [
    {
      id: 1,
      type: 'SUMMER TRAINING',
      title: 'Data Structures & Algorithms Trainee',
      location: 'Lovely Professional University (in collaboration with byteXL)',
      date: "Jun'25 – Jul'25",
      bullets: [
        'Completed an intensive 2-month training in DSA using C++, strengthening algorithmic thinking.',
        'Designed and developed a Travel Expense Tracker web application using Object-Oriented JS.',
        'Integrated Stacks for undo, BST for organization, and Hash Maps for O(1) currency lookups.'
      ],
      tech: 'C++, JavaScript (OOPS), HTML, CSS, Data Structures & Algorithms'
    }
  ];

  const extracurricularData = [
    {
      id: 1,
      type: 'SOCIAL WORK',
      title: 'Community Work - Drops of Change',
      location: 'Community Engagement',
      date: 'Present',
      bullets: [
        'Actively participating in social welfare and community improvement initiatives.',
        'Working on water conservation and awareness programs through the Drops of Change platform.'
      ]
    },
    {
      id: 2,
      type: 'BOOTCAMP',
      title: 'Python Bootcamp',
      location: 'Technical Training',
      date: 'Oct 10, 2023',
      bullets: [
        'Attended comprehensive Python sessions covering core syntax to intermediate libraries.',
        'Applied scripting knowledge to automate basic workflow tasks.'
      ]
    },
    {
      id: 3,
      type: 'WORKSHOP',
      title: 'BUG BOUNTY PRO Workshop',
      location: 'Cybersecurity',
      date: 'Aug 31, 2024',
      bullets: [
        'Explored penetration testing methodologies and vulnerability disclosure programs.',
        'Learned about identifying and mitigating high-risk security flaws in web applications.'
      ]
    }
  ];

  const certificatesData = [
    {
      title: 'Data Structure and Algorithms using C++',
      issuer: 'byteXL',
      date: "Jul'25",
      link: 'https://drive.google.com/file/d/1vgD65llClf1Cgr_UgoNEZP2kEsI_0xkk/view?usp=sharing'
    },
    {
      title: 'Cloud Computing Certification',
      issuer: 'NPTEL',
      date: "Apr'25",
      link: 'https://drive.google.com/file/d/1zh4N66DSQo_v2-ipPaLjL8g2YhU0E0iL/view?usp=sharing'
    },
    {
      title: 'Build GenAI Applications',
      issuer: 'Google Cloud',
      date: "Aug'24",
      link: 'https://drive.google.com/file/d/1QP0wF2Rmqlx_7QFdS4z7XvnksjqujiDL/view?usp=sharing'
    },
    {
      title: 'ChatGPT-4 Prompt Engineering',
      issuer: 'GenAI Hub',
      date: "Sep'24",
      link: 'https://drive.google.com/file/d/1ymiCfrrtscOBm91KnemcbM0GS8iAVGpK/view?usp=sharing'
    },
    {
      title: 'Master GenAI Tools',
      issuer: 'Professional Training',
      date: "Oct'24",
      link: 'https://drive.google.com/file/d/10VkYUmhlz0wS-si2Ep0DjJ7PggoaL3yK/view?usp=sharing'
    },
    {
      title: 'JavaScript Data Structures',
      issuer: 'freeCodeCamp',
      date: "Nov'24",
      link: 'https://drive.google.com/file/d/1_FE6SsFay3RM-LLL8CtiRlreYgpPf6TT/view?usp=sharing'
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 10, transition: { duration: 0.2 } }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen relative z-10 font-sans text-zinc-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-10 overflow-hidden relative py-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cobalt/5 blur-[100px] rounded-full pointer-events-none"></div>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tighter relative z-10 underline decoration-cobalt decoration-8 underline-offset-[16px]">
              Curriculum Vitae
            </h1>
            <p className="text-[10px] font-mono text-primary/20 uppercase tracking-[0.4em] relative z-10">Professional Log // v2.0.4</p>
          </div>

          {/* Contact Info Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 bg-navy/20 border border-white/5 px-4 py-2 rounded-lg text-[10px] md:text-xs text-primary/40 font-mono tracking-widest uppercase shadow-xl hover:border-cobalt/20 transition-all">
              <Mail size={12} className="text-white/10" /> prachidhiman362@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-navy/20 border border-white/5 px-4 py-2 rounded-lg text-[10px] md:text-xs text-primary/40 font-mono tracking-widest uppercase shadow-xl hover:border-cobalt/20 transition-all">
              <Phone size={12} className="text-white/10" /> +91-9034461378
            </div>
            <a href="https://linkedin.com/in/prachi-dhiman05/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-navy/20 border border-white/5 hover:border-cobalt/40 px-4 py-2 rounded-lg text-[10px] md:text-xs transition-all text-primary/40 hover:text-white font-mono tracking-widest uppercase shadow-xl">
              <Linkedin size={12} className="group-hover:text-cobalt" /> LinkedIn
            </a>
            <a href="https://github.com/PrachiDhiman5" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-navy/20 border border-white/5 hover:border-cobalt/40 px-4 py-2 rounded-lg text-[10px] md:text-xs transition-all text-primary/40 hover:text-white font-mono tracking-widest uppercase shadow-xl">
              <Github size={12} className="group-hover:text-cobalt" /> GitHub
            </a>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-white/5 pb-px">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 transition-all text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase ${activeTab === tab
                  ? `text-white border-b-2 ${tab === 'Education' ? 'border-cobalt' : tab === 'Skills' ? 'border-emerald' : tab === 'Projects' ? 'border-amber' : tab === 'Training' ? 'border-purple' : 'border-cobalt'} bg-navy/40 shadow-xl`
                  : 'text-primary/10 hover:text-primary/40'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {/* Education Tab */}
                {activeTab === 'Education' && educationData.map((edu, i) => (
                  <div key={i} className="bg-navy/40 border-l-4 border-cobalt p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-2xl hover:bg-navy/60 transition-all">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                      <BookOpen size={96} className="text-cobalt" />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mb-4 relative z-10">
                      <h3 className="text-2xl font-bold text-white tracking-tighter">{edu.institution}</h3>
                      <span className="text-cobalt font-mono text-xs font-bold uppercase tracking-[0.2em] bg-cobalt/10 px-3 py-1 rounded border border-cobalt/20 h-fit mt-2 md:mt-0 shadow-lg shadow-cobalt/10">{edu.date}</span>
                    </div>
                    <p className="text-emerald font-bold text-lg mb-2 relative z-10 tracking-tight">{edu.degree}</p>
                    <p className="text-primary/20 text-[10px] font-mono uppercase tracking-[0.3em] relative z-10">{edu.location} // {edu.info}</p>
                  </div>
                ))}

                {/* Skills Tab */}
                {activeTab === 'Skills' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.map((skill, i) => (
                      <div key={i} className="bg-surface/30 border border-white/5 rounded-xl p-6 shadow-xl">
                        <h3 className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${
                          skill.category.toLowerCase().includes('languages') ? 'text-emerald' :
                          skill.category.toLowerCase().includes('data') ? 'text-cobalt' :
                          skill.category.toLowerCase().includes('tools') ? 'text-amber' :
                          'text-purple'
                        }`}>
                          <Code2 size={14} /> {skill.category}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-primary/40">
                          {skill.items.map((item, j) => (
                            <span key={j} className={`px-3 py-1 rounded text-xs font-mono uppercase border transition-all hover:scale-105 ${
                              skill.category.toLowerCase().includes('languages') ? 'border-emerald/30 bg-emerald/5 text-emerald/80 hover:border-emerald' :
                              skill.category.toLowerCase().includes('data') ? 'border-cobalt/30 bg-cobalt/5 text-cobalt/80 hover:border-cobalt' :
                              skill.category.toLowerCase().includes('tools') ? 'border-amber/30 bg-amber/5 text-amber/80 hover:border-amber' :
                              'border-purple/30 bg-purple/5 text-purple/80 hover:border-purple'
                            }`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Projects Tab */}
                {activeTab === 'Projects' && projectsData.map((proj, i) => (
                   <div key={i} className="bg-navy/40 border-l-4 border-amber p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-2xl hover:bg-navy/60 transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-amber transition-colors uppercase tracking-tighter">
                          {proj.title.split(' ').map((w, j) => <span key={j} className={j === 0 ? 'text-amber' : ''}>{w} </span>)}
                        </h3>
                        <p className="text-primary/20 text-[10px] font-mono uppercase tracking-[0.3em] mt-1 font-bold">{proj.sub}</p>
                      </div>
                      <span className="text-amber font-mono text-xs font-bold uppercase mt-2 md:mt-0 bg-amber/10 px-3 py-1 rounded border border-amber/20 h-fit shadow-lg shadow-amber/10">{proj.date}</span>
                    </div>
                    <ul className="space-y-3 mb-6 ml-4 list-disc marker:text-amber/40 relative z-10">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-primary/40 text-[13px] leading-relaxed group-hover:text-primary transition-colors">{bullet}</li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em] leading-loose relative z-10">
                      <span className="text-amber font-bold">TECH STACK:</span> {proj.tech}
                    </div>
                  </div>
                ))}

                {/* Training Tab */}
                {activeTab === 'Training' && trainingData.map((item, i) => (
                  <div key={i} className="bg-navy/40 border-l-4 border-purple p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-2xl hover:bg-navy/60 transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4 relative z-10">
                      <div>
                        <span className="text-[10px] text-purple font-bold tracking-[0.3em] uppercase block mb-1">{item.type}</span>
                        <h3 className="text-2xl font-bold text-white tracking-tighter">
                          {item.title.split(' ').map((w, j) => <span key={j} className={j === 0 ? 'text-purple' : ''}>{w} </span>)}
                        </h3>
                        <p className="text-emerald font-bold text-sm mt-1">{item.location}</p>
                      </div>
                      <span className="text-purple font-mono text-xs font-bold uppercase mt-2 md:mt-0 bg-purple/10 px-3 py-1 rounded border border-purple/20 h-fit shadow-lg shadow-purple/10">{item.date}</span>
                    </div>
                    <ul className="space-y-3 mb-6 ml-4 list-disc marker:text-purple/40 relative z-10">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-primary/40 text-[13px] leading-relaxed group-hover:text-primary transition-colors">{bullet}</li>
                      ))}
                    </ul>
                    {item.tech && (
                      <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-purple/40 uppercase tracking-[0.2em] relative z-10">
                        <span className="font-bold text-purple">CORE:</span> {item.tech}
                      </div>
                    )}
                  </div>
                ))}

                {/* Extracurricular Tab */}
                {activeTab === 'Extracurricular' && extracurricularData.map((item, i) => (
                  <div key={i} className="bg-navy/40 border-l-4 border-emerald p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-2xl hover:bg-navy/60 transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4 relative z-10">
                      <div>
                        <span className="text-[10px] text-emerald font-bold tracking-[0.3em] uppercase block mb-1">{item.type}</span>
                        <h3 className="text-2xl font-bold text-white tracking-tighter">
                          {item.title.split(' ').map((w, j) => <span key={j} className={j === 0 ? 'text-emerald' : ''}>{w} </span>)}
                        </h3>
                        <p className="text-primary/40 font-bold text-sm mt-1">{item.location}</p>
                      </div>
                      <span className="text-emerald font-mono text-xs font-bold uppercase mt-2 md:mt-0 bg-emerald/10 px-3 py-1 rounded border border-emerald/20 h-fit shadow-lg shadow-emerald/10">{item.date}</span>
                    </div>
                    <ul className="space-y-3 mb-4 ml-4 list-disc marker:text-emerald/40 relative z-10">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-primary/40 text-[13px] leading-relaxed group-hover:text-primary transition-colors">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Certificates Tab */}
                {activeTab === 'Certificates' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesData.map((cert, i) => (
                      <a 
                        key={i} 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-navy/40 border border-white/5 rounded-2xl p-6 flex items-start justify-between hover:border-cobalt transition-all cursor-pointer group shadow-2xl relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                          <Award size={64} className="text-cobalt" />
                        </div>
                        <div className="flex gap-4 relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-all shadow-lg shadow-cobalt/10">
                            <Award size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cobalt transition-colors tracking-tight leading-tight mb-1">{cert.title}</h3>
                            <p className="text-emerald font-mono text-[10px] uppercase font-bold tracking-[0.2em]">{cert.issuer} • {cert.date}</p>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <ExternalLink size={16} className="text-primary/20 group-hover:text-white transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Download Button */}
          <div className="mt-16 text-center border-t border-white/5 pt-10">
            <a
              href="/RESUME_PRACHI.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 font-bold py-4 px-10 rounded-xl transition-all shadow-2xl shadow-white/5 hover:-translate-y-1 font-mono text-sm tracking-widest"
            >
              <FileText size={20} /> DOWNLOAD RESUME (PDF)
            </a>
            <p className="text-primary/20 text-[10px] font-mono uppercase tracking-[0.3em] mt-6">
              Official document transmission protocol v1.0
            </p>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
