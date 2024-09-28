import React from "react";
import profileImage from "../../assets/guruji.png";

const EditProfile = () => {
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
    <div className="h-full w-full overflow-y-auto flex flex-col justify-between">
      <div className="w-full flex flex-col gap-7 ">
        {/* Top Div */}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3 flex flex-col justify-between col-span-2">
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
          <div className="bg-[#2F3B44] col-span-5 rounded-lg h-[250px] p-3 text-[17px] font-medium">
            Description
          </div>
        </div>
        {/* Experience */}
        <div className="bg-[#2F3B44] rounded-lg h-[120px] p-4 grid grid-cols-4 gap-20 w-full">
          {experienceArray?.map((data, index) => (
            <div
              className="flex flex-col bg-[#748D9291] rounded-lg justify-center items-center"
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
        {/* Service div*/}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg w-full h-[350px] p-3 flex flex-col gap-8 col-span-2">
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[17px] font-medium w-[50%]">
                Services
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[15px] font-medium">
                    P2P/h
                  </p>
                </span>
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[15px] font-medium">
                    P2P/h
                  </p>
                </span>
              </span>
            </div>
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[17px] font-medium w-[50%]">
                1 to 1
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="bg-[#124E66] p-1 text-[14px] font-medium rounded-lg px-3 h-9 flex justify-center items-center">
                  $ 200/h
                </span>
                <span className="bg-[#124E66] p-1 text-[14px] font-medium rounded-lg px-3 h-9 flex justify-center items-center">
                  $ 200/h
                </span>
              </span>
            </div>
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[17px] font-medium w-[50%]">
                Career Coaching
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="bg-[#124E66] p-1 text-[14px] font-medium rounded-lg px-3 h-9 flex justify-center items-center">
                  $ 200/h
                </span>
              </span>
            </div>
          </div>
          <div className="col-span-5  h-[350px]">
            <div className="w-full h-full flex flex-col gap-8">
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col justify-between gap-4">
                <p className="text-[#D3D9D5] text-[17px] font-medium">
                  Experience
                </p>
                <input
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
                />
              </div>
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col gap-4">
                <p className="text-[#D3D9D5] text-[17px] font-medium">
                  Education
                </p>
                <input
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skills div*/}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[350px] p-3 col-span-2">
            <div className="flex flex-col gap-5">
              <p className="text-[#D3D9D5] text-[17px] font-medium">Skills</p>
              <div className="flex flex-wrap gap-3">
                {skills?.map((data, index) => (
                  <div
                    key={index}
                    className="bg-[#124E66] text-white px-8 w-fit h-9 rounded-full p-2"
                  >
                    <p className="text-white text-[14px] font-normal">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="col-span-3  h-[350px]">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col justify-between gap-4">
            <p className="text-[#D3D9D5] text-[17px] font-medium">
              Experience
            </p>
            <input
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
            />
          </div>
          <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col gap-4">
            <p className="text-[#D3D9D5] text-[17px] font-medium">
              Education
            </p>
            <input
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
            />
          </div>
        </div>
      </div> */}
        </div>
        {/* Language div */}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[350px] p-3 col-span-2">
            <div className="flex flex-col gap-5 h-full">
              <p className="text-[#D3D9D5] text-[17px] font-medium">
                Languages
              </p>
              <input
                type="text"
                className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full"
              />
            </div>
          </div>
          {/* <div className="col-span-3  h-[350px]">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col justify-between gap-4">
            <p className="text-[#D3D9D5] text-[17px] font-medium">
              Experience
            </p>
            <input
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
            />
          </div>
          <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col gap-4">
            <p className="text-[#D3D9D5] text-[17px] font-medium">
              Education
            </p>
            <input
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20"
            />
          </div>
        </div>
      </div> */}
        </div>
        <div className="pb-16">
          <div className="bg-[#2F3B44] rounded-lg h-[350px] p-3">
            <div className="flex flex-col gap-5 h-full">
              <p className="text-[#D3D9D5] text-[17px] font-medium">Comments</p>
              <input
                type="text"
                className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
