import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./pages/BlogsPage/BlogPage";

function App() {

  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
