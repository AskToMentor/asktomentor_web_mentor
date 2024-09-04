import React, { useState } from "react";
import MentorMenteeSwitch from "./MentorMenteeSwitch";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [selectedRole, setSelectedRole] = useState("Mentor");

  const handleSwitchChange = (event) => {
    setSelectedRole(event.target.checked ? "Mentee" : "Mentor");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { href: "#explore", text: "Al Tutor" },
    { href: "#explore", text: "Explore" },
    { href: "#blogs", text: "Blogs" },
    { href: "#subscription", text: "Subscription" },
    { href: "#contact-us", text: "Contact Us" },
  ];

  return (
    <nav className="px-2 md:px-5 h-full flex justify-between items-center font-semibold shadow-lg z-[10000] w-full bg-[#212A31]">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img src={Logo} alt="Logo" className=" w-[70px] h-[50px] mobile-lg:w-[92px] mobile-lg:h-full" />
        </div>
      </Link>
      <ul className="hidden tablet-md:flex lg:space-x-2 xl:space-x-8">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className={`text-white px-4 lg:px-6 py-3 transition-all duration-300 ${
                activeLink === link.text
                  ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                  : "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500"
              }`}
              onClick={() => handleLinkClick(link.text)}
              style={{ borderRadius: "5px" }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex lg:gap-5 items-center">
        <MentorMenteeSwitch onChange={handleSwitchChange} />
        <div>
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
