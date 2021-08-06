import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/Blog/:id">
        <BlogDetailsPage />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
