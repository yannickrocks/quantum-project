import { useState } from 'react'
import Background from '../../assets/Misc/background.webp'
import ArmsOutStretchNoMoon from '../../assets/Misc/Arms-Outstretched_web.webp'
import ArmsOutStretchWithMoon from '../../assets/Misc/Arms-Outstretched-full_web.webp'
import QuantumPlanet from '../../components/quantum-planets'
import {
  PlanetList,
  QuantumMoon,
  correctOrderOfClicking,
} from '../../utils/PlanetsList'
import {
  WanderingMoonIncorrect,
  WanderingMoonAlmostCorrect,
  WanderingMoonCorrect,
} from '../../utils/Constants'
import FadeIn from '../../components/fade-in'
import { motion } from 'motion/react'
import NomaiWithText from '../../components/nomai-text'
import VideoPlayer from '../../components/videoplayer'
import styles from './puzzle2.styles'

type WanderingMoonProps = {
  isMoonFound?: boolean
}

const WanderingMoon = ({ isMoonFound = false }: WanderingMoonProps) => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Sun')
  const [planetCodes, setPlanetCodes] = useState<Array<number>>([])
  const [showMoon, setShowMoon] = useState<Array<number>>([])
  const [isSequenceSolved, setIsSequenceSolved] = useState(false)
  const [displayIncorrectMessage, setDisplayIncorrectMessage] = useState(false)

  const addOrRemoveFromAnswerArray = (indexToChange: number) => {
    setPlanetCodes([...planetCodes, indexToChange])
    setShowMoon([indexToChange])
  }

  const checkAnswers = () => {
    const isSequenceCorrect =
      planetCodes.length === correctOrderOfClicking.length &&
      correctOrderOfClicking.every((code, index) => code === planetCodes[index])
    setIsSequenceSolved(isSequenceCorrect)
    setDisplayIncorrectMessage(!isSequenceCorrect)
  }

  const reset = () => {
    setDisplayIncorrectMessage(false)
    setIsSequenceSolved(false)
    setPlanetCodes([])
    setShowMoon([])
  }

  const isProceedShown = isSequenceSolved && isMoonFound

  return (
    <>
      <title>The Wandering Moon · OW1128</title>
      <img className={styles.background} src={Background} alt="" />
      <FadeIn>
        <div className={styles.pWanderingmoon}>
          <div className={styles.detailsAndImageDiv}>
            <NomaiWithText />
            <figure className={styles.figure}>
              <img
                className={styles.figure_img}
                src={
                  isMoonFound ? ArmsOutStretchWithMoon : ArmsOutStretchNoMoon
                }
                alt={
                  isMoonFound
                    ? 'Arms Stretch Out with Moon'
                    : 'Arms Stretch Out No Moon'
                }
              />
            </figure>
          </div>
          <VideoPlayer
            width={640}
            height={360}
            url="https://www.youtube.com/embed/DA6TJTVH7W8"
            title="The Wandering Moon video"
          />
          <ul className={styles.quantumPlanets_ul}>
            {adjustedPlanetList.map((item, index) => (
              <QuantumPlanet
                key={index}
                src={item.standardImg}
                answerSrc={isMoonFound ? item.answerSrc : undefined}
                planetId={item.planet}
                hasBeenClickedOn={showMoon.includes(index)}
                moonSrc={isMoonFound ? QuantumMoon.Purple : QuantumMoon.Grey}
                onPlanetCodeChange={() => {
                  addOrRemoveFromAnswerArray(index)
                }}
              />
            ))}
          </ul>
          <div className={styles.buttons}>
            {isSequenceSolved && !isMoonFound ? (
              <p className={styles.buttons__almostCorrectText}>
                {WanderingMoonAlmostCorrect}
              </p>
            ) : null}
            {isProceedShown ? (
              <p className={styles.correctText}>{WanderingMoonCorrect}</p>
            ) : null}
            {displayIncorrectMessage ? (
              <p className={styles.buttons__incorrectText}>
                {WanderingMoonIncorrect}
              </p>
            ) : null}
            {!isSequenceSolved ? (
              <button className={styles.buttons__reset} onClick={reset}>
                Reset
              </button>
            ) : isMoonFound ? (
              <motion.button
                className={styles.buttons__reset}
                onClick={() => window.location.reload()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.button>
            ) : (
              <motion.a
                className={styles.buttons__reset}
                href="/thewanderingmoon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Refresh
              </motion.a>
            )}
            {isProceedShown ? (
              <motion.a
                className={styles.buttons__proceed}
                href="/wakeupagain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Proceed
              </motion.a>
            ) : (
              <button
                className={styles.buttons__checkAnswers}
                onClick={checkAnswers}
              >
                Check
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default WanderingMoon
