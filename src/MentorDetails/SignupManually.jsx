import React, { useState } from "react";
import "../MentorDetails/signup-manually.css";
import Skills from "./skill";
// import logo from './personal_profile.png';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Appservices from "./Appservices";
import Finish from "./Finish";

const ManuallySignUpForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const activeColor = (index) =>
    step >= index ? "bg-[#00c896]" : "bg-gray-300";
  const processSteps = [
    "Start",
    "Personal info",
    "Skills",
    "Services",
    "Finish",
  ];
  console.log("step", step);
  return (
    <div className="flex flex-col md:flex-row p-3 lg:p-0 w-full lg:w-[90%] max-w-[1200px] bg-[#1a1a1a] overflow-hidden text-white min-h-[500px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] mx-auto lg:my-[50px] rounded-[10px]">
      <div className="sidebar pt-[3rem] flex flex-col items-center md:items-start md:flex-row justify-center w-full md:w-[25%] bg-[#252525] ">
        {/* <ul>
          <li className={step === 1 ? "active" : step > 1 ? "completed" : ""}>
            Start
          </li>
          <li className={step === 2 ? "active" : step > 2 ? "completed" : ""}>
            Personal info
          </li>
          <li className={step === 3 ? "active" : step > 3 ? "completed" : ""}>
            Skills
          </li>
          <li className={step === 4 ? "active" : step > 4 ? "completed" : ""}>
            Services
          </li>
          <li className={step === 5 ? "active" : step > 5 ? "completed" : ""}>
            Finish
          </li>
        </ul> */}
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
                    className={`w-10 mobile-lg:w-16 h-1 mt-2 ${activeColor(index + 1)} ${
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
                  className={`w-6 h-6 rounded-full ${activeColor(index + 1)} `}
                ></span>
                <p>{item}</p>
              </div>
              <div
                className={`w-1 h-12 ml-[10px] ${activeColor(index + 1)} ${
                  processSteps?.length == index + 1 ? "hidden" : "block"
                }`}
              ></div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full md:w-9/12 bg-[#2c2c2c] flex flex-col relative p-4">
        {step === 2 && (
          <div className="personal-info">
            <div className="profile-image">
              <img src="./profile-logo.png" alt="Profile" />
              <p>Select profile image</p>
            </div>
            <div className="form-group">
              <label>About yourself</label>
              <textarea placeholder="Briefly about yourself                                                          0/256"></textarea>
            </div>
            <div className="form-group">
              <label>Social media links</label>
              <input
                type="text"
                placeholder="Facebook                                                                                                                                            Optional"
              />
              <input
                type="text"
                placeholder="Instagram                                                                                                                                           Optional"
              />
              <input
                type="text"
                placeholder="LinkedIn                                                                                                                                              Optional"
              />
            </div>
            <div className="form-group">
              <label>Referral code</label>
              <input type="text" placeholder="Enter referral code...." />
            </div>
          </div>
        )}

        {step === 3 && <Skills />}
        {step === 4 && <Appservices />}
        {step === 5 && <Finish />}

        <div className="form-navigation">
          {step > 1 && (
            <button className="backbutton" onClick={prevStep}>
              <ArrowBackIosIcon />
            </button>
          )}
          {step < 5 && (
            <button className="backbutton" onClick={nextStep}>
              <ArrowForwardIosIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManuallySignUpForm;
