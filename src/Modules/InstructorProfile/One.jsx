import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
 
} from "react-icons/fa";

function One() {
  const location = useLocation();
  const user = location.state;

  if (!user) return <div className="p-6 text-red-500">No user data found.</div>;

  return (
    <div className="font-sans">
      
      <div className=" p-10 flex px-20 justify-between items-center flex-wrap">
        <div className="max-w-xl">
          <p className="text-sm text-gray-700">Hey I am,</p>
          <h1 className="text-2xl font-semibold text-blue-900">
            {user.firstName} {user.lastName}
          </h1>
          <p className="mt-2 text-gray-600">
            I am a professional UI/UX Designer, Graphic Designer, and instructor dedicated to helping you master design principles and create impactful digital experiences.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#01295c] text-white text-sm rounded hover:bg-blue-900">
            Contact Now
          </button>

          {/* Metrics */}
          <div className="mt-6 flex  ">
            <div className="p-4 bg-white rounded-l-[10px]  text-center">
              <p className="text-lg font-semibold">5 Yrs</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
            <div className="p-4 bg-white border-x border-gray-300  text-center">
              <p className="text-lg font-semibold">8</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div className="p-4 bg-white rounded-r-[10px]  text-center">
              <p className="text-lg font-semibold">25</p>
              <p className="text-sm text-gray-500">Students</p>
            </div>
          </div>
        </div>

        {/* Avatar */}
        <img
          src={user.image}
          alt={user.firstName}
          className="w-48 h-48 rounded-[20px] object-cover border-4 border-yellow-500 mt-6 lg:mt-0"
        />
      </div>

      {/* About Section */}
      <div className="bg-[#01295c] text-white px-20 py-20 flex flex-wrap items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="relative">
          <img
            src={user.image}
            alt="Instructor"
            className="w-[200px] h-[200px] rounded-[20px] object-cover border-4 border-yellow-400"
          />
          <div className="absolute bottom-[-15px] left-12 flex gap-4 bg-[#1b221c] px-3 py-2 text-yellow-500 rounded">
            <a href="#"><FaFacebookF/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right: About Text */}
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold mb-3">About Me</h2>
          <p className=" text-gray-200 leading-relaxed">
            As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences.
          </p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded text-sm">My Projects</button>
        </div>
      </div>
    </div>
  );
}

export default One;
