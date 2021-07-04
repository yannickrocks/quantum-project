import React from "react";
import { motion } from "framer-motion";

import "./warps.css";

type WarpProps = {
  src: string;
  name: string;
  warp: string;
  changeImage(img: string): void;
};

const Warp= ({ src, name, warp, changeImage }: WarpProps) => {
  return (
    <figure
      className="puzzle3__warps__figure"
      id={name}
      onClick={() => changeImage(src)}
    >
      {src === "" ? (
        ""
      ) : (
        <motion.img
          className="puzzle3__warps__figure--coord"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={src}
          alt={name}
        />
      )}
    </figure>
  );
};

export default Warp;
