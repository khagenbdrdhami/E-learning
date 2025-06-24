import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaHeart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

export default function ProductDescriptionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {dispatch}=useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{location.state?.name}</h1>
        <p className="text-sm text-gray-500">by Nancy White</p>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-sm text-gray-500">(10 Reviews)</span>
        </div>
      </div>

      {/* Course Video and Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          {/* About the Course */}
          <section className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About the course</h2>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </section>

          {/* Course Content */}
          <section className="bg-white shadow p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
            <div>
              <h3 className="text-lg font-medium">Introduction to UI/UX</h3>
              {location.state?.ingredients && (
                <div className=" mt-4">
                  <div>
                    <ul className="space-y-2">
                      {location.state.ingredients.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FaArrowRight className="text-green-500" />
                          <span className="font-medium text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <h3 className="text-lg font-medium mt-4">Figma Tools</h3>

              {location.state?.instructions && (
                <div className=" mt-4">
                  <div>
                    <ul className="space-y-2">
                      {location.state.instructions.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FaArrowRight className="text-green-500" />
                          <span className="font-medium text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Course Side Info */}
        <div>
          <div className="bg-white shadow p-4 rounded-lg">
            <div className=" items-center  mb-4">
              <img
                src={location.state?.image}
                className="rounded-[10px]"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">
              Rs.{location.state.caloriesPerServing * 10}

            </p>
            <FaHeart className="text-lg text-red-600 cursor-pointer" />
            </div>
            <div className="flex gap-2 mt-2">
              <button
              onClick={()=>{
                dispatch({type:"AddToCart", payload:{...location.state}})
                navigate("/cart");
              }}
               className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded">
                Add to Cart
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                Enroll Now
              </button>
              
            </div>
            <ul className="text-sm text-gray-600 mt-4">
              <li>⏱️ 35 Hours</li>
              <li>📅 2.5 Months</li>
              <li>🗓️ Sunday–Friday</li>
              <li>📜 Certificate of Completion</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white shadow p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-lg mb-2">Requirements</h3>
            <p className="text-sm text-gray-600">
              To participate in the UI/UX Design course, learners need basic
              computer skills...
            </p>
          </div>

          {/* Share */}
          <div className="bg-white shadow p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-lg mb-2">Share this course</h3>
            <div className="flex space-x-4 text-blue-500">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="bg-white shadow p-6 rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-bold">Nancy White</h3>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="text-sm text-gray-600">
              3 Courses · 32 Students · 5 Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white shadow p-6 rounded-lg mt-6">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        {/* Placeholder for reviews */}
        <p className="text-gray-500 text-sm mt-2">No reviews yet.</p>
      </div>
    </div>
  );
}
