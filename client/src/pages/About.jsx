import React from 'react';
import './Pages.css';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="page-container about-page">
            <section className="about-hero">
                <div className="container">
                    <h1>About <span className="highlight">Me</span></h1>
                    <p className="subtitle">Computer Science Student | Aspiring Full-Stack Developer | Problem Solver</p>
                </div>
            </section>

            <section className="info-grid container">
                <div className="info-card glass">
                    <div className="card-header">
                        <GraduationCap className="icon" />
                        <h2>Education</h2>
                    </div>
                    <div className="card-content">
                        <div className="timeline-item">
                            <h3>B.Tech in CSE</h3>
                            <p>Lovely Professional University | CGPA: 8.10</p>
                            <span className="date">2023 - Present</span>
                        </div>
                        <div className="timeline-item">
                            <h3>Intermediate</h3>
                            <p>Bhartiya Public School | 84%</p>
                            <span className="date">2021 - 2023</span>
                        </div>
                    </div>
                </div>

                <div className="info-card glass">
                    <div className="card-header">
                        <Briefcase className="icon" />
                        <h2>Skills</h2>
                    </div>
                    <div className="card-content">
                        <div className="skill-group">
                            <h4>Languages</h4>
                            <p>JavaScript, C++, Java, Python, C, Kotlin</p>
                        </div>
                        <div className="skill-group">
                            <h4>Development</h4>
                            <p>React.js, Node.js, Express.js, MongoDB, REST APIs</p>
                        </div>
                        <div className="skill-group">
                            <h4>Tools</h4>
                            <p>Git, GitHub, VS Code, Postman, PowerBI, Excel</p>
                        </div>
                    </div>
                </div>

                <div className="info-card glass">
                    <div className="card-header">
                        <Award className="icon" />
                        <h2>Certifications</h2>
                    </div>
                    <div className="card-content">
                        <ul>
                            <li>Build Gen AI Apps & Solutions with No-Code Tools</li>
                            <li>ChatGPT-4 Prompt Engineering</li>
                            <li>Master Gen AI & Gen AI Tools</li>
                            <li>Responsive Web Design (FCC)</li>
                        </ul>
                    </div>
                </div>

                <div className="info-card glass">
                    <div className="card-header">
                        <Heart className="icon" />
                        <h2>Volunteering</h2>
                    </div>
                    <div className="card-content">
                        <h3>Drops of Change (NGO)</h3>
                        <p>Providing education to underprivileged kids and contributing to community assessment.</p>
                        <span className="date">2024 - 2025</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
