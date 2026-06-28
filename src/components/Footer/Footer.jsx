import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>MH<span className="footer__logo-bracket">/&gt;</span>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} Muhammad Hassan · Bahrain
        </p>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/muhammad-hassan-3b5b5a349/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hasnshahidd@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
