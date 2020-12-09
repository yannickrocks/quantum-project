import React from "react";
import "./warps.css";
import Warp1NotFilled from "src/assets/Warp-Purples/WarpCore_1.png";

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
      <img
        className="puzzle3__warps__figure--back"
        src={Warp1NotFilled}
        alt="BackWarp"
      />
      <img className="puzzle3__warps__figure--coord" src={src} alt={name} />
    </figure>
  );
};

export default Warp;
