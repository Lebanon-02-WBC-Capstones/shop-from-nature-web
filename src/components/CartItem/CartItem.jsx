import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import API from "../../API";

const Cartitem = ({ product }) => {
  const [doc, setDoc] = useState({});
  useEffect(() => {
    db.collection("Cart")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setDoc(doc);
        });
      });
  }, []);
  const [quantity, setQuantity] = useState(1);
  let plus = () => {
    setQuantity(quantity + 1);
  };
  let minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    API.deleteProduct(doc.id);
  };

  return (
    <div className="flex ml-6 my-7">
      <div className=" shadow-xl w-prd h-prd min-h-prdsh max-w-prdsh max-h-prdsh bg-white">
        <img src={product.img1} />
      </div>
      <div className="ml-10 flex flex-col">
        <h3 className="text-2xl"> {product.Title} </h3>
        <h4 className="text-xl text-left mt-5 text-red">Quantity</h4>
        <div className="bg-white mt-4 divide-x-2 divide-red divide-opacity-60 flex justify-between items-center max-w-2xs ">
          <button onClick={plus} className="text-2xl px-2">
            +
          </button>
          <div className=" text-2xl px-1">{quantity}</div>
          <button onClick={minus} className="text-2xl px-2 ">
            &minus;
          </button>
        </div>
        <div className="self-start mt-4">
          <p className="text-red text-xl">
            Price:<span className="text-black pl-1">{product.Price}</span>
          </p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Cartitem;
