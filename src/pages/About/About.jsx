import React from "react";
import OurValues from "../../components/OurValues/OurValues";
import OurMission from "../../components/OurMission/OurMission";
import ChangeTheWayYouShop from "../../components/ChangeTheWayYouShop/ChangeTheWayYouShop";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";

function AboutUs() {
  return (
    <div className="bg-mainbg">
      <ChangeTheWayYouShop />
      <OurValues />
      <OurMission />
      <TeamMemberCard />
    </div>
  );
}

export default AboutUs;
