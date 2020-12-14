import React, { useState } from "react";
import Background from "../../../assets/Misc/background.png";
import ArmsOutStretchNoMoon from "../../../assets/Misc/Arms-Outstretched_web.png";
import QuantumPlanet from "../../../components/quantum-planets";
import {
  PlanetList,
  correctOrderOfClicking,
} from "../../../assets/PlanetsList";
import {
  WanderingMoonText,
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
} from "../../../assets/Texts/Constants";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion";
import "../puzzle2.css";

const Puzzle2 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== "Sun");
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton, setRefreshToggle] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false);
  const page = "pageA";

  const addOrRemoveFromAnwserArray = (indexToChange: number) => {
    const newArray = [...planetCodes, indexToChange];
    setPlanetCodes(newArray);

    const moonArray = [indexToChange];
    setShowMoon(moonArray);
  };

  const checkAnswers = () => {
    if (planetCodes.length === correctOrderOfClicking.length) {
      correctOrderOfClicking.every((code, index) => {
        if (code === planetCodes[index]) {
          setDisplayTrackingMessage(true);
          setDisplayIncorrectMessage(false);
          return true;
        } else {
          setDisplayIncorrectMessage(true);
          return false;
        }
      });
    } else {
      setDisplayIncorrectMessage(true);
      return false;
    }
    setRefreshToggle(true);
  };

  const reset = () => {
    setDisplayIncorrectMessage(false);
    setDisplayTrackingMessage(false);
    setPlanetCodes([]);
    setShowMoon([]);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="p-wanderingmoon">
          <div className="puzzle2__detailsAndImage">
            <div className="puzzle2__details">
              <h2>The Wandering Moon</h2>
              <p>
                {WanderingMoonText.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </p>
            </div>
            <figure className="puzzle2__figure">
              <img src={ArmsOutStretchNoMoon} alt="Arms Stretch Out No Moon" />
            </figure>
          </div>
          <div className="puzzle2__video">
            <iframe
              title="puzzle2a"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/DA6TJTVH7W8"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <ul className="puzzle2__planets">
            {adjustedPlanetList.map((item, index) => (
              <QuantumPlanet
                key={index}
                src={item.src}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                greyQuantumMoon={item.QuantumMoon.Grey}
                pageAorB={page}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnwserArray(index);
                }}
              />
            ))}
          </ul>
          <div className="puzzle2__buttons">
            {displayTrackingMessage ? (
              <p className="puzzle2__buttons--almostCorrectText">
                {WanderingMoonAlmostCorrect}
              </p>
            ) : (
              <></>
            )}
            {displayIncorrectMessage ? (
              <p className="puzzle2__buttons--incorrectText">
                {WanderingMoonIncorrect}
              </p>
            ) : (
              <></>
            )}
            {showRefreshButton ? (
              <motion.button
                className="puzzle2__buttons--reset"
                onClick={refresh}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.button>
            ) : (
              <button className="puzzle2__buttons--reset" onClick={reset}>
                Reset
              </button>
            )}
            <button
              className="puzzle2__buttons--checkAnswers"
              onClick={checkAnswers}
            >
              Check
            </button>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle2;
