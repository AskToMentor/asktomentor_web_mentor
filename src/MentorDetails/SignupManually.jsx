import React, { useState } from "react";
import "../MentorDetails/signup-manually.css";
import Skills from "./skill";
// import logo from './personal_profile.png';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Finish from "./finish";
import AppServices from "./appservices";
import MentorSlides from "../common-components/mentor-sliders/MentorSlides";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ManuallySignUpForm = ({}) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const activeColor = (index) =>
    step >= index ? "bg-ask-to-mentor-primary" : "bg-gray-300";
  const processSteps = [
    "Start",
    "Personal info",
    "Skills",
    "Services",
    "Finish",
  ];
  console.log("step", step);
  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-16 lg:mb-0 flex flex-col md:flex-row p-3 lg:p-0 w-full lg:w-[90%] max-w-[1200px] bg-[#212a31] overflow-hidden text-white min-h-[500px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] mx-auto lg:my-[50px] rounded-[10px]">
        <div className="sidebar pt-[3rem] flex flex-col items-center md:items-start md:flex-row justify-center w-full md:w-[25%]  ">
          <div className="flex md:hidden items-start flex-row">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-4 items-center ">
                  <div className="flex ">
                    <div className={`h-fit flex flex-col items-center`}>
                      <span
                        className={`w-6 h-6 rounded-full ${activeColor(
                          index + 1
                        )} `}
                      ></span>
                    </div>
                    <div
                      className={`w-10 mobile-lg:w-16 h-1 mt-2 ${activeColor(
                        index + 1
                      )} ${
                        processSteps?.length == index + 1 ? "hidden" : "block"
                      }`}
                    ></div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex md:hidden items-start gap-3 mobile-lg:gap-6 flex-row">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col text-[13px] mobile-lg:text-[16px] gap-5 items-center">
                  <p>{item}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="hidden md:flex items-start flex-col">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`w-fit gap-4 h-fit flex`}>
                  <span
                    className={`w-8 h-8  flex justify-center  items-center rounded-full  ${activeColor(
                      index + 1
                    )} `}
                  >
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </div>
                <div
                  className={`h-16 border-dashed border-[1px] ml-[15px] ${activeColor(
                    index + 1
                  )} ${processSteps?.length == index + 1 ? "hidden" : "block"}`}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-full md:w-9/12 bg-[#212a3] flex flex-col relative p-4">
          {step === 1 && (
            <div className="flex justify-between">
              <div>
                <p className="text-[25px] font-semibold">Let's get started!</p>
                <p>Just enter your basic details to create your account</p>
              </div>
              <div>
                <button className="bg-ask-to-mentor-primary text-white py-3 w-fit rounded-full  mx-auto block">
                  Import from LinkedIn
                </button>
              </div>
            </div>
          )}

          {step === 1 && <MentorSlides nextStep={nextStep} />}
          {step === 2 && (
            <div className="personal-info login-container rounded-[10px] p-3 px-16 pb-10">
              <div className="flex items-center justify-between gap-3">
                <div className="form-group">
                  <h1 className="text-[32px] font-semibold">Connect with us</h1>
                  <p className="text-white text-[16px] font-normal leading-[27.24px]">
                    Share a bit about your background and passions.
                  </p>
                </div>
                <div className="profile-image text-white flex justify-center items-end flex-col">
                  {/* <input type="file" className="h-[110px] !bg-[#5B636A] text-[#5B636A]  z-50 w-[110px] rounded-full"/> */}
                  <div className="h-[110px] !bg-[#5B636A] text-[#5B636A]  z-50 w-[110px] flex justify-end rounded-full border-[2px] border-[#748D92]"></div>
                  <p>Add profile picture </p>
                </div>
              </div>
              <div className="form-group">
                <label>About yourself</label>
                <textarea
                  placeholder="Tell us about yourself, your interest, your experiences"
                  className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
                ></textarea>
              </div>
              <div>
                <label>Social media links</label>
                <div className="flex flex-col gap-6 mt-2">
                  <input
                    type="text"
                    placeholder="Enter your Facebook ID"
                    className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter your Instagram ID"
                    className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter your Instagram ID"
                    className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && <Skills />}
          {(step === 4 || step === 5 || step === 6 || step === 7) && (
            <AppServices nextStep={nextStep} prevStep={prevStep} step={step} />
          )}
          {step === 8 && <Finish />}
          <div className="flex justify-between mt-8">
            {step < 8 && (
              <div>
                <button
                  className="bg-ask-to-mentor-primary w-[100px] h-11 flex justify-center items-center"
                  onClick={() => {
                    navigate("/mentor-profile");
                  }}
                >
                  Skip
                </button>
              </div>
            )}
            <div className="flex gap-5 ">
              {step > 1 && step < 8 && (
                <button
                  className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                  onClick={prevStep}
                >
                  <IoIosArrowDropleft className="text-[28px]" />
                </button>
              )}
              {step < 8 && step > 1 && (
                <button
                  className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                  onClick={nextStep}
                >
                  <IoIosArrowDropright className="text-[28px]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuallySignUpForm;
