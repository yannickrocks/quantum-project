import React, { useState } from "react";
import Background from "src/assets/Misc/background.png";
import Statue from "src/assets/Misc/Statue-Awakened_web.png";
import Warp1 from "src/assets/Warp-Purples/WarpCore_1.png";
import Warp2 from "src/assets/Warp-Purples/WarpCore_2.png";
import Warp3 from "src/assets/Warp-Purples/WarpCore_3.png";
import Launch1 from "src/assets/Warp-Purples/Launch_1.png";
import LaunchGif from "src/assets/Warp-Purples/launch.gif";
import { FinalVoyageText } from "src/assets/Texts/Constants";
import CountDown from "src/components/countdown";
import FadeIn from "react-fade-in";
import { CookiesProvider } from "react-cookie";
import Warp from "src/components/warps";
import "./puzzle3.css";

const Puzzle3 = () => {
  const [showGif, setGifFlag] = useState(false);

  const handleChange = () => {
    setGifFlag(!showGif);
  };

  return (
    <CookiesProvider>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="finalVoyage">
          <div className="puzzle3__detailsAndImage">
            <div className="puzzle3__details">
              <h2>The final voyage</h2>
              <p>
                {FinalVoyageText.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </p>
            </div>
            <figure className="puzzle3__figure">
              <img src={Statue} alt="Statue" />
            </figure>
          </div>
          <div className="puzzle3__video">
            <iframe
              title="puzzle3"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/6Z5xqBUmkoI"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <ul>
            <li>
              <Warp src={Warp1} name="Warp 1" />
            </li>
            <li>
              <Warp src={Warp2} name="Warp 2" />
            </li>
            <li>
              <Warp src={Warp3} name="Warp 3" />
            </li>
            <li>
              <figure
                className="puzzle3__launch__figure"
                onClick={handleChange}
              >
                <img
                  className="puzzle3__launch__img"
                  src={showGif ? LaunchGif : Launch1}
                  alt="Launch 1"
                />
              </figure>
            </li>
          </ul>
          <div className="puzzle3__buttons">
            <button
              className="puzzle3__buttons__reset"
              type="reset"
              // onClick={resetInputs}
            >
              Reset
            </button>
            <div className="puzzle3__countdown">
              <CountDown />
            </div>
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  );
};

export default Puzzle3;
