import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../../pages/About";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Switch>
        <Route path='/about' >
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;