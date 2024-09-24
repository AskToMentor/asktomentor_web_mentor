import React from 'react';
import './blogComponents/style/style.css';
import FeaturedBlog from './blogComponents/FeaturedBlog';
import LatestBlogs from './blogComponents/LatestBlogs';
import Newsletter from './blogComponents/Newsletter';
import heroImage from './assets/idea-2-1.svg';
import CardList from './blogComponents/CardList';
import JoinCommunity from './blogComponents/JoinCommunity';


const Blogs = () => {
  return (
    <>
      <div className="overflow-y-auto h-full w-full">
        {/* Header Section */}
        <div className="w-full h-auto lg:h-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center px-10 my-8">
          <div className="text-white text-left w-full pt-10 px-10">
            <h1 className="common-text-linear-gradient italic px-20 text-7xl leading-tight">
              <b className="block">Empower Your</b>
              <b className="block">Learning Journey</b>
            </h1>
            <p className="font-medium text-wrap">Unlock the potential within you with mentorship stories, tips, and guidance from experienced professionals.</p>
          </div>

          {/* Right Section */}
          <div className="flex h-full w-full items-center justify-center sm:justify-end bg-transparent">
            <img
              src={heroImage}
              alt="Icon"
              className="h-[600px] fle justify-center items-center sm:h-[550px] lg:h-[650px] mt-10 sm:mt-16 bg-transparent" // Ensure bg-transparent is applied
            />
          </div>

        </div>
        <div className="px-2 sm:px-4 md:px-8 lg:px-14 my-8">
          <h1 className="common-text-linear-gradient font-semibold">Featured Blog</h1>
          <FeaturedBlog />
        </div>

        <div className="px-2 sm:px-4 md:px-8 lg:px-14 my-8">
          <h1 className="common-text-linear-gradient font-semibold">Read Our Latest Blogs</h1>
          <LatestBlogs />
        </div>

        <div className="px-2 sm:px-4 md:px-8 lg:px-14">
          <CardList />
        </div>
        <div className="px-2 sm:px-4 md:px-8 lg:px-14">
          <Newsletter />
        </div>
        <div className="px-2 sm:px-4 md:px-8 lg:px-14">
          <JoinCommunity />
        </div>
      </div>
    </>
  );
};

export default Blogs;
