import React, { useEffect, useState } from "react";
import MentorMenteeSwitch from "./MentorMenteeSwitch";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
    { href: "#explore", text: "Evaluate" },
    { href: "#explore", text: "Explore" },
    { href: "#blogs", text: "Blogs" },
    { href: "#subscription", text: "About us" },
    { href: "#contact-us", text: "Contact Us" },
  ];
  useEffect(() => {
    if (localStorage.getItem("loginType") == "Mentee") {
      setIsChecked(true);
    }
  }, [localStorage.getItem("loginType")]);

  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold shadow-lg z-[10000] w-full bg-[#212A31]">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            className=" w-[70px] h-[50px] mobile-lg:w-[92px] mobile-lg:h-full"
          />
        </div>
      </Link>
      <ul className="hidden lg:flex lg:space-x-2 xl:space-x-8">
        {navLinks.map((link) => (
          <li key={link.text} className="px-4 lg:px-6 py-3">
            <a
              href={link.href}
              className={`text-white px-3  py-3 rounded-lg transition-all duration-300 ${
                activeLink === link.text
                  ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                  : "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500 hover:rounded-lg"
              }`}
              onClick={() => handleLinkClick(link.text)}
            >
              {link.text}
            </a>
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
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[48px]" : ""
                }`}
              ></span>
            </span>
            <span className="label flex items-center text-lg font-medium text-white">
              Mentee
            </span>
          </label>
        </>
        <div className="hidden sm:block">
          <button
            className={`text-white border-white border-[1px] rounded-full flex items-center px-6 h-8 sm:h-9  transition-all duration-300 ${
              activeLink === "Login"
                ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                : "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500"
            }`}
            onClick={() => handleLinkClick("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
