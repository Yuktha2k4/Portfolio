//App.js
import React, { useState, useEffect } from 'react';
import './App.css';

import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: 'Languages', items: ['Python', 'HTML', 'CSS', 'JavaScript', 'C', 'IoT','prompt Engineering'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Structured Query Language', 'Node.js'] },
    { category: 'Tools & Platforms', items: ['Git', 'XAMPP', 'MySQL', 'VS Code'] }
  ];

  const projects = [
    {
      title: 'Bank management system',
      description: ' Designed a bank management system leveraging singly linked lists for efficient data operations.Integrated dynamic features like account handling, balance updates, and transaction tracking.Applied real-time logic to strengthen mastery of pointers and memory management.',
      tech: ['C programming', 'Data Structures'],
      features: ['Account Creation', 'Balance Management', 'Transaction History']
    },
    {
      title: 'Smart Rain-Sensing System ',
      description: 'C • Developed a smart rain-sensing system that auto-retracts clothes using Arduino and DC motor.Engineered a real-time weather response mechanism to prevent cloth damage.Optimized user effort and energy use through intelligent automation',
      tech: ['IOT', 'Arduino', 'DC Motor'],
      features: ['Automatic Cloth Retraction', 'Weather Response', 'Energy Efficiency']
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Yuktha P Achar</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? 'active' : ''}>
              <User size={18} /> Home
            </button>
            <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>
              <User size={18} /> About
            </button>
            <button onClick={() => scrollTo('experience')} className={activeSection === 'experience' ? 'active' : ''}>
              <Briefcase size={18} /> Experience
            </button>
            <button onClick={() => scrollTo('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              <FolderOpen size={18} /> Projects
            </button>
            <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              <Mail size={18} /> Contact
            </button>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Yuktha P Achar</h1>
            <h2>Web Developer | Designer | Creative Thinker</h2>
            <p>
              I'm a Computer Science student passionate about designing and developing modern web
              applications. Always exploring new tools, and turning ideas into interactive experiences.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              {/* <img src="/profile-placeholder.jpg" alt="Sohan H G" className="profile-image" /> */}
            </div>
          </div>
        </div>
        <button onClick={() => scrollTo('about')} className="scroll-indicator" aria-label="Scroll to About section">
          <ChevronDown size={24} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p> I am an enthusiastic and quick learner with a strong foundation in technical skills. Passionate about
 problem-solving and innovation in technology, I am skilled in Python and web development, with a keen interest
 in networking and performance optimization. I am dedicated to continuous learning and eager to contribute to
 impactful projects while growing as a professional in a dynamic environment.</p>

              <div className="education">
                <h3><GraduationCap size={20} /> Education</h3>
                <div className="education-item">
                  <h4>B.E. Computer Science & Engineering</h4>
                  <p>Malnad College of Engineering (2022 - 2026)</p>
                  <span>Focused on Computer Science Engineering</span>
                  <h4>Masters PU College</h4>
                  <p>Pre-University Course (2020 - 2022)</p>
                  <span>Specialized in Science with a focus on Biology</span>
                </div>
              </div>

              <div className="languages">
                <h3>Languages</h3>
                <div className="language-list">
                  <div className="language-item"><strong>English:</strong> Fluent</div>
                  <div className="language-item"><strong>Kannada:</strong> Native</div>
                  {/* <div className="language-item"><strong>Hindi:</strong> Conversational</div> */}
                </div>
              </div>
              <div classname="certifications">
                <h3>Certifications</h3>
                <div className="certification-list">
                  <div className="certification-item"><strong>DSA in C</strong> Completed Data Structures and Algorithms in C from Great Learning, strengthening problem-solving and efficient coding techniques.</div>
                  <div className="certification-item"><strong>Soft Skill Development</strong> Certified in Soft Skills Development from NPTEL, with a focus on communication, leadership, and workplace professionalism.</div>
                  <div className="certification-item"><strong> Social Networking</strong> Completed NPTEL course in Social Networking, gaining insights into digital identity, online collaboration, and ethical engagement.</div>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3><Code size={20} /> Technical Skills</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2><Briefcase size={24} /> Project Experience</h2>
          <p>• Successfully completed 1 month of professional training in HTML CSS at Loginware Softtec Pvt. Ltd.<br></br>• Developed responsive and user-friendly web pages using modern front-end techniques.<br></br>• Strengthened web design skills with real-world projects and industry-standard practices.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2><FolderOpen size={24} /> Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <ExternalLink size={20} />
                </div>
                <p>{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>Open to internships, collaborations, and freelance opportunities. Let’s connect and create something amazing together!</p>
            </div>
            <div className="contact-info">
              <div className="contact-item"><Mail size={20} /><a href="mailto:acharyukthap@gmail.com">acharyukthap@gmail.com</a></div>
              <div className="contact-item"><Phone size={20} /><a href="tel:+919538955388">9538955388</a></div>
              <div className="contact-item"><MapPin size={20} /><span>Hassan, Karnataka</span></div>
              <div className="contact-item"><Linkedin size={20} /><a href="https://linkedin.com/in/yukthapachar" target="_blank" rel="noopener noreferrer">linkedin.com/in/yukthapachar</a></div>
              <div className="contact-item"><Github size={20} /><a href="https://github.com/yukthapachar" target="_blank" rel="noopener noreferrer">github.com/yukthapachar</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sohan H G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;