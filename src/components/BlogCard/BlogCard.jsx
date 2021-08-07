import React from "react";
import PropTypes from "prop-types";

const BlogCard = ({ blogDate, blogTitle, blogDescription }) => {
  const blogPage = () => {
    // eslint-disable-next-line no-console
    console.log(
      "Here should be the path to the Blog Detail Page when it's done"
    );
  };

  return (
    <div className="flex flex-col justify-between items-center shadow-lg m-4 w-96 h-80">
      <div className="text-left w-full px-8">
        <p className="text-red text-sm font-medium leading-5 pt-6">
          {blogDate}
        </p>
        <h1 className="text-green text-2xl font-bold leading-7 py-3">
          {blogTitle}
        </h1>
        <p className="text-red text-lg font-bold leading-7 pb-8">
          {blogDescription}
        </p>
      </div>
      <button
        type="button"
        onClick={blogPage}
        className=" bg-green text-center text-white text-sm w-28 h-12 rounded my-6"
      >
        Read More
      </button>
    </div>
  );
};

BlogCard.propTypes = {
  blogDate: PropTypes.string,
  blogTitle: PropTypes.string,
  blogDescription: PropTypes.string,
};

export default BlogCard;
