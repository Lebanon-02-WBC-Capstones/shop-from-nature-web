import React from "react";
import Leaf1 from "../../images/about";
import { LanguageContext } from "../../App";
function AboutPageHeader() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex flex-col mx-auto bg-pink">
      <h1
        className="ml-10 text-6xl font-medium text-brown font-sans  left-4.58%
right-38.89%
top-4.46%
bottom-92.9% "
      >
        {t("Change the way you shop, for Good")}.
      </h1>
      <div className="pl-8 relative right-25  pb-4">
        <Leaf1 />
      </div>
      <div>
        <p className="text-center font-medium text-grey text-2xl pb-2 font-sans ">
          {t("Fostering a culture of sustainability")}.
        </p>
        <p className=" text-center font-regular text-grey text-2xl pb-2 font-sans ">
          LivingVert {t("is your link to the sustainable world")};{" "}
          {t("in the content we")}
          {t("give you")} & {t("the products we give you access to")}.
        </p>
        <p className=" text-center font-medium text-grey text-2xl pb-2 font-sans ">
          {t("We wish to leave a positive imprint on the world")}.
        </p>
        <p className=" text-center font-regular text-grey text-2xl pb-2 font-sans ">
          {t("Enjoy a healthier way of life with")} LivingVert.
          {t("We offer hassle free")}
          {t("one of a kind online shopping for an Eco-friendly lifestyle")}.
        </p>
      </div>
    </div>
  );
}

export default AboutPageHeader;
