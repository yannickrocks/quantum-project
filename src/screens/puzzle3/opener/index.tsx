import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/backgroundZaps.png";
import Mask from "src/assets/Misc/Mask.png";
import "./opener2.css";

const Puzzle3Opener: React.FC = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={1000}>
        <div className="puzzle3__opener">
          <figure className="puzzle3__figure__mask">
            <img
              className="puzzle3__figure__mask__img"
              src={Mask}
              alt="Mask Puzzle 3"
            />
          </figure>
          <div className="puzzle3__opener__button">
            <a className="puzzle3__wakeUp" href="/finalvoyage">
              Wake up
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle3Opener;
