import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import OurMission from "./components/OurMission/OurMission";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-mainbg">
      <Router>
        <Navbar />
        <header className="App-header">
          <p>
            Welcome to the capstone projects, this is your initial react app
          </p>
        </header>
        <OurMission />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
