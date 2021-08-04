import React from "react";
import Member2Image from "./../../images/Member2Image";
function Member2() {
  return (
    <div className="flex justify-center flex-col m-auto">
      <Member2Image />
      <div className="block text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Ziad Baroudi
        </p>
        <p className=" text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member2;
