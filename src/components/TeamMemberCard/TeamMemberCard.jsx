import React from "react";
import PropTypes from "prop-types";
import TeamMemberIcon from "./../../Icons/TeamMemberIcon";

const TeamMemberCard = ({ id, name, title }) => {
  return (
    <div
      id={id}
      className="flex flex-col bg-mainbg place-items-center text-center p-10"
    >
      <p className="text-bric font-sans font-normal text-3xl">
        People behind our success
      </p>
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
