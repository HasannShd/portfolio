import { Zap, Laptop, Trophy, Rocket } from 'lucide-react';
import './About.css';

const HIGHLIGHTS = [
  { Icon: Zap,    label: 'Electronics Engineering student at Bahrain Polytechnic University (2023–2027)' },
  { Icon: Laptop, label: 'Full Stack bootcamp graduate, General Assembly (2025)' },
  { Icon: Trophy, label: 'Won Tamkeen Tech Startup pitch competition at Wyndham Grand Hotel' },
  { Icon: Rocket, label: 'Built & deployed complete ERP system as Junior Dev at Leading Trading Est' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Where Hardware<br />Meets Software</h2>
          <p className="about__para">
            I&apos;m a 21-year-old Bahraini engineer who operates at the intersection of two worlds.
            By day I study electronics — designing circuits, programming PLCs, and modelling control
            systems in MATLAB/Simulink. By night I build full-stack web apps with React, Node.js, and MongoDB.
          </p>
          <p className="about__para">
            This dual expertise lets me approach problems that purely software or purely hardware
            engineers miss. Whether it&apos;s an IoT dashboard, an industrial automation system,
            or a fintech platform — I see the full stack from sensor to screen.
          </p>

          <div className="about__highlights">
            {HIGHLIGHTS.map(({ Icon, label }) => (
              <div key={label} className="about__highlight">
                <span className="about__highlight-icon"><Icon size={15} strokeWidth={2} /></span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__card">
          <div className="about__card-header">
            <span className="section-label" style={{ marginBottom: 0 }}>Quick Info</span>
          </div>
          <div className="about__info-grid">
            {[
              ['Location', 'Bahrain', null],
              ['Email', 'hasnshahidd@gmail.com', 'mailto:hasnshahidd@gmail.com'],
              ['Phone', '+973 3329 0109', null],
              ['Status', 'Open to roles', null],
              ['Education', 'BEng Electronics (2027)', null],
              ['Languages', 'English · Urdu · Arabic', null],
            ].map(([k, v, href]) => (
              <div key={k} className="about__info-row">
                <span className="about__info-key">{k}</span>
                <span className="about__info-val">
                  {href ? <a href={href}>{v}</a> : v}
                </span>
              </div>
            ))}
          </div>
          <div className="about__socials">
            <a href="https://www.linkedin.com/in/muhammad-hassan-3b5b5a349/" target="_blank" rel="noreferrer" className="about__social-btn">LinkedIn</a>
            <a href="mailto:hasnshahidd@gmail.com" className="about__social-btn">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
