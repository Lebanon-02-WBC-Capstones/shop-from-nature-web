import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./pages/BlogsPage/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BlogPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;