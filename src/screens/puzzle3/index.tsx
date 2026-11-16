import { Fragment, useEffect, useRef, useState } from 'react'
import Background from '../../assets/Misc/background.webp'
import Statue from '../../assets/Misc/Statue-Awakened_web.webp'
import Launch1 from '../../assets/Warp-Purples/Launch_1.webp'
import LaunchGif from '../../assets/Warp-Purples/launch.webp'
import { FinalVoyageText } from '../../utils/Constants'
import Warp1NotFilled from '../../assets/Warp-Purples/WarpCore_1.webp'
import Warp2NotFilled from '../../assets/Warp-Purples/WarpCore_2.webp'
import Warp3NotFilled from '../../assets/Warp-Purples/WarpCore_3.webp'
import CountDown from '../../components/countdown'
import WarpCoordinates from '../../components/warps'
import { warpCoordinatesImages, CorrectWarpList } from '../../utils/WarpLists'
import FadeIn from '../../components/fade-in'
import { useNavigate } from 'react-router'
import { motion, useAnimate, useReducedMotion } from 'motion/react'
import { CookiesProvider } from 'react-cookie'
import warpSound from '../../assets/nomaiWarp.mp3'
import VideoPlayer from '../../components/videoplayer'
import styles from './puzzle3.styles'

const warpCores = [Warp1NotFilled, Warp2NotFilled, Warp3NotFilled]
const launchDelayMs = 5000
const warpFlashLeadSeconds = 0.8

const Puzzle3 = () => {
  const [isLaunching, setIsLaunching] = useState(false)
  const launchTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [warps, setWarps] = useState([0, 0, 0])
  const navigate = useNavigate()
  const isMotionReduced = useReducedMotion()
  const [warpList, animateWarps] = useAnimate()

  useEffect(() => () => clearTimeout(launchTimeout.current), [])

  useEffect(() => {
    new Image().src = LaunchGif
  }, [])

  const handleWarpClick = (warpIndex: number) => {
    setWarps(
      warps.map((warp, index) =>
        index === warpIndex ? (warp + 1) % warpCoordinatesImages.length : warp,
      ),
    )
  }

  const checkAnswers = () => {
    if (isLaunching) return
    if (warps.includes(0)) {
      animateWarps(
        '[data-empty="true"]',
        isMotionReduced
          ? { opacity: [1, 0.4, 1] }
          : { x: [0, -6, 6, -4, 4, 0] },
        { duration: 0.3 },
      )
      return
    }

    setIsLaunching(true)
    const warpSoundAudio = new Audio(warpSound)
    warpSoundAudio.volume = 0.5
    warpSoundAudio.muted = true
    warpSoundAudio.play().catch(() => {})

    launchTimeout.current = setTimeout(() => {
      warpSoundAudio.currentTime = 0
      warpSoundAudio.muted = false
      warpSoundAudio.play().catch(() => {})
      const isCorrect = warps.every(
        (warp, index) => warp === CorrectWarpList[index],
      )
      navigate(isCorrect ? '/consciousobserver' : '/terriblefate')
    }, launchDelayMs)
  }

  const resetInputs = () => {
    setWarps([0, 0, 0])
  }

  return (
    <CookiesProvider>
      <img className={styles.background} src={Background} alt="Background" />
      {isLaunching && (
        <motion.div
          data-testid="warp-flash"
          aria-hidden
          className={isMotionReduced ? styles.warpFade : styles.warpFlash}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: launchDelayMs / 1000 - warpFlashLeadSeconds,
            duration: 0.65,
            ease: 'easeIn',
          }}
        />
      )}
      <FadeIn>
        <div className={styles.finalVoyage}>
          <div className={styles.puzzle3__detailsAndImage}>
            <div className={styles.puzzle3__details}>
              <h2 className={styles.puzzle3__details__h2}>The Final Voyage</h2>
              <p className={styles.puzzle3__details__p}>
                {FinalVoyageText.map((item, index) => (
                  <Fragment key={index}>
                    {item}
                    <br />
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>
            <figure className={styles.puzzle3__figure}>
              <img
                className={styles.puzzle3__figure__img}
                src={Statue}
                alt="Statue"
              />
            </figure>
          </div>
          <VideoPlayer
            width={640}
            height={360}
            url="https://www.youtube.com/embed/OREB6-fb3uw"
          />
          <ul ref={warpList} className={styles.finalVoyage__ul}>
            {warpCores.map((warpCore, index) => (
              <li key={warpCore} className={styles.finalVoyage__li}>
                <motion.button
                  type="button"
                  className={styles.puzzle3__warp__button}
                  aria-label={`Warp ${index + 1}`}
                  data-empty={warps[index] === 0}
                  onClick={() => handleWarpClick(index)}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img
                    className={styles.puzzle3__warps__figure__back}
                    src={warpCore}
                    alt="BackWarp"
                  />
                  <WarpCoordinates
                    src={warpCoordinatesImages[warps[index]]}
                    name={`Warp ${index + 1}`}
                  />
                </motion.button>
              </li>
            ))}
            <li className={styles.finalVoyage__li}>
              <button
                type="button"
                className={styles.puzzle3__launch__button}
                aria-label="Launch"
                onClick={checkAnswers}
              >
                <img
                  className={styles.puzzle3__launch__figure__img}
                  src={isLaunching ? LaunchGif : Launch1}
                  alt="Launch 1"
                />
              </button>
            </li>
          </ul>
          <div className={styles.puzzle3__buttons}>
            <button
              className={styles.puzzle3__buttons__reset}
              type="reset"
              onClick={resetInputs}
            >
              Reset
            </button>
            <p className={styles.puzzle3__details__warning}>
              Note: images on this page may be slow to load
            </p>
            <div>
              <CountDown onExpire={() => navigate('/terriblefate')} />
            </div>
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  )
}

export default Puzzle3
