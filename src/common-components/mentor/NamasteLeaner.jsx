import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import Namaste from "../../assets/learners-without-bg.png";

const NamasteLeaner = () => {
  return (
    <div className="h-fit namaste-learner-gradient flex flex-col sm:flex-row rounded-lg mb-10">
      <div className="h-full sm:w-[50%] flex justify-center items-center">
        <img src={Namaste} className="h-full w-[70%]" />
      </div>
      <div className="sm:w-[50%] flex justify-center items-center gap-10 flex-col p-10">
        <p className="text-white text-[18px] font-medium leading-[28px] ">
          Join our community of mentors and start shaping the future today.
          Share your expertise, inspire others, and help mentees achieve their
          dreams.
        </p>
        <div className="flex flex-col tablet-md:flex-row sm:flex-col md:flex-row justify-start gap-8 w-full">
          <button className="bg-[#01010140] h-[55px] shadow-2xl">
            Try Yourself
          </button>
          <button
            className="bg-black text-white h-[55px] flex flex-row items-center justify-center gap-5"
          >
            Get Started
            <MdArrowOutward className="text-white font-normal text-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NamasteLeaner;
