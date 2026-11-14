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
import { CookiesProvider } from 'react-cookie'
import warpSound from '../../assets/nomaiWarp.mp3'
import VideoPlayer from '../../components/videoplayer'
import styles from './puzzle3.styles'

const Puzzle3 = () => {
  const [isLaunching, setIsLaunching] = useState(false)
  const launchTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [warps, setWarps] = useState([0, 0, 0])
  const navigate = useNavigate()

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
    if (isLaunching || warps.includes(0)) return

    setIsLaunching(true)

    launchTimeout.current = setTimeout(() => {
      const warpSoundAudio = new Audio(warpSound)
      warpSoundAudio.volume = 0.5
      warpSoundAudio.play()
      const isCorrect = warps.every(
        (warp, index) => warp === CorrectWarpList[index],
      )
      navigate(isCorrect ? '/consciousobserver' : '/terriblefate')
    }, 5000)
  }

  const resetInputs = () => {
    setWarps([0, 0, 0])
  }

  return (
    <CookiesProvider>
      <img className={styles.background} src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={2000}>
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
          <ul className={styles.finalVoyage__ul}>
            <li
              className={styles.finalVoyage__li}
              onClick={() => handleWarpClick(0)}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp1NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates
                src={warpCoordinatesImages[warps[0]]}
                name="Warp 1"
              />
            </li>
            <li
              className={styles.finalVoyage__li}
              onClick={() => handleWarpClick(1)}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp2NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates
                src={warpCoordinatesImages[warps[1]]}
                name="Warp 2"
              />
            </li>
            <li
              className={styles.finalVoyage__li}
              onClick={() => handleWarpClick(2)}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp3NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates
                src={warpCoordinatesImages[warps[2]]}
                name="Warp 3"
              />
            </li>
            <li className={styles.finalVoyage__li}>
              <figure className={styles.puzzle3__launch__figure}>
                <img
                  className={styles.puzzle3__launch__figure__img}
                  src={isLaunching ? LaunchGif : Launch1}
                  alt="Launch 1"
                  onClick={checkAnswers}
                />
              </figure>
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
            <div className="puzzle3__countdown">
              <CountDown onExpire={() => navigate('/terriblefate')} />
            </div>
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  )
}

export default Puzzle3
