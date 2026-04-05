import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="top-navbar">
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search stocks, news, or ask AI..."
        />
        <span className="search-shortcut">Ctrl+K</span>
      </div>

      <div className="navbar-actions">
        <div className="market-status">
          <span className="status-dot"></span>
          <span className="text-profit">Market Open</span>
        </div>

        <button className="action-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>

        <button className="action-btn">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
