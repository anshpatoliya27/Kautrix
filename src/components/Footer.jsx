import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__logo">
            <span className="footer__logo-icon">K</span>
            <span className="footer__logo-text">Kautrix</span>
          </div>
          <p className="footer__tagline">Financial intelligence, redefined.</p>
        </div>

        <div className="footer__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__right">
          <span className="footer__copy">© 2025 Kautrix Inc.</span>
        </div>
      </div>
    </footer>
  );
}
