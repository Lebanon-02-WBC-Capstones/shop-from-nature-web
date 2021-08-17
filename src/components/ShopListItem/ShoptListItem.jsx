import React from "react";
import { LanguageContext } from "../../App";
const ShopListItem = ({ id, img, title, price }) => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex flex-col justify-between content-start m-5 ">
      <div id={id} className=" flex-col mt-10 ml-10 ">
        <div className=" border-gray-100 min-h-prdsh w-prd bg-white shadow-xl">
          <img src={img}></img>
        </div>
        <h3 className="mt-5  font-medium"> {t(title)} </h3>
        <h3 className="mb-6  text-red font-regular"> {price} </h3>
      </div>
    </div>
  );
};

export default ShopListItem;
