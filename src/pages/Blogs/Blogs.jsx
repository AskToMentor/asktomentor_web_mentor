import React from 'react';
import FeaturedBlog from './blogComponents/FeaturedBlog';
import LatestBlogs from './blogComponents/LatestBlogs';
import Newsletter from './blogComponents/Newsletter';
// import heroImage from './assets/idea-2-1.svg';
import CardList from './blogComponents/CardList';
import JoinCommunity from './blogComponents/JoinCommunity';
import DesignDiagram from './blogComponents/DesignDiagram'; // Uncomment if using DesignDiagram

const Blogs = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      {/* Header Section */}
      <div className="w-full h-auto lg:h-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center px-10 my-8">
        {/* Left Section - Heading */}
        <div className="text-left w-full pt-10 px-10">
          <h1 className="common-text-linear-gradient italic text-[74px] font-normal leading-[87.74px] text-transparent bg-clip-text bg-gradient-to-r from-[#D3D9D5] to-[#124E66] opacity-0">
            <b className="block">Empower Your</b>
            <b className="block">Learning Journey</b>
          </h1>

          {/* Paragraph */}
          <p className="font-medium text-[28px] leading-[35.2px] text-left opacity-0 mt-10">
            Unlock the potential within you with mentorship stories, tips, and guidance from experienced professionals.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex h-full w-full items-center justify-center sm:justify-end bg-transparent">
          {/* <img
            src={heroImage}
            alt="Hero Image"
            className="h-[600px] w-full flex justify-center items-center sm:h-[550px] lg:h-[650px] mt-10 sm:mt-16"
          /> */}
          <div className="bg-transparent">
            <DesignDiagram />
          </div>
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
  );
};

export default Blogs;
