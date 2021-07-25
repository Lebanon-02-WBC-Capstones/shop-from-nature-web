import "./App.css";
import React from "react";
import OurValues from "./components/OurValues/OurValues";
import Newsletter from "./components/Newsletter/Newsletter";

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
