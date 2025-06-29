import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FaRegClipboard } from "react-icons/fa";

const resources = [
  { title: "UI/UX Design", file: "example.pdf" },
  { title: "Example", file: "example.zip" },
  { title: "UI/UX Design", file: "example.pdf" },
  { title: "Example", file: "example.zip" },
  { title: "UI/UX Design", file: "example.pdf" },
  { title: "Example", file: "example.zip" },
];

function CourseVideo() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) return <div>Loading ...</div>;
    if (!isAuthenticated) return <div>You are not logged in</div>;
  return (
    <div className="px-6 min-h-screen">
      <div className="border-b-2 mb-6 pb-3 flex justify-between border-gray-300">
        <h2 className="text-2xl font-semibold  text-gray-800">Resources</h2>
        <div className="flex items-center  ">
          <span className="mr-2 text-gray-700 font-medium">{user.name}</span>
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded-lg px-6 py-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="text-blue-800 text-xl">
                <FaRegClipboard />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm">{resource.file}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#e1bb50] hover:bg-yellow-600 cursor-pointer text-white px-4 py-2 rounded-md">
                View
              </button>
              <button className="bg-[#003372] cursor-pointer hover:bg-blue-900 text-white px-4 py-2 rounded-md">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseVideo;
