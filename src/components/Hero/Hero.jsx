import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">

        <div className="hero__left">
          <div className="hero__meta">
            <span className="hero__nationality">
              <img src="https://flagcdn.com/w40/bh.png" alt="Bahrain flag" className="hero__flag" width="22" height="16" />
              Bahraini
            </span>
            <span className="hero__meta-sep" />
            <span className="hero__eyebrow">
              <span className="hero__dot" /> Available for work
            </span>
          </div>

          <h1 className="hero__name">
            Muhammad<br />Hassan
          </h1>

          <p className="hero__role">
            Electronics Engineer <span>+</span> Full Stack Developer
          </p>

          <p className="hero__bio">
            I build end-to-end — from PCB layouts and PLC control logic
            to React frontends and production Node.js systems.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--filled">Projects</a>
            <a href="#contact" className="hero__btn hero__btn--outline">Contact</a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__photo-wrap">
            <img
              src="/photo.jpg"
              alt="Muhammad Hassan"
              className="hero__photo"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hero__photo-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
