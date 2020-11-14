import React from "react";
import FadeIn from "react-fade-in";
import OuterWildsLogo from "src/assets/Misc/Outerwilds-Logo_web.png";
import { HomePageText } from "src/assets/Texts/Constants";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <FadeIn delay={600} transitionDuration={2000}>
      <div className="homepage">
        <figure className="figureLogo">
          <img className="figureLogo__logo" src={OuterWildsLogo} alt="logo" />
        </figure>
        <h2 className="welcomeText">Welcome, Astronaut</h2>
        <p className="description">
          <br />
          {HomePageText.map((item) => (
            <>
              {item}
              <br />
              <br />
            </>
          ))}
        </p>
        <div className="launch">
          <a className="launchButton" href="/22minutes">
            Launch
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default HomePage;
