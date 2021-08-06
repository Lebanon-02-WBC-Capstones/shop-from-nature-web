import React from "react";
import {data} from "./data";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  
  const { id } = useParams();
  const blogDataArray = data.filter(item => item.id == id);
  const blogData =  blogDataArray[0];
  console.log(blogData);
 
  return (
    <div>
      <section className="bg-tan p-32 text-xl">
        <h1 className="text-3xl text-red text-left m-16">{blogData.title}</h1>
        <h2 className="text-2xl text-green text-left m-16">{blogData.subtitle}</h2>
        <img
          className="w-11/12 h-96 ml-12 object-cover"
          src={blogData.img1}
          alt=""
        />

        <div className="m-16">
          <h1 className="text-3xl text-red text-left mb-12 ">{blogData.header1}</h1>
          <p className="text-grey mb-12">{blogData.descp1}</p>
          <div className="flex justify-between mb-12">
            <img
              className="h-96 w-3/6 pr-8 object-cover"
              src={blogData.img2}
              alt=""
            />
            <img className="h-96 w-3/6 object-cover" src={blogData.img3} alt="" />
          </div>
          <h1 className="text-3xl text-red mb-12">{blogData.header2}</h1>
          <p className="text-grey mb-12">{blogData.descp2}</p>
          <h1 className="text-3xl text-red text-left mb-12">{blogData.header3}</h1>
          <p className="text-grey mb-12">{blogData.descp3}</p>
          <div className="flex justify-between">
            <img
              className="h-96 w-3/6 pr-8 object-cover"
              src={blogData.img4}
              alt=""
            />
            <img className="h-96 w-3/6 object-cover" src={blogData.img5} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
