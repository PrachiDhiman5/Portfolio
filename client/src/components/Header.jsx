import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/lab' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/collaboration' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    <Link to="/" className="flex items-center gap-3 z-50 group">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cobalt text-white font-bold text-xl shadow-lg shadow-cobalt/20 transition-transform group-hover:scale-105">
                            P
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight uppercase transition-all text-primary">
                            Prachi
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center bg-navy/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/5 shadow-2xl">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-white ${isActive ? 'text-cobalt' : 'text-primary/20'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-primary/60 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 bg-navy z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <nav className="flex flex-col gap-10 text-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-3xl font-heading font-bold uppercase tracking-[0.3em] transition-all ${isActive ? 'text-cobalt' : 'text-primary/10 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
