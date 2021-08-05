import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import About from "./pages/About/About";


function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Footer />
      <Switch>
        <Route path='/about' component={About} />
          </Switch>
    </Router>
  );
}

export default App;