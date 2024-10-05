import React, { useEffect, useRef, useState } from "react";
import {
  getMentorCategoryData,
  getMentorOfferingData,
} from "../service/SignUpProcess";

const GeneralSettings = ({
  setGeneralSetting,
  generalSetting,
  setServices,
  services,
}) => {
  const [offeringData, setOfferingData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [subCategoryData, setSubCategoryData] = useState();
  const [defaultSelect, setDefaultSelect] = useState(false);
  const [defaultSelectP2B, setDefaultSelectP2B] = useState(false);

  const getMentorSkills = async () => {
    const response = await getMentorOfferingData();
    if (response?.success) {
      setOfferingData(response?.data);
    }
  };
  const getMentorCategories = async () => {
    const response = await getMentorCategoryData();
    if (response?.success) {
      setCategoryData(response?.data);
    }
  };
  useEffect(() => {
    getMentorSkills();
    getMentorCategories();
  }, []);
  const getMentorCategoriesByCategoryId = async (categoryName) => {
    const response = await getMentorCategoryData(categoryName);
    if (response?.success) {
      // setCategoryData(response?.data);
      console.log("response?.data", response?.data);
      if (response?.data?.length > 0) {
        console.log(
          "response?.data[0]?.childernInfo",
          response?.data[0]?.childernInfo
        );
        setSubCategoryData(response?.data[0]?.childernInfo);
      }
    }
    console.log("response...........", response);
  };
  console.log("services", services);
  const getCategoryName = () => {
    const result = offeringData?.filter(
      (data) => data?.coachingOfferingsId == generalSetting?.coachingOfferingsId
    );
    if (result) {
      return result[0]?.name;
    }
    console.log("result", result);
  };
  return (
    <div className="flex flex-row w-full gap-3">
      <div className="login-container w-[75%] p-4 rounded-lg">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-[18px] font-medium">General settings</h4>
            <select
              className=" mt-2 bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                setGeneralSetting({
                  ...generalSetting,
                  coachingOfferingsId: e.target.value,
                });
              }}
            >
              <option value="" disabled selected>
                Select type or enter a name
              </option>
              {offeringData?.map((data, index) => (
                <option value={data?.coachingOfferingsId}>{data?.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <textarea
              placeholder="Descriptions"
              className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
              onChange={(e) => {
                setGeneralSetting({
                  ...generalSetting,
                  desc: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="">
            <select
              className="general-fields bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                console.log("e.target.id", e.target.id);
                getMentorCategoriesByCategoryId(e.target.value);
                const selectedId =
                  e.target.selectedOptions[0].getAttribute("data-id");
                setGeneralSetting({
                  ...generalSetting,
                  categoryId: selectedId,
                });
              }}
            >
              <option value="" disabled selected>
                Select Category
              </option>
              {categoryData?.map((data, index) => (
                <option value={data?.categoryName} data-id={data?.categoryId}>
                  {data?.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="general-fields bg-[#FFFFFF36] w-full px-2 border-white text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                console.log("e.target.id", e.target.id);
                const selectedId =
                  e.target.selectedOptions[0].getAttribute("data-id");
                setGeneralSetting({
                  ...generalSetting,
                  subCategoryId: selectedId,
                });
              }}
            >
              <option value="" disabled selected>
                Select Subcategory
              </option>
              {subCategoryData?.map((data, index) => (
                <option value={data?.categoryName} data-id={data?.categoryId}>
                  {data?.categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 w-full">
          <p className="text-[16px] font-semibold">
            For whom you’lll be provide this service?
          </p>
          <div className="flex flex-row gap-4 items-center mt-4 w-full">
            <div className="w-[50%] flex flex-row gap-3">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  className="h-[20px] w-[20px] pt-4 hidden-checkbox"
                  onChange={() => {
                    const newServices = [...services];
                    if (services[0]?.type == "P2P(PersontoPerson)") {
                      newServices[0] = {
                        ...newServices[0],
                        type: "",
                      };
                      setServices(newServices);
                    } else {
                      newServices[0] = {
                        ...newServices[0],
                        type: "P2P(PersontoPerson)",
                      };
                      setServices(newServices);
                    }
                  }}
                  checked={
                    services[0]?.type == "P2P(PersontoPerson)" ? true : false
                  }
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <p className="text-[15px] font-light">P2P(person to person)</p>
            </div>
            <div
              className={`${
                services[0]?.type == "P2P(PersontoPerson)" ? "flex" : "hidden"
              }`}
            >
              <div
                className={`${
                  defaultSelect ? "bg-[#2F3943] " : "bg-ask-to-mentor-primary"
                } flex h-12 flex-row gap-1 rounded-l-lg items-center px-2 cursor-pointer`}
                onClick={() => {
                  setDefaultSelect(false);
                }}
              >
                <input
                  className="bg-inherit border-[1px] border-white w-[60px] focus:outline-none px-2 rounded-lg text-white text-[14px] h-9"
                  type="text"
                  placeholder="hour"
                  onChange={(e) => {
                    const newServices = [...services];
                    newServices[0] = {
                      ...newServices[0],
                      price: e.target.value,
                    };
                    setServices(newServices);
                  }}
                />
                <p className="text-[14px] font-normal">/hour</p>
              </div>
              <div
                className={`${
                  defaultSelect ? "bg-ask-to-mentor-primary" : "bg-[#2F3943] "
                } text-[14px] font-normal flex h-12 w-[100px] flex-row rounded-r-lg items-center px-2 cursor-pointer`}
                onClick={() => {
                  setDefaultSelect(true);
                }}
              >
                <p>Free</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 items-center mt-4">
            <div className="w-[50%] flex flex-row gap-3">
              <label className="custom-checkbox">
                <input
                  checked={
                    services[1]?.type == "P2B(PersontoBussiness)" ? true : false
                  }
                  type="checkbox"
                  className="h-[20px] w-[20px] pt-4 hidden-checkbox"
                  onChange={() => {
                    const newServices = [...services];
                    if (services[1]?.type == "P2B(PersontoBussiness)") {
                      newServices[1] = {
                        ...newServices[1],
                        type: "",
                      };
                      setServices(newServices);
                    } else {
                      newServices[1] = {
                        ...newServices[1],
                        type: "P2B(PersontoBussiness)",
                      };
                      setServices(newServices);
                    }
                  }}
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <p className="text-[15px] font-light"> P2B(person to Business)</p>
            </div>
            <div
              className={`${
                services[1]?.type == "P2B(PersontoBussiness)"
                  ? "flex"
                  : "hidden"
              }`}
            >
              <div
                className={`${
                  defaultSelectP2B
                    ? "bg-[#2F3943] "
                    : "bg-ask-to-mentor-primary"
                } flex h-12 flex-row gap-1 rounded-l-lg items-center px-2 cursor-pointer`}
                onClick={() => {
                  setDefaultSelectP2B(false);
                }}
              >
                <input
                  className="bg-inherit border-[1px] border-white w-[60px] focus:outline-none px-2 rounded-lg text-white text-[14px] h-9"
                  type="text"
                  placeholder="hour"
                  onChange={(e) => {
                    const newServices = [...services];
                    newServices[1] = {
                      ...newServices[1],
                      price: e.target.value,
                    };
                    setServices(newServices);
                  }}
                />
                <p className="text-[14px] font-normal">/hour</p>
              </div>
              <div
                className={`${
                  defaultSelectP2B
                    ? "bg-ask-to-mentor-primary"
                    : "bg-[#2F3943] "
                } text-[14px] font-normal flex h-12 w-[100px] flex-row rounded-r-lg items-center px-2 cursor-pointer`}
                onClick={() => {
                  setDefaultSelectP2B(true);
                  const newServices = [...services];
                  newServices[1] = {
                    ...newServices[1],
                    price: 0,
                  };
                  setServices(newServices);
                }}
              >
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
            <p className="text-white text-[15px] font-normal">
              {/* {getCategoryName()} */}
            </p>
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
