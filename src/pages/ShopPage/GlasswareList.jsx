import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";
import { data } from "./data.js";

const GlasswareList = () => {
  return (
    <div>
      <div className="text-red font-medium text-2xl underline ml-11">
        <p>Glassware</p>
      </div>
      <div className="flex flex-wrap">
        {data
          .filter((data) => data.category === "glassware")
          .map((filteredProduct) => (
            <ShopListItem
              key={filteredProduct.id}
              img={filteredProduct.img}
              title={filteredProduct.title}
              price={filteredProduct.price}
            />
          ))}
      </div>
    </div>
  );
};

export default GlasswareList;
