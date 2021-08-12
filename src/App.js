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
import Translation from "./components/Translation/Translation";
import { useTranslation } from "react-i18next";

export const LanguageContext = React.createContext();

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <Router>
      <LanguageContext.Provider value={{ t, i18n }}>
      <Translation handleClick={handleClick} />
      <Navbar t={t}/>
      <Switch>
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailsPage} />
      </Switch>
      <Footer t={t}/>
      </LanguageContext.Provider>
    </Router >
  );
