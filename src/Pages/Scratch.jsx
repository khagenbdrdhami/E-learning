import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Second() {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    setProductList(response.recipes);
    setFilterProduct(response.recipes);
  };

  const filterProductItem = (cuisine) => {
    const filtered = productList.filter((item) => item.cuisine === cuisine);
    setFilterProduct(filtered);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Our <span className="text-orange-600">Most Popular</span> Recipes
        </h1>
        <p className="text-gray-500 mt-2">
          Browse through a variety of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>

      <div className="space-x-2">
        <button
          className="border rounded-2xl w-24 p-2 hover:bg-orange-500 cursor-pointer hover:text-white transition"
          onClick={() => filterProductItem("Pakistani")}
        >
          Pakistani
        </button>
        <button
          className="border rounded-2xl w-24 p-2 hover:bg-orange-500 cursor-pointer hover:text-white transition"
          onClick={() => filterProductItem("Italian")}
        >
          Italian
        </button>
        <button
          className="border rounded-2xl w-24 p-2 hover:bg-orange-500 cursor-pointer hover:text-white transition"
          onClick={() => filterProductItem("Greek")}
        >
          Greek
        </button>
      </div>

      <div className="w-full px-10">
        {filterProduct.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {filterProduct.map((item) => (
              <div
                onClick={() => {
                  navigate("/productdescriptionpage", { state: item });
                }}
                key={item.id}
                className="bg-white cursor-pointer  rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-[200px] p-4 flex flex-col items-center text-center"
              >
                <div>
                  <img
                    className=" w-[180px] rounded-[10px]   mb-3"
                    src={item.image}
                    alt={item.name}
                  />
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
                <div className=" border-t-2 border-gray-300 w-full mt-auto">
                  <p className="text-gray-500">
                    Price: {item.caloriesPerServing}
                  </p>
                  <span className="text-sm text-orange-500 font-medium mt-1">
                    <span className="text-gray-500">Type:</span>
                    {item.cuisine}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">Loading...</div>
        )}
      </div>

      <div className="bg-teal-700 text-white px-6 py-3 rounded-3xl hover:bg-teal-800 transition">
        <button
          onClick={() => navigate("/menu")}
          className="flex items-center gap-x-3 cursor-pointer font-medium"
        >
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Second;
