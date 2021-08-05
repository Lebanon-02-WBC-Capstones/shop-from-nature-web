import React from "react";
import NewsletterInput from "./NewsletterInput";
import NewsletterIcon from "../../Icons/NewsletterIcon";

function Newsletter() {
  return (
    
    <div className="bg-tan px-80 py-10">
      <NewsletterIcon />
      <p className=" flex justify-center text-29 mb-4 text-dark">
        Subscribe to our newsletter and stay updated!{" "}
      </p>
      <NewsletterInput />
    </div>
  );
}
export default Newsletter;
