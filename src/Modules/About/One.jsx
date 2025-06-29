import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

function One() {
  return (
    <div className="relative  py-20  text-white mb-20">
      {/* SVG shifted to right */}
      <div className="absolute top-0  w-full   z-0">
        <svg
          className="w-full h-full mb-16"
          viewBox="0 0 1440 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1440V524.43C964.439 576.727 383.915 429.204 0 524.43V0Z"
            fill="url(#paint0_linear_249_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_249_2"
              x1="709"
              y1="5.88558e-06"
              x2="703.318"
              y2="495.505"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01295C" />
              <stop offset="0.3" stopColor="#2D4D76" />
              <stop offset="0.665" stopColor="#657B97" />
              <stop offset="1" stopColor="#91A0B2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-9 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-10">
          Welcome to S.T. Tech, where learning meets innovation. Our mission is
          to make quality education accessible to everyone, everywhere. With a
          wide range of expert-designed courses and interactive learning tools,
          we empower individuals to achieve their goals and thrive in their
          careers. Join our growing community of learners and discover a world
          of knowledge tailored just for you!
        </p>
      </div>

      {/* Image Cards */}
      <div className="relative z-9 flex top-[150px] space-x-14 flex-wrap justify-center">
        {/* Card 1 */}
        <div className="  flex items-center justify-center ">
          <img
            src={img1}
            alt="Learners"
            className="w-[254px] h-[254px] object-cover rounded"
          />
        </div>

        <div className="   flex items-center justify-center ">
          <img
            src={img2}
            alt="Learners"
            className="w-[261px] h-[182]  object-cover rounded"
          />
        </div>

        {/* Card 3 */}
        <div className="   flex items-center justify-center ">
          <img
            src={img1}
            alt="Learners"
            className="w-[254px] h-[254px] object-cover rounded"
          />
        </div>
        <div className="  flex items-center justify-center ">
          <img
            src={img2}
            alt="Learners"
            className="w-[261px] h-[182] object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default One;
