import { useState } from "react";
import "../src/styles/Dashborad.css";

import Dashboard from "../src/pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import User from "./pages/User";
import Create from "./pages/Create";
import Order from "./pages/Order";
import Details from "./pages/Details";
import Cart from "./pages/Card";
import CheckoutPage from "./pages/CheackOut";

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
          <Route path="/product-details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check-out" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
