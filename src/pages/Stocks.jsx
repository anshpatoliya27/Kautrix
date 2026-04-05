import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, LineChart, Zap, Shield } from 'lucide-react';
import './shared.css';

const Stocks = () => {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div className="page-content-inner">
            <div className="section-header" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 className="section-title">Stock Explorer</h1>
                    <p className="section-subtitle">Deep dive into specific assets with multi-vector real-time analysis.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '40px 0 60px 0' }}>
                <motion.div
                    style={{ width: '100%', maxWidth: '800px', position: 'relative' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Search size={24} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: isSearching ? 'var(--accent-ai)' : 'var(--text-tertiary)', transition: '0.3s' }} />
                    <input
                        type="text"
                        placeholder="Enter Ticker Symbol (e.g., RELIANCE, TCS, HDFCBANK)..."
                        onFocus={() => setIsSearching(true)}
                        onBlur={() => setIsSearching(false)}
                        style={{
                            width: '100%',
                            padding: '24px 24px 24px 64px',
                            fontSize: '1.25rem',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: '500',
                            background: 'var(--bg-surface)',
                            border: `2px solid ${isSearching ? 'var(--blue-500)' : 'var(--border-subtle)'}`,
                            borderRadius: 'var(--radius-xl)',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            boxShadow: isSearching ? '0 0 30px rgba(59, 130, 246, 0.2)' : 'var(--shadow-sm)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                    <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '8px' }}>
                        <span className="badge badge-ai" style={{ padding: '6px 12px' }}>Press Enter</span>
                    </div>
                </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <motion.div className="glass-panel" style={{ padding: '32px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-profit-bg)', color: 'var(--accent-profit)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <LineChart size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Technical Flow</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                        Advanced charting patterns mapped automatically. Double-tops, flags, channels instantly recognized by vision models.
                    </p>
                </motion.div>

                <motion.div className="glass-panel" style={{ padding: '32px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-ai-bg)', color: 'var(--accent-ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Zap size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Options Chain Dynamics</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                        Live PCR mapping, Open Interest changes, and Gamma exposure levels translated into readable price action predictors.
                    </p>
                </motion.div>

                <motion.div className="glass-panel" style={{ padding: '32px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--purple-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Shield size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Fundamental Health</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9375rem' }}>
                        DCF models applied instantly. See if a stock is overvalued or sitting in deep-value territory compared to historical P/B.
                    </p>
                </motion.div>
            </div>

        </div>
    );
};

export default Stocks;
