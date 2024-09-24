import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import startImage from "../../assets/img2.jpeg";
import FinishImage from "../../../public/hank hand.gif";


const MentorSlides = ({ nextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="flex flex-col gap-5 login-container justify-center items-center rounded-lg p-10 mt-4">
      {/* <div className="flex justify-between gap-16">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-medium">First Name</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 md:p-3 bg-gray-800 rounded text-[15px] h-11 sm:h-12"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-medium">Last Name</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 md:p-3 bg-gray-800 rounded text-[15px] h-11 sm:h-12"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium">Email</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 md:p-3 bg-gray-800 rounded text-[15px] h-11 sm:h-12"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium">Password</p>
          <div className="relative bg-gray-800 rounded flex p-2 md:p-4 ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full  bg-gray-800 h-full rounded text-[15px] pr-14 focus:outline-none "
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="p-0 m-0 h-fit bg-gray-800"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium">Confirm Password</p>
          <div className="relative bg-gray-800 rounded flex p-2 md:p-4 ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full  bg-gray-800 h-full rounded text-[15px] pr-14 focus:outline-none "
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="p-0 m-0 h-fit bg-gray-800"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div></div> */}
      <div>
        <img src={FinishImage} className="w-[300px] rounded-lg h-[300px]" />
      </div>
      {/* <div className="flex flex-col items-center gap-2 justify-center">
        <button
          className="bg-ask-to-mentor-primary w-[200px] rounded-3xl shadow-lg border-[1px] border-white"
          onClick={nextStep}
        >
          Start
        </button>
      </div> */}
    </div>
  );
};

export default MentorSlides;
