// eslint-disable

import React from "react";

const SuggestedProducts = ({ product, products }) => {
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-lg  text-white bg-olivegreen uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                }
              >
                Suggested products
              </div>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div>
                  <div>
                    <div className="flex flex-wrap justify-around  content-start m-5 ">
                      {suggestedPrd &&
                        suggestedPrd.slice(0, 3).map((suggested) => (
                          <div className=" justify-around flex-col mt-5 ml-5">
                            <div className=" border-gray-100 min-h-prdsp w-prdsp bg-white shadow-md">
                              <img src={suggested.img1}></img>
                            </div>
                            <div className="flex ">
                              <h3 className="mt-5 mr-5 "> {suggested.Name} </h3>
                              <h3 className="mt-5 text-red ">
                                {" "}
                                {suggested.Price}{" "}
                              </h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedProducts;
