import React, { useState } from 'react';
import Background from '../../../assets/Misc/background.png';
import ArmsOutStretchWithMoon from '../../../assets/Misc/Arms-Outstretched-full_web.png';
import QuantumPlanet from '../../../components/quantum-planets';
import { PlanetList, correctOrderOfClicking } from '../../../utils/PlanetsList';
import {
  WanderingMoonIncorrect,
  WanderingMoonCorrect,
} from '../../../utils/Constants';
import FadeIn from 'react-fade-in';
import { motion } from 'framer-motion';
import NomaiWithText from '../../../components/nomai-text';
import VideoPlayer from '../../../components/videoplayer';
import styles from '../puzzle2.styles';

const Puzzle2 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Sun');
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([]);
  const [showMoon, setShowMoon] = useState<Array<number>>([]);
  const [showRefreshButton2b, setRefreshToggle2b] = useState(false);
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false);
  const [displayCorrectMessage, setDisplayCorrectMessage] = useState(false);
  const page = 'pageB';

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
      setDisplayCorrectMessage(false);
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
      <img className={styles.background} src={Background} alt='Background' />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className={styles.pWanderingmoon}>
          <div className={styles.detailsAndImageDiv}>
            <NomaiWithText />
            <figure className={styles.figure}>
              <img
                className={styles.figure_img}
                src={ArmsOutStretchWithMoon}
                alt='Arms Stretch Out with Moon'
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
                answerSrc={item.answerSrc}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                purpleQuantumMoon={item.QuantumMoon.Purple}
                pageAorB={page}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnswerArray(index);
                }}
              />
            ))}
          </ul>
          <div className={styles.buttons}>
            {displayCorrectMessage ? (
              <p className={styles.correctText}>{WanderingMoonCorrect}</p>
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
            {showRefreshButton2b ? (
              <motion.button
                className={styles.buttons__reset}
                onClick={refresh}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.button>
            ) : (
              <button className={styles.buttons__reset} onClick={reset}>
                Reset
              </button>
            )}
            {!displayCorrectMessage ? (
              <button
                className={styles.buttons__checkAnswers}
                onClick={checkAnswers}
              >
                Check
              </button>
            ) : (
              <motion.a
                className={styles.buttons__proceed}
                href='/wakeupagain'
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
