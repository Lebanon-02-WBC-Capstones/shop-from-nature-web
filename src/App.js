import "./App.css";
import React from "react";
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
            Welcome to the capstone projects, this is your initial react app
          </p>
        </header>
    </div>
=======
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
>>>>>>> main
  );
}

export default App;
