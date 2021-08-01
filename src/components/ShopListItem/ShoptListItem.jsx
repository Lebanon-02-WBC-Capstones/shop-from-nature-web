import React from "react";
import Istem1 from "../../images/Istem1";

const ShopListItem = (ShopItemList) => {
    ShopItemList = {
        id: 1,
        img: <Istem1/>, 
        name: "Bento Box | Cutting Board",
        price: "25$",
      }; 

    return(
        <div class="flex justify-between content-start">
        <div className="flex-col mt-10 ml-10">
            <div className=" border-gray-100">{ShopItemList.img}</div>
           <h3 className="mt-5  font-medium"> {ShopItemList.name}  </h3>
          <h3 className="mb-6  text-red font-regular"> {ShopItemList.price} </h3>
        </div>
        
        </div>
    )
}

export default ShopListItem;