import React from "react";
import OsamaPhoto from "../../images/OsamaPhoto";
import { LanguageContext } from "../../App";
function OsamaCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center items-center flex-col m-auto p-4">
      <a href="https://github.com/osamaakb" target="_blank">
        <OsamaPhoto />
        <div className="block text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Osama Abdullah")}
          </p>
          <p className=" text-green font-sans font-normal text-xl">
            {t("Lead Engineer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default OsamaCard;
