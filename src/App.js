import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
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
    </div>
  );
}

export default App;