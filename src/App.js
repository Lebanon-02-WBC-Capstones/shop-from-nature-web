import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogPage from "./pages/BlogsPage/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blogdetails/:id" component={BlogDetailsPage} />
      <Footer />
    </Router>
  );
}

export default App;
