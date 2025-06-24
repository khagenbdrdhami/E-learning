"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import testimonials from "../../Data/Testimonial"; // Adjust this path based on your structure

export default function Five() {
  return (
    <div className="w-full px-4 py-10  ">
      <h2 className="text-3xl text-center font-bold  mb-6">Testimonials</h2>
      <p className="text-center mb-5">“Hear from our students! Discover how our courses have empowered learners to achieve their goals and unlock new opportunities. Real stories, real success!”</p>
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" mx-10 ml-16 rounded-2xl bg-gray-100 hover:bg-gray-300 space-y-10 p-6  shadow-md h-[350px] w-[250px] flex flex-col">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="text-yellow-500 text-sm">
                <p className="text-gray-700 text-sm mb-4 line-clamp-5">
                {testimonial.feedback}
              </p>
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
