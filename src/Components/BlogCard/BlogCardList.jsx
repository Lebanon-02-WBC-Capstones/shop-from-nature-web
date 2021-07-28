import React from "react";
import BlogCard from "./BlogCard";



const blogData = {
    id: 1,
    blogDate: "June 22th, 2021",
    blogTitle: "Tumblr confirms 84 accounts linked to Kremlin trolls",
    blogDescription: "Tumblr has confirmed that Kremlin trolls were active on its platform during the 2016 US presidential elections…" ,
};

const BlogCardList = () => {
  return (
      <div>
          <BlogCard blogDate={blogData.blogDate} blogTitle={blogData.blogTitle} blogDescription={blogData.blogDescription} />
      </div>
  );
};

export default BlogCardList;