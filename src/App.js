import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArrivalItemsData from "./components/ArrivalItems/ArrivalItemsData";

function App() {
  return (
    <Router>
      <Navbar />
      <ArrivalItemsData/>
      <Footer />
    </Router>
  );
}

export default App;
