import React from "react";
import CesarPhoto from "../../images/CesarPhoto";

function CesarCard() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <a href="https://github.com/cesarmaaz" target="_blank">
        <CesarPhoto />
        <div className="block justify-center text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            Cesar Maaz
          </p>
          <p className="text-green font-sans font-normal text-xl">
            Front-end Web Developer
          </p>
        </div>
      </a>
    </div>
  );
}

export default CesarCard;
