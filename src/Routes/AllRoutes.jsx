import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AddProduct from "../Pages/Admin/AddProduct";
import Admin from "../Pages/Admin/Admin";
import { EditProduct } from "../Pages/Admin/EditProduct";
import Homepage from "../Pages/Homepage";
import { Search } from "../Pages/Search/Search";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/admin/inventory" element={<Admin />} />
      <Route path="/admin/add_product" element={<AddProduct />} />
      <Route path="/admin/edit_product" element={<EditProduct />} />
    </Routes>
  );
};

export default AllRoutes;
