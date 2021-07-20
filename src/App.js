import "./App.css";
import React from "react";
import Newsletter from "./components/Newsletter";
import OurValues from "./components/OurValues";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OurValues />
        <Newsletter />
      </header>
    </div>
  );
}

export default App;
