import React, { useState } from 'react';
import MentorMenteeSwitch from './MentorMenteeSwitch';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [selectedRole, setSelectedRole] = useState('Mentor');

  const handleSwitchChange = (event) => {
    setSelectedRole(event.target.checked ? 'Mentee' : 'Mentor');
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
    <nav className="px-5 py-2 flex justify-between items-center font-semibold shadow-lg fixed z-[10000] w-full bg-[#212A31] left-0 right-0">
      <Link to="/" className="text-white text-base">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[92px]" />
        </div>
      </Link>
      <ul className="flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className={`text-white px-6 py-3 transition-all duration-300 ${
                activeLink === link.text
                  ? 'bg-gradient-to-tr from-pink-500 to-blue-500'
                  : 'hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500'
              }`}
              onClick={() => handleLinkClick(link.text)}
              style={{ borderRadius: '5px' }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center">
        <MentorMenteeSwitch onChange={handleSwitchChange} />
        <a
          href="#contact-us"
          className={`text-white px-6 py-3 transition-all duration-300 ${
            activeLink === 'Login'
              ? 'bg-gradient-to-tr from-pink-500 to-blue-500'
              : 'hover:bg-gradient-to-tr hover:from-pink-500 hover:to-blue-500'
          }`}
          onClick={() => handleLinkClick('Login')}
          style={{ borderRadius: '5px' }}
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
