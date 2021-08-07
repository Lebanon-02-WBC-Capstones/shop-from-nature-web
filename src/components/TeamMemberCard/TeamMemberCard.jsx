import React, { useState } from "react";
import OsamaCard from "./OsamaCard";
import ZiadCard from "./ZiadCard";
import CesarCard from "./CesarCard";
import MohamadCard from "./MohamadCard";
import JanaCard from "./JanaCard";
import MarwaCard from "./MarwaCard";
import MiraCard from "./MiraCard";
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
        <OsamaCard />
        <div className="grid grid-flow-col grid-rows-2 gap-x-px gap-y-4 ">
          <ZiadCard />
          <CesarCard />
          <MohamadCard />
          <JanaCard />
          <MarwaCard />
          <MiraCard />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
