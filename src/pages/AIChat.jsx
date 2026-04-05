import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Command } from 'lucide-react';

const AIChat = () => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className="page-content-inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="section-header" style={{ marginBottom: '16px', flexShrink: 0 }}>
                <div>
                    <h1 className="section-title"><Terminal className="text-ai" size={28} /> Copilot Terminal</h1>
                    <p className="section-subtitle">Natural language interface to the Kautrix computational engine.</p>
                </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface-elevated)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Cpu size={16} className="animated-pulse text-premium" />
                    <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>SYS-GPT-4 CORE :: KAUTRIX FIN-TUNED :: NO-LATENCY MODE</span>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--blue-500)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Command size={20} />
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '16px' }}>
                                System initialized. I am your quantitative copilot. I have real-time access to the NSE/BSE feeds, macroeconomic news streams, and your portfolio parameters.
                            </p>
                            <div className="mono" style={{ padding: '16px', background: 'var(--bg-deep)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                &gt; Type commands or natural questions.<br />
                                &gt; Examples:<br />
                                &nbsp;&nbsp; "Run a Monte Carlo simulation on my TCS holdings"<br />
                                &nbsp;&nbsp; "What's the delta on the 22500 NIFTY calls expiring today?"<br />
                                &nbsp;&nbsp; "Show me high-probability mean-reverting industrial stocks"
                            </div>
                        </div>
                    </motion.div>

                    {/* User Message */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: 'flex', gap: '20px', flexDirection: 'row-reverse' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-strong)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700 }}>
                            K
                        </div>
                        <div style={{ paddingTop: '8px', maxWidth: '70%', background: 'linear-gradient(145deg, var(--bg-surface-highlight), var(--bg-surface))', padding: '16px 24px', borderRadius: '20px', borderTopRightRadius: '4px' }}>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1rem' }}>
                                What is the current algorithmic bias and put-call ratio on the NIFTY index? I am looking to initiate a short straddle.
                            </p>
                        </div>
                    </motion.div>

                    {/* AI Message */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--blue-500)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Command size={20} />
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '16px' }}>
                                Accessing live derivatives data...
                            </p>
                            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', borderLeft: '3px solid var(--emerald-500)' }}>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Current PCR (Overall):</span>
                                        <span className="mono" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>0.98 (Neutral)</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Algorithmic Bias:</span>
                                        <span className="mono" style={{ color: 'var(--emerald-500)', fontWeight: 600 }}>Slightly Bullish (62%)</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>IV Rank:</span>
                                        <span className="mono" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>14 (Low Volatility Environment)</span>
                                    </li>
                                </ul>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9375rem', marginTop: '16px' }}>
                                <strong style={{ color: 'var(--purple-500)' }}>Warning:</strong> Selling a short straddle in a Low IV environment (IV Rank 14) carries asymmetric vega risk. If volatility expands, the position will face rapid drawdowns. A better structure in this regime would be a Calendar Spread or Iron Condor with defined risk.
                            </p>
                        </div>
                    </motion.div>

                </div>

                <div style={{ padding: '24px', background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', transition: 'all 0.3s', boxShadow: inputVal ? '0 0 0 2px rgba(59,130,246,0.5)' : 'none' }}>
                        <Code size={20} className="text-tertiary" style={{ marginRight: '16px' }} />
                        <input
                            type="text"
                            value={inputVal}
                            onChange={e => setInputVal(e.target.value)}
                            placeholder="Deploy systems, run queries, or ask logic..."
                            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '1rem', padding: '8px 0' }}
                        />
                        <button className="btn btn-primary" style={{ padding: '10px 24px' }}>Execute</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIChat;
