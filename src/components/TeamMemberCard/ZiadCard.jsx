import React from "react";
import ZiadPhoto from "../../images/ZiadPhoto";
function ZiadCard() {
  return (
    <div className="flex justify-center flex-col m-auto">
      <a href="https://github.com/ziadbaroudi" target="_blank">
        <ZiadPhoto />
        <div className="block text-center">
          <p className="text-green font-sans font-normal text-xl uppercase">
            Ziad Baroudi
          </p>
          <p className=" text-green font-sans font-normal text-xl">
            Front-end Web Developer
          </p>
        </div>
      </a>
    </div>
  );
}

export default ZiadCard;
