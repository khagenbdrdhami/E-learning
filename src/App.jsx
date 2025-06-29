import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import Cart from "./Pages/Cart";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import CourseDescription from "./Pages/CourseDescription";
import Dashboard from "./Pages/Dashboard";
import DashboardProfile from "./Dashboard/DashboardProfile";
import MyProfile from "./Dashboard/MyProfile";
import MyCourses from "./Dashboard/MyCourses";
import Tasks from "./Dashboard/Tasks";
import CourseVideo from "./Dashboard/CourseVideo";
import Message from "./Dashboard/Message";
import FeedBack from "./Dashboard/FeedBack";
import Setting from "./Dashboard/Setting";
import DashWishlist from "./Dashboard/DashWishList";
import EnrolledCourses from "./SubDashboard/EnrolledCourses";
import ActiveCourses from "./SubDashboard/ActiveCourses";
import CompletedCourses from "./SubDashboard/CompletedCourses";
import Assignments from "./SubDashboard/Assignments";
import Quizzes from "./SubDashboard/Quizzes";
import Tests from "./SubDashboard/Tests";
import ContactUs from "./Pages/ContactUs";
import ProtectedRoutes from "./Pages/ProtectedRoutes";



function App() {
  return (
    <div className="bg-[#e4e4e4]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<ProtectedRoutes  Component={Dashboard}  />}>
          <Route index element={<DashboardProfile />} /> 
          <Route path="/dashboard/profile" element={<MyProfile />}/>
          <Route path="/dashboard/mycourses" element={<MyCourses />}>
          <Route path="/dashboard/mycourses/enrolledcources" element={<EnrolledCourses />} /> 
          <Route path="/dashboard/mycourses/activecources" element={<ActiveCourses />} /> 
          <Route path="/dashboard/mycourses/completedcourses" element={<CompletedCourses />} /> 
          </Route>

          <Route path="/dashboard/tasks" element={<Tasks />}>
          <Route path="/dashboard/tasks/assignments" element={<Assignments />}/>
          <Route path="/dashboard/tasks/quizzes" element={<Quizzes />}/>
          <Route path="/dashboard/tasks/tests" element={<Tests />}/>

          </Route>

          <Route path="/dashboard/coursevideo" element={<CourseVideo />}/>
          <Route path="/dashboard/dashwishlist" element={<DashWishlist />}/>
          <Route path="/dashboard/message" element={<Message />}/>
          <Route path="/dashboard/feedback" element={<FeedBack />}/>
          <Route path="/dashboard/setting" element={<Setting />}/>
          


        </Route>

        <Route
          path="/productdescriptionpage"
          element={<ProtectedRoutes  Component={ProductDescriptionPage}  />}
        />
        <Route path="/cart" element={<ProtectedRoutes  Component={Cart} />} />
        <Route path="/wishlist" element={<ProtectedRoutes  Component={Wishlist}  />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/coursedescription" element={<ProtectedRoutes  Component={CourseDescription} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instructor" element={<ProtectedRoutes  Component={Instructor} />} />
        <Route path="/instructorprofile" element={<InstructorProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
