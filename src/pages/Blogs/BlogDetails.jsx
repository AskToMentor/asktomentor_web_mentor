import React from "react";
import "./blogComponents/style/style.css";

import BlogContent from "./blogComponents/BlogContent";
import JoinCommunity from "./blogComponents/JoinCommunity";
import dummy2 from "./assets/dummy-2-1.svg";
import maskGroup from "./assets/mask-group.svg";
import NamasteLeaner from "../../common-components/mentor/NamasteLeaner";
import Footer from "../../common-components/Footer";

const BlogDetails = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      {/* Header Section */}
      <div className="blog-details mt-10 px-20 leading-tight">
        <h4 className="italic mb-5">Explore / Blogs / Blog Details</h4>
        <p className="blog-title text-wrap text-5xl">
          Inspiring UX Case Studies That{" "}
        </p>
        <p className="blog-title text-wrap text-5xl">
          {" "}
          Every Designer Should Study
        </p>
        <div className="row author-info flex flex-row">
          <img src={maskGroup} alt="Emily Wilson" />
          <div className="author-details flex flex-row items-center gap-2 ">
            <span className="tex-[16px]">Emily Wilson</span>
            <span className="tex-[15px]">Sept 16, 2024</span>
            <span className="tex-[15px]">. 5 min read</span>
          </div>
        </div>

        <div className="w-full flex items-center flex-col justify-center mt-10">
          <img src={dummy2} className="main-image mb-20" alt="Main Blog" />
          <BlogContent />
        </div>
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

export default BlogDetails;
