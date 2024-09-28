import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import EditProfile from "../Profile/EditProfile";
import AppServices from "../../MentorDetails/appservices";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiChatTeardropText } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";

import EditAppSerivecs from "../../MentorDetails/EditAppSerivecs";
import EditSkills from "../../MentorDetails/EditSkills";
import Reviews from "../../MentorDetails/Reviews";

const MentorSettings = () => {
  const settingsMenu = [
    {
      id: 1,
      name: "Profile",
      route: "/edit-profile",
      icon: <CgProfile className="text-[27px]" />,
      headingName: "Editing Profile",
    },
    {
      id: 2,
      name: "Services",
      route: "/edit-services",
      icon: <FaTools className="text-[19px]" />,
      headingName: "Editing Service",
    },
    {
      id: 3,
      name: "Skills",
      route: "/skills",
      icon: <HiMiniPencilSquare className="text-[27px]" />,
      headingName: "Skills",
    },
    {
      id: 4,
      name: "My Reviews",
      route: "/edit-reviews",
      icon: <PiChatTeardropText className="text-[27px]" />,
      headingName: "Reviews",
    },
    {
      id: 5,
      name: "Payment Information",
      route: "/payment-information",
      icon: <CiCreditCard1 className="text-[27px]" />,
      headingName: "Payment Information",
    },
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [settingPath, setSettingPath] = useState({
    id: 1,
    name: "Profile",
    route: "/edit-profile",
    icon: <CgProfile className="text-[30px]" />,
    headingName: "Editing Profile",
  });
  console.log("path", settingPath);
  const [step, setStep] = useState(4);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="grid grid-cols-10 px-2 sm:px-4 md:px-8 lg:px-14 gap-4 mt-8 ">
        <div className="col-span-2 text-white text-[23px] font-medium">
          Settings
        </div>
        <div className="col-span-2 text-white text-[23px] font-medium">
          {settingPath.headingName}
        </div>
      </div>
      <div className="grid grid-cols-10 px-2 sm:px-4 md:px-8 lg:px-14 gap-3 mt-3">
        <div className="col-span-2 rounded-lg p-2 bg-[#2F3B44] flex flex-col gap-1 h-fit">
          {settingsMenu?.map((data, index) => (
            <div
              className={`flex gap-3 py-[10px] items-center cursor-pointer p-2 rounded-lg ${
                data?.id == settingPath?.id ? "bg-[#124E66]" : ""
              }`}
              key={index}
              onClick={() => {
                setSettingPath(data);
                if (data?.id == 2) {
                  setStep(4);
                }
              }}
            >
              <span>{data?.icon}</span>
              <p className="text-white text-[16px] font-normal">{data?.name}</p>
            </div>
          ))}
        </div>
        <div className="col-span-8 rounded-lg ">
          {settingPath?.route == "/edit-profile" && (
            <div>
              <EditProfile />
            </div>
          )}
          {settingPath?.route == "/edit-services" && (
            <div>
              <EditAppSerivecs
                nextStep={nextStep}
                prevStep={prevStep}
                step={step}
              />
              <div className="flex flex-row justify-between items-center">
                {step > 3 && step < 8 && (
                  <button
                    className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                    onClick={prevStep}
                    disabled={step > 4 ? false : true}
                  >
                    <IoIosArrowDropleft className="text-[28px]" />
                  </button>
                )}
                {step < 8 && step > 3 && (
                  <button
                    className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                    onClick={nextStep}
                    disabled={step > 6 ? true : false}
                  >
                    <IoIosArrowDropright className="text-[28px]" />
                  </button>
                )}
              </div>
            </div>
          )}
          {settingPath?.route == "/skills" && (
            <div>
              <EditSkills />
            </div>
          )}
           {settingPath?.route == "/edit-reviews" && (
            <div>
              <Reviews />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorSettings;
