import React from 'react'
import FadeIn from 'react-fade-in'
import Background from '../../../assets/Misc/backgroundZaps.png'
import Mask from '../../../assets/Misc/Mask.png'
import styles from './opener2.styles'

const Puzzle3Opener = () => {
  return (
    <>
      <img className={styles.background} src={Background} alt="Background" />
      <FadeIn delay={600} transitionDuration={1000}>
        <div>
          <figure className={styles.puzzle3__figure__mask}>
            <img
              className={styles.puzzle3__figure__mask__img}
              src={Mask}
              alt="Mask Puzzle 3"
            />
          </figure>
          <div className={styles.puzzle3__opener__button}>
            <a
              className={styles.puzzle3__opener__button__a}
              href="/finalvoyage"
            >
              Wake up
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Puzzle3Opener
