import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogPage from "./pages/BlogsPage/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailsPage} />
        <Route exact path="/productDetail/:id" component={ProductDetailsPage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
