import "./App.css";
import React from "react";
import OurValues from "./components/OurValues/OurValues";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OurValues />
      </header>
      <Router>
        <Navbar />
        <header className="App-header">
          <p>
            Welcome to the capstone projects, this is your initial react app
          </p>
        </header>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
