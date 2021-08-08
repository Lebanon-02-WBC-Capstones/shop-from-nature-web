import React, { useState } from "react";
import OsamaCard from "./OsamaCard";
import ZiadCard from "./ZiadCard";
import CesarCard from "./CesarCard";
import MohamadCard from "./MohamadCard";
import JanaCard from "./JanaCard";
import MarwaCard from "./MarwaCard";
import MiraCard from "./MiraCard";
import KeepInTouch from "./KeepInTouch";
import ContactModal from "../../components/ContactModal/ContactModal";
function TeamMemberCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col bg-mainbg mb-0 py-8">
      <div className="flex flex-row justify-around">
        <p className="text-bric font-sans text-center font-medium text-4xl mt-4">
          People behind our success
        </p>
      </div>
      <div className="">
        <OsamaCard />
        <div className="grid grid-flow-col grid-rows-2 gap-x-px gap-y-4">
          <ZiadCard />
          <CesarCard />
          <MohamadCard />
          <JanaCard />
          <MarwaCard />
          <MiraCard />
        </div>
      </div>
      <div className="bg-white border-box w-full py-3">
        <p className="text-red font-sans text-3xl font-extralight text-center mt-2">
          Upcycle your information about us!
        </p>
        <div className="flex justify-center">
          <KeepInTouch handleShow={(open) => setOpen(open)} />
          <ContactModal open={open} />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
