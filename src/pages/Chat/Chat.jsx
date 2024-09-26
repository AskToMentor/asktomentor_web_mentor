import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import DummyImage from "../../assets/download.png";

const Chat = () => {
  const chatDetails = [
    {
      id: 1,
      name: "Nandini Sharma",
      description: "thank a lot for your good recommendati...",
      date: "Dec 15",
    },
    {
      id: 2,
      name: "Kriti Singh",
      description: "thank a lot for your good recommendati...",
      date: "Dec 25",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      description: "thank a lot for your good recommendati...",
      date: "Dec 26",
    },
    {
      id: 4,
      name: "Harsh Rajput",
      description: "thank a lot for your good recommendati...",
      date: "Dec 28",
    },
  ];
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="px-2 sm:px-4 md:px-8 lg:px-14 grid grid-cols-5 gap-3 h-full py-4 pt-8">
        <div className="col-span-2 bg-[#2F3943] h-full rounded-lg p-4 flex flex-col gap-4">
          <div>
            <p className="text-[26px] font-semibold ">Messages</p>
          </div>
          <div className="bg-[#2F3943] w-full flex flex-row gap-5 items-center rounded-lg px-4 h-14 border-[1px] border-[#C7C3C3]">
            <span>
              <IoSearchOutline className="text-white text-[20px]" />
            </span>
            <input
              type="text"
              className="bg-[#2F3943]  text-[#D3D9D55E] h-9 focus:outline-none w-full"
              placeholder="Search people or message"
            />
          </div>
          <div className=" h-full flex flex-col mt-5 ">
            {chatDetails?.map((data) => (
              <div className="flex  flex-row justify-between items-center px-2 py-4 border-b-[2px] border-[#D3D9D521] ">
                <div className="flex flex-row items-center gap-4">
                  <img src={DummyImage} className="h-14 w-14 rounded-full " />
                  <div className="flex flex-col">
                    <p className="text-white text-[18px] font-medium">
                      {data?.name}
                    </p>
                    <p className="text-[#C7C3C3] text-[16px]">
                      {data?.description}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#C7C3C3] text-[15px]">{data?.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
};

export default Chat;
