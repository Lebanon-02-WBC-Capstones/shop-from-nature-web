import React from "react";
import PropTypes from "prop-types";
import TeamMemberIcon from "./../../Icons/TeamMemberIcon";

const TeamMemberCard = ({ id, name, title }) => {
  return (
    <div
      id={id}
      className="flex flex-col bg-mainbg place-items-center text-center p-10"
    >
      <TeamMemberIcon />
      <div className="">
        <h2 className="text-green font-sans font-medium ">{name}</h2>
        <p className="text-green font-sans font-medium">{title}</p>
      </div>
    </div>
  );
};
TeamMemberCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default TeamMemberCard;
