import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../../API";
import TabsRender from "./TabsRender";

const ProductDetailsItem = () => {
  // const id = useParams();
  console.log(useParams());
  const [quantity, setQuantity] = useState(0);
  const [prdt, setProduct] = useState([]);
  let plus = () => {
    setQuantity(quantity + 1);
  };
  let minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    API.getProducts().then((products) => {
      setProduct(products);
    });
  }, []);

  const prd = prdt.find((prd) => prd.id === id);
  return (
    <div className="flex bg-mainbg">
      {prdt.length != 0 && (
        <>
          <div className=" pl-10 pt-10 ">{product.img}</div>

          <div className="w-full w-x-auto mx-auto  mt-10 ml-10 flex flex-col">
            <h1 className="text-2xl  text-red text-sans">
              {" "}
              Chapter Mips Helmet{" "}
            </h1>
            <div className="border-t-2 border-opacity-75 border-red my-1  w-20" />
            <h4 className="text-xl text-left mt-5 mb-3 text-red">Quantity</h4>
            <div className="bg-white divide-x-2 divide-red divide-opacity-60 flex justify-between items-center max-w-2xs ">
              <button
                onClick={plus}
                className="text-2xl transform hover:scale-125 motion-reduce:transform-none text-grey pl-2"
              >
                +
              </button>
              <div className=" text-2xl  text-grey pl-2">{quantity}</div>
              <button
                onClick={minus}
                className="text-2xl transform hover:scale-125 motion-reduce:transform-none text-grey px-2 "
              >
                &minus;
              </button>
            </div>
            <div className="self-start mt-4">
              <p className="text-red text-xl">
                Price:<span className="text-grey pl-1">{product.price}</span>
              </p>
              <p className="mb-4 mt-4 text-red text-sm">
                Tags:<span className="text-grey pl-1">glass</span>{" "}
              </p>{" "}
              <button
                class="transform hover:scale-110 motion-reduce:transform-none bg-green text-white  font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Add to cart
              </button>
            </div>
            <TabsRender />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsItem;
