import React from "react";
import MohamadPhoto from "../../images/MohamadPhoto";
import { LanguageContext } from "../../App";
function MohamadCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/Mohamad-Sabaa" target="_blank">
        <MohamadPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Mohamad Al-Sabaa")}
          </p>
          <p className="text-green font-sans font-normal text-xl">
            {t("Front-end Web Developer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default MohamadCard;
