import React from "react";
import ChangeTheWayLeaf from "../../Icons/ChangeTheWayLeaf";
import { LanguageContext } from "../../App";
function ChangeTheWayYouShop() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="m-auto bg-mainbg p-12">
      <h1 className="text-bric font-light text-5xl ml-12 -mt-6 mb-1">
        {t("Change the way you shop")}, {t("for Good")}
      </h1>
      <div className="flex mx-auto justify-center ">
        <ChangeTheWayLeaf />
      </div>
      <div className="text-center mt-5 text-xl">
        <p className="text-green font-medium">
          {t("Fostering a culture of sustainability")}.
        </p>
        <p className="text-green">
          LivingVert {t("is your link to the sustainable world")};{" "}
          {t("in the content we give you")} {t("and")}
          {t("the products we give you access to")}.
        </p>
        <p className="text-green font-medium">
          {t("We wish to leave a positive imprint on the world")}.
        </p>
        <p className="text-green">
          {t("Enjoy a healthier way of life with")} LivingVert.{" "}
          {t(
            "We offer hassle free one of a kind online shopping for an Eco-friendly lifestyle"
          )}
          .
        </p>
      </div>
    </div>
  );
}

export default ChangeTheWayYouShop;
