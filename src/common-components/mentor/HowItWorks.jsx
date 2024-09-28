import Lottie from "lottie-react";
import React from "react";
import animation1 from "../../../public/animation-how-it-works-1.json";
import animation2 from "../../../public/animation-how-it-works-2.json";
import animation3 from "../../../public/animation-how-it-works-3.json";
import animation4 from "../../../public/animation-how-it-works-4.json";

import { MdArrowOutward } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import CarryBag from "../../assets/carrybag_paymentbasedonsolution.png";
import ScheduleMeeting from "../../assets/tag_Sceduleyourmeet.png";
import HandBag from "../../assets/handbag-image.png";
import TeamWork from "../../assets/mentor-teamwork-removebg-preview.png";
import PaymentMethod from "../../assets/payment-method-removebg-preview.png";
import Integrity from "../../assets/integrity-icon-remove.png";
const HowItWorks = () => {
  return (
    <div className="mt-5 mb-10">
      <h3 className="common-text-linear-gradient-how-it-works ">
        How It Works ?
      </h3>
      <div className="w-full flex flex-col md:flex-row gap-5 mt-10">
        <div className="flex flex-col bg-[#2F3943] w-full md:w-[50%] desktop-lg:w-[60%] p-8 rounded-lg">
          <div>
            <div className="bg-[#FFFFFF66] h-fit w-fit rounded-full p-2">
              <AiOutlineGlobal className="text-black text-[50px]" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4 !text-white">
              <p className="text-[24px] font-bold !text-white">
                Explore And Select Mentor
              </p>
              <p className="text-[16px] font-medium !text-white">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline !text-white">Start with us</p>
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
            <div className="bg-[#FFFFFF66]  rounded-full w-[65px] h-[65px] flex justify-center items-center">
              <img src={PaymentMethod} className="h-10 w-10" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4 !text-white">
              <p className="text-[24px] font-bold !text-white">
                Payment Based On Solution
              </p>
              <p className="text-[16px] font-medium !text-white">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4 !text-white">
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
          <div className="bg-[#FFFFFF66]  rounded-full w-[65px] h-[65px] flex justify-center items-center">
            <img src={TeamWork} className="h-11 w-11" />
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4 !text-white">
              <p className="text-[24px] font-bold !text-white">
                Schedule Your Meet
              </p>
              <p className="text-[16px] font-medium !text-white">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4">
                <p className="underline !text-white">Start with us</p>
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
            <div className="bg-[#FFFFFF66]  rounded-full w-[65px] h-[65px] flex justify-center items-center">
              <img src={HandBag} className="h-10 w-10" />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col gap-4 !text-white">
              <p className="text-[24px] font-bold !text-white">
                Select plan on requirement basis
              </p>
              <p className="text-[16px] font-medium !text-white">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
              <div className="flex flex-row gap-4 !text-white">
                <p className="underline !text-white">Start with us</p>
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
