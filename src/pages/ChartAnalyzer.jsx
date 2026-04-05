import React from 'react';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';
import './ChartAnalyzer.css';

const ChartAnalyzer = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h1 className="page-title">AI Chart Analyzer</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Upload a screenshot of any stock chart for instant pattern recognition and analysis.
                </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px' }}>
                <div className="chart-upload-container">
                    <div className="upload-icon">
                        <UploadCloud size={32} />
                    </div>
                    <h2 className="upload-title">Upload Chart Image</h2>
                    <p className="upload-subtitle">
                        Supported formats: JPG, PNG, WEBP. <br />
                        Our Vision AI will detect patterns like Head & Shoulders, Flags, Triangles, and more.
                    </p>
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ImageIcon size={18} /> Select Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChartAnalyzer;
