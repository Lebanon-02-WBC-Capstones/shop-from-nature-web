import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopListItem from "./components/ShopListItem/ShoptListItem";

function App() {
  return (
    <Router>
      <Navbar />
      <ShopListItem id ={"1"} 
      img={"https://utecinc.org/wp-content/uploads/2018/07/2019-09-13-utec-013.jpg"} 
      name={"Bento Box | Cutting Board"} price={"25$"}/>
      <Footer />
    </Router>
  );
}

export default App;