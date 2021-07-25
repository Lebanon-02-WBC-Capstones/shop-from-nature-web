import React from "react";
import Consume from "../../Icons/ConsumeIcon";
import Waste from "../../Icons/WasteIcon";
import Planet from "../../Icons/PlanetIcon";
import Donate from "../../Icons/DonateIcon";
import Quality from "../../Icons/QualityIcon";
import Awarness from "../../Icons/AwarnessIcon";

function OurValues() {
  return (
    <div className="flex flex-row bg-white w-full">
      <p className="font-semibold text-3xl tracking-tighter text-bric ml-20 mt-10">
        Our Values
      </p>
      <div className="flex flex-col mr-60 mt-20 ">
        <div className=" flex flex-row justify-between">
          <Consume />
          <p className="font-bold text-red m-7">Consume sustainably</p>
        </div>
        <div className=" flex flex-row justify-between">
          <Waste />
          <p className=" font-bold text-red my-8 mr-28">Cut the waste</p>
        </div>
        <div className=" flex flex-row justify-between">
          <Planet />
          <p className=" font-bold text-red mt-6 mr-24">Save the planet</p>
        </div>
      </div>
      <div className="flex flex-col mr-36 mt-20 ">
        <div className=" flex flex-row justify-between">
          <Donate />
          <p className=" font-bold text-red mt-7 mr-36">Donate</p>
        </div>
        <div className=" flex flex-row justify-between">
          <Quality />
          <p className=" font-bold text-red mt-10 ml-12">
            Better quality of life
          </p>
        </div>
        <div className=" flex flex-row justify-between">
          <Awarness />
          <p className=" font-bold text-red mt-7 mr-14">Share awarness</p>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
