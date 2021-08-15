import React from "react";
import NewsletterInput from "./NewsletterInput";
import NewsletterIcon from "../../Icons/NewsletterIcon";

function Newsletter() {
  return (
    <div className=" flex flex-col items-center mt-20 mb-16 pb-9 bg-white max-w-md mx-auto">
      <NewsletterIcon />
      <p className="flex justify-center mb-4 text-dark">
        Subscribe to our newsletter and stay updated!{" "}
      </p>
      <NewsletterInput />
    </div>
  );
}
export default Newsletter;
