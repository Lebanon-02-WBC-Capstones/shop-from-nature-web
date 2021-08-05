import React from "react";
import { data } from "./data";

const BlogDetailsPage = () => {
  return (
    <div>
      <section className="bg-tan p-32 text-xl">
        <h1 className="text-3xl text-red text-left m-16">{data.title}</h1>
        <h2 className="text-2xl text-green text-left m-16">{data.subtitle}</h2>
        <img className="w-11/12 h-96 ml-12" src={data.img1} alt="" />

        <div className="m-16">
          <h1 className="text-3xl text-red text-left mb-12 ">{data.header1}</h1>
          <p className="text-grey mb-12">{data.descp1}</p>
          <div className="flex justify-between mb-12">
            <img className="h-96 w-3/6 pr-8" src={data.img2} alt="" />
            <img className="h-96 w-3/6" src={data.img3} alt="" />
          </div>
          <h1 className="text-3xl text-red mb-12">{data.header2}</h1>
          <p className="text-grey mb-12">{data.descp2}</p>
          <h1 className="text-3xl text-red text-left mb-12">{data.header3}</h1>
          <p className="text-grey mb-12">{data.descp3}</p>
          <div className="flex justify-between">
            <img className="h-96 w-3/6 pr-8" src={data.img4} alt="" />
            <img className="h-96 w-3/6" src={data.img5} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;

