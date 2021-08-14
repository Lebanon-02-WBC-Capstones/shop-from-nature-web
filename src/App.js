import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./AuthProvider/AuthContext";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogsPage/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import About from "./pages/About/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/:id" component={BlogDetailsPage} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
