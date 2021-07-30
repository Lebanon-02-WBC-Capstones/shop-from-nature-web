import "./App.css";
import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import TeamMemberCard from "./components/TeamMemberCard/TeamMemberCard";

function App() {
  return (
    <Router>
      
      <TeamMemberCard />
     
    </Router>
  );
}

export default App;
