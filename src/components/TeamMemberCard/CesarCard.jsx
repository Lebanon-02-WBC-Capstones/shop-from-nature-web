import React from "react";
import CesarPhoto from "../../images/CesarPhoto";
import { LanguageContext } from "../../App";
function CesarCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/cesarmaaz" target="_blank">
        <CesarPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Cesar Maaz")}
          </p>
          <p className="text-green font-sans font-normal text-xl">
            {t("Front-end Web Developer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default CesarCard;
