import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './shared.css';

const Watchlist = () => {
    const watchlistItems = [
        { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: '2987.45', change: '+1.2%', up: true, volume: '4.2M' },
        { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: '1432.10', change: '-0.5%', up: false, volume: '12.8M' },
        { symbol: 'INFY', name: 'Infosys Ltd.', price: '1678.90', change: '+2.4%', up: true, volume: '3.1M' },
        { symbol: 'ZOMATO', name: 'Zomato Ltd.', price: '165.20', change: '+4.8%', up: true, volume: '45.6M' },
        { symbol: 'ITC', name: 'ITC Ltd.', price: '410.50', change: '-1.2%', up: false, volume: '8.4M' }
    ];

    return (
        <div className="page-content-inner">
            <div className="section-header">
                <div>
                    <h1 className="section-title"><Star className="text-ai" size={24} /> Core Watchlist</h1>
                    <p className="section-subtitle">Real-time tracking of assigned equity nodes.</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={16} /> Deploy Tracker
                </button>
            </div>

            <motion.div
                className="glass-panel"
                style={{ padding: '0', overflow: 'hidden', marginTop: '24px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)' }}>
                            <th style={{ padding: '20px 32px', fontWeight: '600', color: 'var(--text-tertiary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Asset Identity</th>
                            <th style={{ padding: '20px 32px', fontWeight: '600', color: 'var(--text-tertiary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price (INR)</th>
                            <th style={{ padding: '20px 32px', fontWeight: '600', color: 'var(--text-tertiary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vector 24H</th>
                            <th style={{ padding: '20px 32px', fontWeight: '600', color: 'var(--text-tertiary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volume</th>
                            <th style={{ padding: '20px 32px', fontWeight: '600', color: 'var(--text-tertiary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Algorithmic Bias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlistItems.map((item, i) => (
                            <motion.tr
                                key={i}
                                style={{ borderBottom: '1px solid var(--border-dim)', background: 'transparent', transition: 'background 0.2s' }}
                                whileHover={{ backgroundColor: 'var(--bg-surface)' }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <td style={{ padding: '20px 32px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: '700', fontSize: '1.125rem', color: 'var(--text-primary)' }}>{item.symbol}</span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 32px', fontFamily: 'JetBrains Mono', fontSize: '1.125rem' }}>{item.price}</td>
                                <td style={{ padding: '20px 32px', color: item.up ? 'var(--accent-profit)' : 'var(--accent-loss)', fontWeight: '600' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {item.up ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                                        <span className="mono">{item.change}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 32px', fontFamily: 'JetBrains Mono', color: 'var(--text-secondary)' }}>{item.volume}</td>
                                <td style={{ padding: '20px 32px' }}>
                                    <span className={`badge ${item.up ? 'badge-profit' : 'badge-loss'}`}>
                                        <Activity size={14} /> {item.up ? 'BULLISH' : 'BEARISH'}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
};

export default Watchlist;
