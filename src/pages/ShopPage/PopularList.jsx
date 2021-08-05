import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";
import  {data} from "./data.js";


const PopularList = () =>{
    return (
        <div className="flex flex-wrap">
     {
         data.filter (data=>data.category === "popular").map (filteredProduct =>(
             <ShopListItem key={filteredProduct.id} img={filteredProduct.img} title={filteredProduct.title} price={filteredProduct.price}/>
         ))
     }
     </div>
       
    );
};

export default PopularList;