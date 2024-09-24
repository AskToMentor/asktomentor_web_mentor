import React from 'react'
import './blogComponents/style/style.css';

import BlogContent from './blogComponents/BlogContent';
import JoinCommunity from './blogComponents/JoinCommunity';
import dummy2 from './assets/dummy-2-1.svg';
import dummy6 from './assets/dummy-6-1.svg';
import maskGroup from './assets/mask-group.svg';


const BlogDetails = () => {
  return (
    <>
      <div className="overflow-y-auto h-full w-full">
        {/* Header Section */}
          <div className="blog-details mt-4">
            <h4 className="blog-title">Explore / Blogs / Blog Details</h4>
            <h1 className="blog-title">Inspiring UX Case Studies That Every Designer Should Study</h1>
            <div className="author-info">
                <img src={maskGroup} alt="Emily Wilson" />
                <div className="author-details">
                  <span className="author-name">Emily Wilson </span>
                  <span className="publish-date"> Sept 16, 2024 </span> .
                  <span className="duration"> 5 min read</span>
                </div>
              </div>
            <div className="main-content">
              <img src={dummy2} className="main-image" alt="Main Blog" />
              <BlogContent />
              <img src={dummy6} className="additional-image" alt="Additional Blog" />
            </div>
          </div>

        <div className="px-2 sm:px-4 md:px-8 lg:px-14">
          <JoinCommunity />
        </div>
      </div>
    </>
  )
}

export default BlogDetails
