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
import Translation from "./components/Translation/Translation";
import { useTranslation } from "react-i18next";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailPage";
export const LanguageContext = React.createContext();
import ShopPage from "./pages/ShopPage/ShopPage";
import About from "./pages/About/About";
import CartPage from "./pages/CartPage/CartPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <Router>
      <LanguageContext.Provider value={{ t, i18n }}>
        <AuthProvider>
          <Translation handleClick={handleClick} />
          <Navbar t={t} />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/shop" component={ShopPage} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={BlogPage} />
            <Route path="/blog/:id" component={BlogDetailsPage} />
            <Route path="/productDetail/:id" component={ProductDetailsPage} />
            <Route path="/card" component={CartPage} />
          </Switch>
          <Footer t={t} />
        </AuthProvider>
      </LanguageContext.Provider>
    </Router>
  );
}
export default App;
