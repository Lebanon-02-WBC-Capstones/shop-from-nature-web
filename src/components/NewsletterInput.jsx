import React, { useState } from "react";

function NewsletterInput() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn btn-blue">Subscribe</button>
    </form>
  );
}
export default NewsletterInput;
