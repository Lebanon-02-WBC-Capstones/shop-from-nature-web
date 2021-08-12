import React from "react";
import MohamadPhoto from "../../images/MohamadPhoto";
function Member4() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <MohamadPhoto />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-lg uppercase">
          Cesar Maaz
        </p>
        <p className="text-green font-sans font-normal text-lg">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member4;
