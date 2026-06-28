import { Mail, Phone } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="contact__para">
          Whether you need a full-stack web app, an embedded system, automation
          solutions, or just want to talk engineering — my inbox is always open.
          Based in Bahrain, open to remote and GCC roles.
        </p>

        <div className="contact__links">
          <a href="mailto:hasnshahidd@gmail.com" className="contact__link">
            <span className="contact__link-icon"><Mail size={17} strokeWidth={1.8} /></span>
            <div>
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">hasnshahidd@gmail.com</span>
            </div>
          </a>
          <a href="tel:+97333290109" className="contact__link">
            <span className="contact__link-icon"><Phone size={17} strokeWidth={1.8} /></span>
            <div>
              <span className="contact__link-label">Phone</span>
              <span className="contact__link-value">+973 3329 0109</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hassan-3b5b5a349/" target="_blank" rel="noreferrer" className="contact__link">
            <span className="contact__link-icon"><LinkedInIcon /></span>
            <div>
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">muhammad-hassan-3b5b5a349</span>
            </div>
          </a>
        </div>

        <a href="mailto:hasnshahidd@gmail.com" className="contact__cta">
          Send a message →
        </a>
      </div>
    </section>
  );
}
