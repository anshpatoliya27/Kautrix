import React from 'react';
import { Sparkles, TrendingUp, TrendingDown, Clock, Activity } from 'lucide-react';
import './NewsIntelligence.css';

const newsData = [
    {
        id: 1,
        headline: "RBI increases repo rate by 25 basis points to combat inflation",
        time: "10 mins ago",
        summary: "The Reserve Bank of India has hiked the benchmark lending rate. This will likely increase borrowing costs for businesses and consumers, negatively impacting rate-sensitive sectors like Real Estate and Auto, but potentially benefiting Bank net interest margins.",
        sentiment: "mixed",
        sentimentScore: 45, // 0-100 (0 red, 100 green)
        impact: [
            { sector: "Banking", trend: "up", change: "+1.2%" },
            { sector: "Realty", trend: "down", change: "-2.4%" },
            { sector: "Auto", trend: "down", change: "-1.5%" }
        ]
    },
    {
        id: 2,
        headline: "Government announces ₹1 lakh crore push for renewable energy",
        time: "1 hour ago",
        summary: "New subsidies announced for solar and wind power manufacturing facilities. AI predicts strong positive momentum for green energy stocks and power transmission companies over the next quarter.",
        sentiment: "positive",
        sentimentScore: 85,
        impact: [
            { sector: "Green Energy", trend: "up", change: "+4.5%" },
            { sector: "Power", trend: "up", change: "+3.2%" }
        ]
    },
    {
        id: 3,
        headline: "TCS reports Q3 earnings above street estimates, guidance strong",
        time: "2 hours ago",
        summary: "India's largest IT firm beat revenue and margin expectations, showing resilience despite global macroeconomic headwinds. Management commentary suggests strong deal pipeline.",
        sentiment: "positive",
        sentimentScore: 78,
        impact: [
            { sector: "IT Services", trend: "up", change: "+2.8%" }
        ]
    },
    {
        id: 4,
        headline: "Crude oil prices spike 5% on Middle East tensions",
        time: "3 hours ago",
        summary: "Brent crude crosses $85/barrel. This will likely pressure margins for oil marketing companies, paints, and aviation, while upstream oil producers may see benefits.",
        sentiment: "negative",
        sentimentScore: 25,
        impact: [
            { sector: "Aviation", trend: "down", change: "-3.1%" },
            { sector: "Paints", trend: "down", change: "-2.2%" },
            { sector: "OMCs", trend: "down", change: "-1.8%" }
        ]
    }
];

const NewsCard = ({ news }) => {
    return (
        <div className="news-card glass-panel">
            <div className="news-header">
                <h3 className="news-headline">{news.headline}</h3>
                <div className="news-time">
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {news.time}
                </div>
            </div>

            <div className="news-ai-summary">
                <div className="ai-summary-label">
                    <Sparkles size={14} />
                    AI Analysis
                </div>
                <p className="ai-summary-text">{news.summary}</p>
            </div>

            <div className="news-impact">
                <div className="impact-title">Predicted Market Impact</div>
                <div className="impact-sectors">
                    {news.impact.map((item, idx) => (
                        <div key={idx} className={`sector-tag ${item.trend === 'up' ? 'positive' : 'negative'}`}>
                            {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            {item.sector} {item.change}
                        </div>
                    ))}
                </div>
            </div>

            <div className="news-sentiment">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>BEARISH</span>
                <div className="sentiment-meter">
                    <div
                        className="sentiment-fill"
                        style={{
                            width: `${news.sentimentScore}%`,
                            background: `linear-gradient(90deg, var(--accent-red), ${news.sentimentScore > 50 ? 'var(--accent-green)' : 'var(--text-muted)'})`
                        }}
                    ></div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>BULLISH</span>
            </div>
        </div>
    );
};

const NewsIntelligence = () => {
    return (
        <>
            <div className="page-header">
                <h1 className="page-title">News Intelligence</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Real-time AI analysis of market news and predicted impact.
                </p>
            </div>

            <div className="news-container">
                <div className="news-filters">
                    <button className="news-filter-btn active">All News</button>
                    <button className="news-filter-btn">High Impact</button>
                    <button className="news-filter-btn">Earnings</button>
                    <button className="news-filter-btn">Macroeconomics</button>
                    <button className="news-filter-btn">Global</button>
                </div>

                <div className="news-grid">
                    {newsData.map(news => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default NewsIntelligence;
