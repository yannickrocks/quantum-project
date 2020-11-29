import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/backgroundZaps.png";
import Mask from "src/assets/Misc/Mask.png";
import "./opener1.css";

const Puzzle2Opener = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={1000}>
        <div className="puzzle2__opener">
          <figure className="puzzle2__figure__mask">
            <img
              className="puzzle2__figure__mask__img"
              src={Mask}
              alt="Mask Puzzle 2"
            />
          </figure>
          <div className="puzzle2__opener__button">
            <a className="puzzle2__wakeUp" href="/wanderingmoon">
              Wake up
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle2Opener;
