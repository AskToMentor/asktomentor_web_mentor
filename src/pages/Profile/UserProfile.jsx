import React from "react";
import profileImage from "../../assets/guruji.png";

const UserProfile = () => {
  const experienceArray = [
    {
      id: 1,
      name: "Years Experience",
      count: 0,
    },
    {
      id: 2,
      name: "Reviews",
      count: 0,
    },
    {
      id: 3,
      name: "Subscribers",
      count: 0,
    },
    {
      id: 4,
      name: "Rating",
      count: "0:0",
    },
  ];
  const skills = [
    {
      id: 1,
      name: "React JS",
    },
    {
      id: 2,
      name: "Node Js",
    },
    {
      id: 3,
      name: "Mongo DB",
    },
    {
      id: 4,
      name: "Express JS",
    },
  ];
  return (
    <div className="h-full w-full p-10 overflow-y-auto">
      <div className="h-full w-full flex flex-col gap-7">
        {/* Top Div */}
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3 flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <div className="border-[1px] border-[#212A31] rounded-full p-2">
                <img
                  src={profileImage}
                  className="w-[60px] h-[60px] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#D3D9D5] text-[16px] font-medium">
                  FAISAL AHMED
                </p>
                <p className="text-[#D3D9D5] text-[14px] font-light">
                  alexarawles@gmail.com
                </p>
                <p className="text-[#D3D9D5] text-[14px] font-light">
                  Udaipur, Rajasthan
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#D3D9D5] text-[16px] font-medium">
                Average service cost
              </p>
              <span className="border-[1px] border-[#748D92] flex flex-row items-center p-1 w-fit px-3 rounded-lg">
                <p className="text-white text-[13px] font-light">$</p>
                <p className="text-[#748D92] text-[13px]font-light">35</p>
                <p className="text-white text-[13px] font-light">/h P2P</p>
              </span>
            </div>
          </div>
          <div className="bg-[#2F3B44] col-span-4 rounded-lg h-[250px] p-3 text-[17px] font-medium">
            Description
          </div>
        </div>
        {/* Experience */}
        <div className="bg-[#2F3B44] rounded-lg h-[150px] p-4 grid grid-cols-4 gap-20">
          {experienceArray?.map((data, index) => (
            <div
              className="flex flex-col bg-[#748D9291] gap-2 rounded-lg justify-center items-center"
              key={index}
            >
              <p className="text-[#D3D9D5] text-[23px] font-medium">
                {data?.count}
              </p>
              <p className="text-[#D3D9D5] text-[19px] font-medium">
                {data?.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
