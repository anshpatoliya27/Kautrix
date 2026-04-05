import React from 'react';
import { Sparkles, TrendingUp, TrendingDown, Clock, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './NewsIntelligence.css';

const newsData = [
    {
        id: 1,
        headline: "Global Central Banks Pivot: Coordinated Rate Cuts Expected By Q3",
        time: "2 mins ago",
        summary: "Macro algorithms detect massive shifts in bond yields indicating an imminent coordinated policy pivot by major central banks. The AI model predicts a powerful multi-week rally in risk assets.",
        sentiment: "positive",
        sentimentScore: 92,
        impact: [
            { sector: "IT Services", trend: "up", change: "+3.2%" },
            { sector: "Banking", trend: "up", change: "+2.4%" },
        ],
        hot: true
    },
    {
        id: 2,
        headline: "Automotive Sector Posts Record Sales Despite Supply Chain Jitters",
        time: "15 mins ago",
        summary: "Domestic auto sales beat consensus estimates by 12%. However, AI textual analysis of management commentary highlights forward-looking margin pressure due to raw material costs.",
        sentiment: "mixed",
        sentimentScore: 55,
        impact: [
            { sector: "Auto OEMs", trend: "up", change: "+1.5%" },
            { sector: "Auto Ancillary", trend: "down", change: "-0.8%" }
        ],
        hot: false
    },
    {
        id: 3,
        headline: "European Regulator Fines Major Pharma Conglomerate",
        time: "1 hour ago",
        summary: "A surprise regulatory action in the EU zone disrupts export pipelines for key active pharmaceutical ingredients (APIs). High probability of structural correction in affected tickers.",
        sentiment: "negative",
        sentimentScore: 18,
        impact: [
            { sector: "Pharma", trend: "down", change: "-4.1%" }
        ],
        hot: true
    }
];

const NewsCard = ({ news, index }) => {
    return (
        <motion.div
            className="glass-panel news-card-v2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <div className="nc-top-row">
                <div className="nc-time"><Clock size={12} /> {news.time}</div>
                {news.hot && <div className="badge badge-loss animated-pulse">HOT</div>}
            </div>

            <h3 className="nc-headline">{news.headline}</h3>

            <div className="nc-ai-box">
                <div className="nc-ai-header">
                    <Sparkles size={14} className="text-ai" />
                    <span className="text-gradient-ai font-semibold">AI Synthesis</span>
                </div>
                <p className="nc-ai-text">{news.summary}</p>
            </div>

            <div className="nc-impact-section">
                <div className="nc-section-title">Vector Impact</div>
                <div className="nc-tags">
                    {news.impact.map((item, idx) => (
                        <div key={idx} className={`badge ${item.trend === 'up' ? 'badge-profit' : 'badge-loss'}`}>
                            {item.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {item.sector} {item.change}
                        </div>
                    ))}
                </div>
            </div>

            <div className="nc-footer">
                <div className="sentiment-bar-wrapper">
                    <div className="sb-label">Model Sentiment Analysis</div>
                    <div className="sb-track">
                        <motion.div
                            className="sb-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${news.sentimentScore}%` }}
                            transition={{ delay: 0.5 + (index * 0.1), duration: 1, ease: "easeOut" }}
                            style={{
                                background: `linear-gradient(90deg, var(--rose-500), ${news.sentimentScore > 50 ? 'var(--emerald-500)' : 'var(--amber-500)'})`
                            }}
                        />
                    </div>
                </div>
                <button className="btn-icon"><MoveRight size={20} /></button>
            </div>
        </motion.div>
    );
};

const NewsIntelligence = () => {
    return (
        <div className="page-content-inner">
            <div className="section-header">
                <div>
                    <h1 className="section-title">Global Intelligence <span className="badge badge-ai">LIVE</span></h1>
                    <p className="section-subtitle">Real-time NLP extraction and predictive market vectors</p>
                </div>
                <div className="filter-group">
                    <button className="filter-btn active">All Streams</button>
                    <button className="filter-btn">High Volatility</button>
                    <button className="filter-btn">Earnings Transcripts</button>
                </div>
            </div>

            <div className="news-masonry">
                {newsData.map((news, i) => (
                    <NewsCard key={news.id} news={news} index={i} />
                ))}
            </div>
        </div>
    );
};

export default NewsIntelligence;
