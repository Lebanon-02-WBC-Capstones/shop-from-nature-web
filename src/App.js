import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePageHeader from "./components/HomePageHeader/HomePageHeader";
function App() {
  return (
    <Router>
      <Navbar />
      <HomePageHeader />
      <Footer />
    </Router>
  );
}

export default App;
