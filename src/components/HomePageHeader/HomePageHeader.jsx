import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
export default function HomePageHeader() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex bg-pink py-20" style={{ minHeight: "70vh" }}>
      <div className="relative h-full w-1/2 left-40">
        <img
          src="../images/header3.jpeg"
          alt="product"
          className="h-60 w-60 object-cover absolute left-28 top-36 shadow-lg "
        />
        <img
          src="../images/header1.jpeg"
          alt="product"
          className="h-60 w-40 object-cover absolute shadow-lg left-4"
        />
        <img
          src="../images/header2.jpeg"
          alt="product"
          className="h-40 w-30 object-cover absolute top-40 left-4 shadow-l"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-oswald text-3xl font-medium text-red text-center mb-5">
          {t("DON’T PANIC, IT’S ORGANIC!")}
        </h1>
        <br />
        <p className="text-oswald text-2xl text-grey font-regular text-center">
          {t("The more we talk about environmental issues,")}
          <br />
          {t("the more we normalize them.")} <br />
          {t("Make a Change NOW!")}
          <br />
          {t("Buy our ")}
          <span className="text-oswald text-2xl font-regular text-center text-red">
            {t("eco-friendly")}
          </span>
          {t("and")}
          <span className="text-oswald text-red text-2xl font-regular text-center">
            {t("recyclable")}
          </span>
          {t("items.")}
        </p>
        <div className="w-auto mx-auto pt-12">
          <Link to="/shop">
            <button className="h-16 text-center text-xl border-b-2 border-red text text-red hover:pb-4 hover:text-olivegreen hover:border-olivegreen transition-all">
              {t("Start Shopping")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
