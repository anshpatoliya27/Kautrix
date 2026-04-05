import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Fingerprint, Activity, Gauge, Cpu } from 'lucide-react';
import './AIInsights.css';

const insightsData = [
    {
        id: 1,
        symbol: "TATASTEEL",
        action: "STRONG BUY",
        type: "profit", // css class map
        confidence: 94,
        reasoning: "Quantitative models detect extremely tight consolidation with dropping implied volatility. Options flow delta turned highly positive in the last 48 hours. The AI correlates this setup with a 92% historical probability of an upside breakout within 3 trading sessions.",
        metrics: { target: "₹155", stoploss: "₹138", rrr: "1:3.2" },
        factors: [
            { name: "Options Delta", score: 85, color: "var(--emerald-500)" },
            { name: "Volume Trend", score: 90, color: "var(--emerald-500)" },
            { name: "Sector Momentum", score: 70, color: "var(--emerald-400)" }
        ]
    },
    {
        id: 2,
        symbol: "PAYTM",
        action: "SELL / SHORT",
        type: "loss",
        confidence: 88,
        reasoning: "Deep learning models processing regulatory textual filings have identified escalating structural risks. Price action is breaking below major VWAP levels with ascending volume. The model suggests liquidating current holdings or entering short positions.",
        metrics: { target: "₹385", stoploss: "₹455", rrr: "1:2.5" },
        factors: [
            { name: "Regulatory Risk", score: 95, color: "var(--rose-600)" },
            { name: "Price Action", score: 80, color: "var(--rose-500)" },
            { name: "Fund Selling", score: 75, color: "var(--rose-400)" }
        ]
    }
];

const AIInsights = () => {
    return (
        <div className="page-content-inner">
            <div className="section-header">
                <div>
                    <h1 className="section-title"><Fingerprint className="text-ai" size={28} /> Predictive Intelligence</h1>
                    <p className="section-subtitle">Deep learning models utilizing multivariate datasets to forecast price vectors.</p>
                </div>
            </div>

            <div className="insights-macro-grid">
                <div className="insights-left-col">
                    {insightsData.map((node, i) => (
                        <motion.div
                            key={node.id}
                            className={`insight-node node-${node.type}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="node-glow"></div>

                            <div className="in-header">
                                <div className="stock-identity">
                                    <div className="stock-avatar">
                                        {node.symbol.substring(0, 2)}
                                    </div>
                                    <div>
                                        <div className="stock-ticker">{node.symbol}</div>
                                        <div className={`badge badge-${node.type}`} style={{ padding: '6px 12px' }}>
                                            <Activity size={14} /> {node.action}
                                        </div>
                                    </div>
                                </div>

                                <div className="conviction-meter">
                                    <span className="conviction-label">Model Confidence</span>
                                    <div className={`conviction-score text-${node.type}`}>
                                        {node.confidence}<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="in-body">
                                <div className="in-reasoning-title"><Brain size={16} className="text-ai" /> Synthesized Reasoning</div>
                                <div className="in-reasoning-text">{node.reasoning}</div>

                                <div className="in-metrics-grid">
                                    <div className="metric-box">
                                        <span className="metric-label">Calculated Target</span>
                                        <span className="metric-value text-profit">{node.metrics.target}</span>
                                    </div>
                                    <div className="metric-box">
                                        <span className="metric-label">Dynamic Stop Loss</span>
                                        <span className="metric-value text-loss">{node.metrics.stoploss}</span>
                                    </div>
                                    <div className="metric-box">
                                        <span className="metric-label">Risk/Reward</span>
                                        <span className="metric-value text-primary">{node.metrics.rrr}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="insights-right-col">
                    <motion.div
                        className="glass-panel factor-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="section-title" style={{ fontSize: '1rem', marginBottom: '8px' }}>
                            <Gauge size={18} className="text-ai" /> Global Model Status
                        </div>
                        <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                            Multi-factor weighting currently applied to Kautrix neural networks.
                        </p>

                        <div className="factor-list">
                            <div className="factor-item">
                                <span className="factor-name">Macro Economics</span>
                                <div className="factor-bar-bg">
                                    <div className="factor-bar-fill" style={{ width: '40%', background: 'var(--blue-500)' }}></div>
                                </div>
                            </div>
                            <div className="factor-item">
                                <span className="factor-name">Technical Price Action</span>
                                <div className="factor-bar-bg">
                                    <div className="factor-bar-fill" style={{ width: '85%', background: 'var(--blue-500)' }}></div>
                                </div>
                            </div>
                            <div className="factor-item">
                                <span className="factor-name">News Sentiment NLP</span>
                                <div className="factor-bar-bg">
                                    <div className="factor-bar-fill" style={{ width: '92%', background: 'var(--purple-500)' }}></div>
                                </div>
                            </div>
                            <div className="factor-item">
                                <span className="factor-name">On-chain/Dark Pool</span>
                                <div className="factor-bar-bg">
                                    <div className="factor-bar-fill" style={{ width: '60%', background: 'var(--blue-500)' }}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <Cpu size={16} className="text-premium" />
                                <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Compute Engine</strong>
                            </div>
                            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                Status: ONLINE<br />
                                Latency: 12ms<br />
                                Processed: 142.5M nodes/hr
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AIInsights;
