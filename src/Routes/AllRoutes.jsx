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

import SingleAdminPage from "../Components/AdminPageComponents/SingleAdminPage";
import { ProductList } from "../Pages/ProductList/ProductList";
import { SinglePage } from "../Pages/SingleProductPage/SingelProduct";

import Payments from "../Pages/Cart/Payments";
import Cart from "../Pages/Cart/Cart";
import CartPage from "../Pages/Cart/CartPage";



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
      <Route path="/admin/inventory/:id" element={<SingleAdminPage />} />
      <Route path="/admin/add_product" element={<AddProduct />} />
      <Route path="/admin/edit_product" element={<EditProduct />} />
      <Route path="/product_list" element={<ProductList/>} />
      <Route path="/product_list/single/:id" element={<SinglePage/>} />
      <Route path="/cart_elements" element={<Cart/>} /> 
      <Route path="/payments" element={<Payments/>} /> 

    </Routes>
  );
};

export default AllRoutes;
