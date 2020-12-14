import React, { useState } from "react";
import Background from "src/assets/Misc/background.png";
import ArmsOutStretchWithMoon from "src/assets/Misc/Arms-Outstretched-full_web.png";
import QuantumPlanet from "src/components/quantum-planets";
import { PlanetList, correctOrderOfClicking } from "src/assets/PlanetsList";
import {
  WanderingMoonText,
  WanderingMoonIncorrect,
  WanderingMoonCorrect,
} from "src/assets/Texts/Constants";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion";
import "../puzzle2.css";

const Puzzle2 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== "Sun");
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton2b, setRefreshToggle2b] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayCorrectMessage, setDisplayCorrectMessage] = useState(false);
  const page = "pageB";

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
          setDisplayCorrectMessage(true);
          setDisplayIncorrectMessage(false);
          setRefreshToggle2b(true);
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
  };

  const reset = () => {
    setDisplayIncorrectMessage(false);
    setDisplayCorrectMessage(false);
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
              <img
                src={ArmsOutStretchWithMoon}
                alt="Arms Stretch Out with Moon"
              />
            </figure>
          </div>
          <div className="puzzle2__video">
            <iframe
              title="puzzle2b"
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
                answerSrc={item.answerSrc}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                purpleQuantumMoon={item.QuantumMoon.Purple}
                pageAorB={page}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnwserArray(index);
                }}
              />
            ))}
          </ul>
          <div className="puzzle2__buttons">
            {displayCorrectMessage ? (
              <p className="puzzle2--correctText">{WanderingMoonCorrect}</p>
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
            {showRefreshButton2b ? (
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
            {!displayCorrectMessage ? (
              <button
                className="puzzle2__buttons--checkAnswers"
                onClick={checkAnswers}
              >
                Check
              </button>
            ) : (
              <motion.a
                className="puzzle2__buttons--proceed"
                href="/wakeupagain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Proceed
              </motion.a>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle2;
