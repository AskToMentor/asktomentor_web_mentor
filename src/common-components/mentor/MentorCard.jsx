import React from "react";
import { FaStar } from "react-icons/fa";

const MentorCard = ({ name, description, videoPlaceholder,position }) => {
  return (
    // <div className=" bg-gray-800 rounded-lg overflow-hidden w-full shadow-xl">
    //   <div className="p-2 sm:p-5">
    //     <img className="w-full" src={videoPlaceholder} alt="Video thumbnail" />
    //   </div>
    //   <div className="p-2 sm:px-6 pb-2">
    //     <div className="font-semibold text-xl mb-2 text-white">{name}</div>
    //     <p className="text-gray-300 text-sm">
    //       {description}
    //     </p>
    //   </div>
    // </div>
    <div className="h-[390px] relative mt-1 rounded-lg">
      <div className="h-[40%] bg-[#748D92] rounded-t-lg "></div>
      <div className="bg-white text-black h-[60%] items-center flex flex-col rounded-b-lg">
        <span className="w-[85%] mx-auto flex justify-center flex-col items-center absolute top-7 ">
          <img
            className=" h-[180px]  rounded-lg"
            src={videoPlaceholder}
            alt="Video thumbnail"
          />
          <div className="flex justify-end flex-col">
            <p className=" font-medium text-[20px] mt-2 text-[#124E66]">{name}</p>
            <p className="font-medium text-[16px] text-[#124E66]">{position}</p>
            <p className="mt-2 text-[14px] text-black font-normal">{description}</p>
            <span className="flex flex-row gap-2 items-center mt-2">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />{" "}
              <FaStar className="text-orange-500" />
              <p>(15)</p>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MentorCard;
