import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full py-20 h-[23rem] text-whitee ase-in duration-300 "
      style={{
        backgroundImage: isHovered ? `url(${val.bgImg})` : "none",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          mover(count);
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Preview" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
