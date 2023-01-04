import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Stores from "../Components/Stores";

const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Products" exact element={<Products />} />
          <Route path="/Stores" exact element={<Stores />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
