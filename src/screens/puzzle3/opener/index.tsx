import React from "react";
import FadeIn from "react-fade-in";
import Background from "../../../assets/Misc/backgroundZaps.png";
import Mask from "../../../assets/Misc/Mask.png";
import "./opener2.css";

const Puzzle3Opener = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={1000}>
        <div className="puzzle3__opener">
          <figure className="puzzle3__figure__mask">
            <img src={Mask} alt="Mask Puzzle 3" />
          </figure>
          <div className="puzzle3__opener__button">
            <a href="/finalvoyage">Wake up</a>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle3Opener;
