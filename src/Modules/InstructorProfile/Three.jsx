import React from "react";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Three() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003366] space-y-8">
      <h1 className="text-white text-xl font-semibold">Contact Me</h1>

      <div className="flex space-x-8">
        
        {/* Phone Card */}
        <div className="bg-gray-200 w-48 h-40 flex flex-col items-center justify-center rounded-tl-[20px] rounded-br-[20px] shadow-lg space-y-3">
          <MdPhone size={40} className="text-[#003366]" />
          <h2 className="font-semibold">Phone Number</h2>
          <p className="text-gray-600">+977 9806020050</p>
        </div>

        {/* Email Card */}
        <div className="bg-gray-200 w-48 h-40 flex flex-col items-center justify-center rounded-tl-[20px] rounded-br-[20px] shadow-lg space-y-3">
          <MdEmail size={40} className="text-[#003366]" />
          <h2 className="font-semibold">Email</h2>
          <p className="text-gray-600">example@gmail.com</p>
        </div>

      </div>
    </div>
  );
}

export default Three;
