import React from "react";

const GeneralSettings = () => {
  return (
    <div className="flex flex-row w-full gap-3">
      <div className="login-container w-[75%] p-4 rounded-lg">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-[18px] font-medium">General settings</h4>
            <select className=" mt-2 bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2">
              <option value="" disabled selected>
                Select type or enter a name
              </option>
              <option>test</option>
              <option>test 1</option>
            </select>
          </div>
          <div className="flex flex-col">
            <textarea
              placeholder="Descriptions"
              className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
            ></textarea>
          </div>
          <div className="">
            <select className="general-fields bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2">
              <option value="" disabled selected>
                Select Category
              </option>
              <option>test</option>
              <option>test 1</option>
            </select>
          </div>
          <div>
            <select className="general-fields bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2">
              <option value="" disabled selected>
                Select Subcategory
              </option>
              <option>test</option>
              <option>test 1</option>
            </select>
          </div>
        </div>
        <div className="mt-4 w-full">
          <p className="text-[16px] font-semibold">
            For whom you’lll be provide this service?
          </p>
          <div className="flex flex-row gap-4 items-center mt-4 w-full">
            <div className="w-[35%] flex flex-row gap-3">
              <input type="checkbox" className="h-[20px] w-[20px] pt-4" />
              <p className="text-[15px] font-light">P2P(person to person)</p>
            </div>
            <div className="flex">
              <div className="bg-ask-to-mentor-primary flex h-12 flex-row rounded-l-lg items-center px-2">
                <input
                  className="bg-ask-to-mentor-primary w-[60px] focus:outline-none px-2 rounded-l-lg"
                  type="text"
                  placeholder=""
                />
                <p className="text-[14px] font-normal">/hour</p>
              </div>
              <div className="bg-[#2F3943] text-[14px] font-normal flex h-12 w-[100px] flex-row rounded-r-lg items-center px-2">
                <p>Free</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 items-center mt-4">
            <div className="w-[35%] flex flex-row gap-3">
              <input type="checkbox" className="h-[20px] w-[20px]" />
              <p className="text-[15px] font-light"> P2B(person to Business)</p>
            </div>
            <div className="flex">
              <div className="bg-ask-to-mentor-primary flex h-12 flex-row rounded-l-lg items-center px-2">
                <input
                  className="bg-ask-to-mentor-primary w-[60px] focus:outline-none px-2 rounded-l-lg"
                  type="text"
                  placeholder=""
                />
                <p className="text-[14px] font-normal">/hour</p>
              </div>
              <div className="bg-[#2F3943] text-[14px] font-normal flex h-12 w-[100px] flex-row rounded-r-lg items-center px-2">
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-[#1A3B4A] rounded-lg h-fit p-3">
        <p className="text-[16px] font-medium">Service Setting</p>
        <div className="flex flex-col gap-[2px] mt-3">
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">Name:</p>
            <p></p>
          </span>
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">
              Subcategory:
            </p>
            <p></p>
          </span>
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">
              {" "}
              Customer Type:
            </p>
            <p></p>
          </span>
        </div>
        <div className="flex flex-col gap-[2px] mt-3">
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">Pricing :</p>
            <p></p>
          </span>
          <span className="flex justify-between">
            <p className="text-[#748D92] text-[15px] font-normal">
              Date & Time:
            </p>
            <p className="text-white text-[15px] font-medium">All Days</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
