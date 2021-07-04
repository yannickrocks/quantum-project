import React, { useEffect, useState } from 'react'
import Background from '../../assets/Misc/background.png'
import Statue from '../../assets/Misc/Statue-Awakened_web.png'
import Launch1 from '../../assets/Warp-Purples/Launch_1.png'
import LaunchGif from '../../assets/Warp-Purples/launch.gif'
import { FinalVoyageText } from '../../utils/Constants'
import Warp1NotFilled from '../../assets/Warp-Purples/WarpCore_1.png'
import Warp2NotFilled from '../../assets/Warp-Purples/WarpCore_2.png'
import Warp3NotFilled from '../../assets/Warp-Purples/WarpCore_3.png'
import CountDown from '../../components/countdown'
import WarpCoordinates from '../../components/warps'
import {
  WarpList1,
  WarpList2,
  WarpList3,
  CorrectWarpList,
} from '../../utils/WarpLists'
import FadeIn from 'react-fade-in'
import { useHistory } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import useSound from 'use-sound'
import warpSound from '../../assets/nomaiWarp.mp3'
import VideoPlayer from '../../components/videoplayer'
import styles from './puzzle3.styles'

const Puzzle3 = () => {
  const [showGif, setGifFlag] = useState(false)
  const [countDownTimer, setCountdownTimer] = useState('')
  const [warp1, setWarp1] = useState(WarpList1[0])
  const [warp2, setWarp2] = useState(WarpList2[0])
  const [warp3, setWarp3] = useState(WarpList3[0])

  const [play] = useSound(warpSound, {
    volume: 0.5,
    soundEnabled: true,
  })
  const history = useHistory()

  useEffect(() => {
    const handleCountdown = (time: string) => {
      if (parseInt(time) === 0) {
        history.push({
          pathname: '/failure',
        })
      }
    }
    handleCountdown(countDownTimer)
  }, [countDownTimer, history])

  const handleWarpClick = (value: string, warptype: string) => {
    switch (warptype) {
      case 'Warp1': {
        const index = WarpList1.findIndex((element) => element === value) + 1
        index === WarpList1.length
          ? setWarp1(WarpList1[0])
          : setWarp1(WarpList1[index])
        break
      }
      case 'Warp2': {
        const index = WarpList2.findIndex((element) => element === value) + 1
        index === WarpList2.length
          ? setWarp2(WarpList2[0])
          : setWarp2(WarpList2[index])
        break
      }
      case 'Warp3': {
        const index = WarpList3.findIndex((element) => element === value) + 1
        index === WarpList3.length
          ? setWarp3(WarpList3[0])
          : setWarp3(WarpList3[index])
        break
      }
      default:
        return
    }
  }

  const checkAnswers = () => {
    const warp1Index = WarpList1.findIndex((element) => element === warp1)
    const warp2Index = WarpList2.findIndex((element) => element === warp2)
    const warp3Index = WarpList3.findIndex((element) => element === warp3)

    if (warp1Index !== 0 && warp2Index !== 0 && warp3Index !== 0) {
      setGifFlag(!showGif)

      setTimeout(() => {
        play()
        const inputArray = [warp1Index, warp2Index, warp3Index]

        var isCorrect = CorrectWarpList.every(
          (code, index) => code === inputArray[index]
        )
        isCorrect
          ? history.push({
              pathname: '/consciousobserver',
            })
          : history.push({
              pathname: '/terriblefate',
            })
      }, 8000)
    }
  }

  const resetInputs = () => {
    setWarp1(WarpList1[0])
    setWarp2(WarpList2[0])
    setWarp3(WarpList3[0])
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
                {FinalVoyageText.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
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
            url="https://www.youtube.com/embed/zV2yu1X8eOw"
          />
          <ul className={styles.finalVoyage__ul}>
            <li
              className={styles.finalVoyage__li}
              key="Warp1Com"
              onClick={() => handleWarpClick(warp1, 'Warp1')}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp1NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates src={warp1} name="Warp 1" />
            </li>

            <li
              className={styles.finalVoyage__li}
              key="Warp2Com"
              onClick={() => handleWarpClick(warp2, 'Warp2')}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp2NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates src={warp2} name="Warp 2" />
            </li>
            <li
              className={styles.finalVoyage__li}
              key="Warp3Com"
              onClick={() => {
                handleWarpClick(warp3, 'Warp3')
              }}
            >
              <img
                className={styles.puzzle3__warps__figure__back}
                src={Warp3NotFilled}
                alt="BackWarp"
              />
              <WarpCoordinates src={warp3} name="Warp 3" />
            </li>
            <li className={styles.finalVoyage__li} key="Launch">
              <figure className={styles.puzzle3__launch__figure}>
                <img
                  className={styles.puzzle3__launch__figure__img}
                  src={showGif ? LaunchGif : Launch1}
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
            <div className="puzzle3__countdown">
              <CountDown
                checkTimer={(value: string) => setCountdownTimer(value)}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </CookiesProvider>
  )
}

export default Puzzle3
