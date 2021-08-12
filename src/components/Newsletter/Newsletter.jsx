import React from "react";
import NewsletterInput from "./NewsletterInput";
import NewsletterIcon from "../../Icons/NewsletterIcon";

function Newsletter() {
  return (
    <div className="bg-white px-80 py-10">
      <NewsletterIcon />
      <p className="flex justify-center mb-4 text-dark">
        Subscribe to our newsletter and stay updated!{" "}
      </p>
      <NewsletterInput />
    </div>
  );
}
export default Newsletter;
