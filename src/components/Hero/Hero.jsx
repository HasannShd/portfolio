import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">

        <div className="hero__meta">
          <span className="hero__nationality">
            <img
              src="https://flagcdn.com/w40/bh.png"
              alt="Bahrain flag"
              className="hero__flag"
              width="22"
              height="16"
            />
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
    </section>
  );
}
