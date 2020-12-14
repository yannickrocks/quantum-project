import React, { useState } from "react";
import Background from "src/assets/Misc/background.png";
import TimberHeath from "src/assets/Misc/Timber-Hearth_web.png";
import Planet from "src/components/planets";
import { PlanetList } from "src/assets/PlanetsList";
import { Minutes22Text } from "src/assets/Texts/Constants";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion";
import "./puzzle1.css";

const Puzzle1 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== "Eye");

  const [planetCodes, setPlanetCodes] = useState(
    Array(adjustedPlanetList.length).fill("")
  );

  const handleCodesChangePerPlanet = (value: string, indexToChange: number) => {
    setPlanetCodes(
      planetCodes.map((planetCode, index) => {
        if (index === indexToChange) {
          return value;
        }
        return planetCode;
      })
    );
  };

  const showProceedButton = planetCodes.every(
    (code, index) => code === adjustedPlanetList[index].puzzle1code
  );

  const resetInputs = () => {
    setPlanetCodes(
      planetCodes.map(() => {
        return "";
      })
    );
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className="p-22-minutes">
          <div className="puzzle1__detailsAndImage">
            <div className="puzzle1__details">
              <h2>22 Minutes</h2>
              <p>
                {Minutes22Text.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </p>
            </div>
            <figure className="puzzle1__figure">
              <img src={TimberHeath} alt="Timber Heath" />
            </figure>
          </div>
          <div className="puzzle1__video">
            <iframe
              title="puzzle1"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/6Z5xqBUmkoI"
              allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <ul>
            {adjustedPlanetList.map((item, index) => (
              <Planet
                src={item.src}
                answerSrc={item.answerSrc}
                planetId={item.planet}
                planetCode={planetCodes[index]}
                correctCode={item.puzzle1code}
                onPlanetCodeChange={(value: string) => {
                  handleCodesChangePerPlanet(value, index);
                }}
              />
            ))}
          </ul>
          <div className="puzzle1__buttons">
            {showProceedButton ? (
              <motion.a
                className="puzzle1__buttons--proceed"
                href="/wakeup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Proceed
              </motion.a>
            ) : (
              <button className="puzzle1__buttons--reset" onClick={resetInputs}>
                Reset
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Puzzle1;
