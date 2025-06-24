import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import a from "../assets/logo.png";

const macondoFont = { fontFamily: "'Macondo Swash Caps', cursive" };

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 675"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 9.59624C0 9.59624 275.5 166.15 691.5 65.8931C1107.5 -34.3638 1440 9.59624 1440 9.59624V675H0V9.59624Z"
          fill="url(#paint0_linear_89_331)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_89_331"
            x1="720"
            y1="-8.66409"
            x2="720"
            y2="675"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002859" />
            <stop offset="0.32" stopColor="#003372" />
            <stop offset="0.61" stopColor="#003A81" />
            <stop offset="0.73" stopColor="#00408F" />
            <stop offset="1" stopColor="#0056BF" />
          </linearGradient>
        </defs>
      </svg>

      
      <footer className="relative z-10 text-white pt-40 pb-5 ml-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          <div>
            <div className="flex items-center mb-4">
              <img
                src={a}
                alt="logo"
                className="h-11 bg-white cursor-pointer rounded-[10px] w-8"
              />
              <span style={macondoFont} className="text-xl font-bold ml-2">
                S.T. Tech
              </span>
            </div>
            <p className="text-gray-300">
              <strong>S.T. Tech</strong> is an e-learning platform offering
              practical, engaging, and accessible courses designed to help
              students build skills and achieve their goals.
            </p>
          </div>

       
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <div className="flex flex-col space-y-2 text-gray-300">
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink to="/instructors">Instructors</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </div>
          </div>

        
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="flex flex-col space-y-2 text-gray-300">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/faqs">FAQs</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/why-us">Why Us?</NavLink>
            </div>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <div className="flex flex-col space-y-2 text-gray-300">
              <NavLink to="/courses/it">IT Courses</NavLink>
              <NavLink to="/courses/design">Designing Courses</NavLink>
              <NavLink to="/courses/marketing">Marketing Courses</NavLink>
              <NavLink to="/courses/business">Business Courses</NavLink>
              <NavLink to="/courses/development">Public Development</NavLink>
              <NavLink to="/courses/arts">Creative Arts Courses</NavLink>
            </div>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Location
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +977 9800000000
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> example@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt /> Monday–Friday
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-10 text-yellow-300 text-xl">
          <span className="text-white text-sm">FOLLOW US ON </span>
          <p className="flex mt-3 space-x-3">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </p>
        </div>

        
        <div className="mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <NavLink to="/refund-policy" className="text-white">
            Refund & Return Policy
          </NavLink>
          <p className="text-white">© 2025 S.T. Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
