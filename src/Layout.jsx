import React, { useEffect, useRef, useState } from "react";
import Navbar from "./common-components/Navbar";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import ShowSucessmessages from "./alert-messages/ShowSucessmessages";
import { IoSettingsOutline } from "react-icons/io5";
import MentorNavbar from "./common-components/MentorNavbar";
import { PiExamLight } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { FaTools } from "react-icons/fa";
const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const popupRef = useRef(null);
  // Function to close the sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsSideBarOpen(false); // Close the sidebar
    }
  };

  useEffect(() => {
    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component is unmounted or when sidebar is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideBarOpen]);

  const navLinks = [
    { href: "/evalaute", text: "Evaluate" },
    { href: "/blogs", text: "Blogs" },
    { href: "/about-us", text: "About us" },
    { href: "/contact-us", text: "Contact Us" },
  ];
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  console.log("isLoggedIn", isLoggedIn);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="main-content flex flex-col w-full h-screen overflow-hidden">
        <div className="h-[12%] md:h-[10%] desktop-lg:h-[12%] relative w-full">
          {isLoggedIn ? (
            <MentorNavbar
              setIsSideBarOpen={setIsSideBarOpen}
              isSideBarOpen={isSideBarOpen}
            />
          ) : (
            <Navbar
              setIsSideBarOpen={setIsSideBarOpen}
              isSideBarOpen={isSideBarOpen}
            />
          )}
          {/* <Navbar
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          /> */}
        </div>
        {isSideBarOpen && (
          <div
            className={`absolute right-2 sm:right-4 z-50 rounded-lg bg-[#124E66] h-fit w-[200px] mt-[17%] md:mt-[10%] desktop-lg:mt-[5%] text-white ${
              !isLoggedIn ? "p-1" : "p-3"
            }`}
            ref={popupRef}
          >
            <div className="flex flex-col">
              <ul className="flex flex-col gap-3 lg:hidden xl:space-x-4 ">
                {navLinks?.map((link, index) => (
                  <li key={link.text} className="w-[100%]">
                    <a
                      href={link.href}
                      className={` text-white h-10  px-2 flex justify-start items-center rounded-lg transition-all duration-300 ${
                        activeLink === link.text
                          ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                          : "hover:text-black"
                      } ${
                        index == 0
                          ? "header-hight-light text-[18px] font-bold"
                          : " text-[18px] font-bold"
                      }`}
                      onClick={() => handleLinkClick(link.text)}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {!isLoggedIn && (
              <div
                className="flex flex-row items-center gap-5 mt-3 lg:mt-0 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                onClick={() => {
                  navigate("/login");
                  setIsSideBarOpen(false);
                }}
              >
                <span>
                  <IoIosLogIn className="text-[25px]" />
                </span>
                <p className="text-[18px] lg:text-[14px] font-bold">Login</p>
              </div>
            )}
            {isLoggedIn && (
              <div className="flex flex-col gap-2 mt-2 z-50">
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/mentor-panel");
                  }}
                >
                  <span>
                    <GoHome className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Home</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/mentor-profile");
                  }}
                >
                  <span>
                    <CgProfile className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Profile</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/evalaute");
                  }}
                >
                  <span>
                    <PiExamLight className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Evaluate</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/tools");
                  }}
                >
                  <FaTools className={`text-white`} />
                  <p className="text-[14px] font-bold">Tools</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/blogs");
                  }}
                >
                  <span>
                    <IoNewspaper className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Blogs</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/subscription");
                  }}
                >
                  <span>
                    <TbPremiumRights className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Subscription</p>
                </div>
                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    navigate("/setting");
                  }}
                >
                  <span>
                    <IoSettingsOutline className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Settings</p>
                </div>

                <div
                  className="flex flex-row items-center gap-3 cursor-pointer w-[100%] hover:bg-[#748D9299] h-10 px-2 rounded-lg"
                  onClick={() => {
                    setIsSideBarOpen(false);
                    localStorage.removeItem("token");
                    localStorage.clear();
                    // ShowSucessmessages("You have successfully logged out");
                    navigate("/login");
                  }}
                >
                  <span>
                    <CiLogout className="text-[21px]" />
                  </span>
                  <p className="text-[14px] font-bold">Logout</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="w-full h-[88%] md:h-[90%] desktop-lg:h-[88%] overflow-hidden flex pb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
