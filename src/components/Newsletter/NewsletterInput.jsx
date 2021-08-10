import React, { useState } from "react";

function NewsletterInput() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row space-x-3 justify-center tracking-wide"
    >
      <input
        type="text"
        value={email}
        placeholder="Enter your email"
        className="text-black bg-gray w-60 py-2 px-2 placeholder-dark border-none rounded"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn bg-olivegreen text-base p-3 rounded text-white hover:bg-red">
        Subscribe!
      </button>
    </form>
  );
}
export default NewsletterInput;
