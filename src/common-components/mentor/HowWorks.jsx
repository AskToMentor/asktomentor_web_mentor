import React from "react";
import mentorImage from "../../gif-assets/men.gif";
import questionImage from "../../gif-assets/m.png";
import personImage from "../../gif-assets/g.gif";
import image1 from "../../assets/ph2.png";
import image2 from "../../assets/ph1.png";
import image3 from "../../assets/ph3.png";

const HowWorks = () => {
  return (
    <div>
      <div className="whyus-App">
        <h1 className="common-text-linear-gradient">Why Choose Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-20 mt-5">
          <div className="whyus-feature expert-mentors pt-28 h-[650px] bg-[#3B4950]">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="">
              <img
                src={image1}
                alt="Question Icon"
                className="h-[300px] ml-8"
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans font-bold text-left !text-ask-to-mentor-primary">
                Expert Mentors
              </h3>
              <p className="!text-[14px] font-sans text-left">
                We hire experienced professionals. Hence, no need to worry
              </p>
            </div>
          </div>
          <div className="whyus-feature one-on-one-mentoring pt-28 h-[650px] bg-[#3B4950]">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="">
              <img
                src={image2}
                alt="Question Icon"
                className="h-[300px] ml-8"
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans font-bold text-left !text-ask-to-mentor-primary">
                1 : 1 Mentoring
              </h3>
              <p className="!text-[14px] font-sans  text-left">
                {" "}
                You can ask questions and get personalized answers from our
                mentors one on one.
              </p>
            </div>
          </div>
          <div className="whyus-feature flexible-plans h-[650px] pt-28 bg-[#3B4950] col-start-1 col-span-2 lg:col-span-1">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="">
              <img
                src={image3}
                alt="Personalized Icon"
                className="h-[300px] ml-8"
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans font-bold text-left !text-ask-to-mentor-primary">
                Career Advice / Guidance
              </h3>
              <p className="!text-[14px] font-sans  text-left">
                Choose from various subscription plans to suit your schedule and
                budget
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
