import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogPage from "./pages/BlogsPage/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import { useTranslation } from "react-i18next";
import "./i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <Router>
      <Suspense fallback={(<div>Loading...Thank you for your patience!</div>)} >
      <Navbar />
      <Switch>
        <button onClick={() => handleClick("en")} >English </button>
        <button onClick={() => handleClick("ar")} >Arabic </button>
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailsPage} />
      </Switch>
      <h1>{t("Welcome to React")}</h1>
      <Footer />
      </Suspense>
    </Router >
  );
}

export default App;
