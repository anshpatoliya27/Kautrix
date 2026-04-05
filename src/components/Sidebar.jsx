import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Newspaper,
    Lightbulb,
    LineChart,
    List,
    Image as ImageIcon,
    MessageSquare,
    Bell,
    Activity
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'News Intelligence', path: '/news', icon: <Newspaper size={20} /> },
        { name: 'AI Insights', path: '/insights', icon: <Lightbulb size={20} /> },
        { name: 'Stocks', path: '/stocks', icon: <LineChart size={20} /> },
        { name: 'Watchlist', path: '/watchlist', icon: <List size={20} /> },
        { name: 'Chart Analyzer', path: '/chart-analyzer', icon: <ImageIcon size={20} /> },
        { name: 'AI Chat', path: '/chat', icon: <MessageSquare size={20} /> },
        { name: 'Alerts', path: '/alerts', icon: <Bell size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="brand">
                    <div className="brand-icon">
                        <Activity size={24} />
                    </div>
                    <span className="brand-name">Kautrix</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
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
                <div className="user-profile">
                    <div className="avatar">K</div>
                    <div className="user-info">
                        <span className="user-name">Khushi</span>
                        <span className="user-plan">PRO Member</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
