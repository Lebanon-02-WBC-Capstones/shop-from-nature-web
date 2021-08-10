import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailsPage/ProductDetailPage";
import Cartitem
 from "./components/Cartitem/CartItem";
function App() {

  return (
    <Router>
     
    <Navbar />
     
       <ProductDetailPage /> 
      <Footer />
    </Router>
  );
}

export default App;
