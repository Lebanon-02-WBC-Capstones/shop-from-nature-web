import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OurValues from "../../components/OurValues/OurValues";
import OurMission from "../../components/OurMission/OurMission";
import ChangeTheWayYouShop from "../../components/ChangeTheWayYouShop/ChangeTheWayYouShop";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";

function AboutUs() {
  return (
    <div className="bg-mainbg">
      <Navbar />
      <ChangeTheWayYouShop />
      <OurValues />
      <OurMission />
      <TeamMemberCard />
      <Footer />
    </div>
  );
}

export default AboutUs;
