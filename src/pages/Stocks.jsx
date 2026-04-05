import React from 'react';
import { LineChart, Search } from 'lucide-react';
import './shared.css';

const Stocks = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h1 className="page-title">Market Explorer</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Analyze stocks with AI-powered metrics and technicals.
                </p>
            </div>

            <div className="placeholder-card glass-panel">
                <div className="placeholder-icon">
                    <LineChart size={32} />
                </div>
                <h2 className="placeholder-title">Stock Screener & Analysis</h2>
                <p className="placeholder-desc">
                    Search for any stock to view detailed technical analysis, AI price predictions, options data, and fundamental metrics.
                </p>

                <div style={{ marginTop: '24px', width: '100%', maxWidth: '400px', position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search stock (e.g. RELIANCE, TCS)"
                        style={{
                            width: '100%',
                            padding: '12px 12px 12px 40px',
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stocks;
