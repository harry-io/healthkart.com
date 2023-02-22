import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "../Pages/Homepage";
import Search from "../Pages/Search/Search";


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="/" element={<Navbar />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
};

export default AllRoutes;
