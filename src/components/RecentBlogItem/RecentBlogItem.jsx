import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import { LanguageContext } from "../../App";

const RecentBlogItem = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);
  const { t } = React.useContext(LanguageContext);
  return (
    <>
      <h3 className="text-4xl mt-5 font-medium text-grey font-sans text-center">
        {t("Recent Blogs")}
      </h3>
      <div className=" my-5 grid grid-cols-2">
        {blogs.length != 0 &&
          blogs.slice(0, 2).map((blog) => (
            <div key={blog.id} className="flex relative ml-10 my-20 ">
              <div className="p-1.5 max-w-sm">
                <img className="max-h-lg" src={blog.img1} />
              </div>
              <div className="absolute border-2 border-olivegreen max-w-maxp top-12 left-40 bg-white">
                <h1 className="flex justify-center text-2xl text-red font-medium text-center">
                  {t(blog.title)}
                </h1>
                <p className="text-lg text-black  font-regular mb-5 mx-2 mt-2">
                  {t(blog.descp1.substring(0, 100))}...
                  <Link to={`/blog/${blog.id}`}>
                    <span className="border-b-2 border-red text-sm text-olivegreen ml-2">
                      {t("Keep Reading")}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RecentBlogItem;
