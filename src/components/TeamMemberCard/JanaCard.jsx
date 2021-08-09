import React from "react";
import JanaPhoto from "../../images/JanaPhoto";
function JanaCard() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <JanaPhoto />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Jana Sanjakdar
        </p>
        <p className="text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default JanaCard;
