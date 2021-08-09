import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";

import PropTypes from "prop-types";

const PopularList = ({products}) =>{
    return (
        <div className="flex flex-wrap">
     {
         products.filter (data=>data.Category === "Other").map (filteredProduct =>(
             <ShopListItem key={filteredProduct.id} img={filteredProduct.img1} title={filteredProduct.Name} price={filteredProduct.Price}/>
         ))
     }
     </div>
       
    );
};

PopularList.propTypes = {
    products: PropTypes.any,
  };

export default PopularList;
