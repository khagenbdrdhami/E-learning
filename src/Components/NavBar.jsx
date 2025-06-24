import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.png";

// Define font style inline
const macondoFont = { fontFamily: "'Macondo Swash Caps', cursive" };



const NavBar = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-[#e2bc51] text-black">
      <div className="flex items-center px-10 py-2 justify-between">
     
        <div className="flex items-center space-x-2"
        
        >
          <img src={logo} alt="Logo" onClick={()=>(navigate("/"))} className="h-11 bg-white cursor-pointer rounded-[10px] w-8" />
          <span style={macondoFont} className="text-lg">S·T·Tech</span>
        </div>

      
        <div className="flex space-x-6 font-medium" >
          <NavLink to="/" className="hover:border-b-2 border-[#01295c]">Home</NavLink>
          <NavLink to="/dashboard" className="hover:border-b-2 border-[#01295c]">Dashboard</NavLink>
          <NavLink to="/courses" onClick={()=>(navigate("/courses"))} className="hover:border-b-2 border-[#01295c]">Courses</NavLink>
          <NavLink to="/instructors" className="hover:border-b-2 border-[#01295c]">Instructors</NavLink>
          <NavLink to="/about" className="hover:border-b-2 border-[#01295c]">About us</NavLink>

          
          <div className="relative group">
            <NavLink to="#" className="flex items-center space-x-1 hover:border-b-2 border-black">
              <span>More</span>
              <svg className="w-3 h-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-md rounded-md py-2 w-32 z-10 font-normal">
              <NavLink to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</NavLink>
              <NavLink to="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</NavLink>
            </div>
          </div>
        </div>

        {/* Search + Icons + Buttons */}
        <div className="flex items-center space-x-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="px-3 py-1 rounded-full bg-gray-300 text-sm w-52 focus:outline-none"
          />
          <div className="flex items-center space-x-5 text-[#01295c]" style={macondoFont}>
            <FaShoppingCart onClick={()=>(navigate("/cart"))} className="text-lg cursor-pointer" />
            <FaHeart className="text-lg cursor-pointer" />
            <NavLink to="/login" className="px-3 py-1 border border-white hover:bg-[#01295c] hover:border-[#01295c] hover:text-white rounded">Log in</NavLink>
            <NavLink to="/register" className="px-3 py-1 border border-white hover:bg-[#01295c] hover:border-[#01295c] hover:text-white rounded">Register</NavLink>
            <FaGlobe className="text-3xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
