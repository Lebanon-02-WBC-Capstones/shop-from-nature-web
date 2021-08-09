import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

=======
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> main

function App() {

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/about' >
            <About />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
