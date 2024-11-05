import React, { useEffect, useState } from "react";
import profileImage from "../../assets/guruji.png";
import {
  editProfileData,
  getMentorUserDetails,
  saveMentorQuestion,
} from "../../service/SignUpProcess";
import Loader from "../../Loader/Loader";

const EditProfile = ({ mentorData }) => {
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
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    desc: "",
    languages: "",
    is_show_language_div: false,
    comments: "",
    education: "",
    experience: "",
  });
  useEffect(() => {
    if (mentorData) {
      setProfileData({
        ...profileData,
        desc: mentorData?.selfIntroDesc,
        comments: mentorData?.comments,
        experience: mentorData?.experience,
        education: mentorData?.education,
      });
    }
  }, [mentorData]);
  const saveProfileData = async (field) => {
    try {
      payload = {
        languages: [profileData?.languages],
        comments: profileData?.comments,
        education: profileData?.education,
        experience: profileData?.experience,
        selfIntroDesc: profileData?.desc,
      };
      setLoading(true);
      console.log("payload", payload);
      const response = await editProfileData(payload);
      if (response?.success) {
        getMentorUserDetails();
      }
    } catch (error) {
      console.log("error is", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("profileData", profileData);
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col justify-between">
      {loading && Loader(loading)}
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
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  {mentorData?.firstName ?? "N/A"}{" "}
                  {mentorData?.lastName ?? "N/A"}
                </p>
                <p className="text-[#D3D9D5] text-[10px] font-light">
                  {mentorData?.email ?? "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#D3D9D5] text-[12px] font-medium">
                Average service cost
              </p>
              <span className="border-[1px] border-[#748D92] flex flex-row items-center p-1 w-fit px-3 rounded-lg">
                <p className="text-white text-[13px] font-light">$</p>
                <p className="text-[#748D92] text-[13px]font-light">35</p>
                <p className="text-white text-[13px] font-light">/h P2P</p>
              </span>
            </div>
          </div>
          <div className="bg-[#2F3B44] col-span-5 rounded-lg h-[250px]  p-3 flex flex-col gap-3">
            <p className="text-[12px] font-medium text-[#D3D9D5]">
              {" "}
              Description
            </p>
            <textarea
              type="text"
              className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2 text-white"
              value={profileData?.desc ?? "N/A"}
              onChange={(e) => {
                setProfileData({ ...profileData, desc: e.target.value });
              }}
            />
          </div>
        </div>
        {/* Experience */}
        <div className="bg-[#2F3B44] rounded-lg h-[120px] p-4 grid grid-cols-4  gap-3 w-full px-10">
          {experienceArray?.map((data, index) => (
            <div
              className="flex flex-col bg-[#748D9291] rounded-lg justify-center items-center"
              key={index}
            >
              <p className="text-[#D3D9D5] text-[13px] font-medium">
                {data?.count}
              </p>
              <p className="text-[#D3D9D5] text-[12px] font-medium">
                {data?.name}
              </p>
            </div>
          ))}
        </div>
        {/* Service div*/}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg w-full h-[350px] p-3 flex flex-col gap-8 col-span-2">
            <div className="w-full flex flex-row items-center">
              <p className="text-[#D3D9D5] text-[12px] font-medium w-[50%]">
                Services
              </p>
              <span className="flex flex-row justify-between w-[50%]">
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[12px] font-medium">
                    P2P/h
                  </p>
                </span>
                <span className="flex flex-row gap-2">
                  <input type="radio" className="h-5 w-5" />
                  <p className="text-[#D3D9D5] text-[12px] font-medium">
                    P2P/h
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
          <div className="col-span-5  h-[350px]">
            <div className="w-full h-full flex flex-col gap-8">
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col justify-between gap-2">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  Experience
                </p>
                <textarea
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      experience: e.target.value,
                    });
                  }}
                  value={profileData?.experience}
                />
              </div>
              <div className="bg-[#2F3B44] h-[50%] rounded-lg p-4 flex flex-col justify-between gap-2">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  Education
                </p>
                <textarea
                  type="text"
                  className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      education: e.target.value,
                    });
                  }}
                  value={profileData?.education}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skills div*/}
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3 col-span-2">
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
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-[#2F3B44] rounded-lg h-[350px] p-3 col-span-2">
            <div className="flex flex-col gap-3 h-full">
              <span className="flex flex-row justify-between items-center">
                <p className="text-[#D3D9D5] text-[12px] font-medium">
                  Languages
                </p>
                <button
                  className="bg-[#124E66] text-[11px] font-medium rounded-lg px-3 h-8 w-fit flex justify-center items-center"
                  type="button"
                  onClick={() => {
                    setProfileData({
                      ...profileData,
                      is_show_language_div: !profileData?.is_show_language_div,
                    });
                  }}
                >
                  Add Language
                </button>
              </span>
              {profileData?.is_show_language_div && (
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    className="border-[1px] border-white  bg-[#2F3B44] w-full h-9 rounded-xl text-[11px] focus:outline-none p-2"
                    onChange={(e) => {
                      setProfileData({
                        ...profileData,
                        languages: e.target.value,
                      });
                    }}
                    value={profileData?.languages}
                  />
                  <button
                    className="bg-[#124E66] p-1 text-[11px] font-medium rounded-lg px-3 h-9 w-fit flex justify-center items-center"
                    type="button"
                    onClick={() => {
                      saveProfileData("language");
                    }}
                  >
                    Save
                  </button>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {mentorData?.languages?.map((data, index) => (
                  <div
                    key={index}
                    className="bg-[#124E66] text-white px-8 w-fit h-9 rounded-full p-2"
                  >
                    <p className="text-white text-[11px] font-normal">{data}</p>
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
        <div className="pb-4">
          <div className="bg-[#2F3B44] rounded-lg h-[250px] p-3">
            <div className="flex flex-col gap-5 h-full">
              <p className="text-[#D3D9D5] text-[12px] font-medium">Comments</p>
              <textarea
                type="text"
                className="border-[1px] border-white border-dashed bg-[#2F3B44] w-full h-full text-[11px] focus:outline-none p-2"
                onChange={(e) => {
                  setProfileData({ ...profileData, comments: e.target.value });
                }}
                value={profileData?.comments}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10">
        <button
          className="bg-[#124E66] p-1 px-4 text-[13px] font-medium rounded-lg h-10 w-fit flex justify-center items-center"
          type="button"
          onClick={() => {
            saveProfileData();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
