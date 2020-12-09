import React from "react";

import "./warps.css";

type WarpProps = {
  src: string;
  name: string;
  warp: string;
  changeImage(img: string): void;
};

const Warp: React.FC<WarpProps> = ({ src, name, warp, changeImage }) => {
  return (
    <figure
      className="puzzle3__warps__figure"
      id={name}
      onClick={() => changeImage(src)}
    >
      <img className="puzzle3__warps__figure--back" src={warp} alt="BackWarp" />

      {src === "" ? (
        ""
      ) : (
        <img className="puzzle3__warps__figure--coord" src={src} alt={name} />
      )}
    </figure>
  );
};

export default Warp;
