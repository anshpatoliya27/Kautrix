import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Newspaper,
    Fingerprint,
    Search,
    Star,
    ScanLine,
    MessageSquareCode,
    BellRing,
    Infinity
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const mainNav = [
        { name: 'Command Center', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Global Intel', path: '/news', icon: <Newspaper size={20} /> },
        { name: 'Predictive Models', path: '/insights', icon: <Fingerprint size={20} /> },
    ];

    const toolsNav = [
        { name: 'Asset Explorer', path: '/stocks', icon: <Search size={20} /> },
        { name: 'Core Watchlist', path: '/watchlist', icon: <Star size={20} /> },
        { name: 'Vision Analyzer', path: '/chart-analyzer', icon: <ScanLine size={20} /> },
    ];

    const systemNav = [
        { name: 'Copilot Terminal', path: '/chat', icon: <MessageSquareCode size={20} /> },
        { name: 'System Alerts', path: '/alerts', icon: <BellRing size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="brand">
                    <div className="brand-icon">
                        <Infinity size={24} color="#fff" />
                    </div>
                    <span className="brand-name">KAUTRIX</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-label">Core System</div>
                {mainNav.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}

                <div className="nav-label" style={{ marginTop: '24px' }}>Analysis Tools</div>
                {toolsNav.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}

                <div className="nav-label" style={{ marginTop: '24px' }}>Network Services</div>
                {systemNav.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <NavLink to="/profile" className="user-profile" style={{ textDecoration: 'none' }}>
                    <div className="avatar">K</div>
                    <div className="user-info">
                        <span className="user-name">Khushi</span>
                        <span className="user-plan">ENTERPRISE NODE</span>
                    </div>
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
