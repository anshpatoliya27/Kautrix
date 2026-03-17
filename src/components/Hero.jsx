import React, { useEffect, useRef } from 'react';
import './Hero.css';

const chartPoints = [
  { x: 0, y: 70 }, { x: 1, y: 55 }, { x: 2, y: 65 }, { x: 3, y: 45 },
  { x: 4, y: 60 }, { x: 5, y: 40 }, { x: 6, y: 55 }, { x: 7, y: 30 },
  { x: 8, y: 45 }, { x: 9, y: 25 }, { x: 10, y: 35 }, { x: 11, y: 15 },
  { x: 12, y: 25 }, { x: 13, y: 10 }, { x: 14, y: 20 }
];

function MiniChart() {
  const W = 300, H = 90;
  const pts = chartPoints.map(p => ({
    sx: (p.x / 14) * W,
    sy: p.y
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.sx} ${p.sy}`).join(' ');
  const areaPath = `${linePath} L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mini-chart" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartFill)" />
      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1].sx} cy={pts[pts.length - 1].sy} r="4" fill="#60a5fa" />
      <circle cx={pts[pts.length - 1].sx} cy={pts[pts.length - 1].sy} r="8" fill="#60a5fa" fillOpacity="0.2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__grid-overlay" />

      <div className="hero__inner">
        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            AI-Powered Financial Intelligence
          </div>

          <h1 className="hero__headline">
            Financial
            <br />
            <span className="hero__headline-accent">Intelligence</span>
            <br />
            Powered by AI
          </h1>

          <p className="hero__sub">
            Real-time market signals, sentiment analysis, and smart investment insights — all in one unified platform.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero__btn hero__btn--secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
              </svg>
              Learn More
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">98.4%</span>
              <span className="hero__stat-label">Signal Accuracy</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">2.1ms</span>
              <span className="hero__stat-label">Avg Latency</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">14K+</span>
              <span className="hero__stat-label">Assets Tracked</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Dashboard Preview */}
        <div className="hero__right">
          <div className="hero__dashboard">
            {/* Header row */}
            <div className="dash__header">
              <div className="dash__header-left">
                <span className="dash__title">Portfolio Overview</span>
                <span className="dash__live-badge">● LIVE</span>
              </div>
              <div className="dash__tabs">
                <span className="dash__tab dash__tab--active">1D</span>
                <span className="dash__tab">1W</span>
                <span className="dash__tab">1M</span>
              </div>
            </div>

            {/* Price row */}
            <div className="dash__price-row">
              <div>
                <div className="dash__price">$142,830<span className="dash__price-cents">.42</span></div>
                <div className="dash__price-change dash__price-change--up">
                  ▲ +3.47% &nbsp;+$4,762.10 today
                </div>
              </div>
              <div className="dash__asset-pills">
                <span className="dash__pill">AAPL</span>
                <span className="dash__pill">NVDA</span>
                <span className="dash__pill">BTC</span>
              </div>
            </div>

            {/* Chart */}
            <div className="dash__chart-wrap">
              <MiniChart />
              <div className="dash__chart-labels">
                <span>9:30</span><span>11:00</span><span>1:00</span><span>3:00</span><span>4:00</span>
              </div>
            </div>

            {/* Sentiment row */}
            <div className="dash__sentiment">
              <div className="dash__sentiment-label">
                <span>Market Sentiment</span>
                <span className="dash__sentiment-score dash__sentiment-score--bull">Bullish 74%</span>
              </div>
              <div className="dash__sentiment-bar">
                <div className="dash__sentiment-fill" style={{ width: '74%' }} />
              </div>
            </div>

            {/* AI Summary */}
            <div className="dash__ai-box">
              <div className="dash__ai-header">
                <div className="dash__ai-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.2 3.6H11L8.1 6.8l1.2 3.7L6 8.3l-3.3 2.2 1.2-3.7L1 4.6h3.8L6 1z" fill="#60a5fa"/>
                  </svg>
                </div>
                <span>Kautrix AI Signal</span>
                <span className="dash__ai-time">Just now</span>
              </div>
              <p className="dash__ai-text">
                NVDA momentum strong. Fed commentary may trigger volatility — recommend partial hedge via options by EOD.
              </p>
            </div>

            {/* Bottom row */}
            <div className="dash__bottom-row">
              <div className="dash__metric">
                <span className="dash__metric-label">Sharpe Ratio</span>
                <span className="dash__metric-value dash__metric-value--green">2.41</span>
              </div>
              <div className="dash__metric">
                <span className="dash__metric-label">VaR (95%)</span>
                <span className="dash__metric-value">$2,140</span>
              </div>
              <div className="dash__metric">
                <span className="dash__metric-label">Beta</span>
                <span className="dash__metric-value">0.87</span>
              </div>
              <div className="dash__metric">
                <span className="dash__metric-label">Signals Today</span>
                <span className="dash__metric-value dash__metric-value--blue">23</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="dash__float dash__float--1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.4 4.2H13L9.3 7.9l1.4 4.3L7 9.7l-3.7 2.5 1.4-4.3L1 5.2h4.6L7 1z" fill="#fbbf24"/>
            </svg>
            AI Alert: AAPL ↑ 2.3%
          </div>
          <div className="dash__float dash__float--2">
            <span className="dash__float-dot" />
            Market Open
          </div>
        </div>
      </div>
    </section>
  );
}
