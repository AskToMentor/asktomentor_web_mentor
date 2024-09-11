import React from "react";
import mentorImage from "../../gif-assets/men.gif";
import questionImage from "../../gif-assets/m.png";
import personImage from "../../gif-assets/g.gif";

const HowWorks = () => {
  return (
    <div>
      <div className="whyus-App">
        <h2 className="text-white font-semibold pl-5 text-2xl">
          Why To Choose Us
        </h2>
        <div className="whyus-features mt-5">
          <div className="whyus-feature expert-mentors h-[600px] bg-[#3B4950]">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="whyus-feature-icon">
              <img
                src={mentorImage}
                alt="Mentor Icon"
                className="whyus-feature-icon-img1 "
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans text-left !text-ask-to-mentor-primary">Expert Mentors</h3>
              <p className="!text-[14px] font-sans text-left">We hire experienced professionals. Hence, no need to worry</p>
            </div>
          </div>
          <div className="whyus-feature one-on-one-mentoring h-[600px] bg-[#3B4950]">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="whyus-feature-icon mt-[20%]">
              <img
                src={questionImage}
                alt="Question Icon"
                className="whyus-feature-icon-img"
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans text-left !text-ask-to-mentor-primary">1 : 1 Mentoring</h3>
              <p className="!text-[14px] font-sans text-left"> You can ask questions and get personalized answers from our
              mentors one on one.</p>
            </div>
          </div>
          <div className="whyus-feature flexible-plans h-[600px] bg-[#3B4950]">
            {" "}
            {/* Use unique class names for each feature */}
            <div className="whyus-feature-icon mt-[40%]">
              <img
                src={personImage}
                alt="Personalized Icon"
                className="whyus-feature-icon-img"
              />
            </div>
            <div className="flex justify-start items-start flex-col bg-[#2F3943] p-3 rounded-lg shadow-lg mt-5">
              <h3 className="!text-[18px] font-sans text-left !text-ask-to-mentor-primary">Career Advice / Guidance</h3>
              <p className="!text-[14px] font-sans text-left">Choose from various subscription plans to suit your schedule and
              budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
