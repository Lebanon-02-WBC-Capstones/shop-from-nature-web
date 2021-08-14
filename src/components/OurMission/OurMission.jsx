import React from "react";
import Leaf from "../../images/Leaf";
import { LanguageContext } from "../../App";
const OurMission = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div>
      <section className="flex bg-mainbg pb-12">
        <div className="max-w-xxl m-12">
          <header>
            <h1 className="text-red text-left ml-3 py-4 text-4xl">
              {t("Our mission")}
            </h1>
          </header>
          <p
            className="justify-self-auto text-center text-2xl ml-6 pt-3 text-green text-medium leading-loose w-2/3"
            style={{ textAlign: t === "arab" ? "right" : "left" }}
          >
            {t("Our mission is to provide")}
            <span className="text-red">{t("sustainable solutions")}</span>
            {t("that save our mother earth")}.
            {t("You will find everything from")} {t("reusable items")}.
            {t("LivingVert presents you an eco-friendly lifestyle")}
            {t("through")}
            {t(
              "our network by providing a very wide range of products that are carefully selected"
            )}
            .{t("These products")}
            {t("are")} {t("all green")}, {t("default-free")}, {t("affordable")},
            {t("and")} {t("sustainably sourced.")}
          </p>
        </div>
        <div className="relative right-20 pt-8">
          <Leaf />
        </div>
      </section>
      <div className="justify-self-auto pt-0 mt-0 px-10">
        <p className="text-3xl ml-6 pt-0 text-green text-medium pt-0 text-center -mt-20">
<<<<<<< HEAD
          {t("LivinVert team")}
          {t("works")}
          {t(
            "with passion and excitement to exceed customer expectations; from the moment an order is placed to its arrival on your doorstep"
          )}
          .
=======
          LivingVert team works with passion and excitement to exceed customer
          expectations; from the moment an order is placed to its arrival on
          your doorstep.
>>>>>>> main
        </p>
      </div>
    </div>
  );
};

export default OurMission;
