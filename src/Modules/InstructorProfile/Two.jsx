import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Two() {
  const [randomCourses, setRandomCourses] = useState([]);
  const navigate = useNavigate();

  const getSubject = async () => {
    let response = await fetch("https://dummyjson.com/recipes?limit=29");
    response = await response.json();

    // Randomly shuffle and pick 3
    const shuffled = response.recipes.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomCourses(selected);
  };

  useEffect(() => {
    getSubject();
  }, []);

  return (
    <div className="min-h-screen px-10 pt-20">
      <div className="text-center mb-7">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          My Courses
        </h2>
        <h1>
          Explore the courses I teach, designed to enhance your skills and
          knowledge step by step.
        </h1>
      </div>

      <div className="flex  gap-16 justify-center">
        {randomCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-[10px] shadow flex flex-col w-[250px] transition-all duration-200  cursor-pointer"
            onClick={() => {
              navigate("/productdescriptionpage", { state: course });
            }}
          >
            <img
              src={course.image}
              alt={course.name}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="flex justify-between mt-2 px-7">
              <p className="bg-amber-500 px-2 text-[#01295c] rounded-2xl">
                Rs.{course.caloriesPerServing * 10}
              </p>
              <p className="border-b-2 border-gray-400">REVIEWS</p>
            </div>
            <div className="px-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {course.name}
              </h3>
            </div>
            <div className="mt-auto px-4">
              <p className="text-gray-600">3 Months</p>
              <p>Type {course.cuisine}</p>
            </div>
            <div className="flex justify-between my-2 px-3">
              <button className="flex items-center cursor-pointer bg-amber-500 rounded-2xl px-3">
                <p className="text-[#01295c] mr-1">
                  <FaShoppingCart />
                </p>
                Add To Cart
              </button>
              <p className="text-red-700">
                <FaRegHeart />
              </p>
            </div>
            <div className="border-t-2 flex justify-center border-gray-400">
              <button className="text-[#01295c] my-3 text-lg border-2 border-[#01295c] px-8 rounded-[10px]">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Two;
