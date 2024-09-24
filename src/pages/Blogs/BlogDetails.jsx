import React from 'react'
import './blogComponents/style/style.css';

import BlogContent from './blogComponents/BlogContent';
import JoinCommunity from './blogComponents/JoinCommunity';
import dummy2 from './assets/dummy-2-1.svg';
import maskGroup from './assets/mask-group.svg';


const BlogDetails = () => {
  return (
    <>
      <div className="overflow-y-auto h-full w-full">
        {/* Header Section */}
        <div className="blog-details mt-10 px-20 leading-tight">
          <h4 className="italic mb-5">Explore / Blogs / Blog Details</h4>
          <p className="blog-title text-wrap text-5xl">Inspiring UX Case Studies That </p>
          <p className="blog-title text-wrap text-5xl"> Every Designer Should Study</p>
          <div className="row author-info">
            <img src={maskGroup} alt="Emily Wilson" />
            <div className="author-details">
              <span className="author-name">Emily Wilson</span>
              <span className="author-date">Sept 16, 2024</span>
              <span className="author-duration">. 5 min read</span>
            </div>
          </div>


          <div className="main-content mt-10">
            <img src={dummy2} className="main-image mb-20" alt="Main Blog" />
            <BlogContent />
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
