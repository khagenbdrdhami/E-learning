import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaUser,
  FaBookOpen,
  FaTasks,
  FaVideo,
  FaHeart,
  FaComment,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
   const { logout } = useAuth0();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex mt-5 min-h-screen -mb-25">
      {/* Sidebar */}
      <div className="w-64 ml-5 bg-white  font-bold rounded-t-2xl shadow px-4 py-6">
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaChartPie />
              <span>Dashboard</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaUser />
              <span>My Profile</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/mycourses"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaBookOpen />
              <span>My Courses</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/tasks"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaTasks />
              <span>Tasks</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/coursevideo"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaVideo />
              <span>Resources</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/dashwishlist"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaHeart />
              <span>Wishlist</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/feedback"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaComment />
              <span>Feedback</span>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/message"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>Messages</span>
            </div>
          </NavLink>

          <div className="border-t my-4"></div>

          <NavLink
            to="/dashboard/setting"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaCog />
              <span>Settings</span>
            </div>
          </NavLink>

          <NavLink
           onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
            
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center gap-3">
              <FaSignOutAlt />
              <button
               
              >
                Log Out
              </button>
            </div>
          </NavLink>
        </nav>
      </div>

      <div className="flex-1 mx-5 rounded-t-2xl bg-gray-50 p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
