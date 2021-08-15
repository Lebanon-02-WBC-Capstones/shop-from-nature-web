import React from "react";

import ConsumeIcon from "../../Icons/ConsumeIcon";
import WasteIcon from "../../Icons/WasteIcon";
import PlanetIcon from "../../Icons/PlanetIcon";
import DonateIcon from "../../Icons/DonateIcon";
import QualityIcon from "../../Icons/QualityIcon";
import AwarnessIcon from "../../Icons/AwarnessIcon";

function OurValues() {
  return (
    <div className="bg-white w-full pt-14 pb-14">
      <p className="font-normal text-left ml-60 mb-9 text-4xl tracking-tighter text-bric">
        Our Values
      </p>
      <div className="flex flex-nowrap justify-evenly text-2xl">
        <div className="justify-evenly">
          <div className="flex items-center">
            <ConsumeIcon />
            <p className="font-bold text-red ml-10">Consume sustainably</p>
          </div>
          <div className="flex items-center ">
            <WasteIcon />
            <p className="font-bold text-red ml-12">Cut the waste</p>
          </div>
          <div className="flex items-center mt-3">
            <PlanetIcon />
            <p className=" font-bold text-red ml-12">Save the planet</p>
          </div>
        </div>
        <div className="justify-evenly">
          <div className="flex items-center">
            <DonateIcon />
            <p className="font-bold text-red ml-12">Donate</p>
          </div>
          <div className="flex items-center">
            <QualityIcon />
            <p className=" font-bold text-red ml-16">Better quality of life</p>
          </div>
          <div className="flex items-center">
            <AwarnessIcon />
            <p className=" font-bold text-red ml-14">Share awarness</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
