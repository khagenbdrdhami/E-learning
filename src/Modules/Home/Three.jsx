import React, { useEffect, useState, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
function Three() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subjectList, setSubjectList] = useState([]);
  const [filterSubject, setFilterSubject] = useState([]);
  const [categories, setCategories] = useState([]);
  const { dispatch } = useContext(CartContext);

  const getSubject = async () => {
    let response = await fetch("https://dummyjson.com/recipes?limit=29");
    response = await response.json();
    setSubjectList(response.recipes);
    setFilterSubject(response.recipes);
    console.log(response.recipes);

    const cuisines = [...new Set(response.recipes.map((item) => item.cuisine))];
    setCategories(["All", ...cuisines]);
  };

  const filterSubjectItem = (cuisine) => {
    if (cuisine === "All") {
      setFilterSubject(subjectList);
    } else {
      const filtered = subjectList.filter((item) => item.cuisine === cuisine);
      setFilterSubject(filtered);
    }
    setDropdownOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    getSubject();
  }, []);

  return (
    <div className="py-10 px-6  min-h-screen">
      <div className="text-center space-y-5 mb-10">
        <p className="text-gray-600 ">Some of our most popular courses</p>
        <h2 className="text-3xl font-bold text-black">Explore Our Courses</h2>
      </div>

      <div className="flex justify-end -top-16 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          Filter by Cuisine <FaChevronDown className="text-sm" />
        </button>

        {dropdownOpen && (
          <ul className="absolute right-0 top-full mt-2 bg-white border rounded shadow-md w-52 z-20">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => filterSubjectItem(category)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className=" grid space-y-9 grid-cols-4  justify-between ml-20">
        {filterSubject.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-[10px]  shadow w-[250px] flex flex-col transition-all duration-200"
          >
            <img
              src={course.image}
              alt={course.name}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="flex justify-between mt-2 px-7">
              <p className="bg-amber-500 px-2 text-[#01295c]  rounded-2xl ">
                Rs.{course.caloriesPerServing * 10}
              </p>
              <p className="border-b-2 border-gray-400">REVIEWS</p>
            </div>
            <div className="px-4">
              <h3 className="font-semibold text-lg text-gray-800 ">
                {course.name}
              </h3>
            </div>
            <div className="mt-auto px-4">
              <p className=" text-gray-600">3 Months</p>
              <p>Type {course.cuisine}</p>
            </div>
            <div className="flex justify-between my-2  px-3">
              <button
                onClick={() => {
                  navigate("/productdescriptionpage", { state: course });
                }}
                className="flex items-center cursor-pointer bg-amber-500 rounded-2xl px-3 "
              >
                <p className="text-[#01295c] ">
                  <FaShoppingCart />
                </p>
                Add To Cart
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  dispatch({
                    type: "AddToCart",
                    payload: course,
                  });
                  navigate("/wishlist");
                }}
              >
                <FaRegHeart />
              </button>
            </div>
            <div className="border-t-2 flex justify-center border-gray-400">
              <button
                onClick={() => {
                  navigate("/coursedescription", { state: course });
                }}
                className="text-[#01295c] my-3 text-lg border-2 border-[#01295c] px-8 rounded-[10px]"
              >
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Three;
