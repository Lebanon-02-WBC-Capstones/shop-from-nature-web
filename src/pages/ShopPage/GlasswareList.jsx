import React from "react";
import ShopListItem from "../../components/ShopListItem/ShoptListItem";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import PropTypes from "prop-types";

const GlasswareList = ({ products }) => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div>
      <div className="text-red font-medium text-2xl  ml-11">
        <p>{t("Glassware")}</p>
        <div className="border-t-2 border-red my-1  w-10" />
      </div>
      <div className="flex flex-wrap">
        {products
          .filter((data) => data.Category === "Glassware")
          .map((filteredProduct) => (
            <Link
              key={filteredProduct.id}
              to={`productDetail/${filteredProduct.id}`}
            >
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
GlasswareList.propTypes = {
  products: PropTypes.any,
};

export default GlasswareList;
