import React from "react";
import FadeIn from "react-fade-in";
import Background from "src/assets/Misc/background.png";
import "./failure.css";

const Failure = () => {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <div className="failure">
        <FadeIn delay={600} transitionDuration={2000}>
          <div className="failure__video">
            <iframe
              title="failure"
              width="750"
              height="470"
              src="https://www.youtube.com/embed/uFjxs7ENhi4?autoplay=1"
              allow="accelerometer1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </FadeIn>
        <FadeIn delay={60000} transitionDuration={2000}>
          <div className="failure__button">
            <a className="failure__credits" href="/finalvoyage">
              One more loop?
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Failure;
