import React from "react";
import maskGroup from "../assets/mask-group.svg";
import blogImage from "../assets/rectangle-159.svg";

const FeaturedBlog = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 mt-10 rounded-lg">
      <div className="w-full h-full flex items-center justify-between p-10 gap-10 bg-[#2F3943]  rounded-lg">
        {/* Blog Image */}
        <img
          src={blogImage}
          className="w-[607px] h-[431px] rounded-[20px] mr-10"
          alt="Blog"
        />
        {/* Blog Content */}
        <div className="ml-5 text-white flex-grow">
          <h2 className="font-sans text-[28px] font-semibold ">
            Featured Blog
          </h2>
          <h3 className="text-[27px] font-sans font-semibold mb-6">
            How to design a simple, yet unique and memorable website
          </h3>
          <p className="font-outfit font-normal text-[16px] leading-[30px] text-justify mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            bibendum vulputate felis ac finibus. Vestibulum vitae ultricies sem.
            Donec porttitor scelerisque leo ac tincidunt. Vivamus egestas
            gravida lacus, ut luctus orci pharetra vel. In sit amet dui vel
            lorem posuere tincidunt.
          </p>
          <div className="flex items-center">
            <img
              src={maskGroup}
              alt="Emily Wilson"
              className="w-[58px] h-[58px] rounded-full"
            />
            <div className="ml-3">
              <span className="block font-outfit font-medium text-[24px] leading-[33.48px]">
                Emily Wilson
              </span>
              <span className="block font-outfit font-medium text-[16px] leading-[33.48px] text-white">
                Sept 16, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
