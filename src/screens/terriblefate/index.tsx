import React from 'react';
import FadeIn from 'react-fade-in';
import VideoPlayer from '../../components/videoplayer';
import Background from '../../assets/Misc/background.png';
import styles from './terribleFate.styles';

const TerribleFate = () => {
  return (
    <>
      <img className={styles.background} src={Background} alt='Background' />
      <div className={styles.failure}>
        <FadeIn delay={1500} transitionDuration={2000}>
          <VideoPlayer
            width={950}
            height={500}
            url='https://www.youtube.com/embed/uFjxs7ENhi4?autoplay=1'
          />
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
