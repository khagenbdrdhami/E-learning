import React from "react";
import { FaLock } from "react-icons/fa";

function ActiveCourses() {
  return (
    <div className="p-6 flex flex-col  lg:flex-row gap-8">
      {/* Left Content */}
      <div className="w-full lg:w-3/4 space-y-6">
        {/* Course Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
            alt="UI/UX Design"
            className="w-24 h-24 rounded"
          />
          <div>
            <h2 className="text-xl font-semibold">UI/UX Design</h2>
            <p className="text-gray-500 text-sm">By Nancy White</p>
            <div className="text-xs text-blue-600 font-medium mt-1 inline-block bg-blue-100 px-2 py-1 rounded-full">
              Ongoing
            </div>
            <p className="text-sm text-gray-600 mt-1">Completed: 50% — 14/28</p>
          </div>
        </div>

        {/* Course Content */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Content</h3>
          <div className="rounded border-2 border-gray-300 overflow-hidden">
            {/* Section: Introduction */}
            <details open className="group border-gray-300 border-b-2">
              <summary className="cursor-pointer border-b-2 border-gray-300 bg-gray-50 px-4 py-3 font-medium flex justify-between items-center">
                <span>Introduction to UI/UX</span>
                <span className="text-green-500">✔</span>
              </summary>
              <ul className="px-6 pb-4 pt-2 space-y-2">
                {["Definition of UI", "Definition of UX", "Importance of UI/UX", "Overview of UI/UX Design Process"].map((item) => (
                  <li key={item} className="flex justify-between items-center text-sm text-gray-600">
                    <span>{item}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-green-500 text-xs font-medium bg-green-100 px-2 py-0.5 rounded">Completed</span>
                      <span>00:00</span>
                      <FaLock size={12} />
                    </span>
                  </li>
                ))}
              </ul>
            </details>

            {/* Section: Design Tools */}
            <details open className="group border-gray-300 border-b-2">
              <summary className="cursor-pointer bg-gray-50 px-4 py-3 border-b-2 border-gray-300 font-medium flex justify-between items-center">
                <span>Design Tools</span>
                <span className="text-green-500">✔</span>
              </summary>
              <ul className="px-6 pb-4 pt-2 space-y-2">
                {["Overview of Popular Design Tools (E.g. Figma)", "Hands-on Tools Usage", "Collaborative Design Tools"].map((item) => (
                  <li key={item} className="flex justify-between items-center text-sm text-gray-600">
                    <span>{item}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-green-500 text-xs font-medium bg-green-100 px-2 py-0.5 rounded">Completed</span>
                      <span>00:00</span>
                      <FaLock size={12} />
                    </span>
                  </li>
                ))}
              </ul>
            </details>

            {/* Other Sections */}
            {[
              "Figma Tools",
              "Principles of UX Design",
              "User Research and Analysis",
              "Information Architecture",
              "Prototyping and Testing",
              "Color Theory",
              "Wireframe Basic",
            ].map((section) => (
              <details key={section} className="group border-b-2 border-gray-300">
                <summary className="cursor-pointer bg-gray-50 px-4 py-3 font-medium">
                  {section}
                </summary>
              </details>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-4 cursor-pointer">
          Get Certificate
        </button>
      </div>

      {/* Right: Progress */}
      <div className="w-full lg:w-1/4 flex flex-col items-center">
        <div className="w-40 h-40 relative">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#8b5cf6"
              strokeWidth="10"
              strokeDasharray="282.6"
              strokeDashoffset="141.3"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-gray-600">UI/UX Design</p>
            <p className="text-xs font-semibold">Course</p>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-600 inline-block rounded-full"></span> 50% Complete
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 bg-gray-300 inline-block rounded-full"></span> 50% Remaining
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveCourses;
 