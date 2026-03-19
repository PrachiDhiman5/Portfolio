import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-navy/20 backdrop-blur-sm pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                        <span className="font-heading font-bold text-xl tracking-tight uppercase text-white">Prachi Dhiman</span>
                        <p className="text-primary/60 text-sm max-w-xs lowercase font-mono opacity-60">Data Science & AI/ML | Android | Full Stack Engineering</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/PrachiDhiman5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface/50 flex items-center justify-center text-primary/40 hover:text-white hover:bg-cobalt transition-all border border-white/5 shadow-sm">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/prachi-dhiman05/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface/50 flex items-center justify-center text-primary/40 hover:text-white hover:bg-cobalt transition-all border border-white/5 shadow-sm">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:prachidhiman362@gmail.com" className="w-10 h-10 rounded-full bg-surface/50 flex items-center justify-center text-primary/40 hover:text-white hover:bg-cobalt transition-all border border-white/5 shadow-sm">
                            <Mail size={20} />
                        </a>
                    </div>

                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary/20 font-mono">
                    <p>&copy; {currentYear} Prachi Dhiman. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <Heart size={14} className="text-emerald" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
