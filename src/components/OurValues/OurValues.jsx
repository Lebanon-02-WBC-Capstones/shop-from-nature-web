import React from "react";
import ConsumeIcon from "../../Icons/ConsumeIcon";
import WasteIcon from "../../Icons/WasteIcon";
import PlanetIcon from "../../Icons/PlanetIcon";
import DonateIcon from "../../Icons/DonateIcon";
import QualityIcon from "../../Icons/QualityIcon";
import AwarnessIcon from "../../Icons/AwarnessIcon";

function OurValues() {
  return (
    <div className="flex flex-row bg-white w-full pt-4 pb-10">
      <p className="font-semibold text-3xl tracking-tighter text-bric ml-20 mt-10">
        Our Values
      </p>
      <div className="flex flex-col mr-60 mt-20 ">
        <div className=" flex flex-row justify-between">
          <ConsumeIcon />
          <p className="font-bold text-red m-7">Consume sustainably</p>
        </div>
        <div className=" flex flex-row justify-between">
          <WasteIcon />
          <p className=" font-bold text-red my-8 mr-28">Cut the waste</p>
        </div>
        <div className=" flex flex-row justify-between">
          <PlanetIcon />
          <p className=" font-bold text-red mt-6 mr-24">Save the planet</p>
        </div>
      </div>
      <div className="flex flex-col mr-36 mt-20 ">
        <div className=" flex flex-row justify-between">
          <DonateIcon />
          <p className=" font-bold text-red mt-7 mr-36">Donate</p>
        </div>
        <div className=" flex flex-row justify-between">
          <QualityIcon />
          <p className=" font-bold text-red mt-10 ml-12">
            Better quality of life
          </p>
        </div>
        <div className=" flex flex-row justify-between">
          <AwarnessIcon />
          <p className=" font-bold text-red mt-7 mr-14">Share awarness</p>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
