import React, { useState } from 'react';
import Background from '../../assets/Misc/background.png';
import TimberHeath from '../../assets/Misc/Timber-Hearth_web.png';
import Planet from '../../components/planets';
import { PlanetList } from '../../utils/PlanetsList';
import { Minutes22Text } from '../../utils/Constants';
import FadeIn from 'react-fade-in';
import { motion } from 'framer-motion';
import styles from './puzzle1.styles';

const Puzzle1 = () => {
  const adjustedPlanetList = PlanetList.filter((x) => x.planet !== 'Eye');

  const [planetCodes, setPlanetCodes] = useState(
    Array(adjustedPlanetList.length).fill('')
  );

  const handleChangePerPlanet = (value: string, indexToChange: number) => {
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
        return '';
      })
    );
  };

  return (
    <>
      <img className={styles.background} src={Background} alt='Background' />
      <FadeIn delay={600} transitionDuration={2000}>
        <div className={styles.T2minutes}>
          <div className={styles.puzzle1__detailsAndImage}>
            <div className={styles.puzzle1__details}>
              <h2 className={styles.puzzle1__details__heading}>22 Minutes</h2>
              <p className={styles.puzzle1__details_text}>
                {Minutes22Text.map((item) => (
                  <>
                    {item}
                    <br />
                    <br />
                  </>
                ))}
              </p>
            </div>
            <figure className={styles.puzzle1__figure}>
              <img
                className={styles.puzzle1__figure__img}
                src={TimberHeath}
                alt='Timber Heath'
              />
            </figure>
          </div>
          <div className={styles.puzzle1__video}>
            <iframe
              className={styles.iframe}
              title='puzzle1'
              width='640'
              height='360'
              src='https://www.youtube.com/embed/6Z5xqBUmkoI'
              allow='accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              frameBorder='0'
              allowFullScreen
            />
          </div>
          <ul className={styles.T2minutes__ul}>
            {adjustedPlanetList.map((item, index) => (
              <Planet
                standard={item.standardImg}
                answerSrc={item.answerSrc}
                planetId={item.planet}
                planetCode={planetCodes[index]}
                correctCode={item.puzzle1code}
                onPlanetCodeChange={(value: string) => {
                  handleChangePerPlanet(value, index);
                }}
              />
            ))}
          </ul>
          <div className={styles.puzzle1__buttons}>
            {showProceedButton ? (
              <motion.a
                className={styles.puzzle1__buttons__proceed}
                href='/wakeup'
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
  );
};

export default Puzzle1;
