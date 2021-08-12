import React from "react";
import OsamaCard from "./OsamaCard";
import ZiadCard from "./ZiadCard";
import CesarCard from "./CesarCard";
import MohamadCard from "./MohamadCard";
import JanaCard from "./JanaCard";
import MarwaCard from "./MarwaCard";
import MiraCard from "./MiraCard";
import { LanguageContext } from "../../App";

function TeamMemberCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex flex-col bg-mainbg mb-0 py-8">
      <div className="flex flex-row justify-around">
        <p className="text-bric font-sans text-center font-medium text-4xl mt-4">
          {t("People behind our success")}
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
    </div>
  );
}

export default TeamMemberCard;
