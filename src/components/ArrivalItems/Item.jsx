import React from "react";
import PropTypes from "prop-types";




const Item = ({ id, Image, title, price }) => {

    
    
    return (
        <div className="mt-8">

           <div className="container max-w-sm ">

            <div id={id}>
                    <div className="mx-14 ...">{Image}</div>
                      <div className="flex space-x-20 ...">
                          <h1 className="text-xl mr-6 text-olivegreen font-regular, mx-16">{title}</h1>
                          <h3 className="text-xl mr-6 text-olivegreen font-regular mr-16">{price}</h3>
                      </div>
                    <button className="text-xl mr-6 text-red font-regular border-2 border-grey m-4 p-2">Add To Bag</button>
        
            </div>
          </div>
        </div>
    );
};

    Item.propTypes = {
        id: PropTypes.number,
        Image: PropTypes.func,
        title: PropTypes.string,
        price: PropTypes.string
    };

export default Item;









