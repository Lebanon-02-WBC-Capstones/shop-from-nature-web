import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OurValues from "../../components/OurValues/OurValues";
import OurMission from "../../components/OurMission/OurMission";

function AboutUs() {
  return (
    <div className="bg-mainbg">
      <Navbar />
      <OurValues />
      <OurMission />
      <Footer />
    </div>
  );
}

export default AboutUs;
