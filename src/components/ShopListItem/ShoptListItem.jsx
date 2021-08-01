import React from "react";
//import Istem1 from "../../images/Istem1";
import PropTypes from "prop-types";

//const ShopItemListData = {
  //id: 1,
  //img: "www.images.com/somerandomimage.jpg", 
  //name: "Bento Box | Cutting Board",
 // price: "25$",
//}; 

const ShopListItem = ({id,img,name,price}) => {
    
    return(
        <div class="flex justify-between content-start">
        <div id={id}  className="flex-col mt-10 ml-10">
            <div className=" border-gray-100"><img className="shadow-xl" width="200" height="200" src = {img}></img></div>
           <h3 className="mt-5  font-medium"> {name}  </h3>
          <h3 className="mb-6  text-red font-regular"> {price} </h3>
        </div>
        </div>
    )
}
ShopListItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ShopListItem;