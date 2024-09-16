import React, { useEffect, useState } from "react";
import MentorMenteeSwitch from "./MentorMenteeSwitch";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    { href: "/about-us", text: "About us" },
    { href: "/contact-us", text: "Contact Us" },
  ];
  useEffect(() => {
    if (localStorage.getItem("loginType") == "Mentee") {
      setIsChecked(true);
    }
  }, [localStorage.getItem("loginType")]);

  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold shadow-lg z-[10000] w-full namaste-learner-gradient">
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
              <a
                href={link.href}
                className={` text-white h-11  px-3 flex justify-center items-center rounded-lg transition-all duration-300 ${
                  activeLink === link.text
                    ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                    : "hover:text-black"
                } ${index == 0 ? "header-hight-light text-[18px] font-bold" : " text-[18px] font-bold"}`}
                onClick={() => handleLinkClick(link.text)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 items-center">
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
            className={`h-9 flex justify-center items-center ${
              !isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"
            }`}
            onClick={handleCheckboxChange}
          >
            Mentor
          </button>
          <button
            className={`h-9 flex justify-center items-center ${
              isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"
            }`}
            onClick={handleCheckboxChange}
          >
            Mentee
          </button>
        </div>
        <div className="hidden sm:block">
          <button
            className={`font-bold text-[16px] bg-white text-black shadow-xl border-white border-[1px] rounded-full flex items-center px-10 h-8 sm:h-9  transition-all duration-300`}
            onClick={() => handleLinkClick("Login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="block lg:hidden">
        <GiHamburgerMenu className="text-[25px]" />
      </div>
    </nav>
  );
};

export default Navbar;
