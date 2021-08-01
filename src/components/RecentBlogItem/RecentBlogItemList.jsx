import React from "react";
import RecentBlogItem from "./RecentBlogItem";
import BambooStraw from "../../images/BambooStraw";

const blogData = {
  title: "Why buying bamboo straws ?!",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis netus gravida vitae at dui. Arcu ullamcorper eget lorem nulla sit. Elit varius felis praesent vel. Commodo quis nisi leo tristique in...",
  image: <BambooStraw />,
};

const RecentBlogItemList = () => {
  return (
    <div>
      <RecentBlogItem {...blogData} />
    </div>
  );
};

export default RecentBlogItemList;
