import React, { useState } from "react";
import Background from "src/assets/Misc/background.png";
import Statue from "src/assets/Misc/Statue-Awakened_web.png";
import Warp1 from "src/assets/Warp-Purples/WarpCore_1.png";
import Warp2 from "src/assets/Warp-Purples/WarpCore_2.png";
import Warp3 from "src/assets/Warp-Purples/WarpCore_3.png";
import Launch1 from "src/assets/Warp-Purples/Launch_1.png";
import LaunchGif from "src/assets/Warp-Purples/launch.gif";
import Ball from "src/assets/Warp-Purples/PurpleBall.png";
import { FinalVoyageText } from "src/assets/Texts/Constants";
import CountDown from "src/components/countdown";
import FadeIn from "react-fade-in";
import { CookiesProvider } from "react-cookie";
import { motion } from "framer-motion";
import "./puzzle3.css";

const Puzzle3: React.FC = () => {
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
              <h2 className="puzzle3__heading">The final voyage</h2>
              <div className="puzzle3__whiteText">
                {FinalVoyageText.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </div>
            </div>
            <figure className="puzzle3__figure">
              <img
                className="puzzle3__figure__statue"
                src={Statue}
                alt="Statue"
              />
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
              <figure className="puzzle3__warps__figure">
                {/* DropZones */}
                <motion.img
                  drag
                  dragConstraints={{
                    left: -80,
                    right: 40,
                    top: 0,
                    bottom: 100,
                  }}
                  dragElastic={1}
                  onDrag={(event, info) =>
                    console.log(info.point.x, info.point.y)
                  }
                  className="puzzle3__ball__img"
                  src={Ball}
                  alt="Ball 1"
                />
                <img className="puzzle3__warps__img" src={Warp1} alt="Warp 1" />
              </figure>
            </li>
            <li>
              <figure className="puzzle3__warps__figure">
                <img className="puzzle3__ball__img" src={Ball} alt="Ball 2" />
                <img className="puzzle3__warps__img" src={Warp2} alt="Warp 2" />
              </figure>
            </li>
            <li>
              <figure className="puzzle3__warps__figure">
                <img className="puzzle3__ball__img" src={Ball} alt="Ball 3" />
                <img className="puzzle3__warps__img" src={Warp3} alt="Warp 2" />
              </figure>
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
            {/* <Col xs={4} md={2}>
              <Button
              className="puzzle3__buttons__proceed"
              type="input"
              href="/wanderingmoon"
            >
              Proceed
            </Button>
            </Col> */}
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  );
};

export default Puzzle3;
