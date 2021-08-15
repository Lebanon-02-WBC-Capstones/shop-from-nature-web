import React, { useState, useEffect } from "react";
import API from "../../API";
import Cartitem from "../../components/CartItem/CartItem";
import { useAuth } from "../../AuthProvider/AuthContext";

const CartPage = () => {
  const { currentUser } = useAuth();
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (currentUser) {
      API.getCart().then((data) => {
        let userData = data.filter((item) => item.uid === currentUser.uid);
        setItems(userData);
      });
    }
  }, [currentUser]);

  return (
    <div className="flex flex-col justify-center bg-mainbg">
      <div>
        <h1 className="text-4xl mt-20 text-grey mb-10 font-medium mx-5 ">
          Shopping Cart
        </h1>
        <div className="border-t-2 border-red mb-1 border-opacity-60" />
      </div>
      <div>
        {items.length != 0
          ? items.map((product) => <Cartitem product={product} />)
          : "You did not add any items"}
      </div>
    </div>
  );
};

export default CartPage;
