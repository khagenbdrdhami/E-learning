import React from "react";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import e from "../../assets/e.png";

export default function One() {
  return (
    <div>
      <div className="w-full h-[500px] flex bg-[#01295c] justify-around text-white">
        <div className="px-4 py-16 text-center md:text-left">
          <h1 className="text-3xl font-semibold italic">
            Empower Your Future with New Skills <br />
            <span className="text-white font-bold">
              – Learn Anytime, Anywhere!
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base max-w-xl">
            Unlock your potential with our diverse courses! Learn at your own
            pace with expert-led lessons, and gain the skills you need to excel
            in your chosen field. Start today!
          </p>
          <button className="mt-6 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
            Join Now
          </button>
        </div>
        <div className="mt-14">
          <img src={a} alt="" className="w-[400px]" />
        </div>
      </div>

      <div className="bg-white rounded-tl-[100px] text-white rounded-br-[100px] px-2 py-16 mt-[-100px]">
        <div className=" flex  px-10 spacex-10    text-center">
          <div className="bg-gradient-to-b from-[#6ea7d1] to-[#255980] rounded-xl flex justify-center  items-center shadow-2xl shadow-black p-6 w-[270px] mx-auto">
            <img src={b} alt="Instructors" className="mx-auto mb-4 w-32" />
            <div>
              <h2 className="text-2xl font-bold">100+</h2>
              <p className="mt-2">INSTRUCTORS</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#6ea7d1] to-[#255980] rounded-xl flex justify-center items-center shadow-2xl shadow-black p-6 w-[270px] mx-auto">
            <img src={c} alt="Courses" className="mx-auto mb-4 w-32" />
            <div>
              <h2 className="text-2xl font-bold">500+</h2>
              <p className="mt-2">COURSES</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#6ea7d1] to-[#255980] rounded-xl flex justify-center items-center shadow-2xl shadow-black p-6 w-[270px] mx-auto">
            <img src={d} alt="Certifications" className="mx-auto mb-4 w-32" />
            <div>
              <h2 className="text-2xl font-bold">FREE</h2>
              <p className="mt-2">CERTIFICATIONS</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#6ea7d1] to-[#255980] rounded-xl flex justify-center items-center shadow-2xl shadow-black p-6 w-[270px] mx-auto">
            <img src={e} alt="Students" className="mx-auto mb-4 w-32" />
            <div>
              <h2 className="text-2xl font-bold">1000+</h2>
              <p className="mt-2">STUDENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
