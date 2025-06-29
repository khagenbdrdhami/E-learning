import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import k from "../assets/k.png"; // illustration image

const MyProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>You are not logged in</div>;

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-2xl font-semibold ">My Profile</h1>
        <div className="flex items-center  ">
          <span className="mr-2 text-gray-700 font-medium">{user.name}</span>
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex flex-col gap-4 mb-4">
        <img
          src={user.picture}
          alt={user.name}
          className="w-24 h-24 rounded-full border object-cover"
        />
        <button className="px-4 py-2 border inline-block max-w-fit rounded bg-gray-100 hover:bg-gray-200">
          Change Profile Picture
        </button>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-900 to-yellow-400 text-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center mb-6">
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
        <img src={k} alt="Illustration" className="w-52 mt-4 md:mt-0" />
      </div>

      {/* Details Table */}
      <div className="space-y-2 text-sm">
        <div>
          <strong>Registration Date:</strong>{" "}
          <span>1/2/2025 &nbsp; 4:30 pm</span>
        </div>
        <div>
          <strong>First Name:</strong> <span>{user.name}</span>
        </div>
        <div>
          <strong>Last Name:</strong> <span>Example</span>
        </div>
        <div>
          <strong>Username:</strong> <span>Hellow World</span>
        </div>
        <div>
          <strong>Location:</strong> <span>Mitrapark</span>
        </div>
        <div>
          <strong>Email:</strong>{" "}
          <span className="text-gray-700 font-semibold">{user.email}</span>
        </div>
        <div>
          <strong>Contact Number:</strong> <span>9800000000</span>
        </div>
        <div>
          <strong>Skill/Occupation:</strong> <span>-</span>
        </div>
        <div>
          <strong>Biography:</strong> <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
