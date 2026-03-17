import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__glow" />
      <div className="cta__inner">
        <div className="cta__tag">START FOR FREE</div>
        <h2 className="cta__heading">
          Make Smarter
          <br />
          <span className="cta__heading-accent">Market Decisions</span>
        </h2>
        <p className="cta__sub">Join thousands of investors using Kautrix to gain an unfair edge.</p>
        <button className="cta__btn">
          <span>Get Started — It's Free</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <p className="cta__footnote">No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
}
