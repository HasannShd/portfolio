import { useState, useEffect } from 'react';
import './Header.css';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-bracket">&lt;</span>
          MH
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
