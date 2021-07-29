import React from "react";
import PropTypes from "prop-types";





const ArrivalItems = ( {id, Image, title, price} ) => {

    

    return (
        <div className="mt-8">

           <div className="container max-w-sm ">

            <div id={id}>
                    <div className="mx-14">
                        <img src={Image} alt={title + " image "} />
                    </div>
                      <div className="flex space-x-20">
                          <h1 className="text-xl ml-16 mr-6 text-olivegreen font-regular">{title}</h1>
                          <h3 className="text-xl mr-6 text-olivegreen font-regular">{price}</h3>
                      </div>
                    <button className="text-xl mr-6 text-red font-regular border-2 border-grey mt-4 mb-4 ml-36 p-2">Add To Bag</button>
        
            </div>
          </div>
        </div>
    );
};

    ArrivalItems.propTypes = {
        id: PropTypes.number,
        Image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.string
    };

export default ArrivalItems;









