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

function App() {
  return (
    <div className="bg-[#e4e4e4]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="productdescriptionpage"
          element={<ProductDescriptionPage />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Success />} />
        <Route path="failure" element={<Failure />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
