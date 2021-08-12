import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PopularList = ({ products }) => {
  return (
    <div className="flex flex-wrap">
      {products
        .filter((data) => data.Category === "Other")
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
  );
};

PopularList.propTypes = {
  products: PropTypes.any,
};

export default PopularList;
