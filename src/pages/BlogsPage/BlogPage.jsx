import React from "react";
import BlogCardList from "../../components/BlogCard/BlogCardList";

const blogPage = () => {
  return (
    <div>
      <div>
        <p className="text-red text-2xl font-bold ml-28 mt-12 mr-96 pr-96">
          Home is behind, the world ahead and there are many paths to tread
          through shadows to the edge.
        </p>
      </div>
      <div>
        <BlogCardList />
      </div>
    </div>
  );
};

export default blogPage;