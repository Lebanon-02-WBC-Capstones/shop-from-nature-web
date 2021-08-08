import React, { useState } from "react";

function KeepInTouch() {
  const [open, setOpen] = useState(false);
  const handleShow = () => setOpen(true);
  return (
    <div className="flex ml-18 mt-6 mb-3">
      <button
        key={open}
        className="bg-red text-white text-center w-44 py-3 px-6 text-xl rounded-3xl"
        onClick={handleShow}
      >
        Keep In Touch
      </button>
    </div>
  );
}

export default KeepInTouch;
