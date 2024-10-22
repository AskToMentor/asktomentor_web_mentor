import React, { useEffect, useState } from "react";
import profileImage from "../../assets/guruji.png";
import {
  getMentorProfileData,
  getMentorUserDetails,
} from "../../service/SignUpProcess";

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
  const [mentorData, setMentorData] = useState();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") ? true : false;
    if (isLoggedIn) {
      getMentorDetails();
    } else {
      getMentorCategoriesByCategoryId();
    }
  }, []);
  const getMentorCategoriesByCategoryId = async () => {
    try {
      if (localStorage.getItem("registered_user_id")) {
        const userId = localStorage.getItem("registered_user_id");
        const response = await getMentorProfileData(userId);
        if (response?.success) {
          // setCategoryData(response?.data);
          console.log("response?.data", response?.data);
          setMentorData(response?.data?.[0]);
        }
      }
    } catch (error) {
      console.log("error is", error);
    } finally {
    }
  };
  const getMentorDetails = async () => {
    try {
      if (localStorage.getItem("registered_user_id")) {
        const response = await getMentorUserDetails();
        if (response?.success) {
          // setCategoryData(response?.data);
          console.log("response?.data", response?.data);
          setMentorData(response?.data?.[0]);
        }
      }
    } catch (error) {
      console.log("error is", error);
    } finally {
    }
  };
  console.log("mentorData", mentorData);
  return (
    <div className="h-full w-full p-10 overflow-y-auto flex flex-col justify-between">
      <div className="w-full flex flex-col gap-7 ">
        {/* Top Div */}
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3 flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <div className="border-[1px] border-[#212A31] rounded-full p-2">
                <img
                  src={profileImage}
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  {mentorData?.firstName ?? "N/A"}{" "}
                  {mentorData?.lastName ?? "N/A"}
                </p>
                <p className="text-[#D3D9D5] text-[10px] font-light">
                  {mentorData?.email ?? "N/A"}
                </p>
                {/* <p className="text-[#D3D9D5] text-[10px] font-light">
                  {mentorData?.lastName ?? "N/A"}
                </p> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#D3D9D5] text-[11px] font-medium">
                Average service cost
              </p>
              <span className="border-[1px] border-[#748D92] flex flex-row items-center p-1 w-fit px-3 rounded-lg">
                <p className="text-white text-[11px] font-light">$</p>
                <p className="text-white text-[11px] font-light">35</p>
                <p className="text-white text-[11px] font-light">/h P2P</p>
              </span>
            </div>
          </div>
          <div className="bg-[#2F3B44] col-span-4 rounded-lg h-[250px] p-3 flex flex-col gap-3">
            <p className="text-[12px] font-medium"> Description</p>
            <textarea
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
              value={mentorData?.settingsInfo?.desc ?? "N/A"}
            />
          </div>
        </div>
        {/* Experience */}
        <div className="bg-[#2F3B44] rounded-lg h-[100px] p-[10px] grid grid-cols-4 gap-20 w-full">
          {experienceArray?.map((data, index) => (
            <div
              className="flex flex-col bg-[#748D9291] rounded-lg justify-center items-center"
              key={index}
            >
              <p className="text-[#D3D9D5] text-[14px] font-medium">
                {data?.count}
              </p>
              <p className="text-[#D3D9D5] text-[11px] font-medium">
                {data?.name}
              </p>
            </div>
          ))}
        </div>
        {/* Service div*/}
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-[#2F3B44] rounded-lg w-full h-[300px] p-3 flex flex-col gap-5">
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[12px] font-medium w-[50%]">
                Services
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[11px] font-medium">
                    P2P/h
                  </p>
                </span>
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[11px] font-medium">
                    P2B/h
                  </p>
                </span>
              </span>
            </div>
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[12px] font-medium w-[50%]">
                {mentorData?.settingsInfo?.coachingOfferingsInfo?.name}
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="bg-[#124E66] p-1 text-[11px] font-medium rounded-lg px-3 h-9 flex justify-center items-center">
                  ${" "}
                  {mentorData?.settingsInfo?.serviceType[0]?.type ==
                  "P2P(PersontoPerson)"
                    ? mentorData?.settingsInfo?.serviceType[0]?.price ?? "0"
                    : "0"}
                  /h
                </span>
                <span className="bg-[#124E66] p-1 text-[11px] font-medium rounded-lg px-3 h-9 flex justify-center items-center">
                  ${" "}
                  {mentorData?.settingsInfo?.serviceType[0]?.type ==
                  "P2B(PersontoBusiness)"
                    ? mentorData?.settingsInfo?.serviceType[0]?.price ?? "0"
                    : "0"}
                  /h
                </span>
              </span>
            </div>
          </div>
          <div className="col-span-3  h-[300px]">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-[10px] flex flex-col gap-2">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  Experience
                </p>
                <textarea
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20 text-[11px] focus:outline-none p-2"
                />
              </div>
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-[10px] flex flex-col gap-2">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  Education
                </p>
                <textarea
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-20 text-[11px] focus:outline-none p-2"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skills div*/}
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3">
            <div className="flex flex-col gap-5">
              <p className="text-[#D3D9D5] text-[12px] font-medium">Skills</p>
              <div className="flex flex-wrap gap-3">
                {mentorData?.skillInfo?.map((data, index) => (
                  <div
                    key={index}
                    className="bg-[#124E66] text-white px-8 w-fit h-9 rounded-full p-2"
                  >
                    <p className="text-white text-[11px] font-normal">
                      {data?.skillName}
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
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3">
            <div className="flex flex-col gap-3 h-full">
              <p className="text-[#D3D9D5] text-[12px] font-medium">
                Languages
              </p>
              <textarea
                type="text"
                className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
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
          <div className="bg-[#2F3B44] rounded-lg h-[200px] p-3">
            <div className="flex flex-col gap-2 h-full">
              <p className="text-[#D3D9D5] text-[12px] font-medium">Comments</p>
              <textarea
                type="text"
                className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
