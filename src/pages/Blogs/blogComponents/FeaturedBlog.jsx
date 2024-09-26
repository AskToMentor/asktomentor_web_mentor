import React from 'react';
import maskGroup from '../assets/mask-group.svg';
import blogImage from '../assets/rectangle-159.svg';

const FeaturedBlog = () => {
  return (
    <div className="mt-5 mb-10">
      <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
        <div 
          className="flex flex-col bg-[#2F3943] w-[1250px] h-[551px] p-8 rounded-tl-[26px] rounded-br-none"
        >
          <div className="w-full h-full flex items-center justify-between p-5 bg-gradient-to-b from-[#8AA4AB44] to-transparent rounded-tl-[26px]">
            {/* Blog Image */}
            <img 
              src={blogImage} 
              className="w-[607px] h-[431px] rounded-[20px] flex-shrink-0 mr-10" 
              alt="Blog" 
            />
            {/* Blog Content */}
            <div className="ml-5 text-white flex-grow">
              <h2 className="font-outfit text-[28px] font-semibold mb-8">Featured Blog</h2>
              <h3 className="font-outfit text-[30px] font-semibold mb-6">
                How to design a simple, yet unique and memorable website
              </h3>
              <p className="font-outfit font-normal text-[18px] leading-[30px] text-justify mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum vulputate felis ac finibus.
                Vestibulum vitae ultricies sem. Donec porttitor scelerisque leo ac tincidunt. Vivamus egestas gravida lacus,
                ut luctus orci pharetra vel. In sit amet dui vel lorem posuere tincidunt.
              </p>
              <div className="flex items-center">
                <img src={maskGroup} alt="Emily Wilson" className="w-[58px] h-[58px] rounded-full" />
                <div className="ml-3">
                  <span className="block font-outfit font-medium text-[24px] leading-[33.48px]">Emily Wilson</span>
                  <span className="block font-outfit font-medium text-[16px] leading-[33.48px] text-white">
                    Sept 16, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
