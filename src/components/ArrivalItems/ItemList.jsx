import React from "react";
import Item from "./Item";
import Image from "../../images/Image";

const data = {
    id: 1,
    img: {Image},
    title: "Random Product",
    price: "--$",
};

const ItemList = () => {

    return (
        <div>
            <Item id={data.id} Image={<Image/>} title={data.title} price={data.price} />
        </div>
    );
};

export default ItemList;
