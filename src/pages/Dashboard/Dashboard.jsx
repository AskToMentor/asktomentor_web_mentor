import React from "react";
import Image1 from "../../assets/learners 2.png";
import Mentor from "../../common-components/mentor/Mentors";
import Involved from "../../common-components/mentor/Involved";
import Working from "../../common-components/mentor/Working";
import { Link } from "react-router-dom";
import { GetLoginType } from "../../utility/GetLoginType";

const Dashboard = () => {
  const getLoginType = GetLoginType();
  console.log("getLoginType", getLoginType);
  return (
    <div className="overflow-y-auto h-full w-full">
      {/* Header Section */}
      <div className="px-4 md:px-5 mt-6 lg:mt-0 w-full xl:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex justify-end">
          <div className="text-white text-left w-full">
            <h1
              className="text-4xl mb-2"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Welcome To AskToMentor
            </h1>
            <pre className="text-lg mb-2 italic text-wrap gradient-text1">
              (Where Curiosity Meets Knowledge)
            </pre>
            <p className="text-lg mb-2 text-white italic">
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
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>Receive guidance from experienced mentors</li>
              <li>Access a wide range of learning resources</li>
              <li>Participate in interactive sessions and webinars</li>
              <li>Connect with a community of learners</li>
            </ul>
            <button className="bg-[#124E66] hover:bg-[#0F3A4D] text-white py-2 px-4 rounded">
              <Link to="/login" className="text-white text-base">
                {getLoginType == "Mentee"
                  ? "Join as Mentee"
                  : "Join as Mentor"}{" "}
              </Link>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex w-full items-center lg:items-end justify-center lg:justify-end mb-4">
          <img
            src={Image1}
            alt="Icon"
            className="w-[28rem] xl:w-[35rem] h-[28rem] xl:h-[30rem] mt-[2rem] lg:mt-[3rem]"
          />
        </div>
      </div>
      <div className="px-2 md:px-5">
        <Mentor />
      </div>
      <div className="px-2 md:px-5">
        <Involved />
      </div>
      <div className="px-2 mb-16 lg:mb-1 md:px-5">
        <Working />
      </div>
    </div>
  );
};

export default Dashboard;
