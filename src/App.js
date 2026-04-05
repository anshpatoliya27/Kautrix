import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import Profile from './pages/Profile';

import './App.css';

// A wrapper to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><NewsIntelligence /></PageWrapper>} />
        <Route path="/insights" element={<PageWrapper><AIInsights /></PageWrapper>} />
        <Route path="/stocks" element={<PageWrapper><Stocks /></PageWrapper>} />
        <Route path="/watchlist" element={<PageWrapper><Watchlist /></PageWrapper>} />
        <Route path="/chart-analyzer" element={<PageWrapper><ChartAnalyzer /></PageWrapper>} />
        <Route path="/chat" element={<PageWrapper><AIChat /></PageWrapper>} />
        <Route path="/alerts" element={<PageWrapper><Alerts /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-shell">
        <div className="bg-grid"></div>
        <Sidebar />
        <div className="main-view">
          <Navbar />
          <div className="page-scroll-area">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;