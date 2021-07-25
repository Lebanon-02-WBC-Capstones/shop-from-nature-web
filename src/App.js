import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

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
      </Router>
    </div>
  );
}

export default App;
