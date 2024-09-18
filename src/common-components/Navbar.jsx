import React, { useEffect, useState } from "react";
import MentorMenteeSwitch from "./MentorMenteeSwitch";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isChecked, setIsChecked] = useState(localStorage.getItem("loginType") === "Mentee");

  const toggleRole = () => {
    const newRole = isChecked ? "Mentor" : "Mentee";
    localStorage.setItem("loginType", newRole);
    setIsChecked(!isChecked);
    window.location.reload(); // consider using a more efficient method for state management
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { href: "/evaluate", text: "Evaluate" },
    { href: "/blogs", text: "Blogs" },
    { href: "/about-us", text: "About Us" },
    { href: "/contact-us", text: "Contact Us" },
  ];

  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold shadow-lg z-[10000] w-full namaste-learner-gradient">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[70px] h-[50px] mobile-lg:w-[92px] mobile-lg:h-full" />
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <ul className="hidden lg:flex xl:space-x-4">
          {navLinks.map((link, index) => (
            <li key={link.text} className="px-4 lg:px-6 py-3">
              <Link
                to={link.href}
                className={`text-white h-11 px-3 flex justify-center items-center rounded-lg transition-all duration-300 ${activeLink === link.text ? "bg-gradient-to-tr from-pink-500 to-blue-500" : "hover:text-black"} ${index === 0 ? "header-hight-light text-[18px] font-bold" : "text-[18px] font-bold"}`}
                onClick={() => handleLinkClick(link.text)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 items-center">
        <div className="h-9 flex flex-row bg-white rounded-lg">
          <button
            className={`h-9 flex justify-center items-center ${!isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"}`}
            onClick={toggleRole}
          >
            Mentor
          </button>
          <button
            className={`h-9 flex justify-center items-center ${isChecked ? "bg-[#124E66]" : "bg-white text-[#1E1E1E]"}`}
            onClick={toggleRole}
          >
            Mentee
          </button>
        </div>
        <div className="hidden sm:block">
          <button
            className={`font-bold text-[16px] bg-white text-black shadow-xl border-white border-[1px] rounded-full flex items-center px-10 h-8 sm:h-9 transition-all duration-300`}
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
