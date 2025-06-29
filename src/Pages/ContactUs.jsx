import React, { useEffect } from "react";
import aa from "../assets/aa.png";
import bb from "../assets/bb.png";
import cc from "../assets/cc.png";
import dd from "../assets/dd.png";
import line from "../assets/line.png"
function ContactUs() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" min-h-screen mb-20  ">
      <div className="text-center">
        <div >
          <svg
            className="w-full"
            viewBox="0 0 1440 318"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1440V311.136C964.439 342.163 383.915 254.64 0 311.136V0Z"
              fill="url(#paint0_linear_233_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_233_8"
                x1="709"
                y1="3.49182e-06"
                x2="707"
                y2="294"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#01295C" />
                <stop offset="0.3" stop-color="#2D4D76" />
                <stop offset="0.665" stop-color="#657B97" />
                <stop offset="1" stop-color="#91A0B2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-4xl flex flex-col justify-center text-white -mt-[250px] items-center font-bold">Contact Us <span><img src={line} className="w-[250px]" alt="" /></span></h1>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[300px] max-w-6xl mx-auto mb-16">
        <div className="bg-[#dadada] p-6 rounded-tl-[50px] rounded-br-[50px] flex flex-col  items-center shadow text-center">
            <img src={bb} className="w-20" alt="" />
          <div className=" text-2xl font-semibold mt-5 mb-2">Phone Number</div>
          <p className="text-gray-600">+977 9800000000</p>
          <p className="text-gray-600">+977 9810000000</p>
        </div>
        <div className="bg-[#dadada] p-6 rounded-tl-[50px] rounded-br-[50px] flex flex-col  items-center shadow text-center">
            <img src={cc} className="w-20" alt="" />
          <div className=" font-semibold text-2xl mt-5 mb-2">Email</div>
          <p className="text-gray-600">example@gmail.com</p>
        </div>
        <div className="bg-[#dadada] p-6 rounded-tl-[50px] rounded-br-[50px] flex flex-col  items-center shadow text-center">
            <img src={dd} className="w-20" alt="" />
          <div className=" font-semibold mt-5 text-2xl mb-2">Location</div>
          <p className="text-gray-600">Street name</p>
          <p className="text-gray-600">Kathmandu</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-[#e4e4e4] p-6 rounded shadow">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img src={aa} alt="Map" className="w-full max-w-md" />
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="border-2 border-gray-300 bg-white px-4 py-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-2 border-gray-300 bg-white px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-2 border-gray-300 bg-white px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-2 border-gray-300 bg-white px-4 py-2 rounded w-full"
              />
            </div>
            <textarea
              placeholder="Write A Message"
              rows="4"
              className="w-full border-2 border-gray-300 bg-white px-4 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#003372] hover:bg-blue-950 cursor-pointer text-white px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
