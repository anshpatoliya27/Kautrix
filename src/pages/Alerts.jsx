import React from 'react';
import { Bell, AlertTriangle, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import './shared.css';

const Alerts = () => {
    const alertsData = [
        { type: 'price_up', title: 'TCS Target Hit', message: 'TCS has crossed your target price of ₹4,100.', time: '10 mins ago', icon: <TrendingUp size={20} className="text-profit" /> },
        { type: 'news', title: 'High Impact News - Banking Sector', message: 'RBI announces new liquidity measures. Impact highly probable on HDFCBANK, ICICIBANK.', time: '45 mins ago', icon: <Bell size={20} className="text-accent-blue" /> },
        { type: 'price_down', title: 'Stop Loss Warning - INFY', message: 'INFY is trading within 1% of your set stop loss (₹1,650).', time: '2 hours ago', icon: <AlertTriangle size={20} className="text-loss" /> },
    ];

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">Smart Alerts</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Manage your price, volume, and AI news alerts.
                    </p>
                </div>
                <button className="btn-primary">Create Alert</button>
            </div>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                {alertsData.map((alert, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '24px',
                        borderBottom: '1px solid var(--border-color)',
                        background: 'var(--bg-tertiary)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-card)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            {alert.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{alert.title}</h3>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={12} /> {alert.time}
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{alert.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alerts;
