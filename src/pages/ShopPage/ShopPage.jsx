import React from "react";

import Shop from "../../components/Shop/Shop";
import NewsLetter from "../../components/Newsletter/Newsletter";
import Categories from "./Categories";

import LinesDown from "../../images/LinesDown.svg";
//import LinesUp from "../../images/LinesUp.svg";
import PopularList from "./PopularList";
import GlasswareList from "./GlasswareList";
import FoodContainerList from "./FoodContainerList";

const shopPage = () => {
    return (
        <div>
            <div><Shop/></div>

            <div className="flex justify-between mb-0">
                <div className="text-red font-medium text-2xl underline ml-11"><p>Popular</p></div>
                <div><Categories/></div> 
            </div>

            <div ><PopularList/></div>
            <div ><GlasswareList/></div>
            <div ><FoodContainerList/></div>
        
            <div  className="relative">
               <div><img width="400" height="400" src={LinesDown}/>
               <div className="absolute ml-40 bottom-20 left-10"><NewsLetter/></div></div>
            </div>
        </div>
    );
};
export default shopPage;