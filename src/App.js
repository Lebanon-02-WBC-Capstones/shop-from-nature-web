import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/Shop" component={Shop} />
      <Footer />
    </Router>
  );
}

export default App;
