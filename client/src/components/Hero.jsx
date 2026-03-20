import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="welcome-text">WELCOME TO MY WORLD —</span>
                    <h1>Hi, I'm <span className="highlight">Prachi Dhiman 👋</span></h1>
                    <h2 className="hero-subtitle">Software Developer | MERN Stack | Data-Driven & AI Enthusiast</h2>
                    <p>
                        B.Tech CSE student passionate about building scalable web applications,
                        intelligent systems, and data-driven solutions. Experienced in the MERN stack,
                        Machine Learning, and Android development.
                    </p>
                    <div className="hero-btns">
                        <button className="btn-primary" onClick={() => window.location.hash = '#contact'}>Hire Me Now</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="circle-bg"></div>
                    <div className="image-wrapper">
                        <img src="/profile.png" alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
