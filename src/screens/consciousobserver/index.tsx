import Background from '../../assets/Misc/background.png'
import FadeIn from 'react-fade-in'
import React from 'react'
import VideoPlayer from '../../components/videoplayer'
import styles from './consciousObserver.styles'

const ConsciousObserver = () => {
  return (
    <>
      <img className={styles.background} src={Background} alt="Background" />
      <FadeIn delay={1500} transitionDuration={2000}>
        <div className={styles.congratulations}>
          <VideoPlayer
            width={950}
            height={500}
            url="https://www.youtube.com/embed/X2QYfa1xNp0?autoplay=1"
          />
          <FadeIn delay={165000} transitionDuration={2000}>
            <div className={styles.credits__mvps}>
              <div className="credits__josh">
                <h2 className={styles.credits__josh__title}>
                  Josh Lane-Trumper
                </h2>
                <p className={styles.credits__details}>
                  Artwork, Puzzle and Web Design, Videography
                </p>
                <div className={styles.credits__details}>
                  <a
                    className={styles.credits__details__margin}
                    href="https://www.artstation.com/joshlanetrumper"
                  >
                    Artwork Portfolio
                  </a>
                  |
                  <a
                    className={styles.credits__details__margin}
                    href="https://www.behance.net/JoshLaneTrumper"
                  >
                    Design Portfolio
                  </a>
                  |
                  <a
                    className={styles.credits__details__margin}
                    href="https://www.instagram.com/joshan_meow"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="credits__yan">
                <h2 className={styles.credits__yan__title}>Yannick Mermet</h2>
                <p className={styles.credits__details}>
                  Website Code and Puzzle Implementation{' '}
                </p>
                <div className={styles.credits__details}>
                  <a
                    className={styles.credits__details__marginYan}
                    href="https://github.com/yannickrocks"
                  >
                    Coding Portfolio
                  </a>
                  |
                  <a
                    className={styles.credits__details__marginYan}
                    href="https://www.instagram.com/adventuresofyan"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </>
  )
}

export default ConsciousObserver
