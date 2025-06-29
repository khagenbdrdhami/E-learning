import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

// Define font style inline
const macondoFont = { fontFamily: "'Macondo Swash Caps', cursive" };

const NavBar = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const [showLogout, setShowLogout] = useState(false);
  const { logout } = useAuth0();

  return (
    <div className="bg-[#e2bc51] sticky top-0 z-10 text-black">
      <div className="flex items-center px-10 py-2 justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            className="h-11 bg-white cursor-pointer rounded-[10px] w-8"
          />
          <span style={macondoFont} className="text-lg">
            S·T·Tech
          </span>
        </div>

        <div className="flex space-x-6 font-medium">
          <NavLink to="/" className="hover:border-b-2 border-[#01295c]">
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="hover:border-b-2 border-[#01295c]"
          >
            Dashboard
          </NavLink>
          <NavLink to="/courses" className="hover:border-b-2 border-[#01295c]">
            Courses
          </NavLink>
          <NavLink
            to="/instructor"
            className="hover:border-b-2 border-[#01295c]"
          >
            Instructors
          </NavLink>
          <NavLink to="/about" className="hover:border-b-2 border-[#01295c]">
            About us
          </NavLink>

          <div className="relative group">
            <NavLink
              to="contactus"
              className="flex items-center space-x-1 hover:border-b-2 border-black"
            >
              Contact Us
              
            </NavLink>
            
          </div>
        </div>

        {/* Search + Icons + Buttons */}
        <div className="flex items-center space-x-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="px-3 py-1 rounded-full bg-gray-300 text-sm w-52 focus:outline-none"
          />
          <div
            className="flex items-center space-x-5 text-[#01295c] relative"
            style={macondoFont}
          >
            <FaShoppingCart
              onClick={() => navigate("/cart")}
              className="text-lg cursor-pointer"
            />
            <FaHeart
              onClick={() => navigate("/wishlist")}
              className="text-lg cursor-pointer"
            />

            {isAuthenticated ? (
              <div className="relative">
                <img
                  className="rounded-full w-9 cursor-pointer"
                  src={user.picture}
                  alt="User"
                  onClick={() => setShowLogout((prev) => !prev)}
                />
                {showLogout && (
                  <div className="absolute top-12 -right-7 cursor-pointer bg-white border border-gray-300 shadow-md rounded px-4 py-2 z-50">
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      LogOut
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <NavLink
                  to="/login"
                  className="px-3 py-1 border border-white hover:bg-[#01295c] hover:border-[#01295c] hover:text-white rounded"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/login"
                  className="px-3 py-1 border border-white hover:bg-[#01295c] hover:border-[#01295c] hover:text-white rounded"
                >
                  Register
                </NavLink>
              </div>
            )}

            <FaGlobe className="text-3xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
