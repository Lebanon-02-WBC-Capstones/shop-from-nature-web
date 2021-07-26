import "./App.css";
import React from "react";
import BlogCard from "./components/BlogCard/BlogCard";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BlogCard/>
      {/* <Router>
        <Navbar />
        <header className="App-header">
          <p>
            Welcome to the capstone projects, this is your initial react app
          </p>
        </header>
        <Footer />
      </Router> */}
    </div >
  );
}

export default App;
