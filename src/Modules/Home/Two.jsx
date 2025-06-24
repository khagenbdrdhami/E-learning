import React from "react";


import { FaBook } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlinePriceChange } from "react-icons/md";



import f from "../../assets/f.png";

export default function LearningHero() {
  return (
    <div className="w-full">
      <div className=" py-16 ">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-700 mb-10">
            We offer high-quality courses, expert instructors, and flexible
            learning, empowering you to learn at your own pace and achieve your
            goals.
          </p>
        </div>
        <div className="w-full bg-white ">
          <div className="flex justify-around mx-16 items-center py-10 gap-10">
            <div className="flex-1">
              <img
                src={f}
                alt="Why Choose Us Illustration"
                className="w-[600px] "
              />
            </div>

            <div className="flex flex-col  ">
              <div className="ml-16 flex space-x-10 mb-10">
                <div className="w-[250px] bg-[#01295c]  text-white p-6 pt-3 rounded-xl shadow-2xl shadow-gray-500">
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <FaBook size={30}/> Diverse Course Options
                  </h3>
                  <p >
                    Something for everyone, from beginners to advanced learners.
                  </p>
                </div>

                <div className="w-[250px] bg-[#01295c]  text-white p-6 pt-3 rounded-xl shadow-2xl shadow-gray-500">
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <MdOutlinePriceChange size={35} /> Affordable Pricing
                  </h3>
                  <p >
                    Access to free resources and trial courses.
                  </p>
                </div>
              </div> 

              <div className=" space-x-10 flex ">
                <div className="w-[250px] bg-[#01295c]  text-white p-6 pt-3 rounded-xl shadow-2xl shadow-gray-500">
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <HiLightBulb  size={35}/> Flexible Learning
                  </h3>
                  <p >
                    Access courses anytime, anywhere, at your own pace.
                  </p>
                </div>

                <div className="w-[250px] bg-[#01295c]  text-white pt-3 p-6 rounded-xl shadow-2xl shadow-gray-500">
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <GrCertificate size={35} /> Certification of Completion
                  </h3>
                  <p >
                    Earn a certificate to showcase your skills and achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
