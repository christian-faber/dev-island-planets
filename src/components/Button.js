// import { useState } from "react";

export const Button = ({ setView }) => {
  return (
    <div className="buttons">
      <button onClick={() => setView("overview")}>
        <span>01</span>Overview
      </button>
      <button onClick={() => setView("structure")}>
        <span>02</span>Internal Structure
      </button>
      <button onClick={() => setView("geology")}>
        <span>03</span>Surface Geology
      </button>
    </div>
  );
};
