import { useState } from 'react'
import FadeIn from '../../components/fade-in'
import VideoPlayer from '../../components/videoplayer'
import Background from '../../assets/Misc/background.webp'
import styles from './terribleFate.styles'

const TerribleFate = () => {
  const [hasVideoEnded, setHasVideoEnded] = useState(false)

  return (
    <>
      <title>Terrible Fate · OW1128</title>
      <img className={styles.background} src={Background} alt="" />
      <div className={styles.failure}>
        <FadeIn delay={1500} transitionDuration={2000}>
          <VideoPlayer
            url="https://www.youtube.com/embed/uFjxs7ENhi4?autoplay=1"
            title="Terrible Fate video"
            isLarge
            onEnded={() => setHasVideoEnded(true)}
            fallbackEndMs={65000}
          />
        </FadeIn>
        <FadeIn delay={0} transitionDuration={2000} isShown={hasVideoEnded}>
          <div className={styles.failure__button}>
            <a className={styles.failure__credits} href="/finalvoyage">
              One more loop?
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default TerribleFate
