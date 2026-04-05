import React from 'react';
import {
    TrendingUp,
    TrendingDown,
    Activity,
    Zap,
    ArrowUpRight,
    ArrowDownRight,
    BrainCircuit
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

const marketData = [
    { time: '09:15', NIFTY: 22100, SENSEX: 72800 },
    { time: '10:00', NIFTY: 22150, SENSEX: 72950 },
    { time: '11:00', NIFTY: 22120, SENSEX: 72850 },
    { time: '12:00', NIFTY: 22200, SENSEX: 73100 },
    { time: '13:00', NIFTY: 22180, SENSEX: 73000 },
    { time: '14:00', NIFTY: 22250, SENSEX: 73250 },
    { time: '15:00', NIFTY: 22300, SENSEX: 73400 },
    { time: '15:30', NIFTY: 22280, SENSEX: 73350 },
];

const aiSignals = [
    { symbol: 'RELIANCE', action: 'STRONG BUY', confidence: 92, type: 'profit' },
    { symbol: 'TCS', action: 'HOLD', confidence: 75, type: 'neutral' },
    { symbol: 'HDFCBANK', action: 'BUY', confidence: 88, type: 'profit' },
    { symbol: 'PAYTM', action: 'SELL', confidence: 94, type: 'loss' },
    { symbol: 'TATAMOTORS', action: 'BUY', confidence: 85, type: 'profit' },
];

const Dashboard = () => {
    return (
        <>
            <div className="page-header">
                <h1 className="page-title">Dashboard Overview</h1>
            </div>

            <div className="dashboard-grid">
                {/* Market Summary Cards */}
                <div className="market-overview">
                    <div className="market-card glass-panel">
                        <div className="market-card-header">
                            <span>NIFTY 50</span>
                            <TrendingUp size={16} className="text-profit" />
                        </div>
                        <div className="market-value text-profit">22,280.50</div>
                        <div className="market-change text-profit">
                            <ArrowUpRight size={16} />
                            <span>+180.20 (0.82%)</span>
                        </div>
                    </div>

                    <div className="market-card glass-panel">
                        <div className="market-card-header">
                            <span>SENSEX</span>
                            <TrendingUp size={16} className="text-profit" />
                        </div>
                        <div className="market-value text-profit">73,350.25</div>
                        <div className="market-change text-profit">
                            <ArrowUpRight size={16} />
                            <span>+550.10 (0.75%)</span>
                        </div>
                    </div>

                    <div className="market-card glass-panel">
                        <div className="market-card-header">
                            <span>BANK NIFTY</span>
                            <TrendingDown size={16} className="text-loss" />
                        </div>
                        <div className="market-value text-loss">46,500.15</div>
                        <div className="market-change text-loss">
                            <ArrowDownRight size={16} />
                            <span>-120.40 (-0.26%)</span>
                        </div>
                    </div>

                    <div className="market-card glass-panel">
                        <div className="market-card-header">
                            <span>INDIA VIX</span>
                            <Activity size={16} className="text-secondary" />
                        </div>
                        <div className="market-value">15.24</div>
                        <div className="market-change text-loss">
                            <ArrowDownRight size={16} />
                            <span>-0.45 (-2.87%)</span>
                        </div>
                    </div>
                </div>

                {/* Main Chart */}
                <div className="main-chart glass-panel">
                    <div className="chart-header">
                        <h2 className="chart-title">Market Trend (NIFTY)</h2>
                        <div className="chart-filters">
                            <button className="filter-btn active">1D</button>
                            <button className="filter-btn">1W</button>
                            <button className="filter-btn">1M</button>
                            <button className="filter-btn">1Y</button>
                            <button className="filter-btn">ALL</button>
                        </div>
                    </div>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={marketData}>
                                <defs>
                                    <linearGradient id="colorNifty" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#a3a3a3', fontSize: 12 }} />
                                <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{ fill: '#a3a3a3', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#111', borderColor: '#262626', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="NIFTY" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorNifty)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Quick Signals */}
                <div className="ai-signals glass-panel">
                    <div className="section-header">
                        <h2 className="section-title">
                            <BrainCircuit className="text-accent-purple" size={20} />
                            Live AI Signals
                        </h2>
                        <button className="btn-secondary">View All</button>
                    </div>
                    <div className="signals-list">
                        {aiSignals.map((signal, idx) => (
                            <div key={idx} className="signal-item">
                                <div className="signal-info">
                                    <div className={`signal-icon bg-${signal.type === 'neutral' ? 'tertiary' : signal.type}`}>
                                        {signal.type === 'profit' ? <TrendingUp size={18} /> :
                                            signal.type === 'loss' ? <TrendingDown size={18} /> : <Activity size={18} />}
                                    </div>
                                    <div>
                                        <div className="signal-symbol">{signal.symbol}</div>
                                        <div className={`signal-action text-${signal.type === 'neutral' ? 'secondary' : signal.type}`}>
                                            {signal.action}
                                        </div>
                                    </div>
                                </div>
                                <div className="signal-confidence">
                                    <div className={`confidence-val text-${signal.confidence > 90 ? 'profit' : 'white'}`}>
                                        {signal.confidence}%
                                    </div>
                                    <div className="confidence-label">Confidence</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Gainers & Losers */}
                <div className="market-movers">
                    <div className="movers-card glass-panel">
                        <h2 className="section-title">Top Gainers</h2>
                        <div className="stock-list">
                            {['ZOMATO', 'IRFC', 'JIOFIN', 'SUZLON'].map((stock, i) => (
                                <div className="stock-row" key={stock}>
                                    <div className="stock-name">{stock}</div>
                                    <div className="stock-price">₹{(Math.random() * 500 + 50).toFixed(2)}</div>
                                    <div className="stock-change text-profit">+{Math.floor(Math.random() * 10 + 2)}.%</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="movers-card glass-panel">
                        <h2 className="section-title">Top Losers</h2>
                        <div className="stock-list">
                            {['HDFCBANK', 'ITC', 'INFY', 'WIPRO'].map((stock, i) => (
                                <div className="stock-row" key={stock}>
                                    <div className="stock-name">{stock}</div>
                                    <div className="stock-price">₹{(Math.random() * 1000 + 200).toFixed(2)}</div>
                                    <div className="stock-change text-loss">-{Math.floor(Math.random() * 5 + 1)}.%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Dashboard;
