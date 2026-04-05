import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    ArrowUpRight, ArrowDownRight, Zap,
    BarChart2, Server, Eye
} from 'lucide-react';
import {
    ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

// Rich Mock Data
const generateMarketData = () => {
    const data = [];
    let price = 22100;
    for (let i = 0; i < 40; i++) {
        price = price + (Math.random() * 100 - 45);
        data.push({
            time: `1${Math.floor(i / 4)}:${(i % 4) * 15 || '00'}`,
            NIFTY: Number(price.toFixed(2)),
            volume: Math.random() * 10000 + 5000,
        });
    }
    return data;
};

const marketData = generateMarketData();

const generateOrderBook = (type, basePrice) => {
    return Array(5).fill(0).map((_, i) => ({
        price: (type === 'ask' ? basePrice + (i + 1) * 0.5 : basePrice - (i + 1) * 0.5).toFixed(2),
        size: Math.floor(Math.random() * 5000) + 100,
        total: Math.floor(Math.random() * 100) + 10
    }));
};

const asks = generateOrderBook('ask', 22280.50).reverse();
const bids = generateOrderBook('bid', 22280.00);

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div
            className="cmd-center-grid"
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
        >
            {/* HUD Hero */}
            <motion.div className="portfolio-hero" variants={itemVariants}>
                <div className="portfolio-value-wrapper">
                    <span className="portfolio-label"><Eye size={12} style={{ display: 'inline', marginRight: 4 }} /> Global Market Cap (NIFTY)</span>
                    <div className="portfolio-value">
                        22,280<span style={{ color: 'var(--text-tertiary)', fontSize: '2.5rem' }}>.50</span>
                        <div className="portfolio-change-badge badge-profit">
                            <TrendingUp size={20} /> +180.20 (0.82%)
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn btn-surface"><BarChart2 size={16} /> Market Depth</button>
                    <button className="btn btn-primary"><Zap size={16} /> Auto-Trade AI</button>
                </div>
            </motion.div>

            {/* KPI Row */}
            <motion.div className="kpi-row" variants={itemVariants}>
                {[
                    { title: "NIFTY 50", val: "22,280.50", change: "+0.82%", up: true },
                    { title: "SENSEX", val: "73,350.25", change: "+0.75%", up: true },
                    { title: "BANK NIFTY", val: "46,500.15", change: "-0.26%", up: false },
                    { title: "INDIA VIX", val: "15.24", change: "-2.87%", up: false }
                ].map((kpi, i) => (
                    <div key={i} className="kpi-card glass-panel">
                        <div className="kpi-header">
                            <span className="kpi-title">{kpi.title}</span>
                            {kpi.up ? <ArrowUpRight size={18} className="text-profit" /> : <ArrowDownRight size={18} className="text-loss" />}
                        </div>
                        <div className="kpi-data">
                            <span className="kpi-value">{kpi.val}</span>
                        </div>
                        <div className={`badge ${kpi.up ? 'badge-profit' : 'badge-loss'}`} style={{ width: 'fit-content' }}>
                            {kpi.change}
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Main Terminal Area */}
            <motion.div className="terminal-main-col" style={{ gridColumn: 'span 8' }} variants={itemVariants}>
                <div className="glass-panel mega-chart-container">
                    <div className="chart-ctrl-bar">
                        <div className="section-title" style={{ fontSize: '1.25rem' }}>
                            NIFTY Intraday Analysis
                        </div>
                        <div className="timeframe-pills">
                            {['1m', '5m', '15m', '1H', '1D'].map(tf => (
                                <button key={tf} className={`tf-pill ${tf === '5m' ? 'active' : ''}`}>{tf}</button>
                            ))}
                        </div>
                    </div>
                    <div className="chart-legend">
                        <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--emerald-500)' }}></div> Price</div>
                        <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--blue-500)' }}></div> Volume</div>
                    </div>

                    <div style={{ flex: 1, marginTop: '20px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={marketData}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--emerald-500)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--emerald-500)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 11 }} />
                                <YAxis yAxisId="left" domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 11 }} />
                                <YAxis yAxisId="right" orientation="right" domain={[0, 20000]} axisLine={false} tickLine={false} tick={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface-elevated)', borderColor: 'var(--border-strong)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                                    itemStyle={{ color: '#fff', fontWeight: 600 }}
                                    labelStyle={{ color: 'var(--text-secondary)' }}
                                />
                                <Bar yAxisId="right" dataKey="volume" fill="var(--border-strong)" radius={[4, 4, 0, 0]} />
                                <Area yAxisId="left" type="monotone" dataKey="NIFTY" stroke="var(--emerald-500)" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </motion.div>

            {/* Side Col: Order Book & AI */}
            <motion.div className="terminal-side-col" style={{ gridColumn: 'span 4' }} variants={itemVariants}>

                {/* Order Book */}
                <div className="glass-panel order-book">
                    <div className="section-title" style={{ fontSize: '1rem', marginBottom: '16px' }}>
                        <Server size={16} className="text-ai" /> Live Order Book
                    </div>
                    <div className="ob-header">
                        <div>Price</div>
                        <div>Size</div>
                        <div>Total</div>
                    </div>
                    <div className="ob-rows">
                        {asks.map((ask, i) => (
                            <div key={`ask-${i}`} className="ob-row text-loss">
                                <div className="ob-bg-fill" style={{ background: 'var(--rose-500)', width: `${(ask.total / 150) * 100}%` }}></div>
                                <div className="ob-content">
                                    <div>{ask.price}</div>
                                    <div>{ask.size}</div>
                                    <div>{ask.total}M</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ob-spread">
                        Spread: <strong className="text-primary">0.50</strong>
                    </div>

                    <div className="ob-rows">
                        {bids.map((bid, i) => (
                            <div key={`bid-${i}`} className="ob-row text-profit">
                                <div className="ob-bg-fill" style={{ background: 'var(--emerald-500)', width: `${(bid.total / 150) * 100}%` }}></div>
                                <div className="ob-content">
                                    <div>{bid.price}</div>
                                    <div>{bid.size}</div>
                                    <div>{bid.total}M</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Copilot mini alert box */}
                <div className="glass-panel ai-copilot-widget">
                    <div className="ai-cp-header">
                        <div className="ai-pulse-dot animated-pulse"></div>
                        <strong className="text-ai">Kautrix Copilot Active</strong>
                    </div>
                    <div className="ai-cp-list">
                        <div className="ai-insight-snip">
                            <div className="ai-snip-icon"><TrendingUp size={16} className="text-profit" /></div>
                            <div className="ai-snip-content">
                                <h4>Volume Breakout Detected</h4>
                                <p>NIFTY showing unusual buying pressure at 22,250 level.</p>
                            </div>
                        </div>
                        <div className="ai-insight-snip">
                            <div className="ai-snip-icon"><Zap size={16} className="text-ai" /></div>
                            <div className="ai-snip-content">
                                <h4>Auto-Trade Executed</h4>
                                <p>Bought 200 units of RELIANCE based on news sentiment trigger.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
};

export default Dashboard;
