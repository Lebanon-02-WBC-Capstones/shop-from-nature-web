import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArrivalItemsData from "./components/ArrivalItems/ArrivalItemsData";

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
        <ArrivalItemsData />
        <Footer />
      </Router>
    </div >
  );
}

export default App;
