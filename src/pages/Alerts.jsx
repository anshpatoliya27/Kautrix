import React from 'react';
import { motion } from 'framer-motion';
import { BellRing, ShieldAlert, Zap, Siren } from 'lucide-react';
import './shared.css';

const Alerts = () => {
    return (
        <div className="page-content-inner">
            <div className="section-header">
                <div>
                    <h1 className="section-title"><BellRing className="text-ai" size={28} /> System Alerts</h1>
                    <p className="section-subtitle">Critical event triggers, automated defense, and execution notifications.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>

                <motion.div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center', borderLeft: '4px solid var(--rose-500)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <div style={{ width: '48px', height: '48px', background: 'rgba(244, 63, 94, 0.1)', color: 'var(--rose-500)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Siren size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>Stop Loss Breach: INFY</h3>
                            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>14:32:05 IST</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>Automated risk protocol liquidated 300 shares of INFY at 1,650.00. Exposure eliminated to prevent further drawdown.</p>
                    </div>
                    <button className="btn btn-surface">Review Log</button>
                </motion.div>

                <motion.div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center', borderLeft: '4px solid var(--emerald-500)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--emerald-500)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Zap size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>Auto-Trade Executed: HDFCBANK</h3>
                            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>10:15:22 IST</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>AI successfully executed Mean-Reversion strategy parameters. Long position acquired at 1,430.</p>
                    </div>
                    <button className="btn btn-surface">Trade Details</button>
                </motion.div>

                <motion.div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center', borderLeft: '4px solid var(--purple-500)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <div style={{ width: '48px', height: '48px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--purple-500)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <ShieldAlert size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>System Routine: Pre-Market Analysis Complete</h3>
                            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>08:50:00 IST</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>Engine computed all pre-market macroeconomic variables and generated 4 new high-conviction signals.</p>
                    </div>
                    <button className="btn btn-surface">View Signals</button>
                </motion.div>

            </div>
        </div>
    );
};

export default Alerts;
