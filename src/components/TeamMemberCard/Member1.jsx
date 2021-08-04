import React from "react";
import Member1Image from "./../../images/Member1Image";
function Member1() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <Member1Image />
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

export default Member1;
