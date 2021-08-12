import React,{useState} from "react";
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
import ProductDetailPage from "./pages/ProductDetailsPage/ProductDetailPage";
import ProductDetailsItem from "./components/ProductDetailsItem/ProductDetailsItem";

function App() {
  return (
    <Router>
   
    <ProductDetailPage />
      <Navbar />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailsPage} />
        <Route exact path="/blog" component={ProductDetailsPage} />
      </Switch>

      <Footer />
    </Router >
  );
}

export default App;
