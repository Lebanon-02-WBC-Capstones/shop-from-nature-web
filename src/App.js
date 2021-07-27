import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CartItem from "./components/CartItem/CartItem";
function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <CartItem />
    </Router>
  );
}

export default App;
