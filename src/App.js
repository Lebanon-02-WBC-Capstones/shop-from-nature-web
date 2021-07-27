import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import OurMission from "./components/OurMission/OurMission";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <OurMission />
    </Router>
  );
}

export default App;
