import React from "react";
import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const teamData = [
  {
    name: "Henry Smith",
    role: "Founder",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Nancy White",
    role: "Manager",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Henry Smith",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Nancy White",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Nancy White",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Uniika Tamang",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Dilip Shrestha",
    role: "Hacker",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Basant Joshi",
    role: "Unemployed",
    image: "https://i.pravatar.cc/150?img=4",
  },
]
  

function Four() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12  w-full overflow-hidden  text-center">
      <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
             <div key={index} className="px-4 ml-6">
            <div className="bg-[#22567c] w-[280px] space-y-4 py-9 text-white rounded-lg p-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full border-4 border-blue-400 mx-auto mb-3"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-3 text-yellow-300 text-lg">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Slider {...settings}>
        {teamData.map((member, index) => (
          <div key={index} className="px-4 ml-6">
            <div className="bg-[#22567c] w-[280px] space-y-4 py-9 text-white rounded-lg p-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full border-4 border-blue-400 mx-auto mb-3"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-3 text-yellow-300 text-lg">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

export default Four;
