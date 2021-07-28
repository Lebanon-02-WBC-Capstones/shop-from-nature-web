import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
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
=======
    <Router>
      <Navbar />
      <Footer />
    </Router>
>>>>>>> f87294dde7f9003c8b1c505c2910bfa6c1bd6812
  );
}

export default App;