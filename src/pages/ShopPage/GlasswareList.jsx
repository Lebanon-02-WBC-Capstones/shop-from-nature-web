import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";

import PropTypes from "prop-types";

const GlasswareList = ({ products }) => {
  return (
    <div>
      <div className="text-red font-medium text-2xl  ml-11">
        <p>Glassware</p>
        <div className="border-t-2 border-red my-1  w-10" />
      </div>
      <div className="flex flex-wrap">
        {products
          .filter((data) => data.Category === "Glassware")
          .map((filteredProduct) => (
            <ShopListItem
              key={filteredProduct.id}
              img={filteredProduct.img1}
              title={filteredProduct.Name}
              price={filteredProduct.Price}
            />
          ))}
      </div>
    </div>
  );
};
GlasswareList.propTypes = {
  products: PropTypes.any,
};

export default GlasswareList;
