import React from "react";
import {Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
//import Getprorudt from "./pages/ShopPage/GetProduct";
function App() {

  return (
    <Router>
      <Navbar />

      <Switch><Route path="/shop" component={ShopPage}/></Switch>
      <Footer />
    </Router>
  );
}

export default App;
