import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBookOpen, FaGraduationCap, FaTrophy } from "react-icons/fa";
import k from "../assets/k.png";

const DashboardProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;
  if (!isAuthenticated) return <div>You are not logged in</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <div className="flex items-center  ">
          <span className="mr-2 text-gray-700 font-medium">{user.name}</span>
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>

      {/* Welcome Message Section */}
      <div className="bg-gradient-to-r from-blue-800 to-yellow-400 text-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="md:max-w-xl">
          <h2 className="text-xl font-semibold">Welcome back,</h2>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="mt-2 text-sm">
            We’re excited to have you here. Dive into your learning journey and
            make progress toward your goals. Remember, every step counts! Check
            your tasks for today and continue where you left off. Let’s make
            this a productive session!
          </p>
        </div>
        <img
          src={k}
          alt="Illustration"
          className="w-60  object-contain -mt-[70px] "
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaBookOpen className="text-4xl text-blue-600 mx-auto" />
          <div className="text-2xl font-bold mt-2">1</div>
          <div className="text-sm text-gray-600">Enrolled Courses</div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaGraduationCap className="text-4xl text-green-600 mx-auto" />
          <div className="text-2xl font-bold mt-2">1</div>
          <div className="text-sm text-gray-600">Active Courses</div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaTrophy className="text-4xl text-yellow-500 mx-auto" />
          <div className="text-2xl font-bold mt-2">0</div>
          <div className="text-sm text-gray-600">Completed Courses</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
