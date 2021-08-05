import React, { useState } from "react";
import Member1 from "./../../components/TeamMemberCard/Member1";
import Member2 from "./../../components/TeamMemberCard/Member2";
import Member3 from "./../../components/TeamMemberCard/Member3";
import Member4 from "./../../components/TeamMemberCard/Member4";
import Member5 from "./../../components/TeamMemberCard/Member5";
import Member6 from "./../../components/TeamMemberCard/Member6";
import Member7 from "./../../components/TeamMemberCard/Member7";
import KeepInTouch from "./KeepInTouch";
function TeamMemberCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col bg-mainbg  p-10">
      <div className="flex flex-row justify-around">
        <p className="text-bric font-sans float-left font-medium text-4xl ">
          People behind our success
        </p>
        <KeepInTouch key={showModal} onClick={() => setShowModal(true)} />
      </div>
      <div className="">
        <Member1 />
        <div className="grid grid-flow-col grid-rows-2 gap-x-px gap-y-4 ">
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
