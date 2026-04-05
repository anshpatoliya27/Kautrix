import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Briefcase, Landmark, ShieldCheck, Settings,
    CheckCircle2, AlertCircle, Copy, Wallet
} from 'lucide-react';
import './Profile.css';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('account');

    const tabs = [
        { id: 'account', label: 'Account Details', icon: <User size={20} /> },
        { id: 'broker', label: 'Broker Integrations', icon: <Briefcase size={20} /> },
        { id: 'bank', label: 'Bank & Mandates', icon: <Landmark size={20} /> },
        { id: 'security', label: 'Security & Privacy', icon: <ShieldCheck size={20} /> },
        { id: 'settings', label: 'Platform Settings', icon: <Settings size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="glass-panel content-section"
                    >
                        <div className="cs-header">
                            <h3 className="cs-title">Personal & Trading Info</h3>
                            <p className="cs-subtitle">Your KYC verified demographic and trading segment mapping.</p>
                        </div>

                        <div className="info-grid" style={{ marginBottom: '40px' }}>
                            <div className="info-box">
                                <span className="info-label">Full Name</span>
                                <span className="info-val">Khushi (Enterprise)</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Client ID (UCC)</span>
                                <span className="info-val mono">KX-99421-IN</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Mobile Number</span>
                                <span className="info-val mono">+91 ***** **312</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Email ID</span>
                                <span className="info-val">khushi.quant@kautrix.ai</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">PAN Number</span>
                                <span className="info-val mono">ABCDE****F</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">BO ID (CDSL)</span>
                                <span className="info-val mono" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    1208160000000000 <Copy size={14} className="text-tertiary" style={{ cursor: 'pointer' }} />
                                </span>
                            </div>
                        </div>

                        <div className="cs-header">
                            <h3 className="cs-title">Active Segments</h3>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <span className="badge-outline"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> NSE Equity</span>
                            <span className="badge-outline"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> BSE Equity</span>
                            <span className="badge-outline"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> NSE F&O</span>
                            <span className="badge-outline"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> Mutual Funds</span>
                            <span className="badge-outline"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> US Stocks</span>
                        </div>
                    </motion.div>
                );
            case 'broker':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="glass-panel content-section"
                    >
                        <div className="cs-header">
                            <h3 className="cs-title">Algorithmic Execution APIs</h3>
                            <p className="cs-subtitle">Connect your demat accounts to allow Kautrix AI to execute high-conviction trades directly.</p>
                        </div>

                        <div className="broker-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                            <div className="bc-info">
                                <div className="bc-icon text-primary"><Briefcase size={24} /></div>
                                <div>
                                    <div className="bc-name">Zerodha Kite Connect</div>
                                    <div className="bc-status connected"><CheckCircle2 size={14} /> Active & Syncing (KX-99421)</div>
                                </div>
                            </div>
                            <button className="btn btn-surface">Manage Limits</button>
                        </div>

                        <div className="broker-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                            <div className="bc-info">
                                <div className="bc-icon text-primary"><Briefcase size={24} /></div>
                                <div>
                                    <div className="bc-name">AngelOne SmartAPI</div>
                                    <div className="bc-status connected"><CheckCircle2 size={14} /> Active & Syncing (ANG-112X)</div>
                                </div>
                            </div>
                            <button className="btn btn-surface">Manage Limits</button>
                        </div>

                        <div className="broker-card">
                            <div className="bc-info">
                                <div className="bc-icon text-tertiary"><Briefcase size={24} /></div>
                                <div>
                                    <div className="bc-name">Upstox Uplink</div>
                                    <div className="bc-status disconnected"><AlertCircle size={14} /> Not Connected</div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Link Account</button>
                        </div>

                        <div className="broker-card">
                            <div className="bc-info">
                                <div className="bc-icon text-tertiary"><Briefcase size={24} /></div>
                                <div>
                                    <div className="bc-name">Groww API (Beta)</div>
                                    <div className="bc-status disconnected"><AlertCircle size={14} /> Not Connected</div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Link Account</button>
                        </div>
                    </motion.div>
                );
            default:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="glass-panel content-section"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 20px' }}
                    >
                        <Settings size={48} className="text-tertiary" style={{ marginBottom: '16px' }} />
                        <h3 className="cs-title">Configuration Secured</h3>
                        <p className="cs-subtitle" style={{ maxWidth: '400px' }}>This section is securely encrypted and tied to your Enterprise Node KMS.</p>
                    </motion.div>
                );
        }
    };

    return (
        <div className="page-content-inner profile-container">

            {/* Top Header Card like Groww/AngelOne */}
            <motion.div className="glass-panel profile-header-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="user-identity">
                    <div className="user-avatar-premium">K</div>
                    <div className="user-details">
                        <h2 className="display-font">Khushi</h2>
                        <p><ShieldCheck size={16} className="text-ai" /> KYC Verified • Enterprise Node Active</p>
                    </div>
                </div>

                <div className="header-funds">
                    <div className="fund-block">
                        <span className="fund-label">Total Net Worth</span>
                        <span className="fund-amount">₹48,24,500<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>.00</span></span>
                    </div>
                    <div className="fund-block">
                        <span className="fund-label">Available Margin (AI Limit)</span>
                        <span className="fund-amount text-ai">₹12,50,000<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>.00</span></span>
                    </div>
                    <button className="btn btn-primary" style={{ alignSelf: 'center', padding: '12px 24px', fontSize: '1rem' }}><Wallet size={20} /> Add Funds</button>
                </div>
            </motion.div>

            {/* Main Body Grid */}
            <div className="profile-body-grid">

                {/* Navigation Sidebar inside Profile */}
                <div className="profile-nav">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`p-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="profile-content-area">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>

            </div>

        </div>
    );
};

export default Profile;
