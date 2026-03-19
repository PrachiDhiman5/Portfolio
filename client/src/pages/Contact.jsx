import { FlaskConical, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OpportunityForm from '../components/OpportunityForm';

const Collaboration = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16 mt-12 text-center max-w-3xl mx-auto overflow-hidden relative py-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cobalt/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cobalt/30 bg-cobalt/5 text-cobalt text-[10px] font-mono mb-6 uppercase tracking-[0.3em] relative z-10">
              <Cpu size={14} />
              OPEN FOR COLLABORATION
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold mb-8 text-white tracking-tighter relative z-10 leading-none underline decoration-cobalt decoration-8 underline-offset-[20px]">
              Initiate Collab
            </h1>
            <p className="text-lg text-primary/40 font-mono text-[14px] leading-relaxed relative z-10 tracking-wide">
              Seeking opportunities to merge Deep Learning architectures with scalable Android and Full-Stack systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">

            {/* Future Research Pitch (Left Col - 2 spans) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-navy/20 border border-white/5 p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <FlaskConical size={120} />
                </div>

                <h3 className="text-3xl font-heading font-bold text-white mb-8 relative z-10 tracking-tighter flex items-center gap-4 underline decoration-emerald decoration-4 underline-offset-8">
                  Future Research Roadmap
                </h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4 items-start group/item">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-cobalt text-white font-mono text-xs shrink-0 mt-1 shadow-[0_0_20px_rgba(99,102,241,0.4)]">01</span>
                    <p className="text-primary/40 text-[14px] leading-relaxed group-hover/item:text-primary transition-colors">
                      <strong className="text-cobalt tracking-tight block mb-1 text-lg">Edge AI & Mobile:</strong> Optimizing quantized NLP and Vision models for on-device execution in Android ecosystems via Kotlin and Jetpack Compose.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group/item">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber text-black font-mono text-xs shrink-0 mt-1 shadow-[0_0_20px_rgba(245,158,11,0.4)]">02</span>
                    <p className="text-primary/40 text-[14px] leading-relaxed group-hover/item:text-primary transition-colors">
                      <strong className="text-amber tracking-tight block mb-1 text-lg">Intelligent Data Pipelines:</strong> Building scalable MERN architectures that natively interface with Python-driven algorithmic engines.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group/item">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald text-white font-mono text-xs shrink-0 mt-1 shadow-[0_0_20px_rgba(16,185,129,0.4)]">03</span>
                    <p className="text-primary/40 text-[14px] leading-relaxed group-hover/item:text-primary transition-colors">
                      <strong className="text-emerald tracking-tight block mb-1 text-lg">Predictive Health & Web3:</strong> Exploring intersectional spaces where predictive modeling can secure decentralized data points.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/prachi-dhiman05/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-navy/40 border-l-4 border-cobalt rounded-xl hover:bg-cobalt/10 transition-all group shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-cobalt group-hover:scale-110 transition-transform" />
                    <span className="font-heading font-bold text-white tracking-tighter text-lg">LinkedIn Network</span>
                  </div>
                  <span className="text-[10px] font-mono text-cobalt font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">Connect &rarr;</span>
                </a>
                <a href="https://github.com/PrachiDhiman5" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-navy/40 border-l-4 border-emerald rounded-xl hover:bg-emerald/10 transition-all group shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Github className="text-emerald group-hover:scale-110 transition-transform" />
                    <span className="font-heading font-bold text-white tracking-tighter text-lg">GitHub Modules</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">Inspect &rarr;</span>
                </a>
              </div>
            </div>

            {/* Contact Form (Right Col - 3 spans) */}
            <div className="lg:col-span-3">
              <div className="bg-navy/20 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cobalt via-emerald to-amber opacity-20"></div>

                <h3 className="text-3xl font-heading font-bold mb-10 text-white flex items-center gap-4 tracking-tighter">
                  <Mail className="text-cobalt" /> <span className="text-cobalt">System</span> Access Request
                </h3>

                <OpportunityForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Collaboration;
