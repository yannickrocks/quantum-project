import React, { useState } from 'react'
import Background from '../../assets/Misc/background.webp'
import TimberHeath from '../../assets/Misc/Timber-Hearth_web.webp'
import Planet from '../../components/planets'
import { PlanetList } from '../../utils/PlanetsList'
import { Minutes22Text } from '../../utils/Constants'
import FadeIn from '../../components/fade-in'
import { motion } from 'motion/react'
import styles from './puzzle1.styles'
import VideoPlayer from '../../components/videoplayer'

const Puzzle1 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Eye')

  const [planetCodes, setPlanetCodes] = useState(
    Array(adjustedPlanetList.length).fill(''),
  )

  const handleChangePerPlanet = (value: string, indexToChange: number) => {
    setPlanetCodes(
      planetCodes.map((planetCode, index) => {
        if (index === indexToChange) {
          return value
        }
        return planetCode
      }),
    )
  }

  const showProceedButton = planetCodes.every(
    (code, index) => code === adjustedPlanetList[index].puzzle1code,
  )

  const resetInputs = () => {
    setPlanetCodes(
      planetCodes.map(() => {
        return ''
      }),
    )
  }

  return (
    <>
      <title>22 Minutes · OW1128</title>
      <img className={styles.background} src={Background} alt="" />
      <FadeIn>
        <div className={styles.T2minutes}>
          <div className={styles.puzzle1__detailsAndImage}>
            <div className={styles.puzzle1__details}>
              <h1 className={styles.puzzle1__details__heading}>22 Minutes</h1>
              <p className={styles.puzzle1__details_text}>
                {Minutes22Text.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <figure className={styles.puzzle1__figure}>
              <img
                className={styles.puzzle1__figure__img}
                src={TimberHeath}
                alt="Timber Hearth"
              />
            </figure>
          </div>
          <VideoPlayer
            width={640}
            height={360}
            url="https://www.youtube.com/embed/6Z5xqBUmkoI"
            title="22 Minutes video"
          />
          <ul className={styles.T2minutes__ul}>
            {adjustedPlanetList.map((item, index) => (
              <Planet
                key={item.planet}
                standard={item.standardImg}
                answerSrc={item.answerSrc}
                planetId={item.planet}
                planetCode={planetCodes[index]}
                correctCode={item.puzzle1code}
                onPlanetCodeChange={(value: string) => {
                  handleChangePerPlanet(value, index)
                }}
              />
            ))}
          </ul>
          <div className={styles.puzzle1__buttons}>
            {showProceedButton ? (
              <motion.a
                className={styles.puzzle1__buttons__proceed}
                href="/wakeup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Proceed
              </motion.a>
            ) : (
              <button
                className={styles.puzzle1__buttons__reset}
                onClick={resetInputs}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Puzzle1
