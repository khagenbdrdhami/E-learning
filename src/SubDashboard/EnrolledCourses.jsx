import React from 'react';

function EnrolledCourses() {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-gray-600 text-sm">
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Lessons</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-sm shadow-sm rounded">
              <td className="flex items-center gap-2 px-4 py-3 font-medium">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"
                  alt="course"
                  className="w-6 h-6"
                />
                UI/UX Design
              </td>
              <td className="px-4 py-3 font-medium text-gray-700">
                <span className="text-gray-600">14</span>/<span className="font-bold text-black">28</span>
              </td>
              <td className="px-4 py-3">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  Ongoing
                </span>
              </td>
              <td className="px-4 py-3 text-gray-500">-</td>
              <td className="px-4 py-3 font-semibold text-black">Design</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrolledCourses;
