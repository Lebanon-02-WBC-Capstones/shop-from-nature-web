import React from "react";

const Shop = () => {
  return (
    <div style={{ backgroundImage: "url(./images/shopimage.png)" }}>
      <h1 className="text-5xl text-darkGreen font-regular ml-64 mt-8">
        Save The World!
      </h1>

      <ul className="flex justify-end">
        <div className="flex flex-col mr-16">
          <li className="text-3xl font-regular">
            <span className="text-red">R</span>euse
          </li>
          <li className="text-3xl font-regular">
            <span className="text-grey">R</span>educe
          </li>
          <li className="text-3xl font-regular">
            <span className="text-darkGreen">R</span>ecycle
          </li>
        </div>
      </ul>
      <div className="text-center">
        <h1 className="text-5xl text-grey font-regular m-16">Shop</h1>
      </div>
    </div>
  );
};

export default Shop;
