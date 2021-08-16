import React, { useState } from "react";
import SampleProduct from "../../images/SampleProduct";
import { LanguageContext } from "../../App";
const Cartitem = (product) => {
  const [quantity, setQuantity] = useState(0);
  let plus = () => {
    setQuantity(quantity + 1);
  };
  let minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  product = {
    img: <SampleProduct />,
    price: "19$",
  };
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex">
      <div className=" mt-3 ml-5">{product.img}</div>
      <div className="ml-4 flex flex-col">
        <h3 className="text-2xl"> {t("Chapter Mips Helmet")} </h3>
        <h4 className="text-xl text-left mt-5 text-red">{t("Quantity")}</h4>
        <div className="bg-white mt-4 divide-x-2 divide-red divide-opacity-60 flex justify-between items-center max-w-2xs ">
          <button onClick={plus} className="text-2xl pl-2">
            +
          </button>
          <div className="min-h-full text-2xl  pl-2">{quantity}</div>
          <button onClick={minus} className="text-2xl px-2 ">
            &minus;
          </button>
        </div>
        <div className="self-start mt-4">
          <p className="text-red text-xl">
            {t("Price:")}
            <span className="text-black pl-1">{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
