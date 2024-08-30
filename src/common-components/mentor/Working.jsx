import React from "react";
import bannerImage1 from "../../assets/img1.jpeg";

const Working = () => {
  return (
    <div className="text-white py-5 mt-10">
      <h2 className="text-2xl font-bold mb-8">How It Works</h2>
      <div className="flex items-center justify-around">
        <div className="flex items-center">
          <img
            src={bannerImage1}
            className="h-[10rem] "
            alt="Video thumbnail"
          />
        </div>
        <div className="space-y-4 flex flex-col">
          {/* <div className="transform rotate-90 text-green-700">
                    <img src='./downarrow.jpeg' className="h-[10rem] " alt="Video thumbnail" />
  
                    </div> */}

          <div className="bg-gray-800 rounded-full py-2 text-center ml-[9rem] w-[17rem]">
            Explore And Select Mentor
          </div>
          <div className="bg-gray-800 rounded-full py-2  text-center ml-20 w-[18rem]">
            Select Plan On Requirement Basis
          </div>
          <div className="bg-gray-800 rounded-full py-2  text-center w-[14rem] ml-10">
            Schedule Your Meet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
