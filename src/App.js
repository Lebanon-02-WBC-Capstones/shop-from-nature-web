import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Aboutpageheader from "./components/aboutpageheader/aboutpageheader";
function App() {
  return (
    <Router>
      <Navbar />
      <Aboutpageheader />
      <Footer />
    </Router>
  );
}

export default App;
