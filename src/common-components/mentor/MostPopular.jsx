import React from "react";
import { ImPencil2 } from "react-icons/im";
import { MdArrowOutward } from "react-icons/md";
import PenTool from "../../assets/pen-tool.png"
import HtmlTool from "../../assets/html.png"
import MicTool from "../../assets/karaoke.png"
import Business from "../../assets/briefcase.png"
import Lifestyle from "../../assets/sunrise.png"
import Camera from "../../assets/camera.png"
import Music from "../../assets/musical-note.png"
import DataBase from "../../assets/database.png"
import PersonalGrowth from "../../assets/bulb.png"
import Heart from "../../assets/heart.png"
import NetWork from "../../assets/network.png"
import Teaching from "../../assets/presentation.png"

const MostPopular = () => {
  const popular_categories = [
    {
      id: 1,
      icon: PenTool,
      name: "Design",
      isActive: true,
    },
    {
      id: 1,
      icon: HtmlTool,
      name: "Development",
    },
    {
      id: 1,
      icon: MicTool,
      name: "Marketing",
    },
    {
      id: 1,
      icon: Business,
      name: "Business",
    },
    {
      id: 1,
      icon: Lifestyle,
      name: "Lifestyle",
    },
    {
      id: 1,
      icon: Camera,
      name: "Photography",
    },
    {
      id: 1,
      icon: Music,
      name: "Music",
    },
    {
      id: 1,
      icon: DataBase,
      name: "Data science",
    },
    {
      id: 1,
      icon: PersonalGrowth,
      name: "Personal Develop",
    },
    {
      id: 1,
      icon: Heart,
      name: "Health & Fitness",
    },
    {
      id: 1,
      icon: NetWork,
      name: "Finance",
    },
    {
      id: 1,
      icon: Teaching,
      name: "Teaching",
    },
  ];
  return (
    <div className="mt-5">
      <h3 className="common-text-linear-gradient text-[#D3D9D5]">
        Most Popular Categories
      </h3>
      <div className="grid grid-cols-1 mobile-lg:grid-cols-2 md:grid-cols-3 desktop-lg:grid-cols-4 xl gap-3 mobile-lg:gap-6 mt-5 mb-10">
        {popular_categories?.map((data) => (
          <div className="bg-[#D3D9D5] rounded-lg shadow-lg flex flex-row items-center justify-between px-2 sm:px-7 h-14">
            <div className="flex flex-row gap-6 items-center">
              <span>
                <img src={data?.icon} className="h-6 w-6"/>
              </span>
              <p className="text-black text-[18px] text-wrap font-medium common-font-style leading-[27px]">
                {data?.name}
              </p>
            </div>
            <span
              className={"bg-[#124E66] p-2 rounded-lg"}
            >
              <MdArrowOutward
                className={`text-white font-normal text-[20px]`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
