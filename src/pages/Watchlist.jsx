import React from 'react';
import { List, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import './shared.css';

const Watchlist = () => {
    const watchlistItems = [
        { symbol: 'RELIANCE', price: '2987.45', change: '+1.2%', up: true },
        { symbol: 'HDFCBANK', price: '1432.10', change: '-0.5%', up: false },
        { symbol: 'INFY', price: '1678.90', change: '+2.4%', up: true }
    ];

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">My Watchlist</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Track your favorite stocks with real-time AI signals.
                    </p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={16} /> Add Stock
                </button>
            </div>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '16px 24px', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>SYMBOL</th>
                            <th style={{ padding: '16px 24px', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>LTP</th>
                            <th style={{ padding: '16px 24px', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>CHANGE</th>
                            <th style={{ padding: '16px 24px', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>AI SIGNAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlistItems.map((item, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '16px 24px', fontWeight: '600' }}>{item.symbol}</td>
                                <td style={{ padding: '16px 24px', fontFamily: 'monospace', fontSize: '1.05rem' }}>₹{item.price}</td>
                                <td style={{ padding: '16px 24px', color: item.up ? 'var(--accent-green)' : 'var(--accent-red)', fontWeight: '600' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        {item.up ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                        {item.change}
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        background: item.up ? 'var(--accent-green-bg)' : 'var(--accent-red-bg)',
                                        color: item.up ? 'var(--accent-green)' : 'var(--accent-red)'
                                    }}>
                                        {item.up ? 'STRONG BUY' : 'HOLD'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;
