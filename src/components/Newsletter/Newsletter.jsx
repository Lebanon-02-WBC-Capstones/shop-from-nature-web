import React from "react";
import NewsLetterInput from "./NewsLetterInput";
import NewsLetterIcon from "../../Icons/NewsletterIcon";

function NewsLetter() {
  return (
    <div className="bg-tan py-9 px-80">
      <NewsLetterIcon />
      <p className="text-29 mb-4 text-dark">
        Subscribe to our newsletter and stay updated!
      </p>
      <NewsLetterInput />
    </div>
  );
}
export default NewsLetter;
