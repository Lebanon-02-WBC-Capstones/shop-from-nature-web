import React from "react";
import PropTypes from "prop-types";

const RecentBlogItem = ({ title, description, image }) => {
  return (
    <div className="container flex relative">
      <div className="p-1.5">{image}</div>
      <div className="absolute border-2 border-olivegreen top-12 left-48 bg-white">
        <h1 className="flex justify-center text-3xl text-red font-medium px-10">
          {title}
        </h1>
        <p className="text-xl text-black font-regular w-96 min-w-full h-40 px-2 py-4">
          {" "}
          {description}{" "}
          <span className="border-b-2 border-red text-sm text-olivegreen m-16">
            Keep Reading
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

RecentBlogItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.elementType,
};

export default RecentBlogItem;
