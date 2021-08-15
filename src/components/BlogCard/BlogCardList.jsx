import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import API from "../../API";
import { LanguageContext } from "../../App";
const BlogCardList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="flex flex-wrap justify-center m-20">
      {blogs.length !== 0 &&
        blogs.map((blog) => (
          <div className="m-2" key={blog.id}>
            <BlogCard blog={t(blog)} />
          </div>
        ))}
    </div>
  );
};

export default BlogCardList;
