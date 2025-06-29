import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen px-8 ">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="border-t-2 border-gray-200  pt-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 text-sm">First Name</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Username</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input type="password" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Location</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input type="email" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Contact Number</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Skill/Occupation</label>
            <input type="text" className="w-full border-2 border-gray-200  rounded px-2 py-1" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Biography</label>
          <textarea className="w-full border-2 border-gray-200  rounded px-2 py-1 h-24"></textarea>
        </div>

        <div className="flex justify-end space-x-2">
          <button className="border-2 border-gray-200  px-4 py-1 rounded">Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
