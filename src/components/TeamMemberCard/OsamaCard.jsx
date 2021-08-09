import React from "react";
import OsamaPhoto from "../../images/OsamaPhoto";
function OsamaCard() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <OsamaPhoto />
      <div className="block text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Osama Abdullah
        </p>
        <p className=" text-green font-sans font-normal text-xl">
          Lead Engineer
        </p>
      </div>
    </div>
  );
}

export default OsamaCard;
