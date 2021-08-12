import React from "react";
import CesarPhoto from "../../images/CesarPhoto";
import { LanguageContext } from "../../App";
function Member3() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <CesarPhoto />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-lg uppercase">
          Jana Sanjakdar
        </p>
        <p className="text-green font-sans font-normal text-lg">
          {t("Front-end Web Developer")}
        </p>
      </div>
    </div>
  );
}

export default Member3;
