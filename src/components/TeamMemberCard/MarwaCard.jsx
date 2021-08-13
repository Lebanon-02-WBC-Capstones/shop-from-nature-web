import React from "react";
import MarwaPhoto from "../../images/MarwaPhoto";
function MarwaCard() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/marwaghassa" target="_blank">
        <MarwaPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            Marwa Ghassa
          </p>
          <p className="text-green font-sans font-normal text-xl">
            Front-end Web Developer
          </p>
        </div>
      </a>
    </div>
  );
}

export default MarwaCard;
