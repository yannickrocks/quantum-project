import { useState } from 'react'
import Background from '../../../assets/Misc/background.webp'
import ArmsOutStretchNoMoon from '../../../assets/Misc/Arms-Outstretched_web.webp'
import QuantumPlanet from '../../../components/quantum-planets'
import {
  PlanetList,
  QuantumMoon,
  correctOrderOfClicking,
} from '../../../utils/PlanetsList'
import {
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
} from '../../../utils/Constants'
import FadeIn from '../../../components/fade-in'
import { motion } from 'motion/react'
import NomaiWithText from '../../../components/nomai-text'
import styles from '../puzzle2.styles'
import VideoPlayer from '../../../components/videoplayer'

const Puzzle2 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Sun')
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([])
  const [showMoon, setShowMoon] = useState<Array<number>>([])
  const [showRefreshButton, setRefreshToggle] = useState(false)
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false)
  const [displayTrackingMessage, setDisplayTrackingMessage] = useState(false)

  const addOrRemoveFromAnswerArray = (indexToChange: number) => {
    const newArray = [...planetCodes, indexToChange]
    setPlanetCodes(newArray)

    const moonArray = [indexToChange]
    setShowMoon(moonArray)
  }

  const checkAnswers = () => {
    const isSequenceCorrect =
      planetCodes.length === correctOrderOfClicking.length &&
      correctOrderOfClicking.every((code, index) => code === planetCodes[index])
    setDisplayTrackingMessage(isSequenceCorrect)
    setDisplayIncorrectMessage(!isSequenceCorrect)
    setRefreshToggle(isSequenceCorrect)
  }

  const reset = () => {
    setDisplayIncorrectMessage(false)
    setDisplayTrackingMessage(false)
    setPlanetCodes([])
    setShowMoon([])
  }

  return (
    <>
      <img className={styles.background} src={Background} alt="Background" />
      <FadeIn>
        <div className={styles.pWanderingmoon}>
          <div className={styles.detailsAndImageDiv}>
            <NomaiWithText />
            <figure className={styles.figure}>
              <img
                className={styles.figure_img}
                src={ArmsOutStretchNoMoon}
                alt="Arms Stretch Out No Moon"
              />
            </figure>
          </div>
          <VideoPlayer
            width={640}
            height={360}
            url="https://www.youtube.com/embed/DA6TJTVH7W8"
          />
          <ul className={styles.quantumPlanets_ul}>
            {adjustedPlanetList.map((item, index) => (
              <QuantumPlanet
                key={index}
                src={item.standardImg}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                moonSrc={QuantumMoon.Grey}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnswerArray(index)
                }}
              />
            ))}
          </ul>
          <div className={styles.buttons}>
            {displayTrackingMessage ? (
              <p className={styles.buttons__almostCorrectText}>
                {WanderingMoonAlmostCorrect}
              </p>
            ) : null}
            {displayIncorrectMessage ? (
              <p className={styles.buttons__incorrectText}>
                {WanderingMoonIncorrect}
              </p>
            ) : null}
            {showRefreshButton ? (
              <motion.a
                className={styles.buttons__reset}
                href="/thewanderingmoon"
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
  )
}

export default Puzzle2
