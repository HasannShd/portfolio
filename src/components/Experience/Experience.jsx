import { Trophy } from 'lucide-react';
import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Junior Software Developer',
    org: 'Leading Trading Est',
    period: 'Feb 2026 – Present',
    type: 'work',
    points: [
      'Built a full-fledge ERP system from scratch — internal admin & staff panels',
      'E-commerce integration with product catalogue, add-to-cart & online payment portal',
      'Encrypted backup system and automated invoicing pipeline',
      'Digital marketing strategy & brand endorsement',
    ],
  },
  {
    role: 'Software Engineering Bootcamp Fellow',
    org: 'General Assembly, Bahrain',
    period: 'Jun 2025 – Sep 2025',
    type: 'education',
    points: [
      'Intensive full-stack programme: JavaScript, React, Node.js, MongoDB, Python',
      'Built 4 full projects including MERN apps with JWT auth and third-party APIs',
      'Collaborated in agile teams with daily standups and code reviews',
    ],
  },
  {
    role: 'Events Member',
    org: 'Beyon Al Dana Amphitheatre, Zallaq',
    period: 'Feb 2025 – Mar 2025',
    type: 'work',
    points: [
      'Assisted in event planning, logistics, and cross-department coordination',
      'Prepared reports and presentations for management',
      'Supported setup and execution of internal and external events',
    ],
  },
  {
    role: 'Salesperson',
    org: 'Leading Trading Est, Sitra',
    period: 'Jul 2023 – Sep 2023',
    type: 'work',
    points: [
      'Secured hotel clients in the hospitality sector across Bahrain',
      'Conducted market research and competitor analysis',
      'Built and maintained relationships with key decision-makers',
    ],
  },
  {
    role: 'Office Coordinator',
    org: 'Leading Trading Est, Sitra',
    period: 'May 2023 – Jul 2023',
    type: 'work',
    points: [
      'Managed daily orders, inventory records, and logistics',
      'Cross-department coordination and task delegation',
      'Ensured smooth daily office operations',
    ],
  },
  {
    role: 'BEng Electronics Engineering',
    org: 'Bahrain Polytechnic University',
    period: 'Sep 2023 – May 2027',
    type: 'education',
    points: [
      'Core modules: PLC programming, control systems, signal analysis, telecommunications',
      'Circuit prototyping, PCB layout, MATLAB/Simulink modelling',
      'Hands-on lab work: sensor calibration, testing & troubleshooting',
    ],
  },
  {
    role: 'A Levels — Electronics, Embedded Systems & Digital Devices',
    org: 'Al Noor International School, Bahrain',
    period: 'Graduated 2023',
    type: 'education',
    points: [
      'Electronics — circuit theory, analogue & digital electronics, component analysis',
      'Embedded Systems — microcontroller programming, I/O interfacing, real-time control',
      'Digital Devices — logic gates, Boolean algebra, flip-flops, sequential & combinational circuits',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-label">Experience & Education</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">From the classroom to production systems — a track record of building real things.</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map(({ role, org, period, type, points }) => (
            <div key={`${role}-${org}`} className="timeline-item">
              <div className="timeline-item__dot" />
              <div className="timeline-item__meta">
                <span className={`timeline-item__badge timeline-item__badge--${type}`}>
                  {type === 'work' ? 'Work' : 'Education'}
                </span>
                <span className="timeline-item__period">{period}</span>
              </div>
              <h3 className="timeline-item__role">{role}</h3>
              <p className="timeline-item__org">{org}</p>
              <ul className="timeline-item__points">
                {points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="volunteering__card">
          <span className="volunteering__icon"><Trophy size={22} strokeWidth={1.8} /></span>
          <div>
            <h3 className="volunteering__title">Tamkeen Tech Startup Competition</h3>
            <p className="volunteering__detail">Wyndham Grand Hotel, Bahrain — <strong>Won 1st Place</strong></p>
            <p className="volunteering__desc">Developed and pitched a tech startup concept under time pressure as part of a team. Won the startup pitch competition out of multiple competing teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
