import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "./API";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [prds, setProducts] = useState([]);

  useEffect(() => {
    API.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  console.log(prds);
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
