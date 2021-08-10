import React from "react";
import OurValues from "../../components/OurValues/OurValues";
import OurMission from "../../components/OurMission/OurMission";
import ChangeTheWayYouShop from "../../components/ChangeTheWayYouShop/ChangeTheWayYouShop";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import ContactBanner from "../../components/ContactBanner/ContactBanner";

function AboutUs() {
  return (
    <div className="bg-mainbg mb-4">
      <ChangeTheWayYouShop />
      <OurValues />
      <OurMission />
      <TeamMemberCard />
      <ContactBanner />
    </div>
  );
}

export default AboutUs;
