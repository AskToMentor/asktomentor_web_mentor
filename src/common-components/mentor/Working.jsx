import React from "react";
import bannerImage1 from "../../assets/img1.jpeg";

const Working = () => {
  return (
    <div className="text-white py-5">
      <h2 className="text-white font-semibold pl-5 text-2xl">How It Works</h2>
      <div className="flex items-center flex-wrap gap-5 justify-around mt-5">
        <div className="flex items-center">
          <img
            src={bannerImage1}
            className=" h-[10rem] mobile-lg:h-[13rem] sm:h-[15rem]"
            alt="Video thumbnail"
          />
        </div>
        <div className="space-y-4 flex flex-col items-center mobile-lg:items-start">
          <div className="bg-gray-800   rounded-full py-2 text-center mobile-lg:ml-[7rem] sm:ml-[9rem] w-[100%] mobile-lg:w-[17rem]">
            Explore And Select Mentor
          </div>
          <div className="bg-gray-800 rounded-full py-2  text-center mobile-lg:ml-16 sm:ml-20 w-[100%] px-3 mobile-lg:w-[18rem]">
            Select Plan On Requirement Basis
          </div>
          <div className="bg-gray-800 rounded-full py-2  text-center w-[100%] mobile-lg:w-[14rem] mobile-lg:ml-5 sm:ml-10">
            Schedule Your Meet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
