import React from "react";
import ZiadPhoto from "../../images/ZiadPhoto";
import { LanguageContext } from "../../App";
function ZiadCard() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto">
      <a href="https://github.com/ziadbaroudi" target="_blank">
        <ZiadPhoto />
        <div className="block text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            {t("Ziad Baroudi")}
          </p>
          <p className=" text-green font-sans font-normal text-xl">
            {t("Front-end Web Developer")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ZiadCard;
