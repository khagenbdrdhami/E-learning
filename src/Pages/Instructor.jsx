import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Instructor() {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState([]);

  const getInstructor = async () => {
    let response = await fetch("https://dummyjson.com/users");
    response = await response.json();
    setInstructors(response.users.slice(0, 6)); // limit to 5
  };

  useEffect(() => {
    getInstructor();
  }, []);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" min-h-screen px-16 pt-7 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Instructors</h1>
      </div>

      <div
      
       className="space-y-4">
        {instructors.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-md shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-16 h-16 rounded-full border-2 border-dashed"
              />
              <div>
                <h2 className="font-semibold uppercase">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">COURSE:</span>{" "}
                  {/* Static courses for now */}
                  {user.id === 1 &&
                    " UI/UX Design, Graphic Design, Digital Marketing"}
                  {user.id === 2 && " Data Science, MERN Stack"}
                  {user.id === 6 && " Web Development, Brand Management"}
                  {user.id === 4 &&
                    " Project Management, Public Speaking & Presentation Skills"}
                  {user.id === 5 &&
                    " Business Analytics, 3D Modeling and Animation"}
                  {user.id === 3 &&
                    " Business Analytics, 3D Modeling and Animation"}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/instructorprofile", { state: user });
              }}
              className="bg-blue-900 text-white cursor-pointer px-4 py-2 rounded"
            >
              Visit Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructor;
