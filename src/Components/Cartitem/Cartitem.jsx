import React from "react";
import SampleProduct from "../../images/SampleProduct";
const Cartitem = (img, price) => {
  img = <SampleProduct />;
  price = "19$";
  return (
    <div className="flex">
      <div className=" mt-3 ml-5">{img}</div>
      <div className="ml-4 flex flex-col">
        <h3 className="text-2xl"> Chapter Mips Helmet </h3>
        <h4 className="text-xl text-left mt-5 text-red">Quantity</h4>
        <div className="bg-white mt-4 divide-x-2 divide-red divide-opacity-60 flex justify-between items-center max-w-2xs ">
          <button className="text-2xl pl-2">+</button>
          <div className="min-h-full text-2xl  pl-2">0</div>
          <button className="text-2xl px-2 "> &minus;</button>
        </div>
        <div className="self-start mt-4">
          <p className="text-red text-xl">
            Price:<span className="text-black pl-1">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
