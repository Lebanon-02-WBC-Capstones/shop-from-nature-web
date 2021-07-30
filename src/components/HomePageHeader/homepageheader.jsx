import React from "react";

export default function HomePageHeader() {
  return (
    <div className="flex bg-pink py-20" style={{ minHeight: "70vh" }}>
      <div className="relative h-full w-1/2 left-40">
        
        
        
        
        
        
        
        <img
          src="../images/header3.jpeg"
          alt="product"
          className="h-60 w-60 object-cover absolute left-28 top-36 shadow-lg "
        />
        <img
          src="../images/header1.jpeg"
          alt="product"
          className="h-60 w-40 object-cover absolute shadow-lg left-4"
        />
        <img
          src="../images/header2.jpeg"
          alt="product"
          className="h-40 w-30 object-cover absolute top-40 left-4 shadow-l"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-oswald text-3xl font-medium text-red text-center mb-5">
          DON’T PANIC, IT’S ORGANIC!
        </h1>
        <br />
        <p className="text-oswald text-2xl text-grey font-regular text-center">
          The more we talk about environmental issues,
          <br />
          the more we normalize them. <br />
          Make a Change NOW!
          <br />
          Buy our
          <span className="text-oswald text-2xl font-regular text-center text-red">
            {" "}
            eco-friendly{" "}
          </span>
          and
          <span className="text-oswald text-red text-2xl font-regular text-center">
            {" "}
            recyclable{" "}
          </span>
          items.
        </p>
        <div className="w-auto mx-auto pt-12">
          <button className="h-16 text-center text-xl border-b-2 border-red text text-red hover:pb-4 hover:text-olivegreen hover:border-olivegreen transition-all">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
