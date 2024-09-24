import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import { PiChatTeardropText } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";

const MentorNavbar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("path", pathname);
  const [isMentorSearchOpen, setIsMentorProfileOpen] = useState(false);
  const [selectFilterDropdown, setSelectFilterDropdown] = useState({
    first_filter: false,
    second_filter: false,
    third_filter: false,
  });
  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold w-full relative">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            className=" w-[70px] h-[50px] mobile-lg:w-[92px] mobile-lg:h-full"
          />
        </div>
      </Link>
      {pathname != "/" && (
        <div>
          <div className="mentor-navbar-color p-2 flex flex-row items-center gap-5">
            <div className="bg-[#1C1F28] border-blue-400 rounded-lg h-[30px] w-[40px] border-[1px] flex justify-center items-center">
              <FaChevronLeft />
            </div>
            {isMentorSearchOpen ? (
              <div className="h-full bg-[#2A2E36] flex flex-row gap-5 items-center rounded-lg px-4">
                <span>
                  <IoSearchOutline className="text-white text-[20px]" />
                </span>
                <input
                  type="text"
                  className="bg-[#2A2E36] w-[420px] h-full focus:outline-none"
                />
              </div>
            ) : (
              <div className="flex flex-row items-center gap-10 relative">
                <div className="w-fit relative">
                  <div
                    className="p-1 px-2  cursor-pointer relative"
                    onClick={() => {
                      setSelectFilterDropdown({
                        ...selectFilterDropdown,
                        first_filter: !selectFilterDropdown?.first_filter,
                        second_filter: false,
                        third_filter: false,
                      });
                    }}
                  >
                    <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                      Category <p className="text-red-500">*</p>
                    </p>
                  </div>
                  {selectFilterDropdown?.first_filter && (
                    <div className="absolute bottom-0 mt-12 top-0 h-fit shadow-xl  w-[250px] p-3 bg-[#272B34] rounded-lg">
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                            Category <p className="text-red-500">*</p>
                          </p>
                          <select
                            id="gender"
                            name="gender"
                            className="bg-[#FFFFFF36] h-9 text-[14px] w-full rounded-lg"
                          >
                            <option value="none" selected>
                              Select Category
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                            Subcategories <p className="text-red-500">*</p>
                          </p>
                          <p className="text-[#BBBBBB] text-[14px] font-normal flex gap-1 items-center">
                            Choose category first to see subcategory list
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-fit relative">
                  <div
                    className="p-1 px-2 cursor-pointer relative"
                    onClick={() => {
                      setSelectFilterDropdown({
                        ...selectFilterDropdown,
                        second_filter: !selectFilterDropdown?.second_filter,
                        first_filter: false,
                        third_filter: false,
                      });
                    }}
                  >
                    <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                      Customer Type <p className="text-red-500">*</p>
                    </p>
                  </div>
                  {selectFilterDropdown?.second_filter && (
                    <div className="absolute bottom-0 mt-12 top-0 h-fit shadow-xl  w-[250px] p-3 bg-[#272B34] rounded-lg">
                      <div className="w-full">
                        <div className="flex flex-col gap-3">
                          <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                            Are you looking this for yourself or for a company ?
                          </p>
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <input type="radio" className="h-4 w-4" />
                              <p className="text-white text-[14px] font-normal">
                                P2P(Person to Person)
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input type="radio" className="h-4 w-4" />
                              <p className="text-white text-[14px] font-normal">
                                P2B(Person to Business)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-fit relative">
                  <div
                    className="p-1 px-2 cursor-pointer relative"
                    onClick={() => {
                      setSelectFilterDropdown({
                        ...selectFilterDropdown,
                        third_filter: !selectFilterDropdown?.third_filter,
                        first_filter: false,
                        second_filter: false,
                      });
                    }}
                  >
                    <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                      Setup Service Type <p className="text-red-500">*</p>
                    </p>
                  </div>
                  {selectFilterDropdown?.third_filter && (
                    <div className="absolute bottom-0 mt-12 left-0 right-0 top-0 h-fit shadow-xl  w-[250px] p-3 bg-[#272B34] rounded-lg">
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                            Service type <p className="text-red-500">*</p>
                          </p>
                          <select
                            id="gender"
                            name="gender"
                            className="bg-[#FFFFFF36] h-9 text-[14px] w-full rounded-lg"
                          >
                            <option value="none" selected>
                              Select service type
                            </option>
                            <option value="test1">test1</option>
                            <option value="test2">test2</option>
                            <option value="test3">test3</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-white text-[14px] font-normal flex gap-1 items-center">
                            Language <p className="text-red-500">*</p>
                          </p>
                          <select
                            id="gender"
                            name="gender"
                            className="bg-[#FFFFFF36] h-9 text-[14px] w-full rounded-lg"
                          >
                            <option value="none" selected>
                              Select Language
                            </option>
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div
              className="p-1 h-full px-4 flex items-center gap-3 bg-[#2A2E36] rounded-lg cursor-pointer"
              onClick={() => {
                setIsMentorProfileOpen(!isMentorSearchOpen);
              }}
            >
              <span>
                <IoSearchOutline className="text-white text-[20px]" />
              </span>
              <p className="text-white text-[14px] font-normal">Search</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div
          onClick={() => {
            navigate("/mentor-panel");
          }}
        >
          <GoHome
            className={`${
              pathname == "/mentor-panel" ? "text-[#124E66]" : "text-white"
            } text-[35px] cursor-pointer `}
          />
        </div>
        {pathname != "/" && (
          <>
            <div>
              <FaCalendarDays className="text-white text-[28px]" />
            </div>
            <div>
              <IoMdNotificationsOutline className="text-white text-[35px]" />
            </div>
            <div>
              <PiChatTeardropText className="text-white text-[35px]" />
            </div>
          </>
        )}

        <div
          className="bg-[#124E66] h-12 w-[50px] cursor-pointer rounded-full flex justify-center items-center"
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
        >
          <p className="text-[21px]">FA</p>
        </div>
      </div>
    </nav>
  );
};

export default MentorNavbar;
