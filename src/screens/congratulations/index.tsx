import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/background.png";
import "./congratulations.css";

const Congratulations = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <div className="congratulations">
        <FadeIn delay={1500} transitionDuration={2000}>
          <div className="congratulations__video">
            <iframe
              title="congratulations"
              width="950"
              height="500"
              src="https://www.youtube.com/embed/OOjbSrUIAe4"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </FadeIn>
        <FadeIn delay={60000} transitionDuration={2000}>
          <div className="congratulations__button">
            <a className="congratulations__credits" href="/credits">
              Credits
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Congratulations;
