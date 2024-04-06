import { useState } from "react";
import "../src/styles/Dashborad.css";

import Dashboard from "../src/pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import User from "./pages/User";
import Create from "./pages/Create";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create-product" element={<Create />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
