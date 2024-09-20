import React from "react";
// import guide1 from "../../assets/guide1.png";
import guide1 from "../../assets/Frame 32.png";
import guide2 from "../../assets/Frame 846.png";
import guide3 from "../../assets/Frame 848.png"
import guide4 from "../../assets/Frame 849.png"
const Guide = () => {
  const guide_data = [
    {
      id: 1,
      image: guide1,
      title: "Offer Guidance",
      description: "Offer personalized guidance to mentees",
    },
    {
      id: 2,
      image: guide2,
      title: "Expert Insights",
      description: "Share your expertise through blogs and tutorials",
    },
    {
      id: 3,
      image: guide3,
      title: "Earn by Mentoring",
      description: "Earn through mentoring sessions",
    },
    {
      id: 4,
      image: guide4,
      title: "Professional Mentoring",
      description: "Network with people from different proffesions",
    },
  ];
  return (
    <div className="mt-10 mb-20">
      <h1 className="common-text-linear-gradient font-semibold">
        Are You A Guide?
      </h1>
      <p className="text-[20px] text-white common-font-style">
        As a mentor on our platform, you can
      </p>
      <div className="grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-10">
        {guide_data?.map((data, index) => (
          <div className="h-[320px] w-full">
            <img src={data?.image} className="h-full w-full rounded-[10px]" />
            {/* <div className="flex flex-col gap-2">
              <p className="text-[26px] leading-[30px] font-medium">
                {data?.title}
              </p>
              <p className="text-[#748D92] text-[15px] leading-[20px]">
                {data?.description}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
