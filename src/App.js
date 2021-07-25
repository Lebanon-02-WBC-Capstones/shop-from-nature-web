import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
