import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EcoFriendly = ({ products }) => {
  return (
    <div>
      <div className="text-red font-medium text-2xl  ml-11">
        <p>Eco-Friendly</p>
        <div className="border-t-2 border-red my-1  w-10" />
      </div>
      <div className="flex flex-wrap">
      {products
          .filter((data) => data.Category === "Eco-Friendly")
          .map((filteredProduct) => (
            <Link key ={filteredProduct.id} to={`productDetail/${filteredProduct.id}`}>
              <ShopListItem
                key={filteredProduct.id}
                img={filteredProduct.img1}
                title={filteredProduct.Name}
                price={filteredProduct.Price}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
EcoFriendly.propTypes = {
  products: PropTypes.any,
};
export default EcoFriendly;
