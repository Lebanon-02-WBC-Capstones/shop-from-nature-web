import React from "react";
import Leaf from "../../images/Leaf";
const OurMission = () => {
  return (
    <section className="flex">
      <div className="max-w-xl">
        <header>
          <h1 className="text-red text-left ml-3 py-4 text-4xl">Our mission</h1>
        </header>
        <p className="justify-self-auto text-2xl ml-6 text-green text-medium">
          Our mission is to provide{" "}
          <span className="text-red"> sustainable solutions </span> that save
          our mother earth. You will find everything from reusable items.
          LivingVert presents you an eco-friendly lifestyle through our network
          by providing a very wide range of products that are carefully
          selected. These products are all green, default-free, affordable, and
          sustainably sourced.
        </p>
      </div>
      <div className="relative right-25 pt-8">
        <Leaf />
      </div>
    </section>
  );
};

export default OurMission;
