import React, { useState } from "react";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchNoMoon from "src/assets/Misc/Arms-Outstretched_web.png";
import QuantumPlanet from "src/components/quantum-planets";
import { PlanetList } from "src/assets/Planets/PlanetsList";
import {
  WanderingMoonText,
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
  correctOrderOfClicking,
} from "src/assets/Texts/Constants";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion";
import "../puzzle2.css";

type Puzzle2aProps = {
  increaseCounter(): void;
};

const Puzzle2: React.FC<Puzzle2aProps> = ({ increaseCounter }) => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== "Sun");
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton, setRefreshToggle] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false);
  const page = "pageA";

  const addOrRemoveFromAnwserArray = (indexToChange: number) => {
    const exists = planetCodes.find((index) => index === indexToChange);
    if (exists !== indexToChange) {
      const newArray = [...planetCodes, indexToChange];
      setPlanetCodes(newArray);

      const moonArray = [indexToChange];
      setShowMoon(moonArray);
    } else {
      const indexValue = planetCodes.indexOf(indexToChange);
      var newArray = [
        ...planetCodes.slice(0, indexValue),
        ...planetCodes.slice(indexValue + 1),
      ];
      setPlanetCodes(newArray);
    }
  };

  const checkAnswers = () => {
    correctOrderOfClicking.every((code, index) => code === planetCodes[index])
      ? setDisplayTrackingMessage(true)
      : setDisplayIncorrectMessage(true);

    setRefreshToggle(true);
  };

  const reset = () => {
    setDisplayIncorrectMessage(false);
    setDisplayTrackingMessage(false);
    setPlanetCodes([]);
    setShowMoon([]);
  };

  const refresh = () => {
    increaseCounter();
    window.location.reload(false);
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="p-wanderingmoon">
          <div className="puzzle2__detailsAndImage">
            <div className="puzzle2__details">
              <h2 className="puzzle2__heading">The Wandering Moon</h2>
              <p className="puzzle2__whiteText">
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
              <img
                className="puzzle2__figure__armsOut"
                src={ArmsOutStretchNoMoon}
                alt="Arms Stretch Out No Moon"
              />
            </figure>
          </div>
          <div className="puzzle2__video">
            <iframe
              title="puzzle2a"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/6Z5xqBUmkoI"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <ul className="puzzle2__planets">
            {adjustedPlanetList.map((item, index) => (
              <QuantumPlanet
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
              <p className="puzzle2__almostCorrectText">
                {WanderingMoonAlmostCorrect}
              </p>
            ) : (
              <></>
            )}
            {displayIncorrectMessage ? (
              <p className="puzzle2__incorrectText">{WanderingMoonIncorrect}</p>
            ) : (
              <></>
            )}
            {showRefreshButton ? (
              <motion.button
                className="puzzle2__buttons__reset"
                onClick={refresh}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.button>
            ) : (
              <button className="puzzle2__buttons__reset" onClick={reset}>
                Reset
              </button>
            )}
            <button
              className="puzzle2__buttons__checkAnswers"
              onClick={checkAnswers}
            >
              Check
            </button>
          </div>
          <div className="puzzle2__text"></div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle2;
