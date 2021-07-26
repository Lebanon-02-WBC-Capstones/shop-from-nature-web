import React from "react";
import BambooStraw from "../../images/BambooStraw";


const RecentBlogItem = (title, description, image) => {

  title = "Why buying bamboo straws ?!";
  description =
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis netus gravida vitae at dui. Arcu ullamcorper eget lorem nulla sit. Elit varius felis praesent vel. Commodo quis nisi leo tristique in..."; 
  image = <BambooStraw/>;
  


  return (
    <div className=" container flex">
      <div className="static flex-start p-1.5">
      {image}
      </div>
      <div className="bg-white absolute flex-end border-2 border-olivegreen top-12 left-48">
        <h1 className="flex justify-center text-3xl text-red font-medium px-10">{title}</h1>
        <p className="text-xl text-black font-regular w-96 min-w-full h-40 px-2 py-4"> {description} <span className="border-b-2 border-red text-sm text-olivegreen m-16">Keep Reading</span> </p> 
      </div>
    </div>
  );
};

export default RecentBlogItem;
