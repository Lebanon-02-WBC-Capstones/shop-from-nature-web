import React from "react";
import TeamMemberIcon from "./../../Icons/TeamMemberIcon";

const TeamMemberCard = (name, title, image) => {
  return (
    <div>
      {name}
      {title}
      {image}
      <TeamMemberIcon />
    </div>
  );
};

export default TeamMemberCard;
