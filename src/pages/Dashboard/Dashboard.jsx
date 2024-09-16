import React, { useEffect } from "react";
// import Image1 from "../../assets/guru_image.png";
import Image1 from "../../assets/guru_image-removebg.png";
import Mentor from "../../common-components/mentor/Mentors";
import Involved from "../../common-components/mentor/Involved";
import Working from "../../common-components/mentor/Working";
import { Link } from "react-router-dom";
import { GetLoginType } from "../../utility/GetLoginType";
import HowWorks from "../../common-components/mentor/HowWorks";
import StepInvolved from "../../common-components/mentor/StepInvolved";
import Guide from "../../common-components/mentor/Guide";
import MostPopular from "../../common-components/mentor/MostPopular";
import HowItWorks from "../../common-components/mentor/HowItWorks";
import TestiMonal from "../../assets/testomonal-banner-hd.png";
import NamasteLeaner from "../../common-components/mentor/NamasteLeaner";

const Dashboard = () => {
  const getLoginType = GetLoginType();
  console.log("getLoginType", getLoginType);
  return (
    <div className="overflow-y-auto h-full w-full">
      {/* Header Section */}
      <div className="w-full h-fit lg:h-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="flex justify-center h-full pl-10 sm:pt-12 lg:pt-28">
          <div className="text-white text-left w-full pt-10">
            <h1 className="dashboard-home-content-font text-wrap">
              Welcome To
              <p className="text-[#124E66] text-wrap dashboard-asktomentor-font">
                AskToMentor
              </p>
            </h1>
            <pre className="font-medium italic text-wrap text-[24px] leading-[42px]">
              Where Curiosity Meets Knowledge
            </pre>
            <p className="font-medium italic text-[18px] leading-[30px]">
              Share your knowledge, guide others, and help shape the future of
              learners. As a mentor on our platform, you can!
            </p>
            {/* <p className="text-lg mb-2 text-white italic">
              <span className="gradient-text1 text-xl">{"{ "}</span>
              Facing uncertainties in your day-to-day tasks, learning, job, or
              career?
              <span className="gradient-text1 text-xl">{" }"}</span>
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
              Are you a learner?
            </h2>
            <p className="mb-2">
              Enhance your skills, get personalized guidance, and achieve your
              career<br></br> goals. As a mentee on our platform, you can:
            </p> */}

            {/* <ul className="list-disc list-inside mb-6">
              <li>Receive guidance from experienced mentors</li>
              <li>Access a wide range of learning resources</li>
              <li>Participate in interactive sessions and webinars</li>
              <li>Connect with a community of learners</li>
            </ul> */}
            <button className="bg-[#124E66] hover:bg-[#0F3A4D] text-white py-2 px-4 rounded mt-8">
              <Link to="/login" className="text-white text-base">
                {getLoginType == "Mentee" ? "Join as Mentee" : "Join as Mentor"}{" "}
              </Link>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex h-[400px] sm:h-full w-full items-center justify-center sm:justify-end">
          <img
            src={Image1}
            alt="Icon"
            className="h-[600px] fle justify-center items-center sm:h-[600px] lg:h-[1000px] mt-10 sm:mt-0 mr-16 sm:mr-0"
          />
        </div>
      </div>
      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <Guide />
      </div>
      <div className="">
        <Mentor />
      </div>
      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <MostPopular />
      </div>
      {/* <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <Involved />
      </div> */}

      <div className="">
        <StepInvolved />
      </div>
      {/* <div className="px-2 mb-16 lg:mb-1 md:px-14">
        <Working />
      </div> */}
      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <HowItWorks />
      </div>
      <div className="px-2 mb-16 lg:mb-5 md:px-14">
        <HowWorks />
      </div>
      <div className="w-full pb-10">
        <h1 className="common-text-linear-gradient px-2 sm:px-4 md:px-8 lg:px-14">
          Testimonials
        </h1>
        <img
          src={TestiMonal}
          alt="Why Choose Us"
          className="w-full sm:h-[500px] md:h-[750px] rounded-lg mt-5 mb-5"
        />
      </div>
      <div className="px-2 sm:px-4 md:px-8 lg:px-14">
        <NamasteLeaner />
      </div>
      
    </div>
  );
};

export default Dashboard;
