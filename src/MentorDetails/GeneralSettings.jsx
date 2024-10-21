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
  setServiceSetting,
  serviceSetting,
  selectedDays,
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
  };
  const availableDays = Object?.entries(selectedDays)
    .filter(([day, isAvailable]) => isAvailable) // Filter days where value is true
    .map(([day]) => day); // Map to get the day names only

    console.log("services",services)
  return (
    <div className="flex flex-row w-full gap-3">
      <div className="login-container w-[70%] p-4 rounded-lg">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-[14px] font-medium">General settings</h4>
            <select
              className=" mt-2 bg-[#FFFFFF36] w-full px-2 text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                setGeneralSetting({
                  ...generalSetting,
                  coachingOfferingsId: e.target.value,
                });
                const selectedName =
                  e.target.selectedOptions[0].getAttribute("data-name");
                setServiceSetting({ ...serviceSetting, name: selectedName });
              }}
              value={generalSetting?.coachingOfferingsId}
            >
              <option value="" disabled selected>
                Select type or enter a name
              </option>
              {offeringData?.map((data, index) => (
                <option
                  value={data?.coachingOfferingsId}
                  data-name={data?.name}
                >
                  {data?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <textarea
              placeholder="Descriptions"
              className="bg-[#FFFFFF36] text-[12px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2 text-white"
              onChange={(e) => {
                setGeneralSetting({
                  ...generalSetting,
                  desc: e.target.value,
                });
              }}
              value={generalSetting?.desc}
            ></textarea>
          </div>
          <div className="">
            <select
              className="general-fields bg-[#FFFFFF36] w-full px-2 text-white text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                console.log("e.target.id", e.target.id);
                const selectedName =
                  e.target.selectedOptions[0].getAttribute("data-name");
                getMentorCategoriesByCategoryId(selectedName);
                const selectedId =
                  e.target.selectedOptions[0].getAttribute("data-id");
                setGeneralSetting({
                  ...generalSetting,
                  categoryId: selectedId,
                });
              }}
              value={generalSetting?.categoryId}
            >
              <option value="" disabled selected>
                Select Category
              </option>
              {categoryData?.map((data, index) => (
                <option
                  value={data?.categoryId}
                  data-id={data?.categoryId}
                  data-name={data?.categoryName}
                >
                  {data?.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="general-fields bg-[#FFFFFF36] w-full px-2 text-white text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-lg p-2"
              onChange={(e) => {
                console.log("e.target.id", e.target.id);
                const selectedId =
                  e.target.selectedOptions[0].getAttribute("data-id");
                setGeneralSetting({
                  ...generalSetting,
                  subCategoryId: selectedId,
                });
                const selectedName =
                  e.target.selectedOptions[0].getAttribute("data-name");
                setServiceSetting({
                  ...serviceSetting,
                  sub_category: selectedName,
                });
              }}
              value={generalSetting?.subCategoryId}
            >
              <option value="" disabled selected>
                Select Subcategory
              </option>
              {subCategoryData?.map((data, index) => (
                <option
                  value={data?.categoryId}
                  data-id={data?.categoryId}
                  data-name={data?.categoryName}
                >
                  {data?.categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 w-full">
          <p className="text-[14px] font-semibold text-white">
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
                      setServiceSetting({
                        ...serviceSetting,
                        customer_type_1: "",
                      });
                    } else {
                      newServices[0] = {
                        ...newServices[0],
                        type: "P2P(PersontoPerson)",
                      };
                      setServices(newServices);
                      setServiceSetting({
                        ...serviceSetting,
                        customer_type_1: "P2P",
                      });
                    }
                  }}
                  checked={
                    services[0]?.type == "P2P(PersontoPerson)" ? true : false
                  }
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <p className="text-[13px] font-light">P2P(person to person)</p>
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
                    setServiceSetting({
                      ...serviceSetting,
                      pricing_1: e.target.value,
                    });
                  }}
                  value={services[0]?.price}
                />
                <p className="text-[12px] font-normal">/hour</p>
              </div>
              <div
                className={`${
                  defaultSelect ? "bg-ask-to-mentor-primary" : "bg-[#2F3943] "
                } text-[14px] font-normal flex h-12 w-[100px] flex-row rounded-r-lg items-center px-2 cursor-pointer`}
                onClick={() => {
                  setDefaultSelect(true);
                  const newServices = [...services];
                  newServices[0] = {
                    ...newServices[0],
                    price: "0",
                  };
                  setServices(newServices);
                  setServiceSetting({
                    ...serviceSetting,
                    pricing_1: "0",
                  });
                }}
              >
                <p className="text-[12px] font-normal">Free</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 items-center mt-4">
            <div className="w-[50%] flex flex-row gap-3">
              <label className="custom-checkbox">
                <input
                  
                  type="checkbox"
                  className="h-[20px] w-[20px] pt-4 hidden-checkbox"
                  onChange={() => {
                    const newServices = [...services];
                    if (services[1]?.type == "P2B(PersontoBusiness)") {
                      newServices[1] = {
                        ...newServices[1],
                        type: "",
                      };
                      setServices(newServices);
                      setServiceSetting({
                        ...serviceSetting,
                        customer_type_2: "",
                      });
                    } else {
                      newServices[1] = {
                        ...newServices[1],
                        type: "P2B(PersontoBusiness)",
                      };
                      setServices(newServices);
                      setServiceSetting({
                        ...serviceSetting,
                        customer_type_2: "P2B",
                      });
                    }
                  }}
                  checked={
                    services[1]?.type == "P2B(PersontoBusiness)" ? true : false
                  }
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <p className="text-[13px] font-light"> P2B(person to Business)</p>
            </div>
            <div
              className={`${
                services[1]?.type == "P2B(PersontoBusiness)"
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
                  className="bg-inherit border-[1px] border-white w-[60px] focus:outline-none px-2 rounded-lg text-white text-[12px] h-9"
                  type="text"
                  placeholder="hour"
                  onChange={(e) => {
                    const newServices = [...services];
                    newServices[1] = {
                      ...newServices[1],
                      price: e.target.value,
                    };
                    setServices(newServices);
                    setServiceSetting({
                      ...serviceSetting,
                      pricing_2: e.target.value,
                    });
                  }}
                  value={services[1]?.price}
                />
                <p className="text-[12px] font-normal">/hour</p>
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
                    price: "0",
                  };
                  setServices(newServices);
                  setServiceSetting({
                    ...serviceSetting,
                    pricing_2: "0",
                  });
                }}
              >
                <p className="text-[12px] font-normal">Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-[#1A3B4A] rounded-lg h-fit p-3">
        <p className="text-[15px] font-medium">Service Setting</p>
        <div className="flex flex-col gap-[10px] mt-3 w-full">
          <span className="flex flex-row gap-1 items-center w-full">
            <p className="text-[#748D92] text-[13px] font-normal text-nowrap w-[40%]">
              Name:
            </p>
            <p className="text-white text-[12px] font-normal">
              {serviceSetting?.name}
            </p>
          </span>
          <span className="flex flex-row gap-1 items-center w-full">
            <p className="text-[#748D92] text-[13px] font-normal text-nowrap w-[40%]">
              Subcategory:
            </p>
            <p className="text-white text-[12px] font-normal">
              {serviceSetting?.sub_category}
            </p>
          </span>
          <span className="flex flex-row gap-1 items-center w-full">
            <p className="text-[#748D92] text-[13px] font-normal text-nowrap w-[40%]">
              {" "}
              Customer Type:
            </p>
            <span className="text-white text-[12px] font-normal flex flex-row gap-2">
              <p
                className={`border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg ${
                  serviceSetting?.customer_type_1 ? "flex" : "hidden"
                }`}
              >
                {" "}
                {serviceSetting?.customer_type_1}
              </p>
              <p
                className={`border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg ${
                  serviceSetting?.customer_type_2 ? "flex" : "hidden"
                }`}
              >
                {serviceSetting?.customer_type_2}
              </p>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-[10px] mt-3 w-full">
          <span className="flex flex-row gap-1 items-center w-full">
            <p className="text-[#748D92] text-[13px] font-normal text-nowrap w-[40%]">
              Pricing :
            </p>
            <span className="text-white text-[12px] font-normal flex flex-col gap-2">
              <span
                className={`${
                  serviceSetting?.customer_type_1 ? "flex" : "hidden"
                } border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg`}
              >
                {serviceSetting?.pricing_1}
                {serviceSetting?.customer_type_1 == "P2P" ? "/h P2P" : ""}
              </span>
              <span
                className={`${
                  serviceSetting?.customer_type_2 ? "flex" : "hidden"
                } border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg`}
              >
                {serviceSetting?.pricing_2}
                {serviceSetting?.customer_type_2 == "P2B" ? "/h P2B" : ""}
              </span>
              {/* // {serviceSetting?.pricing_1}
                // {serviceSetting?.pricing_2} */}
            </span>
          </span>
          <span className="flex w-full">
            <p className="text-[#748D92] text-[13px] font-normal text-nowrap w-[40%] ">
              Date & Time:
            </p>
            <p className="text-white text-[12px] font-medium">
              {availableDays.map((day, index) => (
                <li key={index} className="text-white text-[13px] font-normal">
                  {day}
                </li>
              ))}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
