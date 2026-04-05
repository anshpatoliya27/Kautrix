import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, UploadCloud, Orbit, ArrowRight } from 'lucide-react';
import './shared.css';

const ChartAnalyzer = () => {
    return (
        <div className="page-content-inner">
            <div className="section-header">
                <div>
                    <h1 className="section-title"><ScanLine className="text-ai" size={28} /> Vision Analyzer</h1>
                    <p className="section-subtitle">Drop screenshot data to instantly recognize structural patterns using neural visual processors.</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginTop: '32px' }}>

                <motion.div
                    style={{
                        flex: 2,
                        border: '2px dashed var(--border-strong)',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--bg-surface)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'crosshair'
                    }}
                    whileHover={{ borderColor: 'var(--blue-500)', backgroundColor: 'var(--bg-surface-elevated)' }}
                >
                    <div className="bg-grid" style={{ opacity: 0.5, maskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }}></div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <div style={{ width: '80px', height: '80px', background: 'var(--accent-ai-bg)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '24px', color: 'var(--blue-400)' }}>
                            <UploadCloud size={40} />
                        </div>
                    </motion.div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, zIndex: 2 }}>Drag & Drop Chart Image</h2>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '12px', zIndex: 2 }}>
                        JPG, PNG or WEBP. Max 10MB.<br />
                        Neural processor will map trendlines, S/R levels, and predict vector direction.
                    </p>
                    <button className="btn btn-primary" style={{ marginTop: '32px', zIndex: 2 }}>Browse Files <ArrowRight size={16} /></button>
                </motion.div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="glass-panel" style={{ padding: '32px' }}>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Orbit className="text-premium" size={20} /> Capability Matrix</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'var(--blue-500)', borderRadius: '50%' }}></div> Automatic Trendline Detection
                            </li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'var(--purple-500)', borderRadius: '50%' }}></div> Classical Pattern Recognition
                            </li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'var(--emerald-500)', borderRadius: '50%' }}></div> Harmonic Structure Mapping
                            </li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'var(--rose-500)', borderRadius: '50%' }}></div> Volume/Price Divergence
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ChartAnalyzer;
