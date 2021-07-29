import React from "react";
import ArrivalItems from "./ArrivalItems";

const data = {
    id: 1,
    img: "./Images/arrivalItem.png",
    title: "Random Product",
    price: "--$",
};

const ArrivalItemsData = () => {

    return (
        <div>
            <ArrivalItems id={data.id} Image={data.img} title={data.title} price={data.price} />
        </div>
    );
};

export default ArrivalItemsData;
