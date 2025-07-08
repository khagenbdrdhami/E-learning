import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import courseImages  from "../Data/images";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch("https://dummyjson.com/recipes?limit=29")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!query) return <p>Please enter a search term.</p>;
  if (results.length === 0) return <p>No results found for "{query}"</p>;

  return (
    <div className="p-7 pt-4 ">
      <h2 className="text-left flex justify-start mb-5">Search Results for "{query}"</h2>
      <div className="grid  justify-center">
        {results.map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md flex flex-col w-[250px]  overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Course Image */}
            <img
              src={courseImages[index % courseImages.length].image}
              alt={course.name}
              className="h-48 w-full object-cover"
            />

            {/* Price and Reviews */}
            <div className="flex justify-between items-center px-4 pt-3">
              <span className="bg-amber-400 text-[#01295c] text-sm px-3 py-1 rounded-full font-semibold">
                Rs.{course.caloriesPerServing * 10}
              </span>
              <span className="text-gray-600 text-sm font-medium">REVIEWS</span>
            </div>

            {/* Course Name */}
            <div className="px-4 py-2">
              <h3 className="font-bold text-lg text-gray-800">{course.name}</h3>
            </div>

            {/* Course Details */}
            <div className="px-4 mb-2">
              <p className="text-sm text-gray-600">3 Months</p>
              <p className="text-sm text-gray-600">Type: {course.cuisine}</p>
            </div>

            {/* Action Buttons */}
            <div className="px-4 py-2 flex justify-between items-center">
              <button
                onClick={() => {
                  navigate("/productdescriptionpage", { state: course });
                }}
                className="flex items-center space-x-1 bg-amber-400 text-[#01295c] px-3 py-1 rounded-full text-sm font-medium hover:bg-amber-500"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => {
                  dispatch({ type: "AddToCart", payload: course });
                  navigate("/wishlist");
                }}
                className="text-red-600 hover:text-red-800 text-lg"
              >
                <FaRegHeart />
              </button>
            </div>

            {/* View Course Button */}
            <div className="border-t px-4 py-3">
              <button
                onClick={() => {
                  navigate("/coursedescription", { state: course });
                }}
                className="w-full border-2 border-[#01295c] text-[#01295c] rounded-xl py-1 font-semibold hover:bg-[#01295c] hover:text-white transition"
              >
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
