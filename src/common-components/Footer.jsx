import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.png";
import socials from "../assets/footer-socials.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <div className="logo-container ">
            <img src={Logo} alt="Footer Logo" />
            <div className="w-full">
              <h3 className="">
                AskToMentor
              </h3>
            </div>
          </div>
          <div className="logo-container">
            <p>
              <i>Where Curiosity Meets Knowledge</i>
            </p>
          </div>
          <div className="socials">
            <h3>Follow Us</h3>
            <img src={socials} alt="Social Icons" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Explore</li>
            <li>Blogs</li>
            <li>Subscription</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Support</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Reach Us</h3>
          <p>+91 96610 87999</p>
          <p>info@kjxsofttech.com</p>
          <p>Kankarbagh Main Rd, Kumhar Toli, Ghrounda, Patna, Bihar 800020</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© AskToMentor 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
