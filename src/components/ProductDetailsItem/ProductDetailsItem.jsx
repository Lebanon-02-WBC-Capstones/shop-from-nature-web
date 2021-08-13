import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../../API";
import TabsRender from "./TabsRender";

const ProductDetailsItem = () => {
  const id = useParams().id;
  //console.log(id);
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
    API.getProducts().then((product) => {
      setProduct(product);
    });
  }, []);
  let prd = prdt.find((item) => item.id == id);

  return (
    <div className="flex   bg-mainbg">
       
      {prd && (
        <>
          {prd && (
            <div>
            <div className="ml-10 mt-10 border-gray-100 max-h-sm min-h-prdsh w-prd bg-white shadow-xl">
           <img src={prd.img1}></img>
          </div>
         <div className="flex flex-wrap" ><div className="ml-10 mt-10 border-gray-100  min-h-prdss w-prdss bg-white">
            {prd && 
            <img  src={prd.img2}></img>}
          </div>
          <div className="ml-10 mt-10 border-gray-100  min-h-prdss w-prdss  ">
            {prd && 
            <img  src={prd.img3}></img>}
          </div>
          <div className="ml-10 mt-10 border-gray-100  min-h-prdss w-prdss ">
            {prd.img4 && 
            <img  src={prd.img4}></img>}
          </div> </div>
          </div>
          )}

          <div className="w-full w-x-auto mx-auto  mt-10 ml-10 flex flex-col">
            <h1 className="text-2xl  text-red text-sans">{prd.Name}</h1>
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
              {prd && (
                <p className="text-red text-xl">
                  Price:<span className="text-grey pl-1">{prd.Price}</span>
                </p>
              )}

              {prd && (
                <p className="mb-4 mt-4 text-red text-sm">
                  Tags:<span className="text-grey pl-1">{prd.Tags}</span>{" "}
                </p>
              )}

              <button
                className="transform hover:scale-110 motion-reduce:transform-none bg-green text-white  uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Add to cart
              </button>
            </div>
            {prd && <TabsRender products={prdt} product={prd} />}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsItem;
