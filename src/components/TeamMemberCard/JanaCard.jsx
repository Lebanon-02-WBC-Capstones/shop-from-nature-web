import React from "react";
import JanaPhoto from "../../images/JanaPhoto";
import { LanguageContext } from "../../App";
function JanaCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/JanaSanjakdar" target="_blank">
        <JanaPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Jana Sanjakdar")}
          </p>
          <p className="text-green font-sans font-normal text-xl">
            {t("Front-end Web Developer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default JanaCard;
