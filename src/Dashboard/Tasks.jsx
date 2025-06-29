import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Tasks = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const linkClasses = ({ isActive }) =>
    isActive
      ? "border-b-2 border-blue-600 text-blue-600 font-medium pb-2"
      : "text-gray-600 hover:text-blue-600 pb-2";
      if (isLoading) return <div>Loading ...</div>;
    if (!isAuthenticated) return <div>You are not logged in</div>;

  return (
    <div >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">My Courses</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-800">{user?.name}</span>
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b mb-6">
        <nav className="flex gap-6 text-sm">
          <NavLink to="/dashboard/tasks/assignments" className={linkClasses}>
            Assignments
          </NavLink>
          <NavLink to="/dashboard/tasks/quizzes" className={linkClasses}>
            Quizzes
          </NavLink>
          <NavLink to="/dashboard/tasks/tests" className={linkClasses}>
            Tests
          </NavLink>
        </nav>
      </div>

      {/* Routed content */}
      <Outlet />
    </div>
  );
};

export default Tasks;
