import React from 'react';
import { Search, Bell, Settings, Radio } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="top-navbar">
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Global System Search (Assets, News, Macros)..."
        />
        <span className="search-shortcut">CMD+K</span>
      </div>

      <div className="navbar-actions">
        <div className="network-status">
          <span className="status-dot animated-pulse"></span>
          <span style={{ color: 'var(--text-primary)' }}>NSE:</span> Syncing <Radio size={12} style={{ marginLeft: 4 }} />
        </div>

        <button className="action-btn">
          <Bell size={20} />
          <span className="badge-notify animated-pulse"></span>
        </button>

        <button className="action-btn">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
