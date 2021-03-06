import React, { useState, useEffect } from "react";
import Shop from "../../components/Shop/Shop";
import NewsLetter from "../../components/Newsletter/Newsletter";
import Categories from "./Categories";
import LinesDown from "../../images/LinesDown.svg";
import PopularList from "./PopularList";
import GlasswareList from "./GlasswareList";
import FoodContainerList from "./FoodContainerList";
import API from "../../API";
import { LanguageContext } from "../../App";

const shopPage = () => {
  const [prdts, setProducts] = useState([]);
  useEffect(() => {
    API.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="bg-mainbg">
      <div>
        <Shop />
      </div>
      <div className="flex justify-between mb-0">
        <div className="text-red font-medium text-2xl  ml-11">
          <p>{t("Popular")}</p>
          <div className="border-t-2 border-red my-1  w-10" />
        </div>
        <div>
          <Categories />
        </div>
      </div>
      <div>
        <PopularList products={prdts} />
      </div>
      <div>
        <GlasswareList products={prdts} />
      </div>
      <div>
        <FoodContainerList products={prdts} />
      </div>
      <div className="relative">
        <div>
          <img width="400" height="400" src={LinesDown} />
          <div className="absolute bottom-10 w-full">
            <NewsLetter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default shopPage;
