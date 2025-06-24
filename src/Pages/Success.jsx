import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment has been completed successfully.
        </p>

        <div className="text-sm text-gray-500 mb-6">
          <p>Transaction ID: <span className="font-medium">#ESW123456</span></p>
          <p>Date: {new Date().toLocaleString()}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Success;
