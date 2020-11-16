import React from "react";
import Ball from "src/assets/Warp-Purples/PurpleBall.png";
import DropZoneNode from "src/assets/Warp-Purples/DropZoneNode.png";
import "./warps.css";

type WarpProps = {
  src: string;
  name: string;
};

const Warp: React.FC<WarpProps> = ({ src, name }) => {
  return (
    <figure className="puzzle3__warps__figure" id={name}>
      <img
        id="DropZoneNode 1"
        className="puzzle3__dropZoneNode__img1"
        src={DropZoneNode}
        alt="DropZoneNode 1"
      />
      <img
        id="DropZoneNode 2"
        className="puzzle3__dropZoneNode__img2"
        src={DropZoneNode}
        alt="DropZoneNode 2"
        draggable={true}
      />
      {/* Use ReactDnd */}
      <img className="puzzle3__ball__img" src={Ball} alt="Ball 1" />
      <img className="puzzle3__warps__img" src={src} alt={name} />
    </figure>
  );
};

export default Warp;
