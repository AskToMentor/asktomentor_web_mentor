import React from "react";
import { Link } from "react-router-dom";
import "./style/BlogContent.css";
import dummy6 from "../assets/dummy-6-1.svg";
import maskGroup from "../assets/mask-group.svg";
import socials from "../assets/footer-socials.svg";

const BlogContent = () => {
  return (
    <div className="grid grid-cols-8 gap-10">
      <div className="col-span-2 w-full">
        {/* Summary Section */}
        <div className="author-container  mb-10 flex flex-col p-7 rounded-lg">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-semibold text-left">Summary</h2>
            <p className="text-left text-white mt-2 w-full ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
              lobortis arcu. Sed in eros fermentum, hendrerit metus nec,
              tincidunt lectus.
            </p>
          </div>
        </div>

        {/* Share This Article Section */}
        <div className="author-container h-fit p-7 rounded-lg mt-10 mb-10">
          <div className="author-details">
            <div className="flex flex-col gap-3">
              <h2 className="text-left font-semibold">Share This Article</h2>
              <img
                src={socials}
                alt="Social Icons"
                className="social-icons mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6">
        <div className="blog-content mb-10 w-full">
          <h2 className="mb-6 !text-[22px] !font-sans">What Makes a Powerful Case Study</h2>
          <p className="mb-6 !text-[#FFFFFFCC]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lobortis venenatis lorem non commodo. Etiam rutrum non quam accumsan
            posuere. Phasellus id velit et justo consectetur dictum accumsan vel
            odio.
          </p>
          <div className="mb-10 text-[15px] flex flex-col gap-1 font-medium !text-white">
            <li>Become familiar with our systems, style & process</li>
            <li>
              Participate in Continuous Discovery Habits; coaching others on
              qualitative research.
            </li>
            <li>
              Lead your own discovery & interviews with members to understand
              pains, gains & Jobs to be done.
            </li>
            <li>
              Guide research activities to define current member pain points and
              map ideal future experiences.
            </li>
          </div>
          <hr />
          <h2 className="mt-5 mb-5 !text-[25px] !font-sans">Best UX Case Studies for Designers</h2>
          <p className="mb-10">
            The best way to understand what a good case study looks like is to
            go over other examples. Each of these UX case study examples shows a
            designer's insights, basic skills, and other designers' lessons
            learned through their experience.
          </p>
          <h3 className="mb-10 !text-[25px] !font-sans">1. Lorem ipsum dummy text</h3>
          <img
            src={dummy6}
            className="additional-image"
            alt="Additional Blog"
          />

          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lobortis venenatis lorem non commodo. Etiam rutrum non quam accumsan
            posuere. Phasellus id velit et justo consectetur dictum accumsan vel
            odio.
          </p>
        </div>
        <hr />
        <div className="author-container flex flex-row mt-10 mb-10 h-[180px] p-4 gap-7 rounded-lg">
          <div className="">
            <img src={maskGroup} alt="Emily Wilson" className="!rounded-2xl h-full" />
          </div>
          <div className="flex flex-col items-start justify-between py-3">
            <div className="flex flex-col items-start justify-between h-full  w-full">
              <span className="text-[25px] font-sans font-medium">Emily Wilson</span>
              <p className="text-[#FFFFFFCC] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                eget lobortis arcu. Sed in eros fermentum, hendrerit metus nec,
                tincidunt lectus.
              </p>
              <div className="flex justify-between w-full">
                <Link to="/" className="more-by-author !text-[#FFFFFF]">
                  More By Emily Wilson
                </Link>
                <img
                  src={socials}
                  alt="Social Icons"
                  className="social-icons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
