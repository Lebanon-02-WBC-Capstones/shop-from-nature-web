import React from "react";
import ZiadPhoto from "../../images/ZiadPhoto";
function Member2() {
  return (
    <div className="flex justify-center flex-col m-auto">
      <ZiadPhoto />
      <div className="block text-center">
        <p className="text-green font-sans font-normal text-lg uppercase">
          Ziad Baroudi
        </p>
        <p className=" text-green font-sans font-normal text-lg">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member2;
