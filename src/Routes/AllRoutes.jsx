import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AddProduct from "../Pages/Admin/AddProduct";
import Admin from "../Pages/Admin/Admin";
import { EditProduct } from "../Pages/Admin/EditProduct";
import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/Login/Login";
import { Search } from "../Pages/Search/Search";
import Signup from "../Pages/Signup/Signup";
import Footer from "../Components/Footer/Footer";
import OrderSuccessfull from "../Pages/OrderSuccessfull";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/inventory" element={<Admin />} />
      <Route path="/admin/add_product" element={<AddProduct />} />
      <Route path="/admin/edit_product" element={<EditProduct />} />
      <Route path="/confirm" element={<OrderSuccessfull />} />

    </Routes>
  );
};

export default AllRoutes;
