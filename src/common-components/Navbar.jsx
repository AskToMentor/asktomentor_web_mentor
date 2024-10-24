import React, { useEffect, useState } from "react";
import MentorMenteeSwitch from "./MentorMenteeSwitch";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const [activeLink, setActiveLink] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    if (localStorage.getItem("loginType")) {
      console.log("fsvdfvdf", localStorage.getItem("loginType") == "Mentee");
      if (localStorage.getItem("loginType") == "Mentee") {
        localStorage.setItem("loginType", "Mentor");
      } else {
        setIsChecked(true);
        localStorage.setItem("loginType", "Mentee");
      }
    } else {
      localStorage.setItem("loginType", "Mentor");
    }
    window.location.reload();
  };

  const handleSwitchChange = (event) => {
    if (localStorage.getItem("loginType")) {
      console.log("fsvdfvdf", localStorage.getItem("loginType") == "Mentee");
      if (localStorage.getItem("loginType") == "Mentee") {
        localStorage.setItem("loginType", "Mentor");
      } else {
        localStorage.setItem("loginType", "Mentee");
      }
    } else {
      localStorage.setItem("loginType", "Mentor");
    }
    setSelectedRole(localStorage.getItem("loginType") ? "Mentee" : "Mentor");
    window.location.reload();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { href: "/evalaute", text: "Evaluate" },
    { href: "/blogs", text: "Blogs" },
    { href: "/subscription", text: "Subscription" },
    { href: "/tools", text: "Tools" },
    { href: "/contact-us", text: "Contact Us" },
  ];
  useEffect(() => {
    if (localStorage.getItem("loginType") == "Mentee") {
      setIsChecked(true);
    }
  }, [localStorage.getItem("loginType")]);
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const handelCheckLoggedIn = (url) => {
    if (url == "/evalaute" || url == "/subscription" || url == "/tools") {
      navigate("/login");
    } else {
      navigate(url);
    }
  };
  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold w-full  relative">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            className=" w-[70px] h-[50px] mobile-lg:w-[92px] mobile-lg:h-full"
          />
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <ul className="hidden lg:flex xl:space-x-4">
          {navLinks.map((link, index) => (
            <li key={link.text} className="px-4 lg:px-6 py-3">
              {isLoggedIn ? (
                <a
                  href={link.href}
                  className={` text-white h-11  px-3 flex justify-center items-center rounded-lg transition-all duration-300 ${
                    activeLink === link.text
                      ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                      : "hover:text-black"
                  } ${
                    index == 0
                      ? "header-hight-light text-[14px] font-bold"
                      : " text-[14px] font-bold"
                  }`}
                  onClick={() => handleLinkClick(link.text)}
                >
                  {link.text}
                </a>
              ) : (
                <span
                  // href={"/login"}
                  className={` text-white h-11  px-3 flex justify-center items-center rounded-lg transition-all duration-300 ${
                    activeLink === link.text
                      ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                      : "hover:text-black"
                  } ${
                    index == 0
                      ? "header-hight-light text-[14px] font-bold"
                      : " text-[14px] font-bold"
                  }`}
                  onClick={() => {
                    handelCheckLoggedIn(link?.href);
                    handleLinkClick(link.text);
                  }}
                >
                  {link.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 sm:gap-20 items-center">
        {/* <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
      <ul className="hidden lg:flex lg:space-x-2 xl:space-x-8">
        {navLinks.map((link) => (
          <li key={link.text} className="px-4 lg:px-6 py-3">
            <Link
              to={link.href}
              className={`text-white px-3  py-3 rounded-lg transition-all duration-300 ${activeLink === link.text
                ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                : "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500 hover:rounded-lg"
                }`}
              onClick={() => handleLinkClick(link.text)}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center">
        <>
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <span className="label flex items-center text-lg font-medium text-white">
              Mentor
            </span>
            <span
              className={`slider mx-4 flex h-8 w-[80px] items-center rounded-full p-1 duration-200 bg-[#124E66]`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? "translate-x-[48px]" : ""
                  }`}
              ></span>
            </span>
            <span className="label flex items-center text-lg font-medium text-white">
              Mentee
            </span>
          </label> */}
        <div className="h-9 flex flex-row bg-white rounded-lg">
          <button
            className={`h-9 text-[14px] flex justify-center items-center ${
              !isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"
            }`}
            onClick={handleCheckboxChange}
          >
            Mentor
          </button>
          <button
            className={`h-9 text-[14px] flex justify-center items-center ${
              isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"
            }`}
            onClick={handleCheckboxChange}
          >
            Mentee
          </button>
        </div>
        {isLoggedIn ? (
          <div
            className="bg-[#124E66] h-12 w-[50px] cursor-pointer rounded-full flex justify-center items-center"
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
          >
            <p className="text-[21px]">FA</p>
          </div>
        ) : (
          <div
            className="block cursor-pointer"
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
          >
            <GiHamburgerMenu className="text-[25px] text-white" />
          </div>
        )}

        {/* <div className="hidden sm:block">
          <button
            className={`font-bold text-[16px] bg-white text-black shadow-xl border-white border-[1px] rounded-full flex items-center px-10 h-8 sm:h-9  transition-all duration-300`}
            onClick={() => handleLinkClick("Login")}
          >
            Login
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
