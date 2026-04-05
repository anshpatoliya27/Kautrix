import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import NewsIntelligence from './pages/NewsIntelligence';
import AIInsights from './pages/AIInsights';
import Stocks from './pages/Stocks';
import Watchlist from './pages/Watchlist';
import ChartAnalyzer from './pages/ChartAnalyzer';
import AIChat from './pages/AIChat';
import Alerts from './pages/Alerts';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content-wrapper">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/news" element={<NewsIntelligence />} />
              <Route path="/insights" element={<AIInsights />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/chart-analyzer" element={<ChartAnalyzer />} />
              <Route path="/chat" element={<AIChat />} />
              <Route path="/alerts" element={<Alerts />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;