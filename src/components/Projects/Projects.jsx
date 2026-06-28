import { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    type: 'software',
    title: 'Office Management System (LTE)',
    desc: 'Production-grade full-stack office platform with JWT auth, Cloudinary media uploads, Google APIs, PDF generation, automated email notifications, push notifications, and encrypted GitHub backup workflow.',
    tech: ['React', 'GSAP', 'Lenis', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary', 'Google APIs', 'PDFKit', 'Web Push'],
    highlight: 'Production',
    icon: '🏢',
  },
  {
    type: 'software',
    title: 'Jarvis AI Assistant',
    desc: 'Cross-platform personal AI assistant powered by Gemini — real-time voice interaction, screen awareness, webcam vision, file upload analysis, system control, persistent memory, and autonomous multi-step task planning. 40% faster than previous iteration.',
    tech: ['Python', 'Gemini API', 'Voice AI', 'Computer Vision', 'Memory System', 'GSAP'],
    highlight: 'AI · Python',
    icon: '🤖',
  },
  {
    type: 'software',
    title: 'Al Burshaid Website',
    desc: 'Multi-page animated company website with service detail pages, about section, and smooth page transitions. Built with Framer Motion animations and React Router for a premium client experience.',
    tech: ['React', 'Framer Motion', 'React Router', 'Vite', 'react-helmet-async'],
    highlight: 'Client · Live',
    icon: '🌐',
  },
  {
    type: 'software',
    title: 'Viel Gebäudeservice',
    desc: 'Full-stack client website for a German building services company — production-hardened with rate limiting, security headers (Helmet), contact form via Nodemailer, and optimised build pipeline.',
    tech: ['React', 'Vite', 'Express', 'Nodemailer', 'Helmet', 'Rate Limiting', 'Lucide React'],
    highlight: 'Client · Live',
    icon: '🏗️',
  },
  {
    type: 'software',
    title: 'AI Inbox',
    desc: 'AI-powered email inbox assistant — React frontend with an Express/MongoDB backend integrated with OpenAI. Includes input validation via Joi, rate limiting, and secure API design.',
    tech: ['React', 'React Router', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Joi', 'Helmet'],
    highlight: 'AI · MERN',
    icon: '📬',
  },
  {
    type: 'software',
    title: 'PeakElite',
    desc: 'High-performance React frontend for an elite sports/fitness platform. Server-side rendering ready with a dedicated entry-server for SSR, clean component architecture, and Lucide icon system.',
    tech: ['React', 'SSR', 'Lucide React', 'Vite'],
    highlight: 'Frontend',
    icon: '⚡',
  },
  {
    type: 'software',
    title: 'Collab Agency Site',
    desc: 'Premium animated agency/collaboration website with buttery-smooth GSAP scroll animations, Lenis smooth scroll, Sass styling, React Router, and a contact pipeline via Nodemailer.',
    tech: ['React', 'GSAP', 'Lenis', 'Sass', 'React Router', 'Nodemailer'],
    highlight: 'Animated',
    icon: '✨',
  },
  {
    type: 'software',
    title: 'Engineering Toolbox',
    desc: 'Full-stack engineering utilities platform with JWT auth, user profiles, posts with likes/saves, real-time private chat, and an extensible formula calculator via REST APIs.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    highlight: 'MERN Stack',
    icon: '🧰',
  },
  {
    type: 'software',
    title: 'Evently',
    desc: 'Full-stack event management platform built on the MERN stack with Google Maps API integration for interactive location features and seamless event discovery.',
    tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Express'],
    highlight: 'MERN + Maps',
    icon: '📅',
  },
  {
    type: 'software',
    title: 'Leading Trading ERP',
    desc: 'Complete business software system — internal admin & staff panels, e-commerce integration, shopping cart, online payment portal, encrypted backup, and automated invoicing.',
    tech: ['Full Stack', 'E-Commerce', 'Payment Gateway', 'Encryption', 'Admin Panel'],
    highlight: 'Production',
    icon: '🛒',
  },
  {
    type: 'software',
    title: 'Recipes List',
    desc: 'Recipe management web app enabling users to view, add, and organise recipes with a clean, intuitive interface.',
    tech: ['JavaScript', 'EJS', 'CSS', 'Node.js'],
    highlight: 'Full Stack',
    icon: '🍳',
  },
  {
    type: 'software',
    title: 'Hangman Game',
    desc: 'Interactive browser-based word guessing game focusing on advanced DOM manipulation, game state management, and smooth UI feedback.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
    highlight: 'Vanilla JS',
    icon: '🎮',
  },
  {
    type: 'electronics',
    title: 'PLC Industrial Controller',
    desc: 'Programmed ladder logic for an industrial control sequence. Simulated, tested, and validated I/O behaviour across operating conditions — directly applicable to refinery environments.',
    tech: ['PLC', 'Ladder Logic', 'Process Control', 'I/O Simulation'],
    highlight: 'Industrial',
    icon: '🏭',
  },
  {
    type: 'electronics',
    title: 'Smart Home Automation',
    desc: 'Arduino-based smart home system integrating multiple sensors and actuators. Wrote and debugged the full control logic for reliable real-time operation.',
    tech: ['Arduino', 'C++', 'Sensors', 'Actuators', 'Embedded'],
    highlight: 'IoT',
    icon: '🏠',
  },
  {
    type: 'electronics',
    title: 'DC Motor PID Controller',
    desc: 'Modelled a closed-loop DC motor speed control system in MATLAB/Simulink with PID tuning and stability analysis — directly applicable to industrial process-control loops.',
    tech: ['MATLAB', 'Simulink', 'PID', 'Control Systems'],
    highlight: 'Simulation',
    icon: '⚙️',
  },
  {
    type: 'electronics',
    title: 'Smart Health Monitor',
    desc: 'Calibrated and accuracy-tested sensors against industry reference medical devices. Applied statistical analysis and produced formal technical documentation.',
    tech: ['Sensors', 'Calibration', 'Data Analysis', 'Technical Reporting'],
    highlight: 'Research',
    icon: '❤️',
  },
  {
    type: 'electronics',
    title: 'Traffic Light Controller',
    desc: 'Dual-mode (automatic/manual) traffic light controller in digital logic. Validated via simulation and produced a full PCB layout for physical implementation.',
    tech: ['Digital Logic', 'PCB Design', 'Simulation', 'Circuit Design'],
    highlight: 'PCB',
    icon: '🚦',
  },
  {
    type: 'electronics',
    title: 'Cascading Notch Filters',
    desc: 'Designed and tested analogue filter circuits for signal noise reduction. Characterised frequency response against design specifications for precision signal processing.',
    tech: ['Analogue Circuits', 'Filter Design', 'Frequency Analysis', 'Signal Processing'],
    highlight: 'Analogue',
    icon: '📡',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = PROJECTS.filter(p => filter === 'all' || p.type === filter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-subtitle">
            Software apps, embedded systems, and everything in between.
          </p>
        </div>

        <div className="projects__filters">
          {['all', 'software', 'electronics'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : f === 'software' ? '💻 Software' : '🔌 Electronics'}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map(({ title, desc, tech, highlight, icon }) => (
            <div key={title} className="project-card">
              <div className="project-card__top">
                <span className="project-card__icon">{icon}</span>
                <span className="project-card__badge">{highlight}</span>
              </div>
              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__desc">{desc}</p>
              <div className="project-card__tech">
                {tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
