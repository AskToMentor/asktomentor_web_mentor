import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/account_department.png";
import adminSupportImage from "../../assets/admin_support.png";
import customerSupportImage from "../../assets/customer_surrportive.png";
import { FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const MentorProfile = () => {
  const [filterValue, setFilterValue] = useState("All");
  const accountAndConsulting = [
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
  ];
  const adminSupport = [
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
  ];
  const customerSupportive = [
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
    {
      id: 1,
      name: "Jogendar Singh",
      description:
        "Timely precision, where promises meet performance, ensuring your project's success.",
      experience: 3,
      location: "Udaipur, Rajasthan",
    },
  ];
  const mentorFilter = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Account & Consulting",
    },
    {
      id: 3,
      label: "Admin Support",
    },
    {
      id: 4,
      label: "Customer Service",
    },
    {
      id: 5,
      label: "Data science & Analytics",
    },
    {
      id: 6,
      label: "Design & Creative",
    },
    {
      id: 7,
      label: "Engineering & Architecture",
    },
    {
      id: 8,
      label: "IT & networking",
    },
    {
      id: 9,
      label: "Legal",
    },
    {
      id: 10,
      label: "Sales & marketing",
    }
  ];
  return (
    <div className="p-10 overflow-y-auto h-full">
      <div className="overflow-hidden max-w-full flex flex-col">
        <div className="flex flex-row gap-4 overflow-y-hidden overflow-x-auto mt-10 mentor-scroll-container">
          {mentorFilter?.map((item) => (
            <div
              key={item?.label} // Add a key for better performance
              className={`cursor-pointer h-[55px]  text-[#D3D9D5] font-medium text-[13px] rounded-xl flex justify-center items-center text-center ${
                filterValue === item?.label
                  ? "bg-[#124E66]"
                  : "border-[#A1AEBE] border-[1px]"
              }`}
              onClick={() => {
                setFilterValue(item?.label);
              }}
            >
              <p className="rounded-xl flex justify-center items-center w-[150px] h-full ">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="text-white font-normal text-2xl flex-wrap flex items-center gap-2">
          <p className="text-[30px] font-semibold leading-[60px] text-white">
            Account & Consulting
          </p>
        </div>
        <div className="w-full items-center grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-7 mt-3 mb-10 ">
          {accountAndConsulting?.map((data, index) => (
            <div className="h-[400px] relative mt-1 rounded-lg bg-[#D3D9D5]">
              <div className="h-[45%] w-full rounded-t-lg">
                <img src={bannerImage} className="h-full w-full rounded-t-lg" />
              </div>
              <div className="flex flex-col gap-1 p-2">
                <p className="text-[#274760] font-medium text-[19px]">
                  {data?.name}
                </p>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline className="text-[#748D92]" />
                  <p className="text-[#748D92] font-normal text-[13px]">
                    {data?.location}
                  </p>
                </span>
                <p className="text-[#243937] font-normal text-[14px]">
                  {data?.description}
                </p>
                <div className="flex gap-3">
                  <button className="border-[1px] border-[#748D92] font-normal text-[13px] rounded-lg h-9 bg-white text-[#124E66] flex justify-center items-center">
                    {data?.experience} Years Experience
                  </button>
                  <button className="border-[1px] border-[#748D92] font-normal text-[13px] rounded-lg h-9 bg-white text-[#124E66] flex justify-center items-center">
                    Language
                  </button>
                </div>
                <div>
                  <span className="flex flex-row gap-2 items-center mt-2">
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />{" "}
                    <FaStar className="text-[#E5C727]" />
                    <p className="text-[#748D9282] font-normal text-[15px]">
                      (15+reviews)
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-white font-normal text-2xl flex-wrap flex items-center gap-2">
          <p className="text-[30px] font-semibold leading-[60px] text-white">
            Admin Support
          </p>
        </div>
        <div className="w-full items-center grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-7 mt-3 mb-10 ">
          {adminSupport?.map((data, index) => (
            <div className="h-[400px] relative mt-1 rounded-lg bg-[#D3D9D5]">
              <div className="h-[45%] w-full rounded-t-lg">
                <img
                  src={adminSupportImage}
                  className="h-full w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-1 p-2">
                <p className="text-[#274760] font-medium text-[19px]">
                  {data?.name}
                </p>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline className="text-[#748D92]" />
                  <p className="text-[#748D92] font-normal text-[13px]">
                    {data?.location}
                  </p>
                </span>
                <p className="text-[#243937] font-normal text-[14px]">
                  {data?.description}
                </p>
                <div className="flex gap-3">
                  <button className="border-[1px] border-[#748D92] font-normal text-[13px] rounded-lg h-9 bg-white text-[#124E66] flex justify-center items-center">
                    {data?.experience} Years Experience
                  </button>
                  <button className="border-[1px] border-[#748D92] font-normal text-[13px] rounded-lg h-9 bg-white text-[#124E66] flex justify-center items-center">
                    Language
                  </button>
                </div>
                <div>
                  <span className="flex flex-row gap-2 items-center mt-2">
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />{" "}
                    <FaStar className="text-[#E5C727]" />
                    <p className="text-[#748D9282] font-normal text-[15px]">
                      (15+reviews)
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-white font-normal text-2xl flex-wrap flex items-center gap-2">
          <p className="text-[30px] font-semibold leading-[60px] text-white">
            Customer Service
          </p>
        </div>
        <div className="w-full items-center grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-7 mt-3 mb-10 ">
          {customerSupportive?.map((data, index) => (
            <div className="h-[400px] relative mt-1 rounded-lg bg-[#D3D9D5]">
              <div className="h-[45%] w-full rounded-t-lg">
                <img
                  src={customerSupportImage}
                  className="h-full w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-1 p-2">
                <p className="text-[#274760] font-medium text-[19px]">
                  {data?.name}
                </p>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline className="text-[#748D92]" />
                  <p className="text-[#748D92] font-normal text-[13px]">
                    {data?.location}
                  </p>
                </span>
                <p className="text-[#243937] font-normal text-[14px]">
                  {data?.description}
                </p>
                <div className="flex gap-3">
                  <button className="border-[1px] border-[#748D92] font-normal text-[13px] rounded-lg h-9 bg-white text-[#124E66] flex justify-center items-center">
                    {data?.experience} Years Experience
                  </button>
                </div>
                <div>
                  <span className="flex flex-row gap-2 items-center mt-2">
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />
                    <FaStar className="text-[#E5C727]" />{" "}
                    <FaStar className="text-[#E5C727]" />
                    <p className="text-[#748D9282] font-normal text-[15px]">
                      (15+reviews)
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
