import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ContactUsModel from "./components/contactUsModel/contactUsModel";
function App() {
  const [open,setOpen]=useState(false)
  return (
    <Router>
      <Navbar />
      <button className="text-xl text-white bg-red rounded-mg mx-auto pl-3 pr-3 ml-2" onClick={()=> setOpen(true)}> Keep in touch</button>
     <ContactUsModel open={open} setOpen={setOpen} />
      <Footer />
    </Router>
  );
}

export default App;
