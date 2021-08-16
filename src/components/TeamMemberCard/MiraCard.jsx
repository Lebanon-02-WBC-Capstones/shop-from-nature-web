import React from "react";
import MiraPhoto from "../../images/MiraPhoto";
import { LanguageContext } from "../../App";
function MiraCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/MiraMC149" target="_blank">
        <MiraPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Mira Chami")}
          </p>
          <p className="text-green font-sans font-normal text-xl">
            {t("Front-end Web Developer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default MiraCard;
