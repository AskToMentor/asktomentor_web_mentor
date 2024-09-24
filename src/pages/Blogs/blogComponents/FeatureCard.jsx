import React from 'react';
import { Link } from "react-router-dom";

import './style/FeatureCard.css';
import chevronIcon from '../assets/icon-ionicons-outline-chevron-forward-outline.svg';
import dotIcon from '../assets/ellipse-109.svg';

const FeatureCard = ({ date, author, title, content, imgSrc }) => {
    return (
        <>
            <div className="flex justify-end flex-col feature-card">
                <img src={imgSrc} className="card-image h-full w-full rounded-[10px]" alt={title} />
                <div className="card-content">
                    <div className="author-date">
                        <span>{author}</span>
                        <img src={dotIcon} alt="dot" className="dot-icon" />
                        <span>{date}</span>
                    </div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{content}</p>
                    <div className="read-more">
                        <Link to="/blog-details" className="text-blue text-base">Read More</Link>
                        <img src={chevronIcon} alt="chevron" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureCard;
