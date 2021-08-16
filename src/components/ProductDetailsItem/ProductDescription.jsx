// eslint-disable

import React from "react";

const ProductDescription = ({ product, products }) => {
  let prdCat = product.Category;
  const suggestedPrd = products.filter((prod) => prod.Category == prdCat);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <div className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-lg  uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                }
              >
                Description
              </div>
            </div>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div>
                  <p className="text-grey text-sm">
                    {product && product.Description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
