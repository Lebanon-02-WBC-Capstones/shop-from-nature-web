import React, { useState, useEffect } from "react";
import API from "../../API";

const ArrivalItem = () => {
  const [arrivalItems, setArrivalItems] = useState([]);
  useEffect(() => {
    API.getProducts().then((products) => {
      setArrivalItems(products);
    });
  }, []);
  return (
    <>
      <h3 className="text-4xl mt-5 font-medium text-grey font-sans text-center">
        New Arrivals
      </h3>
      <div className="mt-8 flex justify-between items-center mb-10">
        {arrivalItems.length != 0 &&
          arrivalItems.slice(0, 5).map((arrivalItem) => (
            <div key={arrivalItem.id}>
              <div className="min-h-prdsh bg-white px-2 flex items-center shadow-xl">
                <img
                  className="max-w-xs"
                  src={arrivalItem.img1}
                  alt={arrivalItem.Name + " image "}
                />
              </div>
              <div className="flex justify-center flex-col items-center">
                <div className="flex">
                  <h1 className="text-md text-olivegreen mr-2 font-regular">
                    {arrivalItem.Name}
                  </h1>
                  <h3 className="text-md text-olivegreen font-regular">
                    {arrivalItem.Price}
                  </h3>
                </div>
                <button className="text-md text-red font-regular border-2 border-grey px-2 mt-2">
                  Add To Bag
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ArrivalItem;
