import React from "react";
import "./warps.css";

type WarpProps = {
  src: string;
  name: string;
  changeImage(img: string): void;
};

const Warp: React.FC<WarpProps> = ({ src, name, changeImage }) => {
  return (
    <figure
      className="puzzle3__warps__figure"
      id={name}
      onClick={() => changeImage(src)}
    >
      <img src={src} alt={name} />
    </figure>
  );
};

export default Warp;
