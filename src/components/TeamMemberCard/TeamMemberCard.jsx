import React from "react";
import Member1 from "./../../components/TeamMemberCard/Member1";
import Member2 from "./../../components/TeamMemberCard/Member2";
import Member3 from "./../../components/TeamMemberCard/Member3";
import Member4 from "./../../components/TeamMemberCard/Member4";
import Member5 from "./../../components/TeamMemberCard/Member5";
import Member6 from "./../../components/TeamMemberCard/Member6";
import Member7 from "./../../components/TeamMemberCard/Member7";
function TeamMemberCard() {
  return (
    <div className="flex flex-col bg-mainbg place-items-center text-center p-10">
      <p className="text-bric font-sans font-normal text-3xl">
        People behind our success
      </p>
      <div className="">
        <Member1 />
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-20">
          <Member2 />
          <Member3 />
          <Member4 />
          <Member5 />
          <Member6 />
          <Member7 />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
