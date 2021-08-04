import React from "react";
import Member5Image from "./../../images/Member5Image";
function Member5() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <Member5Image />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Marwa Ghassa
        </p>
        <p className="text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member5;
