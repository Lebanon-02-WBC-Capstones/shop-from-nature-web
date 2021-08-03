import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <AboutUs />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;