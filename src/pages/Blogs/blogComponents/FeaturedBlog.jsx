import React from 'react';
import './style/FeaturedBlog.css';
import maskGroup from '../assets/mask-group.svg';
import blogImage from '../assets/rectangle-159.svg';

const FeaturedBlog = () => {
  return (
    <div className="mt-5 mb-10">
      <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
        <div className="h-fit flex flex-col bg-[#2F3943] w-full p-8 rounded-lg">
          <div className="featured-blog-container mt-4">
            <img src={blogImage} className="blog-image" alt="Blog" />
            <div className="blog-content mx-5">
              <h3 className="blog-subtitle">How to design a simple, yet unique and memorable website</h3>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum vulputate felis ac finibus.
                Vestibulum vitae ultricies sem. Donec porttitor scelerisque leo ac tincidunt. Vivamus egestas gravida lacus,
                ut luctus orci pharetra vel. In sit amet dui vel lorem posuere tincidunt.
              </p>
              <div className="author-info">
                <img src={maskGroup} alt="Emily Wilson" />
                <div className="author-details">
                  <span className="author-name">Emily Wilson</span>
                  <span className="publish-date">Sept 16, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;
