import React from 'react';
import './Features.css';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16l4-4 3 3 4-5 3 3" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="18" height="18" rx="5" stroke="#2563eb" strokeWidth="1.4" opacity="0.5"/>
      </svg>
    ),
    title: 'AI News Intelligence',
    desc: 'Real-time parsing of 50,000+ sources to surface alpha before the market reacts.',
    color: '#2563eb',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4" stroke="#60a5fa" strokeWidth="1.8"/>
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.93 4.93l2.12 2.12M14.95 14.95l2.12 2.12M4.93 17.07l2.12-2.12M14.95 7.05l2.12-2.12" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    title: 'Market Sentiment Analysis',
    desc: 'Aggregate crowd psychology across social, news, and options data — in milliseconds.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.6 5.3 5.9.8-4.3 4.2 1 5.8L11 15.4l-5.2 2.7 1-5.8L2.5 8.1l5.9-.8L11 2z" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(37,99,235,0.1)"/>
      </svg>
    ),
    title: 'Smart Investment Signals',
    desc: 'Precision entry/exit signals powered by multi-modal ML models trained on decades of market data.',
    color: '#0891b2',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__label">CORE CAPABILITIES</div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ '--accent': f.color, animationDelay: `${i * 0.12}s` }}>
              <div className="feature-card__icon-wrap">
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
              <div className="feature-card__arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
