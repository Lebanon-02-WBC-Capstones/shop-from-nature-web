import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import API from "../../API";

const BlogCardList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-20">
      {blogs.length !== 0 &&
        blogs.map((blog) => (
          <div className="m-2" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
    </div>
  );
};

export default BlogCardList;
