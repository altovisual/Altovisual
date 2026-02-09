import React from 'react';
import './ShinyButton.css';

const ShinyButton = ({
    text,
    onClick,
    className = '',
    accentColor = '#4facfe',
    ...rest
}) => {
    return (
        <button
            className={`shiny-button ${className}`}
            onClick={onClick}
            style={{ '--accent-color': accentColor }}
            {...rest}
        >
            <span className="shiny-button__text">{text}</span>
            <div className="shiny-button__shimmer"></div>
            <div className="shiny-button__border"></div>
            <div className="shiny-button__glow"></div>
        </button>
    );
};

export default ShinyButton;
