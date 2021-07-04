import React, { useState } from 'react';
import Background from '../../../assets/Misc/background.png';
import ArmsOutStretchNoMoon from '../../../assets/Misc/Arms-Outstretched_web.png';
import QuantumPlanet from '../../../components/quantum-planets';
import { PlanetList, correctOrderOfClicking } from '../../../utils/PlanetsList';
import {
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
} from '../../../utils/Constants';
import FadeIn from 'react-fade-in';
import { motion } from 'framer-motion';
import NomaiWithText from '../../../components/nomai-text';
import styles from '../puzzle2.styles';
import VideoPlayer from '../../../components/videoplayer';

const Puzzle2 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Sun');
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton, setRefreshToggle] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false);
  const page = 'pageA';

  const addOrRemoveFromAnswerArray = (indexToChange: number) => {
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
          setRefreshToggle(true);
          return true;
        } else {
          setDisplayIncorrectMessage(true);
          return false;
        }
      });
    } else {
      setDisplayTrackingMessage(false);
      setDisplayIncorrectMessage(true);
      return false;
    }
  };

  const reset = () => {
    setDisplayIncorrectMessage(false);
    setDisplayTrackingMessage(false);
    setPlanetCodes([]);
    setShowMoon([]);
  };

  return (
    <>
      <img className={styles.background} src={Background} alt='Background' />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className={styles.pWanderingmoon}>
          <div className={styles.detailsAndImageDiv}>
            <NomaiWithText />
            <figure className={styles.figure}>
              <img
                className={styles.figure_img}
                src={ArmsOutStretchNoMoon}
                alt='Arms Stretch Out No Moon'
              />
            </figure>
          </div>
          <VideoPlayer
            width={640}
            height={360}
            url='https://www.youtube.com/embed/DA6TJTVH7W8'
          />
          <ul className={styles.quantumPlanets_ul}>
            {adjustedPlanetList.map((item, index) => (
              <QuantumPlanet
                key={index}
                src={item.standardImg}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                greyQuantumMoon={item.QuantumMoon.Grey}
                pageAorB={page}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnswerArray(index);
                }}
              />
            ))}
          </ul>
          <div className={styles.buttons}>
            {displayTrackingMessage ? (
              <p className={styles.buttons__almostCorrectText}>
                {WanderingMoonAlmostCorrect}
              </p>
            ) : (
              <></>
            )}
            {displayIncorrectMessage ? (
              <p className={styles.buttons__incorrectText}>
                {WanderingMoonIncorrect}
              </p>
            ) : (
              <></>
            )}
            {showRefreshButton ? (
              <motion.a
                className={styles.buttons__reset}
                href='/thewanderingmoon'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.a>
            ) : (
              <button className={styles.buttons__reset} onClick={reset}>
                Reset
              </button>
            )}
            <button
              className={styles.buttons__checkAnswers}
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
