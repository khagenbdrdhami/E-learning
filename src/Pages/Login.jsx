import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.png";
import g from "../assets/g.png";
const macondoFont = { fontFamily: "'Macondo Swash Caps', cursive" };
function Login()
 {
  
  const { loginWithRedirect } = useAuth0();
  

  
  return (
    
    <div className="flex justify-center">
        <div className="relative w-[1000px] h-[500px] flex border-2 border-gray-300 bg-white  shadow my-10 overflow-hidden">
      {/* SVG Background covering entire container */}
      <svg
        className="absolute top-0 left-0 w-[620px] h-full"
        viewBox="0 0 992 782"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M430.066 0H0V783H992C984.008 715.29 945.5 598 841 568C746.344 540.826 723.665 460.533 722 409.5C722 370.975 690.203 279.537 593.5 221.5C496.797 163.463 446.217 69.0441 430.066 0Z"
          fill="url(#paint0_linear_276_22)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_276_22"
            x1="496"
            y1="0"
            x2="496"
            y2="783"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002859" />
            <stop offset="1" stopColor="#0056BF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left side content (transparent background to show SVG) */}
      <div className="relative w-1/2 h-full flex flex-col justify-between px-6 py-6 text-white z-9">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            
            className="h-11 bg-white cursor-pointer rounded-[10px] w-8"
          />
          <span style={macondoFont} className="text-lg">
            S·T·Tech
          </span>
        </div>
        <div className="ml-11">
          <h1 className="text-xl font-semibold leading-snug">
            Empower Your Learning Journey –
          </h1>
          <h2 className="text-xl mt-1">Welcome to S.T. Tech!</h2>
        </div>
        <img
          src={g}
          alt="Learning Illustration"
          className="w-[260px] self-center -ml-13 mb-4"
        />
      </div>

      {/* Right side: Signup form with solid white background covering SVG */}
      <div className="relative w-1/2 flex items-center justify-center p-8  z-9">
        <div className="w-full max-w-[300px]">
          <h2 className="text-base font-semibold mb-4 text-center">
            Sign up to S.T. Tech
          </h2>

          <button
          onClick={() => loginWithRedirect()}
           className="w-full flex items-center justify-center cursor-pointer border rounded py-2 mb-4 text-sm hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4 mr-2"
            />
            Sign up with Google
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400 text-xs">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 px-3 py-2 border rounded text-xs"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-1/2 px-3 py-2 border rounded text-xs"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border rounded text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded text-xs"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border rounded text-xs"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-white py-2 rounded text-xs font-medium"
            >
              Sign up
            </button>
          </form>

          <p className="text-[11px] text-right mt-3">
            Already signed in?{" "}
            <a href="#" className="text-yellow-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
