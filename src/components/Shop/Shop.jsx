import React from "react";
import { LanguageContext } from "../../App";
const Shop = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div style={{ backgroundImage: "url(./images/shopimage.png)" }}>
      <h1 className="text-5xl text-darkGreen font-regular ml-64 pt-8">
        {t("Save The World!")}
      </h1>

      <ul className="flex justify-end">
        <div className="flex flex-col mr-16">
          <li className="text-3xl font-regular">
            <span className="text-red">{t("R")}</span>
            {t("euse")}
          </li>
          <li className="text-3xl font-regular">
            <span className="text-grey">{t("R")}</span>
            {t("educe")}
          </li>
          <li className="text-3xl font-regular">
            <span className="text-darkGreen">{t("R")}</span>
            {t("ecycle")}
          </li>
        </div>
      </ul>
      <div className="text-center">
        <h1 className="text-5xl text-grey font-regular m-16">{t("Shop")}</h1>
      </div>
    </div>
  );
};

export default Shop;
