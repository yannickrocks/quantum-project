import React from 'react';
import FadeIn from 'react-fade-in';
import Background from '../../assets/Misc/background.png';
import styles from './terribleFate.styles';

const TerribleFate = () => {
  return (
    <>
      <img className={styles.background} src={Background} alt='Background' />
      <div className={styles.failure}>
        <FadeIn delay={1500} transitionDuration={2000}>
          <div className={styles.failure__video}>
            <iframe
              className={styles.iframe}
              title='failure'
              width='950'
              height='500'
              src='https://www.youtube.com/embed/uFjxs7ENhi4?autoplay=1'
              allow='accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            />
          </div>
        </FadeIn>
        <FadeIn delay={65000} transitionDuration={2000}>
          <div className={styles.failure__button}>
            <a className={styles.failure__credits} href='/finalvoyage'>
              One more loop?
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default TerribleFate;
