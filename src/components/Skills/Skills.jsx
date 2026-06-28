import './Skills.css';

const CATEGORIES = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'blue',
    skills: ['React', 'Vite', 'React Router', 'JavaScript ES6+', 'HTML5', 'CSS3 / SCSS', 'EJS', 'Responsive Design', 'DOM Manipulation', 'Website Development', 'SEO Optimization'],
  },
  {
    label: 'Backend & Database',
    icon: '⚙️',
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth', 'Encrypted Backup', 'Business Software', 'E-Commerce & Ordering', 'Customer & Staff Portals', 'RFQ & Lead Capture', 'Database Management', 'Server & Maintenance'],
  },
  {
    label: 'Electronics & Control',
    icon: '🔌',
    color: 'green',
    skills: ['PLC Programming', 'Ladder Logic', 'Arduino', 'Circuit Design', 'PCB Layout', 'Sensor Calibration', 'Control Systems', 'Signal Analysis', 'Instrumentation', 'Soldering'],
  },
  {
    label: 'Simulation & Analysis',
    icon: '📊',
    color: 'orange',
    skills: ['MATLAB', 'Simulink', 'PID Tuning', 'Python', 'Digital Logic Design', 'Analogue Filters', 'Frequency Analysis', 'Statistical Analysis'],
  },
  {
    label: 'Tools & Platforms',
    icon: '🛠️',
    color: 'teal',
    skills: ['VS Code', 'GitHub', 'Google Maps API', 'Microsoft Office', 'Postman', 'Vercel', 'AI Automation', 'Digital Marketing', 'Social Media Management', 'Google Business Profile Setup'],
  },
  {
    label: 'Research & Soft Skills',
    icon: '💡',
    color: 'pink',
    skills: ['Market Research', 'Competitor Analysis', 'Technical Reporting', 'Business Communication', 'Teamwork', 'Presentations', 'Problem Solving'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">A Full-Spectrum Engineer</h2>
          <p className="section-subtitle">
            From microcontrollers to microservices — I cover both ends of the stack.
          </p>
        </div>

        <div className="skills__grid">
          {CATEGORIES.map(({ label, icon, color, skills }) => (
            <div key={label} className={`skill-card skill-card--${color}`}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{icon}</span>
                <h3 className="skill-card__title">{label}</h3>
              </div>
              <div className="skill-card__tags">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
