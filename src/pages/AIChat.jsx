import React from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import './AIChat.css';

const AIChat = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ marginBottom: '16px' }}>
                <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles className="text-accent-blue" size={24} /> Kautrix AI Assistant
                </h1>
            </div>

            <div className="chat-container">
                <div className="chat-history">
                    <div className="message ai">
                        <div className="message-avatar">
                            <Bot size={20} />
                        </div>
                        <div className="message-bubble">
                            Hello Khushi! I'm your Kautrix AI trading assistant. I've analyzed the market data, news flows, and your current watchlist.
                            <br /><br />
                            NIFTY is showing strong bullish momentum today. How can I help you? You can ask me about specific stocks, market trends, or request an options strategy.
                        </div>
                    </div>

                    <div className="message user">
                        <div className="message-avatar">
                            <User size={20} />
                        </div>
                        <div className="message-bubble">
                            What's your view on RELIANCE for intraday given the recent news?
                        </div>
                    </div>

                    <div className="message ai">
                        <div className="message-avatar">
                            <Bot size={20} />
                        </div>
                        <div className="message-bubble">
                            Based on the latest news flow and technical indicators:
                            <br /><br />
                            <strong>RELIANCE (LTP: 2987.45)</strong>
                            <ul>
                                <li style={{ margin: '4px 0' }}><strong>Sentiment:</strong> Highly Positive (88/100)</li>
                                <li style={{ margin: '4px 0' }}><strong>Technicals:</strong> Broke out of a 2-week consolidation zone. MACD is bullish.</li>
                                <li style={{ margin: '4px 0' }}><strong>Actionable Insight:</strong> Strong Buy on dips near 2975. Target 3020, Stop Loss 2955.</li>
                            </ul>
                            <br />
                            <em>Disclaimer: This is AI-generated analysis. Please manage your risk.</em>
                        </div>
                    </div>
                </div>

                <div className="chat-input-wrapper">
                    <div className="chat-input-box">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Ask about a stock, sector, or strategy..."
                        />
                        <button className="chat-send-btn">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIChat;
