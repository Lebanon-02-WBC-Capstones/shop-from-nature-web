import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";

import PropTypes from "prop-types";


const FoodContainer = ({products}) =>{
    return (
        <div>
       <div className="text-red font-medium text-2xl  ml-11"><p>Containers</p>
       <div className="border-t-2 border-red my-1  w-10" />
</div>
            <div className="flex flex-wrap">
                {
                    products.filter (data=>data.Category === "Container").map (filteredProduct =>(
                        <ShopListItem key={filteredProduct.id} img={filteredProduct.img1} title={filteredProduct.Name} price={filteredProduct.Price}/>
                    ))
                }
                </div>
             
                </div>
    );
   
};
FoodContainer.propTypes = {
    products: PropTypes.any,
  };
export default FoodContainer;
