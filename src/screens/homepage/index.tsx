import React from "react";
import OuterWildsLogo from "src/assets/Misc/Outerwilds-Logo_web.png";
import { HomePageText } from "src/assets/Texts/Constants";
import Button from "react-bootstrap/Button";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <figure className="figureLogo">
        <img className="figureLogo__logo" src={OuterWildsLogo} alt="logo" />
      </figure>
      <h2 className="welcomeText">Welcome, Astronaut</h2>
      <div className="description">
        <br />
        {HomePageText.map((item) => (
          <>
            {item}
            <br />
            <br />
          </>
        ))}
        <div className="launch">
          <Button
            className="launchButton"
            variant="success"
            href="/22minutes"
            size="lg"
          >
            Launch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
