import Lottie from "lottie-react";
import React from "react";
import animation1 from "../../../public/animation-how-it-works-1.json";
import animation2 from "../../../public/animation-how-it-works-2.json";
import animation3 from "../../../public/animation-how-it-works-3.json";
import animation4 from "../../../public/animation-how-it-works-4.json";

import { MdArrowOutward } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

const HowItWorks = () => {
  return (
    <div className="mt-5 mb-10">
      <h3 className="common-text-linear-gradient-how-it-works ">
        How It Works ?
      </h3>
      <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
        <div className="flex flex-col bg-[#2F3943] w-full md:w-[50%] desktop-lg:w-[60%] p-8 rounded-lg">
          <div>
            <div className="bg-[#D3D9D5] h-fit w-fit rounded-full p-2">
              <AiOutlineGlobal className="text-white text-[50px]" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold">Explore And Select Mentor</p>
              <p className="text-[16px] font-medium">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline">Start with us</p>
                <p>
                  <MdArrowOutward
                    className={`text-[#D3D9D5 font-normal text-[22px]`}
                  />
                </p>
              </div>
            </div>
            <div className="w-[12rem] mb-7 mt-5">
              <Lottie animationData={animation1} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#447b9187] w-full md:w-[50%] desktop-lg:w-[40%] p-8 rounded-lg">
          <div>
            <div className="bg-[#D3D9D5] h-fit w-fit rounded-full p-2">
              <AiOutlineGlobal className="text-white text-[50px]" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold">Payment Based On Solution</p>
              <p className="text-[16px] font-medium">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline">Start with us</p>
                <p>
                  <MdArrowOutward
                    className={`text-[#D3D9D5 font-normal text-[22px]`}
                  />
                </p>
              </div>
            </div>
            <div className="w-[12rem] mb-7 mt-5">
              <Lottie animationData={animation2} className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex flex-col bg-[#2F3943]  w-[100%] md:w-[50%] desktop-lg:w-[40%] p-8 rounded-lg">
          <div>
            <div className="bg-[#D3D9D5] h-[65px] w-[65px] rounded-full p-2"></div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold">Schedule Your Meet</p>
              <p className="text-[16px] font-medium">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline">Start with us</p>
                <p>
                  <MdArrowOutward
                    className={`text-[#D3D9D5 font-normal text-[22px]`}
                  />
                </p>
              </div>
            </div>
            <div className="w-[12rem] mb-7 mt-5">
              <Lottie animationData={animation3} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#124E6687]  w-[100%] md:w-[50%] desktop-lg:w-[60%] p-8 rounded-lg">
          <div>
            <div className="bg-[#D3D9D5] h-fit w-fit rounded-full p-2">
              <AiOutlineGlobal className="text-white text-[50px]" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold">
                Select plan on requirement basis
              </p>
              <p className="text-[16px] font-medium">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline">Start with us</p>
                <p>
                  <MdArrowOutward
                    className={`text-[#D3D9D5 font-normal text-[22px]`}
                  />
                </p>
              </div>
            </div>
            <div className="w-[12rem] mb-7 mt-5">
              <Lottie animationData={animation4} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
