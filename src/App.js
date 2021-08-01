import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
