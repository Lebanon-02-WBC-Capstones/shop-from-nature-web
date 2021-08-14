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
        console.log(userData);
        setItems(userData);
      });
    }
  }, [currentUser]);

  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      {items.length != 0 &&
        items.map((product) => <Cartitem product={product} />)}
    </>
  );
};

export default CartPage;
