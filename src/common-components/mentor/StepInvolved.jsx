import React from "react";
import Lottie from "lottie-react";
import animation1 from "../../../public/animation1.json";
import animation2 from "../../../public/animation2.json";
import animation3 from "../../../public/animation3.json";
import animation4 from "../../../public/animation4.json";

const StepInvolved = () => {
  return (
    <div className="bg-[#748D9299] px-2 sm:px-4 md:px-8 lg:px-14 py-10">
      <h1 className="common-text-linear-gradient">Steps Involved</h1>
      <div className="text-white mt-4 mb-10">
        <div className="grid sm:grid-cols-2 desktop-sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-[#212A31] p-5 rounded-lg text-center">
            <div className="w-[12rem] mb-7 mt-5">
              <Lottie animationData={animation3} />
            </div>
            <h3 className="text-xl font-semibold text-[24px] text-left mt-4 ">
              Ask questions from mentors
            </h3>
            <div className="h-[5px] w-[50%] border-[#748D9299] border-b-[2px] my-5">
                
            </div>
            <p className="text-gray-400 text-left text-[14px] mt-2">
              Ask detailed questions and get personalized answers from our
              mentors.
            </p>
          </div>

          <div className="bg-[#212A31] p-5 rounded-lg text-center">
            <div className="w-[8rem]">
              <Lottie animationData={animation2} />
            </div>
            <h3 className="text-xl font-semibold text-[24px] text-left mt-4">
              Ask questions from mentors
            </h3>
            <div className="h-[5px] w-[50%] border-[#748D9299] border-b-[2px] my-5">
                
            </div>
            <p className="text-gray-400 text-left mt-5">
              Ask detailed questions and get personalized answers from our
              mentors.
            </p>
          </div>
          <div className="bg-[#212A31] p-5 rounded-lg text-center">
            <div className="w-[8rem]">
              <Lottie animationData={animation1} />
            </div>
            <h3 className="text-xl font-semibold text-[24px] text-left mt-4">
              Personalized Guidance
            </h3>
            <div className="h-[5px] w-[50%] border-[#748D9299] border-b-[2px] my-5">
                
            </div>
            <p className="text-gray-400 text-left mt-5">
              Receive tailored advice and strategies to overcome your learning
              challenges.
            </p>
          </div>
          <div className="bg-[#212A31] p-5 rounded-lg text-center">
            <div className="w-[8rem]">
              <Lottie animationData={animation4} />
            </div>{" "}
            <h3 className="text-xl font-semibold text-[24px] text-left mt-4">
              Access Learning Resource
            </h3>
            <div className="h-[5px] w-[50%] border-[#748D9299] border-b-[2px] my-5">
                
            </div>
            <p className="text-gray-400 text-left mt-5">
              Explore blogs, articles, and educational content curated by our
              mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepInvolved;
