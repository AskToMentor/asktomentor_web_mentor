import React from 'react';
import { Link } from "react-router-dom";
import chevronIcon from '../assets/icon-ionicons-outline-chevron-forward-outline.svg';
import dotIcon from '../assets/ellipse-109.svg';

const FeatureCard = ({ date, author, title, content, imgSrc }) => {
    return (
        <div className="flex flex-col justify-between bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-[-5px] w-[998px] h-[395px] opacity-0">
            <img src={imgSrc} className="w-full h-[200px] object-cover border-b-2 border-gray-600" alt={title} />
            <div className="p-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>{author}</span>
                    <span className="w-1 h-1 bg-gray-400 inline-block"></span>
                    <span>{date}</span>
                </div>
                <h3 className="text-white text-lg mt-2 mb-1">{title}</h3>
                <p className="text-gray-300 text-base mb-4">{content}</p>
                <div className="flex items-center justify-between text-blue-500 text-sm">
                    <Link to="/blog-details" className="hover:underline">Read More</Link>
                    <img src={chevronIcon} alt="chevron" className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;
