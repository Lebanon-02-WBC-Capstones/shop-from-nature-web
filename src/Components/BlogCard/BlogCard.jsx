import React from "react";

const BlogCard = (blogDate, blogTitle, blogDescription) => {

blogDate="June 22th, 2021";
blogTitle="Tumblr confirms 84 accounts linked to Kremlin trolls";
blogDescription="Tumblr has confirmed that Kremlin trolls were active on its platform during the 2016 US presidential elections…";




    return (
        <div className="flex-col justify-items-start shadow-lg m-4 w-96 h-80">
            <div className="text-left px-6">
                <p className=" text-red text-sm font-medium leading-5 pt-6 ">{blogDate}</p>
                <h1 className=" text-olivegreen text-2xl font-bold leading-7 py-3">{blogTitle}</h1>
                <p className=" text-red text-lg font-bold leading-7 pb-8">{blogDescription}</p>
            </div>
            <div className="">
            <button type="button" className=" bg-olivegreen text-center text-white text-sm w-28 h-12 rounded">Read More</button>
            </div> 
        </div>
    );
};

export default BlogCard;