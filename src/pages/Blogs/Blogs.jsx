import React from "react";
import FeaturedBlog from "./blogComponents/FeaturedBlog";
import LatestBlogs from "./blogComponents/LatestBlogs";
import Newsletter from "./blogComponents/Newsletter";
import heroImage from "./assets/blog_img.png";
import CardList from "./blogComponents/CardList";
import JoinCommunity from "./blogComponents/JoinCommunity";
import NamasteLeaner from "../../common-components/mentor/NamasteLeaner";
import Footer from "../../common-components/Footer";
// import DesignDiagram from './blogComponents/DesignDiagram';

const Blogs = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      {/* Header Section */}
      <div className=" namaste-learner-gradient w-full h-auto lg:h-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 items-center px-2 sm:px-4 md:px-8 lg:px-14 mb-8">
        {/* Left Section - Heading */}
        <div className="text-left w-full pt-10 ">
          <h1 className="dashboard-home-content-font text-wrap">
            Empower Your
            <p className="text-[#124E66] text-wrap dashboard-asktomentor-font">
              Learning Journey
            </p>
          </h1>
          {/* Paragraph */}
          <p className="font-medium italic text-[20px] leading-[30px] mt-4">
            Unlock the potential within you with mentorship stories, tips, and
            guidance from experienced professionals.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src={heroImage}
            alt="Hero Image"
            className=" w-full flex justify-center items-center sm:h-[550px] mt-10 sm:mt-6"
          />
          {/* <div className="bg-transparent">
            <DesignDiagram />
          </div> */}
        </div>
      </div>

      <div className="px-2 sm:px-4 md:px-8 lg:px-14 my-8">
        <h1 className="common-text-linear-gradient font-semibold">
          Featured Blog
        </h1>
        <FeaturedBlog />
      </div>

      <div className="px-2 sm:px-4 md:px-8 lg:px-14 my-8">
        <h1 className="common-text-linear-gradient font-semibold">
          Read Our Latest Blogs
        </h1>
        <LatestBlogs />
      </div>

      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <CardList />
      </div>

      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <Newsletter />
      </div>

      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <NamasteLeaner />
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};

export default Blogs;
