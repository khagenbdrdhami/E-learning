import React, { useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Failure() {
  const navigate = useNavigate();

  // Optional: Automatically redirect back to Payment after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment");
    }, 10000);

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <FaTimesCircle className="text-red-500 text-6xl" />
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-4">
          Sorry, your transaction was not successful.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Please try again. You will be redirected shortly.
        </p>

        <button
          onClick={() => navigate("/payment")}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Failure;
