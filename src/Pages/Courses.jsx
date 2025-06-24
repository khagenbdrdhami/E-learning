import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Three() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [subjectList, setSubjectList] = useState([]);
  const [filterSubject, setFilterSubject] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const getSubject = async () => {
    let response = await fetch("https://dummyjson.com/recipes?limit=29");
    response = await response.json();
    setSubjectList(response.recipes);
    setFilterSubject(response.recipes);

    const cuisines = [...new Set(response.recipes.map((item) => item.cuisine))];
    setCategories(["All", ...cuisines]);
  };

  const filterSubjectItem = (cuisine) => {
    setSelectedCategory(cuisine);
    if (cuisine === "All") {
      setFilterSubject(subjectList);
    } else {
      const filtered = subjectList.filter((item) => item.cuisine === cuisine);
      setFilterSubject(filtered);
    }
  };

  useEffect(() => {
    getSubject();
  }, []);

  return (
    <div className=" min-h-screen px-10 py-10">
      <h2 className="text-3xl font-bold mb-8 text-left sticky h-fit top-10 text-gray-800">
        Our Courses
      </h2>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow rounded-lg p-4 h-fit sticky top-25">
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="courseCategory"
                  className="accent-blue-600"
                  checked={selectedCategory === category}
                  onChange={() => filterSubjectItem(category)}
                />
                <span className="text-gray-700">{category} Courses</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Course Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterSubject.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[10px] shadow flex flex-col transition-all duration-200 w-full cursor-pointer"
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
      </div>
    </div>
  );
}

export default Three;
