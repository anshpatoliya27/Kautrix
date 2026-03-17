import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <span className="navbar__logo-icon">K</span>
          <span className="navbar__logo-text">Kautrix</span>
        </div>

        <ul className="navbar__links">
          <li><a href="#features">Features</a></li>
          <li><a href="#ai">AI</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <button className="navbar__cta">
          <span>Get Started</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
