import React, { useState, useEffect } from "react";
import API from "../../API";
// import { data } from "./data";
// import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  // const { id } = useParams();
  // const blogDataArray = data.filter((item) => item.id == id);
  // const blogData = blogDataArray[0];
  const [blogsData, setBlogDetails] = useState([]);
  useEffect(() => {
    API.getBlogs().then((blogs) => {
      setBlogDetails(blogs);
    });
  }, []);
  let blogData = blogsData[0];

  return (
    <div>
      <section className="bg-tan p-32 text-xl">
        {blogData && (
          <h1 className="text-3xl text-red text-left m-16">{blogData.title}</h1>
        )}
        {blogData && (
          <h2 className="text-2xl text-green text-left m-16">
            {blogData.subtitle}
          </h2>
        )}
        {blogData && (
          <img
            className="w-11/12 h-96 ml-12 object-cover"
            src={blogData.img1}
            alt=""
          />
        )}

        <div className="m-16">
          {blogData && (
            <h1 className="text-3xl text-red text-left mb-12 ">
              {blogData.header1}
            </h1>
          )}
          {blogData && <p className="text-grey mb-12">{blogData.descp1}</p>}
          <div className="flex justify-between mb-12">
            {blogData && (
              <img
                className="h-96 w-3/6 pr-8 object-cover"
                src={blogData.img2}
                alt=""
              />
            )}
            {blogData && (
              <img
                className="h-96 w-3/6 object-cover"
                src={blogData.img3}
                alt=""
              />
            )}
          </div>
          {blogData && (
            <h1 className="text-3xl text-red mb-12">{blogData.header2}</h1>
          )}
          {blogData && <p className="text-grey mb-12">{blogData.descp2}</p>}
          {blogData && (
            <h1 className="text-3xl text-red text-left mb-12">
              {blogData.header3}
            </h1>
          )}
          {blogData && <p className="text-grey mb-12">{blogData.descp3}</p>}
          <div className="flex justify-between">
            {blogData && (
              <img
                className="h-96 w-3/6 pr-8 object-cover"
                src={blogData.img4}
                alt=""
              />
            )}
            {blogData && (
              <img
                className="h-96 w-3/6 object-cover"
                src={blogData.img5}
                alt=""
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
